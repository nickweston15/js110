/*
Problem
- Input: three integers
- Output: one of four strings, right, acute, etc. 
- right angle is 90 degrees, acute all less, obtuse one greater
- the arguments are in degrees and not floating point

Examples
- nothing learned

Data Structure
- try to use helper functions

Algorithm
- check if isValid using helper function that checks the two criteria
- if/esle comparing the other two criteria

*/

function isValid(angles) {
  const totalAngle = angles.reduce((total, angle) => total + angle);

  const allNonZero = angles.every(angle => angle > 0);

  return totalAngle === 180 && allNonZero;
}


function getTriangleType(angles) {
  if (angles.some(testRightTriangle)) {
    return "Right";
  } else if (angles.every(testAcuteTriangle)) {
    return "Acute";
  } else {
    return "Obtuse";
  }
}

function testRightTriangle(angle) {
  return angle === 90;
}

function testAcuteTriangle(angle) {
  return angle < 90;
}

function triangle(angle1, angle2, angle3) { 
  const angles = [angle1, angle2, angle3];

  if (isValid(angles)){
    return getTriangleType(angles);  
  } else {
    return "Invalid";
  }

}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"