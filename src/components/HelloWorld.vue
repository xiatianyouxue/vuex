<template>
  <div class="hello">
    <input type="text" v-model="name">
    <button @click="saveInfo">提交</button>
    {{userinfo}}
    <input type="text" v-model="name1">
    <button @click="saveInfo1">提交</button>
    {{userinfo1}}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        name: '',
        name1: ''
      }
    },
    methods: {
      saveInfo () {
        this.$store.dispatch('saveinfo1/saveInfo', this.name)
      },
      saveInfo1 () {
        this.$store.dispatch('saveinfo2/saveInfo', this.name1)
      }
    },
    computed: {
      ...mapGetters({
        userinfo: 'saveinfo1/getUserInfo',
        userinfo1: 'saveinfo2/getUserInfo1'
      })
    }
  }
</script>
<style scoped>

</style>
