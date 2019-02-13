<template>
  <div id="app">
    <div class="main">
       <router-view></router-view>
    </div>
    <menu-component v-if="true" />
  </div>
</template>

<script>
import Menu from '@/components/navmenu'
export default {
  components: {
    MenuComponent: Menu
  }
}
</script>

