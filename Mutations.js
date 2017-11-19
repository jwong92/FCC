//Mutations

//Solution 1

function mutation(arr) {

var test = arr[1].toLowerCase();
var target = arr[0].toLowerCase();

for (var i=0; i<test.length; i++) {
  if (target.indexOf(test[i]) === -1)
    return false;
  }
   return true;
}

mutation ("Hello", "Hey");

//Solution 2

function mutation (arr) {
  return array[1].toLowerCase().split('').every(function(letter) {
    return array[0].toLowerCase().indexOf(letter) != -1)
  }
};
