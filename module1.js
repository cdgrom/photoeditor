class ImageUtils {

    static getCanvas(w, h) {
        var c = document.querySelector("canvas");
        c.width = w;
        c.height = h;
        return c;
    }

    static getPixels(img) {
        var c = ImageUtils.getCanvas(img.width, img.height);
        var ctx = c.getContext('2d');
        ctx.drawImage(img, 0, 0);
        return ctx.getImageData(0,0,c.width,c.height);
    }

    static putPixels(imageData, w, h) {
        var c = ImageUtils.getCanvas(w, h);
        var ctx = c.getContext('2d');
        ctx.putImageData(imageData, 0, 0);
    }

}

function makeMoreBlue(img, adjustment) {
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i+2] = data[i+2] + adjustment;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

function makeMoreGreen(img, adjustment) {
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i+1] = data[i+1] + adjustment;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

function makeMoreRed(img, adjustment) {
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i] = data[i] + adjustment;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

function brighten(img, adjustment) {
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i] = data[i] + adjustment;
        data[i+1] = data[i+1] + adjustment;
        data[i+2] = data[i+2] + adjustment;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

function makeInvert(img) {
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i] = 255 - data[i];
        data[i+1] = 255 - data[i+1];
        data[i+2] = 255 - data[i+2];
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

function makeNoisy (img, min, max) {
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i] = data[i] + getRandomInt(min, max);
        data[i+1] = data[i+1] + getRandomInt(min, max);
        data[i+2] = data[i+2] + getRandomInt(min, max);
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function definitions here


$(document).ready(function() {
    /*
    var img = new Image();
    img.src = "img/cat.jpg";

    var pixels = ImageUtils.getPixels(img);
    console.log(pixels);
    ImageUtils.putPixels(pixels, img.width, img.height);
    */
    /*
    var img = new Image();
    img.src = "img/cat.jpg";

    var pixels = ImageUtils.getPixels(img);
    var heightPixelsToHide = 100;
    for(var i = 0; i < img.width * heightPixelsToHide * 4; i++) { 1
        pixels.data[i] = 0; 2
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
    */
    /*
    var img = new Image();
    img.src = "img/cat.jpg";
    makeMoreRed(img, 50);
    */
    var img = new Image();
    img.src = "img/cat.jpg";
    makeNoisy(img, -50, 50);
});
