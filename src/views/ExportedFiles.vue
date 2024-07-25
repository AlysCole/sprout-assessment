<script setup>
import NoDataImg from '@/assets/no-data.svg'
import AttendanceSidebar from '@/components/AttendanceSidebar.vue'
import SelectInput from '@/components/form/SelectInput.vue'
</script>

<template>
  <main>
    <AttendanceSidebar :hide-filters="true" />
    <div class="attendance-view">
      <h3>Exported Files</h3>
      <p>No file to download</p>
      <div class="table-view empty">
        <div class="empty-table">
          <img :src="NoDataImg" />
          <h2>There are no exported items to show on your end.</h2>
          <p>
            Search for the logs and click <a class="green">Export</a> to generate the file here.
          </p>
        </div>
        <div class="table-pager">
          <div class="items-per-page">
            Items per page
            <SelectInput
              :list="Array.from({ length: 10 }, (_, i) => i + 1)"
              :value="10"
              :small="true"
            />
          </div>
          <div class="pager-nav disabled">
            <font-awesome-icon :icon="['fas', 'backward']" />
            <font-awesome-icon :icon="['fas', 'play']" style="transform: scaleX(-1)" />
            <div class="pager-nav__input">
              Page
              <input value="1" disabled type="number" />
              of 1
            </div>
            <font-awesome-icon :icon="['fas', 'play']" />
            <font-awesome-icon :icon="['fas', 'forward']" />
          </div>
          <div class="items-showing">Showing 0 of 0</div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.attendance-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
}

a.green {
  cursor: pointer;
  color: var(--green);
}

a.green:hover {
  background-color: none;
}

h3 {
  margin-bottom: 0;
}

p {
  margin-bottom: 2rem;
}
</style>
