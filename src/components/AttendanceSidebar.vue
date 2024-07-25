<script setup>
import { RouterLink, RouterView } from 'vue-router'
const attendanceLinks = [
  {
    label: 'Attendance Logs',
    to: '/',
    icon: ['fas', 'business-time']
  },
  {
    label: 'Exported Files',
    to: '/exported',
    icon: ['fas', 'download']
  }
]
</script>

<template>
  <div class="attendance__sidebar">
    <h1>Manage Attendance</h1>
    <p>
      Attendance management is where you can generate, add, edit, and export the logs of the
      employees.
    </p>
    <nav>
      <RouterLink v-for="link in attendanceLinks" :key="link.to" :to="link.to">
        <a class="attendance__link"><font-awesome-icon :icon="link.icon" />{{ link.label }}</a>
      </RouterLink>
    </nav>
  </div>
</template>
<style scoped>
.attendance__sidebar {
  display: flex;
  flex-direction: column;
  width: 25%;
  max-width: 25%;
  height: 100%;
  overflow: hidden;
}

h1 {
  font-weight: 600;
}

nav {
  display: flex;
  flex-direction: column;
}

.attendance__link {
  font-size: 1.2rem;
  font-weight: bold;
}

.attendance__link:hover {
  background-color: var(--color-highlight);
}
</style>
