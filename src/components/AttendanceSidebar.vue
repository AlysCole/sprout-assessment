<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import FormLabel from './form/FormLabel.vue'
import DateInput from './form/DateInput.vue'
import SelectInput from './form/SelectInput.vue'
import MultiSelectInput from './form/MultiSelectInput.vue'
import FilterButton from './FilterButton.vue'

const props = defineProps(['setDateStart', 'setDateEnd'])
const { setDateStart, setDateEnd } = props

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

const companyOptions = [
  {
    value: 'all',
    label: 'All'
  },
  {
    value: 'sprout',
    label: 'Sprout Solutions'
  }
]

const departmentOptions = [
  {
    value: 'all',
    label: 'All'
  }
]

const locationOptions = [
  {
    value: 'all',
    label: 'All'
  }
]

const employeeOptions = [
  {
    value: 'all',
    label: 'All'
  },
  {
    value: 'john-smith',
    label: 'John Smith'
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
    <div class="sidebar__filters">
      <FormLabel>Date Range</FormLabel>
      <DateInput :on-change="setDateStart">Date From</DateInput>
      <DateInput :on-change="setDateEnd">Date To</DateInput>
      <FormLabel>Filters</FormLabel>
      <MultiSelectInput :options="companyOptions" :multiple="false">Company</MultiSelectInput>
      <MultiSelectInput :options="departmentOptions" :multiple="false">Department</MultiSelectInput>
      <MultiSelectInput :options="locationOptions" :multiple="false">Location</MultiSelectInput>
      <MultiSelectInput :options="employeeOptions">Employees</MultiSelectInput>
    </div>
    <div class="sidebar__actions">
      <FilterButton :icon="['fas', 'search']">Search</FilterButton>
      <FilterButton :icon="['fas', 'download']" bordered disabled>Export</FilterButton>
    </div>
  </div>
</template>
<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 25vw;
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
nav > a.active {
  color: var(--black-soft);
  background-color: var(--color-highlight);
}

nav > a:hover svg,
nav > a.active svg {
  color: var(--green);
}
</style>
