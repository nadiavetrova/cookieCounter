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



    updateCounter(){
        if (this.counterShower) {
            this.counterShower.textContent = this.count;
        }
    }


    clickHandler(e){
        const target = e.target;
        const isBtn = target.tagName === 'BUTTON';

        if (isBtn) {
            if (target.classList.contains('plus')) {
                this.count += this.stepSize;
            }
            else if (target.classList.contains('minus')) {
                this.count -= this.stepSize;
            }
            this.updateCounter();
            this.saveState()
        }
    }



    saveState(){
        let state = {
            name: this.name;
            count: this.count;
            stepSize: this.stepSize
        }
        const stateJSON = JSON.stringify(state);
        document.cookie = 'stateCounter' + '=' + encodeURIComponent(stateJSON);
    }
}

const myCounterConfig = {
        name: 'Nadia',
    initValue: 30,
    stepSize: 3,
}

const myCounter = new Counter(myCounterConfig);
    console.log(myCounter)










}
counterInit()