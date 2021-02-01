<template>
  <div id="app">
    <Topbar />
    <router-view/>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'

export default {
  name: 'McvApp',
  components: {
    Topbar
  }
}
</script>