<script setup>
import {Nav} from '@/components/base'
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <Nav />
    <q-page-container>
      <router-view class="tw_p-5" />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
</style>
