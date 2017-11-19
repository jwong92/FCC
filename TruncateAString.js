// Truncate a String
//
// Method 1

function truncateString(str, num) {

    if (str.length < num || str.length === num){
    return str;
  }

  if (num <= 3) {
    return str.slice(0, num) + "...";
  }
    else if (str.length > num) {
      return str.slice(0, num-3) + "...";
  }
}

truncateString("Absolutely Longer", 2);

slice()// method that returns a new string at the indicated indexes, NOT inclusive of the last index
