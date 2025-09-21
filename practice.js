let icecream=10;
console.log("icecream is good");

//if else loop


//let abhi=Number(prompt("type a number"));


/*
if(abhi===10)
{
  console.log("icecream price is rs 10");
}
else if(abhi===30)
{
  console.log("cream price is rs 30");
}
else{
  console.log("icecream is random");
}
*/
/*
let abhi1=(prompt("type a number"));
if(abhi1==10)
{
  console.log("icecream price is rs 10");
}
else if(abhi1==30)
{
  console.log("cream price is rs 30");
}
  */

//switch statement
/*
switch (abhi) {
  case 10:
    console.log("icecream price is rs 10");
    break;

    case 30:
      console.log("cream price is rs 30");
    break;

  default:
    console.log("icecream is random");
    break;
}
    */
   /*
   for(let i=0;i<10;i++)
   {
    console.log(i);
   }

   let z=0;
   while(z<10)
   {
    console.log(z);
    z++;
   }
    */

   // Array-----------
   let arr=[1,2,4,"abhi"];
   console.log(arr);
   let arr1=[];
   arr1[0]=1;
   arr1[2]=3;
   arr1[3]=4;
   arr1[4]=5;
   console.log(arr1);

   let arr3=[2,4];
   arr3[0]=12;//value updated
   arr3[1]=25;
   console.log(arr3);

   let arr4=new Array(1,2,3,4);
   console.log(arr4);

   let arr5=new Array(4);
   console.log(arr5);

   let arr6=new Array(1,2,4,6,7,8,9);
   arr6.push(10);
   console.log(arr6);
   arr6.pop();
   console.log(arr6);
   arr6.shift();//remove 1st element
   console.log(arr6);
   arr6.unshift(100);//add at 1st element
   console.log(arr6);
   arr6.splice(2,5);//delete element from 2 to 5 index
   console.log(arr6);
   console.log(arr6.length);
   arr6.reverse();
   console.log(arr6);
    let arr7=[1,2,3,4,5,6,7,8,9];
   let newarray=arr7.slice(2,6);//give new array 
   console.log(arr7);
   console.log(newarray);
   console.log(arr7.includes(4));//check element in array


   let array=[];
   for(let i=0;i<10;i++)
   {
    array[i]="abhi";
   }
   console.log(array);

   const array1=[];
   array1.push(20);
   //array1=[20];   show error because of const keyword array will not change but by the help of method we caan change the data of array on array
   console.log(array1);


   //array and object is same in js difference is that ....we have to give index in object 
   const obj={
    0:"abhi",
    1:"singh",
   };
   console.log(obj);

   /*--------------FUNCTION------------------*/

   let myfun=function(a,b,c)
   {
    let result=(a+b+c);
    console.log(result);
   };
   myfun(10,20,30);

   function myfun1(a,b,c)
   {
    let result=(a+b+c);
    console.log(result);
   };
 // myfun1(10,20,30);


   function myfun2(d,e,f)
   {
    let result=(d+e+f);
    console.log(result);
    console.log(`my income is &${myfun1(30, 40, 50)}`);
   }
   myfun1(10,1000,30);

