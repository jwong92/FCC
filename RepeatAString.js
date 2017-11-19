// Repeat a String
//
// Method 1

function repeatAString (str, num) {
var repeatedStr = "";

if (num <= 0) {
return "";
}

if (num > 0) {
  for (var count=0; count<=num; count++) {
    repeatedStr += str;
  }
}
return repeatedStr;
}

repeatAString("abc", 3)

// method 2

function repeatAString (str, num) {

  if (num <= 0){
    return "";
  }

  if (num > 0) {
    return str.repeat(num);
  }
}

repeatAString ("abc", 3)
