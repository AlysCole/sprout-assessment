<script setup>
import AttendanceSidebar from './components/AttendanceSidebar.vue'
</script>

<template>
  <main>
    <AttendanceSidebar />
    <RouterView />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
</style>
