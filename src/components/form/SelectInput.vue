<script setup>
import { defineProps } from 'vue'

const props = defineProps(['list', 'small', 'value'])

const model = defineModel()

function update(event) {
  model.value = event.target.value
}
</script>
<template>
  <div :class="`select__input ${$props.small ? 'small' : ''}`">
    <label><slot></slot></label>
    <select v-bind="$props" @change="update">
      <option
        v-for="option in $props.list"
        :key="option?.value || option"
        :selected="option?.value === $props.value || option === $props.value"
      >
        {{ option?.label || option }}
      </option>
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

.select__input.small {
  margin: 0;
  width: 60px;
  max-width: 150px;
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
  font-size: 1rem;
  color: var(--text-light-1);
  font-family: var(--font-family);
}

.select__input.small select {
  padding: 0.4rem;
  font-size: 0.9rem;
}

.select__input.small svg {
  right: 0.4rem;
}
</style>
