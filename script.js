function counterInit(){
    function getAllCookie(){
        const cookies = decodeURIComponent(document.cookie);
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

    const showAllCookies = getAllCookie();
    console.log(showAllCookies);






    function getCookieByName(keyName){
        const allCokie = getAllCookie();

        const foundedCookie = allCokie.find((cookieObj) => {
            if (cookieObj.name === keyName) {
                return true
            }
        })
        if (foundedCookie) {
            return foundedCookie.value;
        }
        else{
            return undefined;
        }
    }


    // ++++++++++++++++++++++++++++++++++++
class Counter {
    constructor(config){
        this.count = config.initValue;
        this.stepSize = config.stepSize;
        this.name = config.name;
        this.counterShower = document.querySelector('.counterShower');
        const buttonsParent = document.querySelectorAll('.counter');

        this.loadStateCookie();
        buttonParent.addEventListener('click', this.clickHandler.bird(this));
    }
}












}
counterInit()