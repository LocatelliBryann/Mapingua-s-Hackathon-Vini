<template>
  <v-app>
      <v-main>
          <router-view></router-view>
      </v-main>
  </v-app>
</template>

<script>
export default {
}
</script>

<style scoped>
main {
  background: linear-gradient(to top, #d9e9d8, #E3FBB9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>