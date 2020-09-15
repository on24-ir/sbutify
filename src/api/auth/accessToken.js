import env from '@/mixin/env'

const accessToken=callback=>{
    let data=env.data(),
        redirectUrl = data.auth_proxy;
    function getLoginURL(scopes) {
        return data.authUrl+'?client_id=' + data.clientId +
            '&redirect_uri=' + redirectUrl +
            '&scope=' + encodeURIComponent(scopes.join(' ')) +
            '&response_type=token';
    }

    var url = getLoginURL([
        // 'user-read-email'
    ]);

    var width = 450,
        height = 730,
        left = (screen.width / 2) - (width / 2),
        top = (screen.height / 2) - (height / 2);

    let answ=function(event) {
        var hash = JSON.parse(event.data);
        if (hash.type === 'access_token') {
            callback(hash);
            window.removeEventListener("message",answ);
        }
    };
    window.addEventListener("message", answ, false);

    window.open(url,
        'Spotify',
        'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
    );

}

export default accessToken
