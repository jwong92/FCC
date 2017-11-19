function bouncer(arr) {
return arr.filter(Boolean);
}

bouncer([10, false, null, 0, "jessica", NaN]);

//second solution


function bouncer(arr) {

var newArr = arr.filter(function(arr) {
  return (arr !== false && arr !== "" && arr !== null && arr !== 0 && isNaN(arr) === false);
});

return newArr;
}

bouncer([7, "ate", "", false, 9, NaN]);
