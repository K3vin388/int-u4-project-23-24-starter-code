//@ts-nocheck
let title = document.querySelector(".title");
let pageOne = document.querySelector(".page-one");
let pageTwo = document.querySelector (".page-two");
let result = document.querySelector(".result");
let buttonOne = document.querySelector(".button-one");
let sonic = document.querySelector(".image-one");
let lightning = document.querySelector(".image-two");
let red = document.querySelector(".image-three");
let blue = document.querySelector(".image-four");
let pageThree = document.querySelector(".page-three");
let superHero = document.querySelector(".image-five");
let villan = document.querySelector(".image-six");
let seven = document.querySelector(".image-seven");
let eight = document.querySelector(".image-eight");
let nine = document.querySelector(".image-nine");
let ten = document.querySelector(".image-ten");
let flash=0;
let thor=0;
let blackFlash=0;
let maxDillon=0;


seven.style.display = "none";
eight .style.display = "none";
nine.style.display = "none";
ten.style.display = "none";
pageThree.style.display = "none";
pageTwo.style.display = " none";
pageOne.style.display = "none";
result.style.display = "none";

buttonOne.addEventListener("click",function(){
    
    superSpeed = true;
    controlLighting = true;
    console.log(superSpeed);
    pageOne.style.display = "block";
    pageTwo.style.display = "none";
    title.style.display = "none";
    pageThree.style.display = "none";
})

sonic.addEventListener("click",function(){
    flash += 1;
    blackFlash +=1;
    pageTwo.style.display = "block";
    pageOne.style.display = "none";
})
lightning.addEventListener("click" , function(){
    thor +=1;
    maxDillon +=1;
    pageTwo.style.display = "block";
    pageOne.style.display = "none";
})
blue.addEventListener("click" , function(){
    maxDillon+= 1;
    blackFlash+= 1;
    pageThree.style.display = "block";
    pageTwo.style.display = "none";
    pageOne.style.display = "none";
    
})
red.addEventListener("click" ,function (){
    flash+= 1;
    thor+=1;
     pageThree.style.display = "block";
    pageTwo.style.display = "none";
    pageOne.style.display = "none";
})
 
superHero.addEventListener("click" ,function(){
    flash+= 1;
    thor+=1;
    result.style.display = "block";
})
villan.addEventListener("click",function(){
    blackFlash+= 1;
    maxDillon+= 1;
    result.style.display = "block";
})