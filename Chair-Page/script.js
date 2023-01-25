chair = document.getElementById("chair"); 
btn = document.getElementById("btn"); 
main = document.getElementById("main");
chair.classList.add("animate");
main.style.background= "linear-gradient(196deg, #f1a9a9, #e66767)";
let color = {
  "one": {
   "back":"linear-gradient(196deg, #f1a9a9, #e66767)",
   "btn": "#944852",
   "chair":"images/chair1.png"
  },
  "two":{
   "back":"linear-gradient(196deg, #4c4c4c, #262626)",
   "btn": "#1a1a1a",
   "chair":"images/chair2.png"
  },
  "three":{
   "back":  "linear-gradient(196deg, #8a9fb2, #5f7991)",
   "btn": "#40566e",
   "chair":"images/chair3.png"
  },
  "four":{
   "back":"linear-gradient(196deg, #97afc3, #6789a7)",
   "btn":  "#5e89b2",
   "chair":"images/chair4.png"
   },
  "five":{
   "back":"linear-gradient(196deg, #afa6a0, #8c7f76)",
   "btn": " #8c7f76",
   "chair":"images/chair5.png"
  }
}
changeBtns = document.getElementsByClassName("color-col"); 
changeBtnArr = Array.from(changeBtns);
changeBtnArr.forEach(element => {
  element.addEventListener("click",(e)=>{
   console.log(color[e.target.id]);
   chair.classList.remove("animate");
   main.style.background = color[e.target.id].back;
   btn.style.background = color[e.target.id].btn;
  chair.src= color[e.target.id].chair
  chair.classList.add("animate");
  })
 
});
text.innerText= "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, impedit exercitationem! Cum mollitia eius esse, natus ipsa earum harum soluta illo obcaecati dolore consequatur. Corporis hic totam nemo error ipsam.";
chair.addEventListener("animationend",()=>{
 chair.classList.remove("animate");
})
det.style.opacity ="0.5";
det= document.getElementById("det"); 
des= document.getElementById("desc"); 
text = document.getElementById("text");
det.addEventListener("click",()=>{
  des.style.opacity ="0.5";
  det.style.opacity ="1";
  text.innerText = "Lorem 2  ipsum dolor sit amet consectetur adipisicing elit. Id distinctio facilis quae minus aspernatur autem minima ad impedit, nisi voluptatibus numquam consectetur expedita reiciendis accusamus nostrum adipisci quibusdam dolore vero."
})
des.addEventListener("click",()=>{
  det.style.opacity ="0.5";
  des.style.opacity ="1";
    // des.style.color = "red";
    text.innerText= "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, impedit exercitationem! Cum mollitia eius esse, natus ipsa earum harum soluta illo obcaecati dolore consequatur. Corporis hic totam nemo error ipsam.";
  // console.log(des,det);
})
