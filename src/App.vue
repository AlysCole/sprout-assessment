<script setup>
import { ref } from 'vue'
import AttendanceSidebar from './components/AttendanceSidebar.vue'

const dateStart = ref()
const setDateStart = (newDate) => {
  console.log('Setting start date:', newDate)
  dateStart.value = newDate
}

const dateEnd = ref()
const setDateEnd = (newDate) => {
  console.log('Setting end date:', newDate)
  dateEnd.value = newDate
}
</script>

<template>
  <main>
    <AttendanceSidebar :set-date-start="setDateStart" :set-date-end="setDateEnd" />
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
