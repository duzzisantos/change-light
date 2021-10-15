

function randomColor(r, g, b) {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var color = rgb(`${r}, ${g}, ${b}`);
    console.log(color);
}