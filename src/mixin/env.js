
const EnvData={
    data(){
        return {
            authUrl: 'https://accounts.spotify.com/authorize',
            clientId:'212cbd2941b74e6898c56a27ce9d9e20',
            pgProfile:'profile',
            rootUrl:window.location.origin+'/',
            auth_proxy:window.location.origin+'/auth_proxy.html',
        }
    },
    methods:{
        getApiReq(){
            return this.$data.authUrl+`?client_id=${this.$data.clientId}&response_type=token&redirect_uri=${this.$data.rootUrl}${this.$data.pgProfile}`
        },
        redirect (name,replace,query) {
            this.$router[replace?'replace':'push']({ name: name,query:query?query:replace==='retry'?{retry:true}:null})
        },
    }
}

export default EnvData;
