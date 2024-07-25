<template>
  <div class="date__input">
    <label><slot></slot></label>
    <input type="date" />
  </div>
</template>
<style scoped>
.date__input {
  position: relative;
  margin: 0.8rem 0;
  margin-top: 1.2rem;
  width: 100%;
}

.date__input label {
  position: absolute;
  top: -20%;
  left: 10px;
  font-size: 0.8rem;
  background: white;
  padding: 0 0.3rem;
  color: var(--divider-dark-1);
}

.date__input input[type='date'] {
  outline: none;
  background: none;
  border: 1px solid var(--divider-light-1);
  border-radius: 5px;
  padding: 1rem;
  font-size: 0.9rem;
  width: 100%;
}

.date__input input[type='date']::-webkit-calendar-picker-indicator {
  opacity: 0.6;
}
</style>
