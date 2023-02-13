<script setup></script>

<template>
  <q-header
    reveal
    elevated
    class="bg-primary text-white"
  >
    <q-toolbar>
      <q-toolbar-title>
        Title
      </q-toolbar-title>
      <div>
        <q-btn
          round
          unelevated
          icon="home"
          :to="{name: 'Home'}"
        />
        <q-btn
          round
          unelevated
          icon="history"
          :to="{name: 'History'}"
        />
        <q-btn
          round
          unelevated
          icon="settings"
          :to="{name: 'Settings'}"
        />
        <q-btn
          round
          unelevated
          icon="error"
          :to="{name: 'Error'}"
        />
      </div>
    </q-toolbar>
  </q-header>
</template>

<style scoped lang="postcss">
.q-btn {
  @apply tw_ml-2;
}
</style>
