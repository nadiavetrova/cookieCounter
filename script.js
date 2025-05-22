function counterInit(){
    function getAllCookie(){
        const cookies - decodeURIComponent(document.cookie);
        const splitedCookies = cookies.split(';');
        const mapedCookies = splitedCookies.map((cookiePair) => {
            const splitedCookiePair = cookiePair.replace('=');
            let obj = {
                name: splitedCookiePair[0],
                value: splitedCookiePair[1],
            }
            return obj;
        })
        return mapedCookies;
    }
}
counterInit()