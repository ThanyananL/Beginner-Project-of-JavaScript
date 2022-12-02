(() => {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    function setelem(id, text) {
        const elem = document.getElementById(id);
        elem.innerText = text;
    }

    function countdown() {
        const now = new Date().getTime();
        const newYear = new Date('December 31,2022 23:59:59').getTime();
        const total = newYear - now;

        setelem('d', Math.floor(total / DAY));
        setelem('h', Math.floor(total % DAY / HOUR));
        setelem('m', Math.floor(total % HOUR / MINUTE));
        setelem('s', Math.floor(total % MINUTE / SECOND));
    }

    function run() {
        countdown();
        setInterval(countdown, SECOND);
    }
    run();
})();