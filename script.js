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
let eleven = document.querySelector(".image-demon")
let resultBtn = document.querySelector(".result-button")
let flash=0;
let thor=0;
let blackFlash=0;
let maxDillon=0;
let demon=0;
eleven.style.display = "none";
resultBtn.style.display = "none";
seven.style.display = "none";
eight .style.display = "none";
nine.style.display = "none";
ten.style.display = "none";
pageThree.style.display = "none";
pageTwo.style.display = " none";
pageOne.style.display = "none";
result.style.display = "none";

buttonOne.addEventListener("click",function(){
    
    pageOne.style.display = "block";
    pageTwo.style.display = "none";
    title.style.display = "none";
    pageThree.style.display = "none";
})

sonic.addEventListener("click",function(){
    flash += 1;
    demon += 1;
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
    demon+=1;
     pageThree.style.display = "block";
    pageTwo.style.display = "none";
    pageOne.style.display = "none";
})
 
superHero.addEventListener("click" ,function(){
    flash+= 1;
    thor+=1;
    result.style.display = "block";
    resultBtn.style.display = "block";
})
villan.addEventListener("click",function(){
    blackFlash += 1;
    demon +=1;
    maxDillon += 1;
    result.style.display = "block";
    resultBtn.style.display = "block";
}) 
resultBtn.addEventListener("click" , function (){
    if (flash >= thor && flash >= blackFlash && flash >=  maxDillon && flash >= maxDillon){
    eight.style.display = "block";
}
    else if (thor >=flash && thor >= blackFlash && thor >= maxDillon && thor >= demon){
    seven.style.display = "block";
} 
    else if (blackFlash >= thor && blackFlash >= maxDillon && blackFlash >= flash && blackFlash >= demon){
    nine.style.display = "block";
}
    else if (maxDillon >= thor && maxDillon >= flash && maxDillon >= blackFlash){
    ten.style.display = "block";}
    else if (demon >= thor && demon >= maxDillon && demon >= flash && demon >= blackFlash) {
        eleven.style.display = "block"
    }
});