<template>
  <v-app>
    <v-app-bar v-if="loaded" :src="image" dark height="300" max-height="300" prominent
      fade-img-on-scroll shrink-on-scroll scroll-target="#scrolling-techniques-2">

      <v-toolbar-title width="50vw" class="d-flex align-center">
        <h3>{{name}}</h3>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-title class="d-flex align-center">
        <span class="text-subtitle-1">{{followers}} followers</span>
        <v-btn color="white" text :href="profileUrl" target="_blank">
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-toolbar-title>
    </v-app-bar>


    <div id="loading" :style="{display: !loaded?'block':'none'}">
      <div class="loader">
        <div class="eq"><span class="eq-bar eq-bar--1"></span> <span class="eq-bar eq-bar--2"></span> <span
            class="eq-bar eq-bar--3"></span> <span class="eq-bar eq-bar--4"></span> <span
            class="eq-bar eq-bar--5"></span> <span class="eq-bar eq-bar--6"></span></div><span
          class="text">Loading</span>
      </div>
    </div>

    <v-main>
      <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" height="100vh">
        <v-container>
          <singer-profile v-if="loaded" />
          <albumsList v-if="loaded" />
        </v-container>
      </v-sheet>

    </v-main>


  </v-app>
</template>


<script>
import singerProfile from '@/components/singerProfile';
import albumsList from '@/components/albumsList';
import EnvData from "@/mixin/env";
import spotify from "@/api/spotify";

export default {
  name: 'App',
  mixins : [EnvData],
  data() {
    return {
      image: '',
      profileUrl: '',
      followers: '',
      name: '',
      loaded:false,
    }
  },
  methods: {

  },
  components: {
    singerProfile,
    albumsList
  },
  mounted: function () {
    let token = this.$store.getters.getToken;
    if (token) {
      spotify.getArtist().then(response => {
        this.loaded = true;
        this.image = response.data.images[0].url;
        this.profileUrl = response.data.external_urls.spotify;
        this.followers = response.data.followers.total;
        this.name = response.data.name;
      }).catch(()=>{
        this.redirect('Home','retry')
      });
    }else {
      this.redirect('Home','retry')
    }
  }
}
</script>

<style lang="scss">
@import "./../styles/profile/index";
</style>
