<template>
  <label class="form-label">
    <slot></slot>
  </label>
</template>
<style scoped>
.form-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: var(--label-weight);
  margin-bottom: 0.8rem;
  color: var(--black-soft);
}
</style>
