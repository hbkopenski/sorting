function bubbleSort(arr){
  for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){

    }
    swap(arr[i], arr[i++]);
  }
  return arr;
}

function swap(arr){
  var a = arr[0];
  var b = arr[1];
  if(compare(a,b)){
    arr[0] = b;
    arr[1] = a;
  }
  return arr;
}

function compare(a,b){
  return a > b;
}

//[2,3,4,1,5,7,6]
//[2,3,1,4,5,6,7]
//[2,1,3,4,5,6,7]
//[1,2,3,4,5,6,7]
