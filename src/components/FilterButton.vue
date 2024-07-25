<script setup>
import { defineProps, onMounted, ref } from 'vue'

const props = defineProps(['icon', 'bordered'])
const { bordered } = props
const className = ref('filter-button')

onMounted(() => {
  className.value = bordered ? 'filter-button__bordered' : 'filter-button'
})
</script>
<template>
  <button v-bind="$props" :class="className">
    <font-awesome-icon :icon="$props.icon" />
    <slot></slot>
  </button>
</template>

<style scoped>
.filter-button,
.filter-button__bordered {
  background-color: var(--green);
  border-radius: 5px;
  padding: 0.8rem;
  text-align: center;
  color: var(--white);
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  outline: none;
  border: none;
}

.filter-button__bordered {
  background-color: var(--white);
  color: var(--green);
  border: 1px solid var(--green);
}

.filter-button:disabled {
  background-color: var(--divider-light-1);
}

.filter-button__bordered:disabled {
  border: 1px solid var(--divider-light-1);
  color: var(--divider-light-1);
  background: var(--white);
}

.filter-button svg,
.filter-button__bordered svg {
  margin-right: 0.5rem;
}
</style>
