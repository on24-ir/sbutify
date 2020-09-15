import instance from './../api/instance'

const singerId='5tJdqzQYWhaBSWzGVhqGUX';

export default {
    getArtist(){
        return instance.get(
            `https://api.spotify.com/v1/artists/${singerId}`,
        );
    },
    getAlbums(){
        return instance.get(
            `https://api.spotify.com/v1/artists/${singerId}/albums`,
        );
    },
    getTracks() {
        return instance.get(
            `https://api.spotify.com/v1/artists/${singerId}/top-tracks?country=US`,
        )
    }
}
