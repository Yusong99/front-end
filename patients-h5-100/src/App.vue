<script setup lang="ts"></script>

<template>
  <!-- 验证vant颜色被覆盖 -->
  <van-button type="primary">按钮</van-button>
  <a href="#">123</a>
</template>

<style scoped lang="scss">
a {
  color: var(--cp-primary);
}
</style>
