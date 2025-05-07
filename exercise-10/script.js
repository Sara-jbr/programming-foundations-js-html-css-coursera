// write your code here
// --- Variables ---
var x = 3;
var y = 4;
var z = x + 2 * y;
print("x: " + x);
print("y: " + y);
print("z: " + z);


// --- Variable Overwrite Example ---
var x2 = 3;
var y2 = 2;
y2 = x2;
print("x2: " + x2);
print("y2 (after y2 = x2): " + y2);


// --- Create and Display Image ---
var image = new SimpleImage("chapel.png");
print(image);


// --- Using Methods ---
print("Image width: " + image.getWidth());
print("Image height: " + image.getHeight());

var pixel = image.getPixel(0, 0);
print("Red at (0,0): " + pixel.getRed());
print("Green at (0,0): " + pixel.getGreen());
print("Blue at (0,0): " + pixel.getBlue());


// --- Function: Square ---
function square(num) {
    return num * num;
}

var squared = square(4);
print("square(4): " + squared);
print("square(5): " + square(5));
print("square(10): " + square(10));


// --- Extra Challenge: Cube ---
function cube(num) {
    return num * num * num;
}

print("cube(2): " + cube(2));
print("cube(3): " + cube(3));


// --- Custom Function: Add Three Numbers ---
function addThree(a, b, c) {
    return a + b + c;
}
print("addThree(1, 2, 3): " + addThree(1, 2, 3));


// --- Custom Function: Concatenate Strings ---
function joinStrings(str1, str2) {
    return str1 + str2;
}
print("joinStrings('Hello', 'World'): " + joinStrings("Hello", "World"));


// --- Custom Function: Print Image Size ---
function printImageSize(img) {
    print("Image Size: " + img.getWidth() + "x" + img.getHeight());
}
printImageSize(image);

