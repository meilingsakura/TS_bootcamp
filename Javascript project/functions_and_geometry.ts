//Exercise 1: Functions and geometry



function circleArea(radius: number): number {
    return Math.PI * radius * radius ;
}



const perimeterOfRectangle = function(height: number, lenght: number): number{
    return 2 * (lenght + height);

}

const volumeCube = (L: number): number => L**3;

console.log("Circle Area: " + circleArea(2));
console.log("Rectangle Perimeter: " + perimeterOfRectangle(2,3));
console.log("Cube Volume: " + volumeCube(2));