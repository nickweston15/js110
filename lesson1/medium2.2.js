/*
Problem
- Input: 3 numbers
- Output: one of 4 strings, equilateral, iso....
- Equilateral: All three sides are of equal length.
- Isosceles: Two sides are of equal length, while the third is different.
- Scalene: All three sides are of different lengths.
- the sum of the length of the two shortest sides must be greater than the
length of the longest side
- every side must be greater than 0

Examples
- Numbers can be floating, and 0

Data Structure
- 

Algorithm
- Put the 3 number arguments into an array
- Check if any are less than or equal to 0 and return invalid
- Check if the largest value is greater than the two small values and
return invalid if so
  - sort array and then check if index 0 + 1 > index 2
- check if all numbers are equal and return equilateral
  = else check if all different and return scalene
  - else return isoceles

*/

function triangle(side1, side2, side3) {
  let sidesArray = [side1, side2, side3];

  if (sidesArray.includes(0)) {
    console.log("Invalid");
    return "Invalid";
  }

  let sortedArray = sidesArray.sort()

  if (sortedArray[0] + sortedArray[1] <= sortedArray[2]){
    console.log("Invalid");
    return "Invalid";
  }

  if (side1 === side2 && side1 === side3) {
    console.log("Equilateral");
  } else if (side1 !== side2 && side1 !== side3) {
    console.log("Scalene");
  } else {
    console.log("Isoceles");
  }
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"