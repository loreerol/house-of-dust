"use strict";

let materialList = [
    "dust",
    "wood",
    "stone",
    "brick",
    "mud",
    "grass"
]

let locationList = [
    "on open ground",
    "amoung high mountains"
]

let lightingList = [
    "lit by natural light",
    "using candles"
]

let inhabitantsList = [
    "friends and enemies",
    "fisherman and families"
]

let count = 0;

function build(peram){
//create a div with a unique id
    var div = document.createElement('div');
    div.setAttribute("id", `${peram}`);
//create 4 paragraphs inside the div with uique ids
    let i = 0;
    let pId = 0;
    
    for(i = 0; i < 4; i++) { 
    var paragraph = document.createElement("p");
    paragraph.setAttribute("id", `${peram}${i}`);
    div.appendChild(paragraph);
}
    document.getElementById("poem").appendChild(div);
    let newParagraph = document.getElementById(pId);
    generate();
    
}

function generate(){
    //build the poem from randomly selected options
    let lineOne = `A house of ${materialList[Math.floor(Math.random()*materialList.length)]}`;
    let lineTwo = `${locationList[Math.floor(Math.random()*locationList.length)]}`;
    let lineThree = `${lightingList[Math.floor(Math.random()*lightingList.length)]}`;
    let lineFour = `inhabitated by ${inhabitantsList[Math.floor(Math.random()*inhabitantsList.length)]}`;
    
    let LineArray = [lineOne, lineTwo, lineThree, lineFour];
    
    //let i=0;
    //for (i = 0; i < 4; i++){
        //console.log(LineArray[i]);
      //  display(LineArray[i], i);
    //}
    display2(LineArray, 0);

}

function display2(lineArray, i) {
    let poemLines = lineArray[i];
    let l = 0;
    function func(){
        //console.log(`Starting func...`);
        if( l < poemLines.length) {
            let txt = poemLines[l];
            //console.log(`count = ${count}, l = ${l}`);
            document.getElementById(`${count}${i}`).innerHTML += txt;
            //console.log(`Wrote to DOM`);
            l++;
            setTimeout(func, 100);
        }
        else if (i < 3) {
            display2(lineArray, i+1);
        }else{
//            count+1;
//            build(count);
        }
        //let txt = poemLines.substring(l, 1); 
        
            
    }
    func();
    
    
    
}

function display(poemLines, i){
    console.log(`display is called with poemLines: ${poemLines}`);
    let l = 0;
    function func(){
        //console.log(`Starting func...`);
        if( l < poemLines.length) {
            let txt = poemLines[l];
            //console.log(`count = ${count}, l = ${l}`);
            document.getElementById(`${count}${i}`).innerHTML += txt;
            //console.log(`Wrote to DOM`);
            l++;
            setTimeout(func, 1000);
        }
        //let txt = poemLines.substring(l, 1); 
        
            
    }
    func();
//    count = count + 1;
//    build(count);
}


//function display(a){
//    let i = 0;
//    for(i = 0; i <4; i++){
//    let charArray = a[i].split("");
//        
//    console.log(charArray);
//    if(i <= charArray.length){
//            let txt = charArray.substring(0, i);
//            document.getElementById(`${count}${i}`).innerHTML = txt;
//            setTimeout("display()", 100);
//            i++;
//        }else{
//            clearTimeout(timer);
//                return false;
//        }
//    }

  
build(count);




    
    
    
//let poem = `A house of ${materialList[Math.floor(Math.random()*materialList.length)]} \n ${locationList[Math.floor(Math.random()*locationList.length)]} \n ${lightingList[Math.floor(Math.random()*lightingList.length)]} \n inhabitated by ${inhabitantsList[Math.floor(Math.random()*inhabitantsList.length)]}`


//document.addEventListener('DOMContentLoaded',function(event){
//  // array with texts to type in typewriter
//  var dataText = [ "Amsterdam.", "Full Service.", "Webdevelopment.", "Wij zijn Occhio!"];
//  
//  // type one text in the typwriter
//  // keeps calling itself until the text is finished
//  function typeWriter(text, i, fnCallback) {
//    // chekc if text isn't finished yet
//    if (i < (text.length)) {
//      // add next character to h1
//     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
//
//      // wait for a while and call this function again for next character
//      setTimeout(function() {
//        typeWriter(text, i + 1, fnCallback)
//      }, 100);
//    }
//    // text finished, call callback if there is a callback function
//    else if (typeof fnCallback == 'function') {
//      // call callback after timeout
//      setTimeout(fnCallback, 700);
//    }
//  }
//  // start a typewriter animation for a text in the dataText array
//   function StartTextAnimation(i) {
//     if (typeof dataText[i] == 'undefined'){
//        setTimeout(function() {
//          StartTextAnimation(0);
//        }, 20000);
//     }
//     // check if dataText[i] exists
//    if (i < dataText[i].length) {
//      // text exists! start typewriter animation
//     typeWriter(dataText[i], 0, function(){
//       // after callback (and whole text has been animated), start next text
//       StartTextAnimation(i + 1);
//     });
//    }
//  }
//  // start the text animation
//  StartTextAnimation(0);
//});
//

  
//function generate(){
//    let aMaterial = materialList[Math.floor(Math.random()*materialList.length)];
//    let aLocation = locationList[Math.floor(Math.random()*locationList.length)];
//    let aLighting = lightingList[Math.floor(Math.random()*lightingList.length)];
//    let aInhabitant = inhabitantsList[Math.floor(Math.random()*inhabitantsList.length)];
//    
//    let poem = `A house of ${aMaterial} \n ${aLocation} \n ${aLighting} \n inhabited by ${aInhabitant}`;
//    typeWriter(poem);  
//
//}

//function typeWriter(p) {
//        let i = 0;
//        function typeWriter(p) {
//        if (i < p.length) {
//        document.getElementById("poem").innerHTML += txt.charAt(i);
//        i++;
//        setTimeout(typeWriter, 50);
//  }
//}
    

//function display(){
//    var div = document.createElement('div');
//    var paragraph = document.createElement("p");
//    if (i < 3){
//        let t = "hi";
//        i++;
//        var poemText = document.createTextNode(t);
//    paragraph.appendChild(poemText);
//    div.appendChild(paragraph);
//    document.getElementById("poem").appendChild(div);    
//        display();
//    }else{
//        console.log("error")
//    }
//    
// 
//}
//
//display();

    



