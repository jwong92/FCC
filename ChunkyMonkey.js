Chunky Monkey

function chunkArrayInGroups(arr, size) {
var newArray = [];
var intArray = [];

  for (var i=0; i<arr.length; i+=size) {
    intArray = arr.slice(i, i+size);
    newArray.push(intArray);
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 3);
