// function bubbleSort(arr){
//   for(var i = 0; i < arr.length; i++){
//     for(var j = i+1; j < arr.length; j++){
//       var a = arr[i];
//       var b = arr[j];
//       if(a > b){
//         arr[i] = b;
//         arr[j] = a;
//       }
//     }
//   }
//   return arr;
// }

function bubbleSort(arr){
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      if(compare(arr,j)){
        swap(arr, j);
      }
    }
  }
  return arr;
}

function swap(array, j){
  var old = array[j];
  var newVal = array[j+1];
  array[j] = newVal;
  array[j+1] = old
}

function compare(arr, j){
  return arr[j] > arr[j+1];
}

//[2,1,3]


//[1,3,4,0,5,7,2]
//[1,0,4,2,5,7,3]
//[1,0,2,3,5,7,4]

//[2,3,1,4,5,6,7]
//[2,1,3,4,5,6,7]
//[1,2,3,4,5,6,7]





//Brittany's solution:
var counter = 0;

function bubbleSort(array){
    var swap;
    do {
        swap = false;
        for (var i=0; i<array.length-1; i++){
            if (comparison(array,i)){
                swapFunc(array, i)
                swap = true;
            };
        };
    } while (swap);
    console.log(counter)
    return array;
}

function swapFunc(array, i){
    var temp = array[i];
    array[i] = array[i+1];
    array[i+1] = temp;
    counter++;
}

function comparison(array, i){
    return array[i] > array[i+1]
}

console.log(counter)
