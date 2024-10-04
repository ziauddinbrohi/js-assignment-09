// question no1

var arr = [5, 8, 4, 6];

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      // Swap the elements
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);


// question NO.2

var arr = [1, 2, 3, 5];
var n = 5; 

var expectedSum = (n * (n + 1)) / 2;

var actualSum = 0;
for (var i = 0; i < arr.length; i++) {
  actualSum += arr[i];
}


var missingNumber = expectedSum - actualSum;

console.log("The missing number is: " + missingNumber);