const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

// 26 coordinates modified to stretch broadly across the canvas (wider X boundaries, taller Y depth)
const points = [
    [150, 100], [1150, 700], [450, 850], [1600, 130],
    [250, 400], [1480, 860], [950, 360], [1850, 200],
    [600, 150], [1060, 950], [350, 600], [1820, 820],
    [820, 180], [1900, 980], [1040, 120], [1750, 430],
    [550, 480], [1600, 450], [720, 360], [1380, 920],
    [200, 220], [1800, 720], [1500, 320], [1740, 920],
    [1180, 250], [100, 750]
];

function draw() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scaleX = canvas.width / 1920;
    const scaleY = canvas.height / 1080;

    ctx.strokeStyle = "rgba(255, 255, 255, 1.0)";
    ctx.lineWidth = 1;

    ctx.beginPath();
    
    ctx.moveTo(points[0][0] * scaleX, points[0][1] * scaleY);

    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0] * scaleX, points[i][1] * scaleY);
    }

    ctx.stroke();
}

draw();
window.addEventListener("resize", draw);
