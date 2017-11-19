Confirm the Ending

function confirmEnding(str, target) {
  var strLength = "";

strLength = str.substr(-target.length, target.length);
if (strLength === target) {
  return true;
}
else return false;
}

confirmEnding("Conner", "ner")
