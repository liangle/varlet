<script setup>
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { Themes } from '@varlet/ui'
import { pack, use } from './locale'

watchLang(use)
watchDarkMode(Themes.dark)
</script>

<template>
  <app-type>{{ pack.baseUse }}</app-type>
  <var-space>
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
  </var-space>

  <app-type>{{ pack.vertical }}</app-type>
  <var-space direction="column" size="large">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
  </var-space>

  <app-type>{{ pack.space }}</app-type>
  <var-space :size="[20, 20]">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
    <var-button>Button4</var-button>
    <var-button>Button5</var-button>
    <var-button>Button6</var-button>
  </var-space>

  <app-type>{{ pack.rightAlign }}</app-type>
  <var-space justify="end" :size="['2.666vmin', '2.666vmin']">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>

  <app-type>{{ pack.around }}</app-type>
  <var-space justify="space-around" :size="['2.666vmin', '2.666vmin']">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>

  <app-type>{{ pack.center }}</app-type>
  <var-space justify="center" :size="['2.666vmin', '2.666vmin']">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>

  <app-type>{{ pack.between }}</app-type>
  <var-space justify="space-between" :size="['2.666vmin', '2.666vmin']">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>
</template>
