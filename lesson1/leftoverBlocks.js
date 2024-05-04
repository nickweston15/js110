function calculateLeftoverBlocks(int) {
  let leftoverBlocks = int;
  let currentLayer = 0;
  let requiredBlocksInNextLayer = ((currentLayer + 1) ** 2);

  while (leftoverBlocks >= requiredBlocksInNextLayer) {
      leftoverBlocks -= requiredBlocksInNextLayer;
      currentLayer += 1;
      requiredBlocksInNextLayer = ((currentLayer + 1) ** 2);
  }

  return leftoverBlocks;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true