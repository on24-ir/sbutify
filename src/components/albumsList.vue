<template>
    <div>
        <span class="pa-8 text-h6">Albums</span>
        <v-row class="px-2">
            <v-col xl="2" lg="3" md="4" sm="6" xs="12" v-for="(album , index) in albums" :key="index" >
                <albums-list-item :title="album.name" :singer="album.artists[0].name" :cover="album.images[0].url" :link="album.external_urls.spotify" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import albumsListItem from './albumsListItem'
import spotify from '@/api/spotify';

export default {
    data() {
        return {
            albums : []
        }
    },
    components : {
        albumsListItem
    },
    mounted: function () {
     let token = this.$store.getters.getToken;
     if(token){
       spotify.getAlbums().then(response => {
         this.albums = response.data.items
       }). catch(() => {
         this.$router.replace({name:'Home',query:{retry:true}})
       })
     }
    }
}
</script>
