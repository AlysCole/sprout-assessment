<script setup>
import { ref, defineProps } from 'vue'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'
const value = ref('')
const props = defineProps(['options', 'placeholder'])
const { options, placeholder } = props
</script>

<template>
  <multiselect
    :multiple="true"
    :disabled="!options?.length"
    v-model="value"
    v-bind="$props"
    :placeholder="!options?.length ? `No ${placeholder}` : `Select ${placeholder}`"
    class="multi__select"
    label="label"
  >
    <template v-slot:caret>
      <div class="multiselect__chevron">
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
      </div>
    </template>
    <template #selection="{ values, search, isOpen }">
      <label v-if="values.length || value"><slot></slot></label>
      <span class="multiselect__single" v-if="values.length" v-show="!isOpen"
        >{{ values.length }} Selected</span
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

.multiselect--disabled {
  background: unset;
  opacity: 1;
}

.multiselect--disabled .multiselect__tags {
  background: #f0f2f2;
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
