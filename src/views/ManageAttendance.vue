<script setup>
import { ref, watch } from 'vue'
import NoDataImg from '@/assets/no-data.svg'
import AttendanceSidebar from '@/components/AttendanceSidebar.vue'
import SelectInput from '@/components/form/SelectInput.vue'
import { attendanceLogs } from '@/data/attendance.json'

const formatDateString = (date) => (date ? date.toDateString().split(' ').slice(1).join(' ') : '')

const data = ref([])
const page = ref(1)
const maxItems = ref(10)
const filteredData = ref([])

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

watch([page, maxItems], ([newPage, newMaxItems]) => {
  filteredData.value = data.value.slice(
    (newPage - 1) * newMaxItems,
    (newPage - 1) * newMaxItems + newMaxItems
  )
})

watch([dateStart, dateEnd], ([newDateStart, newDateEnd]) => {
  if (newDateStart || newDateEnd) {
    data.value = attendanceLogs?.map((log) => ({
      ...log,
      date: new Date(log?.date)
    }))

    filteredData.value = data.value.slice(
      (page.value - 1) * maxItems.value,
      (page.value - 1) * maxItems.value + maxItems.value
    )
  }
})
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
      <div :class="`table-view ${data?.length === 0 || !data ? 'empty' : ''}`">
        <div class="empty-table" v-if="data?.length === 0 || !data">
          <img :src="NoDataImg" />
          <h2>No attendance logs to show</h2>
          <p>Get started by searching for the logs</p>
        </div>
        <table v-else>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>In/Out</th>
              <th>Log Details</th>
              <th>Location</th>
              <th>Project Name</th>
              <th><!-- Edit Column --></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredData" :key="item.id">
              <td>
                <div class="cell">
                  <div class="cell-text">{{ item?.name }}</div>
                  <div class="cell-subtext">{{ item?.id }}</div>
                </div>
              </td>
              <td>{{ item?.date?.toLocaleDateString() }}</td>
              <td>{{ item?.date?.toLocaleTimeString() }}</td>
              <td>
                <div class="in-status" :data-content="item.in ? 'in' : 'out'">
                  {{ item?.in ? 'In' : 'Out' }}
                </div>
              </td>
              <td>
                <span class="log-detail__badge" v-for="detail in item?.logDetails" :key="detail">
                  {{ detail }}
                </span>
              </td>
              <td>
                <div class="cell">
                  <div class="cell-text">{{ item?.location || '-' }}</div>
                  <div class="cell-subtext"><em>Notes</em></div>
                </div>
              </td>
              <td>
                <div class="cell">
                  <div class="cell-text">{{ item?.project }}</div>
                  <div class="cell-subtext">NS</div>
                </div>
              </td>
              <td>
                <button class="edit-button"><font-awesome-icon :icon="['far', 'edit']" /></button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="table-pager">
          <div class="items-per-page">
            Items per page
            <SelectInput
              :list="Array.from({ length: 10 }, (_, i) => i + 1)"
              :small="true"
              :value="maxItems"
              v-model.number="maxItems"
            />
          </div>
          <div :class="`pager-nav ${!data?.length ? 'disabled' : ''}`">
            <font-awesome-icon :icon="['fas', 'backward']" />
            <font-awesome-icon :icon="['fas', 'play']" style="transform: scaleX(-1)" />
            <div class="pager-nav__input">
              Page
              <input
                value="1"
                :disabled="!data?.length"
                type="number"
                v-model.number="page"
                :min="1"
                :max="Math.ceil(data?.length / maxItems)"
              />
              of {{ Math.ceil(data?.length / maxItems) }}
            </div>
            <font-awesome-icon :icon="['fas', 'play']" />
            <font-awesome-icon :icon="['fas', 'forward']" />
          </div>
          <div class="items-showing">
            Showing {{ data?.length ? `${1 + (page - 1) * maxItems} - ` : '' }}
            {{ (page - 1) * maxItems + filteredData?.length }} of {{ data?.length }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.attendance-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
}

.attendance-view h3 {
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text-light-1);
}

.attendance-view svg {
  color: var(--green);
  margin-right: 0.5rem;
}

.attendance-view .table-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid var(--divider-light-1);
  border-radius: 5px;
}

.attendance-view .table-view.empty {
  flex: 1;
}

.attendance-view .empty-table {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.attendance-view .empty-table img {
  max-height: 100px;
  margin-bottom: 1.5rem;
}

.attendance-view .table-view table {
  width: 100%;
  border-collapse: collapse;
}

.attendance-view .table-view table thead tr {
  border-bottom: 1px solid var(--divider-light-1);
}

.attendance-view .table-view table thead th {
  text-align: left;
  padding: 0.8rem;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.attendance-view .table-view table tbody td {
  padding: 0.4rem 0.8rem;
  max-width: 100px;
}

.attendance-view .table-view table tbody tr {
  border-bottom: 1px solid var(--divider-light-2);
}

.attendance-view .table-view table tbody tr:last-of-type {
  border-bottom: none;
}

.attendance-view .table-view .edit-button {
  outline: none;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: var(--green);
}

.attendance-view .table-view .cell {
  width: 100%;
  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.attendance-view .table-view .cell-text {
  width: 100%;
  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.attendance-view .table-view .cell-subtext {
  font-size: 0.8rem;
  color: var(--subtext);
}

.attendance-view .table-view .in-status {
  text-transform: uppercase;
  font-weight: 600;
}

.attendance-view .table-view .in-status[data-content='in'] {
  color: var(--blue);
}

.attendance-view .table-view .in-status[data-content='out'] {
  color: var(--orange);
}

.attendance-view .table-view .log-detail__badge {
  font-weight: 600;
  text-transform: uppercase;
  padding: 3px 5px;
  border-radius: 5px;
  color: var(--black-soft);
  background: var(--badge-bg);
}

.attendance-view .table-view .table-pager {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--divider-light-1);
  padding: 1rem;
}

.attendance-view .table-view .items-per-page {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.attendance-view .table-view .pager-nav {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.attendance-view .table-view .pager-nav__input input {
  margin: 0;
  border: 1px solid var(--divider-light-1);
  border-radius: 5px;
  padding: 0.4rem;
  width: 60px;
  max-width: 150px;
  font-family: var(--font-family);
  font-size: 0.9rem;
}

.attendance-view .table-view .pager-nav svg {
  font-size: 0.9rem;
  color: var(--green);
}

.attendance-view .table-view .pager-nav.disabled svg {
  color: var(--divider-light-1);
}

.attendance-view .items-showing {
  flex: 1;
  text-align: right;
}
</style>
