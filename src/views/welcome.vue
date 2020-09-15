<template>
  <div class="welcome" :class="{'--loading': loading, '--loaded': loaded }">
    <div class="welcome__container">
      <h1 class="zIndx2" style="color: white;">SButify</h1>
      <base-button id="btnLogin" @click.native="login" :class="['zIndx2',{'--loading': loading}]">
        <span class="text">Connect with Spotify</span>
        <div class="spinner-container" v-if="loading">
          <div class="spinner-pulse"></div>
        </div>
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import EnvData from "@/mixin/env";
import {mapActions, mapGetters, mapState} from 'vuex'

export default {
  components: {
    BaseButton,
  },
  mixins:[EnvData],
  computed:{
    ...mapState(['error','errorMessage']),
    ...mapGetters['getToken'],
  },
  data () {
    return {
      loading: false,
      loaded: false,
    }
  },
  methods: {
    ...mapActions(['fetchToken']),
    toProfile(){
      if (!this.getToken){
        this.fetchToken(()=>{
          this.redirect(this.$data.pgProfile);
        });
      }
      else{
        this.redirect(this.$data.pgProfile)
      }
    },
    login(){
      if (!(this.loading = !this.loading)) {
        return
      }
      this.toProfile();
    },
  },
  mounted () {
    if((this.loading=!!this.$route.query.retry)){
      this.toProfile();
    }
    window.addEventListener("load",()=>{
      this.loaded = true
    });
  },
}
</script>

<style lang="scss">
@import '../styles/_includes';
@import '../styles/welcome/index';
</style>
