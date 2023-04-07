// // Get the canvas and the context
// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// // Load the image
// const image = new Image();
// image.onload = function () {
//     // Draw the image on the canvas
//     ctx.drawImage(image, 0, 0, image.width * 100, image.height * 10);

//     // Add text to the canvas
//     ctx.font = 'bold 30px Arial';
//     ctx.fillStyle = 'white';
//     ctx.textAlign = 'center';
//     ctx.fillText('Hello World!', canvas.width / 2, canvas.height / 2);
// }
// image.src = 'img-cert/certificate.jpg';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "img-cert/certificate.jpg";

image.onload = function () {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Add text to the canvas
    ctx.font = 'bold 30px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText('Pranav Bhide', 630, 430);
    ctx.fillText('0x14dC79964da2C08b23698B3D3cc7Ca32193d9955', 930, 515);
    ctx.fillText('Mid Journey Prompting', 970, 660);
    ctx.fillText('Sakshi Surve ', 970, 800);
    ctx.fillStyle = 'white';
    ctx.fillText('6969', 85, 1105);
};