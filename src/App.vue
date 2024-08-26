<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue';
// import HelloWorld from './components/HelloWorld.vue'
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {
    }
  },
  components: {
    // Hello: HelloWorld,
    Header,
    Footer

  },
  methods: {

  },
  created() {

  }
}
</script>

<style scoped>

</style>
