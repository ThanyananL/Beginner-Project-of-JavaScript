(() => {
    function simpleAPL(text, timeout) {
        return new Promise((resolve, rejection) => {
            setTimeout(() => {
                console.log(text);
                resolve();
            }, timeout);
        });
    }

    async function run() {
        try {
            await simpleAPL('a', 200);
            await simpleAPL('b', 1000);
            await simpleAPL('c', 400);
        } catch (error) {
            console.error(error);
        }
    }
})();