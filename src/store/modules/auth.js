// import SecureLS from "secure-ls";
import Cookies from 'js-cookie';
import accessToken from '../../api/auth/accessToken';

// const ls = new SecureLS({ isCompression: false });
/*const storage= {
    getItem: key => ls.get(key),
    setItem: (key, value) => ls.set(key, value),
    removeItem: key => ls.remove(key)
}

const cookie={
    getItem: key => Cookies.get(key),
    setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
    removeItem: key => Cookies.remove(key)
}*/

export default {
    state:{
        token:'',
        refreshToken:false,
    },
    mutations:{

    },
    actions:{
        fetchToken({state},calb){
            state.refreshToken=true;
            let cookie=Cookies;
            accessToken(spotJson=>{
                state.refreshToken=false;
                if(spotJson){
                    let newToken=spotJson.access_token;
                    cookie.set('token',newToken,{expires:spotJson.expires_in/60/60/24})
                    state.token=newToken;
                    calb();
                }
                else{
                    state.error = 3000
                    state.errorMessage = 'Unable to connect Spotify'
                }
            })
        },
    },
    getters:{
        getToken(state){
            return state.token||Cookies.get('token');
        }
    }
}


