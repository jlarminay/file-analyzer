import {defineStore} from 'pinia'
// import alasql from 'alasql'
import {open} from '@tauri-apps/api/dialog'
import {readDir} from '@tauri-apps/api/fs'

export default defineStore('files', {
  state() {
    return {
      state: 'ready',
      selectedDirectory: null,
      rawData: null
    }
  },
  actions: {
    async selectDirectory(){
      this.state = 'loading'
      this.selectedDirectory = null
      this.rawData = null

      await this.getDir()
      if(this.selectedDirectory!==null){
        await this.getAllFilesInDir()
      }
      this.state = 'ready'
    },

    async getDir() {
      this.selectedDirectory = await open({
        directory: true,
        title: 'Select directory'
      })
    },
    async getAllFilesInDir(){     
      let final = await readDir(
        this.selectedDirectory, 
        {
          recursive: true
        }
      )
      let index = 0
      // for(let file of final){
      //   let path = file.path.split('\\').join('/')
      //   let extension = file.path.split('.').slice(-1)[0]
      //   final[index] = {
      //     name: file.name,
      //     path,
      //     extension,
      //     size: 0
      //   }
      //   index++
      // }
      this.rawData = final
    }
  }
})
