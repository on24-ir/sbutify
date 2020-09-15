<template>
    <v-list rounded >
    <v-subheader class="text-h6">Popular</v-subheader>
    <popular-list-item v-for="(track , index) in tracks" :key="index" :id="index+1" :cover="track.album.images[2].url" :title="track.name" plays='1411' :duration="track.duration_ms" :link="track.external_urls.spotify"/>

  </v-list>
</template>


<script>
import popularListItem from './popularListItem';
import spotify from '@/api/spotify';
export default {
  data() {
    return {
      tracks : [],
    }
  },
   components : {
       popularListItem,
   },
   mounted: function () {
     let token = this.$store.getters.getToken;
      if(token){
        spotify.getTracks().then(response => {
          console.log(response.data);
          this.tracks = response.data.tracks;
        }). catch(() => {
          this.$router.replace({name:'Home',query:{retry:true}})
        })
      }
    }
}
</script>
