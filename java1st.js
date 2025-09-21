//alert("hello king");
let x=20;
//alert(x);
let p=90;
console.log(p);
console.log(typeof(p));
let y=true;
console.log(y);
console.log(typeof y);
let a="abhi";
let b='singh';
console.log(a+" "+b);
console.log("hey,my name is "+a+" "+b);
console.log(`hey,my name is ${a} ${b}`);
const name1=`hey,my name is ${a} ${b}`;
console.log(name1);


//typeconversion
let f=56;
console.log(f);
console.log(typeof f);
console.log(typeof String(a));

let g=20;
g=g.toString();
console.log(g);
console.log(typeof g);
console.log(typeof a.toString());

//string
let s="my name is lakhan";
console.log(s[0]);
console.log(s.indexOf("n"));
console.log(s.indexOf("a"));
console.log(s.lastIndexOf("a"));
console.log(s.endsWith("lakhan"));
console.log(s.endsWith("is"));
console.log(s.includes("name"));//it search name in entire string
console.log(s.substring(0,7));//givr string from index 0 to 6(starting and end position)
console.log(s.slice(0,7));//same as substirng but difference we study later
console.log(s.split(" "));//it split where it found space
console.log(s.split("a"));
console.log(s.replace("is","was"));
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substr(3,4));//we give starting position and length
console.log(s.substring(3,4));




let heading=document.getElementById("myheading");
//heading.innerText=("lolu lalit");
heading.innerText=s;
heading.style.color="red";