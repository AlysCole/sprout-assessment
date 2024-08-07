<script setup>
import { defineProps } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import FormLabel from './form/FormLabel.vue'
import DateInput from './form/DateInput.vue'
import MultiSelectInput from './form/MultiSelectInput.vue'
import FilterButton from './FilterButton.vue'

import {
  companyOptions,
  departmentOptions,
  locationOptions,
  employeeOptions
} from '../data/attendance.json'

const props = defineProps(['setDateStart', 'setDateEnd', 'hideFilters'])
const { setDateStart, setDateEnd } = props
const route = useRoute()

console.log('Current route:', route)

const attendanceLinks = [
  {
    label: 'Attendance Logs',
    name: 'manage-attendance',
    to: '/',
    icon: ['fas', 'business-time']
  },
  {
    label: 'Exported Files',
    name: 'exported',
    to: '/exported',
    icon: ['fas', 'download']
  }
]
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__nav">
      <div class="sidebar__text">
        <h2>Manage Attendance</h2>
        <p>
          Attendance management is where you can generate, add, edit, and export the logs of the
          employees.
        </p>
      </div>
      <nav>
        <RouterLink v-for="link in attendanceLinks" :key="link.to" :to="link.to">
          <font-awesome-icon :icon="link.icon" />{{ link.label }}
        </RouterLink>
      </nav>
    </div>
    <div class="sidebar__filters" v-if="!hideFilters">
      <FormLabel>Date Range</FormLabel>
      <DateInput :on-change="setDateStart">Date From</DateInput>
      <DateInput :on-change="setDateEnd">Date To</DateInput>
      <FormLabel>Filters</FormLabel>
      <MultiSelectInput :options="companyOptions" :multiple="false" placeholder="Company"
        >Company</MultiSelectInput
      >
      <MultiSelectInput :options="departmentOptions" :multiple="false" placeholder="Department"
        >Department</MultiSelectInput
      >
      <MultiSelectInput :options="[]" :multiple="false" placeholder="Location"
        >Location</MultiSelectInput
      >
      <MultiSelectInput :options="employeeOptions" placeholder="Employee"
        >Employees</MultiSelectInput
      >
    </div>
    <div class="sidebar__actions" v-if="!hideFilters">
      <FilterButton :icon="['fas', 'search']">Search</FilterButton>
      <FilterButton :icon="['fas', 'download']" :bordered="true" disabled>Export</FilterButton>
    </div>
  </div>
</template>
<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  min-width: 25vw;
  max-width: 25vw;
  height: 100%;
  overflow: hidden;
  border-right: 1px solid var(--divider-light-1);
}

.sidebar__nav {
  padding: 1.5rem;
  border-bottom: 1px solid var(--divider-light-2);
}

.sidebar__filters {
  padding: 1.5rem;
  overflow-y: auto;
  overflow-x: hidden;
  border-bottom: 1px solid var(--divider-light-1);
}

.sidebar__actions {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}

.sidebar__text {
  padding: 0.4rem;
}

h2 {
  font-weight: var(--label-weight);
  font-size: var(--header-size);
  margin-bottom: 0.4rem;
}

nav {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}

nav > a {
  font-size: var(--label-size);
  font-weight: var(--label-weight);
  padding: 0.8rem;
  border-radius: 5px;
  color: var(--black-mute);
}

nav > a svg {
  width: 2.5rem;
  text-align: left;
}

nav > a:hover,
nav > a.active,
nav > .router-link-active {
  color: var(--black-soft);
  background-color: var(--color-highlight);
}

nav > a:hover svg,
nav > a.active svg,
nav > .router-link-active svg {
  color: var(--green);
}
</style>
