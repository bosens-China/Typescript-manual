import MarkdownIt from 'markdown-it';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileExists } from './utils.js';

interface SidebarChild {
  path: string;
  title: string;
}

interface SidebarSection {
  title: string;
  collapsable: boolean;
  sidebarDepth: number;
  children: SidebarChild[];
}

export default async function getJson(filePath: string): Promise<SidebarSection[]> {
  const content = await readFile(filePath, 'utf-8');
  const md = new MarkdownIt();
  const tokens = md.parse(content, {});

  const json: SidebarSection[] = [];
  let listDepth = 0;
  let currentSection: SidebarSection | null = null;

  for (const token of tokens) {
    if (token.type === 'bullet_list_open') {
      listDepth++;
      continue;
    }

    if (token.type === 'bullet_list_close') {
      listDepth--;
      continue;
    }

    // Top-level list item → new section
    if (token.type === 'list_item_open' && listDepth === 1) {
      currentSection = { title: '', collapsable: false, sidebarDepth: 1, children: [] };
      continue;
    }

    // Section title text
    if (token.type === 'inline' && listDepth === 1 && currentSection) {
      const text =
        token.children
          ?.filter((c) => c.type === 'text')
          .map((c) => c.content)
          .join('') || token.content;
      currentSection.title = text;
      continue;
    }

    // Nested link items
    if (token.type === 'inline' && listDepth === 2 && currentSection) {
      const linkOpen = token.children?.find((c) => c.type === 'link_open');
      if (!linkOpen) continue;

      const href = linkOpen.attrGet('href');
      if (!href || /README/i.test(href)) continue;

      const linkText = token.children?.find((c) => c.type === 'text')?.content || '';
      const completePath = path.join(filePath, '../', href).replace(/\\/g, '/');
      const docsPath = path.join(process.cwd(), 'docs').replace(/\\/g, '/');
      const readmePath = completePath.replace(docsPath, '');

      if (await fileExists(completePath)) {
        currentSection.children.push({ path: readmePath, title: linkText });
      }
    }

    // End of top-level item → finalize section
    if (token.type === 'list_item_close' && listDepth === 1 && currentSection) {
      if (currentSection.children.length) {
        json.push(currentSection);
      }
      currentSection = null;
    }
  }

  return json;
}
