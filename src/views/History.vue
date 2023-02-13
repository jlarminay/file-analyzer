<script setup>
import {useCounterStore} from '@/stores'
const counterStore = useCounterStore()
</script>

<template>
  <div>
    <h1>History</h1>
    {{ counterStore.count }}
    <q-btn
      label="add"
      @click="counterStore.increment()"
    />
  </div>
</template>

<style scoped></style>
