/*
Problem
- Input: int
- Output: array of ints

- Rules:
  - you should make as many passes as you have lights
  - lights can be on or off
  - all lights start off
  - only toggle a light once per pass

- Questions:
  - 0 lights?

Examples
- Interestingly, 1 is always on
- increments of 3, 5, 7, etc. increasing by 2 is a pattern?

Data Structure
- holding object to monitor state

Algorithm
- create an object and set keys as ints from 1 to count
  - set values as "off" for everything
- set count to 1
- WHILE count is less than length of entries
  - iterate over the array of entries
  - IF index % count === 0
    - toggle value
  - count += 1
- filter entries array to only keys that have value of on
- return the array of keys


*/

function initializeLights(count) {
  let lights = [];

  for (let switchNum = 0; switchNum < count; switchNum += 1) {
    lights.push(false);
  }

  return lights;
}

function toggleLights(lights, round) {
  return lights.map((light, index) => {
    return (index + 1) % round === 0 ? !light : light;
  });
}

function lightsOn(count) {
  let lights = initializeLights(count);

  for (let switchNum = 1; switchNum <= count; switchNum += 1) {
    lights = toggleLights(lights, switchNum);
  }

  let result = [];
  for (let idx = 0; idx < count; idx += 1) {
    if (lights[idx]) {
      result.push(idx + 1);
    }
  }

  return result;
}


console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]