<template>
  <div class="last-updated">
    <span class="prefix">上次更新:</span> <span class="time">{{ time }}</span>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  data() {
    return {
      time: dayjs(document.lastModified).format('YYYY-MM-DD HH:mm:ss'),
    };
  },
};
</script>
