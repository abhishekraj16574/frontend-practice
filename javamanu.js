/*
const arr= document.body.children;
const newArr = Array.from(arr);
for(let i=0;i<newArr.length;i++)
{
  console.log(newArr[i]);
}
  */
 //console.log(thisone);
 const thisone="abhi";

 console.log(thisone);

 console.log(document.getElementById("thisone"));

 const thisone1=document.getElementsByClassName("okay");

 console.log(thisone1[0]);

 console.log(document.getElementsByName("email"));

 const a=document.getElementsByTagName("span");

//a[0].textContent="newone";
a[0].innerHTML = '<span class="myclass">NICE</span>'
a[0].style.backgroundColor="navy";
a[0].style.color="white";
 console.log(a[0]);

const mybtn = document.getElementById("mybtn");
 mybtn.style.backgroundColor="red";
 mybtn.style.color="white";
 mybtn.style.border="none";
 mybtn.style.padding="2vmax 4vmax";
 mybtn.style.cursor="pointer";

 const btn = document.querySelector(".okay");

 btn.innerText="none";

 console.log(mybtn.getAttribute("id"));

 mybtn.setAttribute("class","thisisbtn");//use for set attribute 


 //for create new element
 const h2 = document.createElement("h2");
 h2.innerText="hio";
 document.body.append(h2);//for create in last 
 const h3 = document.createElement("h3");
 h3.textContent="lodu lalit";
 document.body.prepend(h3);//for create in starting

 //in fxn we use append for create text 


 //iwe simply write () when call in html it is only to understand that it is a function but in JS wer simply write function name only not write "()"     ---------example


 //mybtn.onclick=myfun;
 function myfun()
 {
  const h3=document.createElement("h3");
  h3.innerText="hello jii";
  document.body.append(h3);
 }
// myfun();
//we call in html if click button is click then it work




const mybtns = document.querySelectorAll("button");
//mybtns[1].innerText="sada"
mybtns[1].onclick=deleteheading;
function deleteheading()
{
 const h3=document.querySelector("h3");
 h3.remove();
 
}