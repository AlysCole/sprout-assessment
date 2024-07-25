<script setup>
import { ref } from 'vue'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'
const value = ref('')
</script>

<template>
  <multiselect :multiple="true" v-model="value" v-bind="$props" class="multi__select" label="label">
    <template v-slot:caret>
      <div class="multiselect__chevron">
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
      </div>
    </template>
    <template #selection="{ values, search, isOpen }">
      <label><slot></slot></label>
      <span class="multiselect__single" v-if="values.length" v-show="!isOpen"
        >{{ values.length }} option{{ values?.length > 1 ? 's' : '' }} selected</span
      >
    </template>
  </multiselect>
</template>

<style>
.multi__select {
  border: 1px solid var(--divider-light-1);
  border-radius: 5px;
}

.multi__select label {
  position: absolute;
  top: -20%;
  left: 10px;
  font-size: 0.8rem;
  background: white;
  padding: 0 0.3rem;
  color: var(--divider-dark-1);
}

.multiselect {
  position: relative;
  margin-top: 1.2rem;
  min-height: unset;
  color: var(--text-light-1);
}

.multiselect__placeholder {
  display: inline-block !important;
  margin-bottom: 0px !important;
  padding-top: 0px !important;
}

.multiselect__tags {
  border: none;
  outline: none;
  padding: 1rem !important;
  font-size: 1rem;
  font-family: var(--font-family);
  color: var(--text-light-1);
  min-height: 10px;
}

.multiselect__single {
  padding: 0;
  margin: 0;
  min-height: 0;
  line-height: 0;
  vertical-align: middle;
}

.multiselect__chevron {
  position: absolute;
  right: 1rem;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8rem;
  color: var(--divider-dark-1);
}
</style>
