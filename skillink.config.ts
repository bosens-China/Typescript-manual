export default {
  locale: 'auto',
  // Agent 文档：glob 匹配（遵守 .gitignore），to 相对于每个 AGENTS.md 所在目录
  agentsMarkdown: [
    {
      from: '**/AGENTS.md',
      to: ['CLAUDE.md'],
    },
  ],
  // Skills 目录：to 与命中的源目录同级（在其父目录下）
  agentsSkills: [
    {
      from: '.agents',
      to: ['.claude'],
    },
  ],
  // lock 默认加密列表；unlock 无参且 skillink.encrypt.json 为空时回退此列表
  encrypt: ['.mcp.json'],
};
