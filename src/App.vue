<template>
  <v-app>
    <transition name="fade">
      <base-toast v-if="error" @click.native="reset()">
        <span>{{ errorMessage }}</span>
      </base-toast>
    </transition>
    <v-main>
<!--      <welcome/>-->
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import BaseToast from "@/components/BaseToast";
import EnvData from "@/mixin/env";
import {mapState} from "vuex";

export default {
  name: 'App',
  mixins:[EnvData],
  components: {
    BaseToast,
  },
  computed:{
    ...mapState(['error','errorMessage']),
  },
  methods:{
    reset () {
      this.error = ''
      this.errorMessage = ''
    },
  }
};
</script>

<style lang="scss">

</style>

