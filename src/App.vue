<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created(){
      if (sessionStorage.getItem('nca_user_token')==null){
        this.$router.push("/");
      };
  }
}
</script>

<style lang="scss">
#nav {
  padding: 15px;
}
#router {
  margin-right: 20px;
}
</style>