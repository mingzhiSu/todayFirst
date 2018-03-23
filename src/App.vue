<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-footers v-on:child-tell-me-something='listenToMyBoy'></v-footers>
  </div>
</template>

<script>
import header from './components/header/header';
import footers from './components/footers/footers';

export default {
  name: 'App',
  components:{
  'v-header':header,
  'v-footers':footers
  },
  data(){
      return{
         setchild:'this is set a header',
         childtellme:'now this is null'
      }
    },
   methods:{
     listenToMyBoy(index){
       switch(index){
          case 0 :this.$router.push('/contents');break;
          case 1 :this.$router.push('/videos');break;
          case 2 :this.$router.push('/wtit');break;
          case 3 :this.$router.push('/litvideo');break;
        }
       
     }
   }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
