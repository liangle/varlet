<script setup>
import { Themes } from '@varlet/ui'
import { ref, onMounted } from 'vue'
import { pack, use } from './locale'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'

const list = ref([])
const bgColor = ref('#e7edf7')
const color = ref('#2e67ba')

onMounted(() => {
  for (let i = 0; i < 26; i++) {
    list.value.push(String.fromCharCode(65 + i))
  }
})

function handleChange(value) {
  console.log(value)
}

watchLang(use)
watchDarkMode(Themes.dark, (theme) => {
  bgColor.value = theme === 'darkTheme' ? 'rgb(41, 42, 45)' : '#e7edf7'
  color.value = theme === 'darkTheme' ? '#3980e8' : '#2e67ba'
})
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-index-bar @change="handleChange" duration="300" :sticky-offset-top="54">
    <div v-for="item in list" :key="item">
      <var-index-anchor :index="item" class="index-bar-example-anchor" :style="{ background: bgColor, color }">
        {{ pack.title }} {{ item }}
      </var-index-anchor>
      <var-cell>{{ item }} {{ pack.text }}</var-cell>
      <var-cell>{{ item }} {{ pack.text }}</var-cell>
    </div>
  </var-index-bar>
</template>

<style lang="less">
.index-bar-example-anchor {
  height: 42px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  transition: all 0.25s;
}
</style>
