// generate random from given words

let random = Math.random();

let firtWord, secondWord, thirdWord;

if(random < 0.33){
  firstWord = "crazy";
}
else if(random < 0.66 && random >= 0.33){
    firtWord = "Amazing";
}
else{
    firtWord = "fire";
}


if(random < 0.33){
secondWord = "engine";
}
else if(random < 0.33 && random >= 0.66){
    secondWord = "garment";
}
else{
    secondWord = "garment";
}


if(random<0.33){
  thirdWord = "bros";
}
else if(random<0.66 && random>=0.33){
thirdWord = "limited";
}
else{
    thirdWord = "hub";
}


console.log(`${firtWord} ${secondWord} ${thirdWord}`)
console.log(random);