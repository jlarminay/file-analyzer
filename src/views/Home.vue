<script setup>
import {storeToRefs} from 'pinia'
import {useFilesStore} from '@/stores'
const filesStore = useFilesStore()
const {state, selectedDirectory, rawData} = storeToRefs(filesStore)

function fileReadContent(){
  filesStore.selectDirectory()
}
</script>

<template>
  <div class="tw_flex tw_justify-center">
    <div class="tw_text-center">
      <h1>Welcome to the File Analyzer</h1>
      <p>This will scan all files in a given directory and give you summarized stats.</p>
      <q-btn
        class="tw_mt-4"
        label="Select Directory"
        color="primary"
        @click="fileReadContent"
      />
      <div
        class="tw_text-left"
      >
        <pre>{{ state }}</pre>
        <pre>{{ selectedDirectory }}</pre>
        <pre>{{ rawData }}</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
