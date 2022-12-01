(() => {

    function setup() {
        const canvas = document.getElementById('snowFall');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        return {
            canvas,
            canvasContext: canvas.getContext('2d'),
            numberOfSwonballs: 200
        }
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createSwonballs(canvas, numberOfSwonballs) {
        return [...Array(numberOfSwonballs)].map(() => {
            return {
                x: random(0, canvas.width),
                y: random(0, canvas.height),
                opacity: random(0.5, 1),
                radius: random(2, 4),
                speedX: random(-5, 5),
                speedY: random(1, 3)
            }
        });
    }

    function drawSnow(canvasContext, snowBall) {
        canvasContext.beginPath();
        canvasContext.arc(snowBall.x, snowBall.y, snowBall.radius, 0, Math.PI * 2);
        canvasContext.fillStyle = `rgba(255,255,255,${snowBall.opacity})`;
        canvasContext.fill();
    }

    function move(snowBall) {
        snowBall.x += snowBall.speedX;
        snowBall.y += snowBall.speedy;
        if (snowBall.x > canvas.width) {
            snowBall.x = 0;
        } else if (snowBall.x < 0) {
            snowBall.x = canvas.width;
        }

        if (snowBall.y > canvas.height) {
            snowBall.y = 0;
        }
    }

    function run() {
        const { canvas, canvasContext, numberOfSwonballs } = setup();
        const snowBalls = createSwonballs(canvas, numberOfSwonballs);
        setInterval(() => {
            canvasContext.clearRect(0, 0, canvas.width, canvas.height);
            snowBalls.forEach((snowBall) => drawSnow(canvasContext, snowBall));
            snowBalls.forEach((snowBall) => move(snowBall));
        }, 50);
    }

    run();
});