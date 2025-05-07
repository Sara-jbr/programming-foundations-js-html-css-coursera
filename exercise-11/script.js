// Exercise 1 - Make a Phrase From Three Words
function phrase3words(value1, value2, value3) {
    var answer = value1 + " " + value2 + " " + value3;
    return answer;
}

var result1 = phrase3words("smile", "at", "everyone");
print(result1);
var result2 = phrase3words("everyone", "wave", "back");
print(result2);
var result3 = phrase3words("coding", "is", "fun");
print(result3);


// Exercise 2 - Format a Name
function reformatName(first, last) {
    var answer = last + ", " + first;
    return answer;
}

var result = reformatName("Susan", "Rodger");
print(result);
result = reformatName("Robert", "Duvall");
print(result);


// Exercise 3 - Number of Pixels in an Image
function numberPixels(namefile) {
    var someImg = new SimpleImage(namefile);
    var height = someImg.getHeight();
    var width = someImg.getWidth();
    var totalPixels = width * height;
    return totalPixels;
}

var result = numberPixels("chapel.png");
print(result);
result = numberPixels("dinos.png");
print(result);


// Exercise 4 - Perimeter of an Image
function perimeter(imageName) {
    var someImg = new SimpleImage(imageName);
    var width = someImg.getWidth();
    var height = someImg.getHeight();
    var perim = 2 * (width + height);
    return perim;
}

print(perimeter("rodger.png"));


// Exercise 5 - Print the RGB values of a Pixel
function printPixel(nameImage, xpos, ypos) {
    var someImg = new SimpleImage(nameImage);
    var pixel = someImg.getPixel(xpos, ypos);
    print("red is " + pixel.getRed());
    print("green is " + pixel.getGreen());
    print("blue is " + pixel.getBlue());
}

printPixel("drewgreen.png", 10, 10);
printPixel("drewgreen.png", 250, 500);


// Exercise 6 - Sum of the RGB values for a Pixel
function sumPixel(nameOfImage, xpos, ypos) {
    var someImg = new SimpleImage(nameOfImage);
    var pixel = someImg.getPixel(xpos, ypos);
    var sum = pixel.getRed() + pixel.getGreen() + pixel.getBlue();
    return sum;
}

var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
answer = sumPixel("drewgreen.png", 10, 10);
print(answer);
