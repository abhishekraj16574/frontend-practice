const myfun= function(a,b)
{
  console.log(a+b);
};
myfun(2,4);

//arrow fxn
const myfun1= (a,b) =>
{
  console.log(a+b);
};
myfun1(4,4);

//array method
const arr=[1,2,3,4,5,6,7,8];
console.log(arr);
const myfun2=(value,index)=>
{
  if(value===6)
  {
    console.log("6 Exist");
  }
};
arr.find(myfun2);//find fun always iterate from starting.
arr.find((value,index)=>{
  if(value===5){
    console.log("5 exist");
  }
  
});

// another method
const result=arr.find((value,index)=>{
  if(value===5){
    return value;
  }
  
});
console.log(result);
//so  find give only one output so if we want output in array then we have to use filter function.

const result1=arr.filter((index,value)=>{
   if(value>3){
   // console.log(value);
   return value;
   }
});
console.log(result1);

//every fxn is like boolen but normally check every element

const result3=arr.every((value,index)=>{
   return value > 4;
});
console.log(result3);

//for check any one we use some fxn

const result4=arr.some((value,index)=>{
  return value > 4;
});
console.log(result4);

//for of loop

for(const value of arr)
{
  console.log(value);
}


for(let value of arr)//use let to change value
  {
    value=value+3;
    console.log(value);
  }

  //another method for iteration
  arr.forEach((value,index)=>{
      console.log(value);
  })

  //forEach fxn cant return while MAP fxn can return array

  const result5=arr.forEach((value,index)=>{
    return value;
  });
  console.log(result5);
 //MAP fxn
  const result6=arr.map((value,index)=>{
    return value;
  });
  console.log(result6);
  // REDUCE Fxn
  const result7=arr.reduce((previousvalue,value,index)=>{
    console.log(index);//its index started from index 1 and it store previous value of index 0 and them iterate.
    return previousvalue+value;
  });
  console.log(result7);
