<script setup>
import { Themes } from '@varlet/ui'
import { watchLang, watchDarkMode } from '@varlet/cli/client'
import { use } from './locale'

watchLang(use, 'pc')
watchDarkMode(Themes.dark)
</script>

<template>
  <var-pagination :current="3" :total="120" :simple="false" :show-size-changer="false" />
  <var-pagination :current="3" :total="120" :simple="false" :size-option="[10, 20, 30, 40]" />
</template>
