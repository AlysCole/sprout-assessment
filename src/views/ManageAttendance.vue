<script setup>
import { ref } from 'vue'
import AttendanceSidebar from '../components/AttendanceSidebar.vue'

const formatDateString = (date) => (date ? date.toDateString().split(' ').slice(1).join(' ') : '')

const dateStart = ref()
const setDateStart = (newDate) => {
  dateStart.value = new Date(newDate)
  console.log('New start date:', dateStart.value)
}

const dateEnd = ref()
const setDateEnd = (newDate) => {
  dateEnd.value = new Date(newDate)
  console.log('New end date:', dateEnd.value)
}
</script>

<template>
  <main>
    <AttendanceSidebar :set-date-start="setDateStart" :set-date-end="setDateEnd" />
    <div class="attendance-view">
      <h3>
        <font-awesome-icon :icon="['fas', 'business-time']" />
        <span v-if="!!dateStart || !!dateEnd">
          {{ dateStart ? formatDateString(dateStart) : '' }}{{ dateStart && dateEnd ? ' - ' : ''
          }}{{ dateEnd ? formatDateString(dateEnd) : '' }}
        </span>
        <span v-else>Date Range</span>
      </h3>
    </div>
  </main>
</template>

<style scoped>
.attendance-view {
  padding: 1.5rem;
}

h3 {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text-light-1);
}

h3 svg {
  color: var(--green);
  margin-right: 0.5rem;
}
</style>
