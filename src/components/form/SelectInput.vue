<script setup>
import { defineProps } from 'vue'

const props = defineProps(['options'])
const { options } = props
</script>
<template>
  <div class="select__input">
    <label><slot></slot></label>
    <select>
      <option v-for="option in options" :key="option.value">{{ option.label }}</option>
    </select>
    <font-awesome-icon :icon="['fas', 'chevron-down']" />
  </div>
</template>
<style scoped>
.select__input {
  position: relative;
  margin: 0.8rem 0;
  margin-top: 1.2rem;
  width: 100%;
  border: 1px solid var(--divider-light-1);
  border-radius: 5px;
  width: 100%;
}

.select__input label {
  position: absolute;
  top: -20%;
  left: 10px;
  font-size: 0.8rem;
  background: white;
  padding: 0 0.3rem;
  color: var(--divider-dark-1);
}

.select__input svg {
  position: absolute;
  font-size: 0.8rem;
  right: 1rem;
  top: 50%;
  z-index: -1;
  color: var(--divider-dark-1);
  transform: translateY(-50%);
}

.select__input select {
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  margin: 0;
  width: 100%;
  padding: 1rem;
  font-size: 0.9rem;
}
</style>
