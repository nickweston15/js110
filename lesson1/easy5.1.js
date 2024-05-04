/*
Problem
- Input: floating point number between 0 - 360
- Output: string representing the angle in degrees, mins, and seconds
- how to translate a degree to min or sec

Examples
- 0 - 360 is inclusive
- 60 mins in a degree, 60 seconds in a min

Data Structure
- string interpolation of 3 variables, manipulated by helper functions?

Algorithm
- create a degree var that is equal to the floor of given degree
- calculate the hours using a formula with the remainder and save to a var
- do the same with the mins
- concat the 3 vars and log them

*/

// LS solution

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  let degreesInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) * 
    SECONDS_PER_DEGREE
  );

  console.log(String(degreesInt) + DEGREE + padZeroes(minutes) + "'" +
                                            padZeroes(seconds) + '"'
  );
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ("0" + numString) : numString;
}


// My solution
/*
function dms(num) {
  let degree = Math.floor(num);

  let degRemainder = num - Math.floor(num);
  let hour = Math.floor(60 * degRemainder);

  let hrRemainder = (60 * degRemainder) - hour;
  let min = hrRemainder * 10;

  console.log(`${degree}°${hour}'${min}"`)
}
*/


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"