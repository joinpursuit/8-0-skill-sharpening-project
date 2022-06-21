  //create an arr to work with
  let arr = [max, min]
  //first sort the numbwers, then reverse them using methods.
  arr.sort().reverse()
  console.log(arr)
  
  
  //find only odd numbers
  let odd =[];
  let even=[];
  for( let i=0; i< arr.length; i++){
    if(arr[i]%2==0){
      odd.push(i)
    }else {
   even.push(i);
    }
  }
  console.log(odd)