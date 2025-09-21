const input=document.getElementById("numofword");
const container=document.querySelector(".container");

/*const getData=()=>{
  console.log(input.value);
  
};
*/

const generateword = (n)=>{
  let text = "";
  const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
  for(let i=0;i<n;++i)
  {
    const random = (Math.random()*25).toFixed(0);
    text=text+letter[random];
  }
  return text;
}
//console.log(generateword(10));

let numofword;
const generatePara=()=>{
  
  numofword=Number(input.value);

  const para =document.createElement("p");

  let data=" ";

  for(let i=0;i<numofword;i++)
  {
    const randomnumber = (Math.random() * 15).toFixed(0);
   // data += generateword(randomnumber);
    data += generateword(randomnumber).toLowerCase();//for lower word
      data += " ";
    
  }
 // console.log(data);

  para.innerText = data;

  para.setAttribute("class","paras");

  container.append(para);
};