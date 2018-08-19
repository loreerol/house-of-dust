"use strict";

let materialList = [
    "dust",
    "wood",
    "stone",
    "brick",
    "mud",
    "grass",
    "glass",
    "metal",
    "bone",
    "sand",
    "leaves",
    "clay"
]

let locationList = [
    "on open ground",
    "amoung high mountains",
    "on flat land"
]

let lightingList = [
    "lit by natural light",
    "using candles"
]

let inhabitantsList = [
    "friends and enemies",
    "fisherman and families"
]

let count = 1;

function build(peram){
//create a div with a unique id
    var div = document.createElement('div');
    div.setAttribute("id", `${peram}`);
//create 4 paragraphs inside the div with unique ids
    let i = 0;
    let pId = 0;
    
    for(i = 0; i < 4; i++) { 
    var paragraph = document.createElement("p");
    paragraph.setAttribute("id", `${peram}${i}`);
    div.appendChild(paragraph);
}
    let poemElement = document.getElementById("poem");
    poemElement.insertBefore(div, poemElement.childNodes[0]);
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
    display2(LineArray, 0);

}

function display2(lineArray, i) {
    let poemLines = lineArray[i];
    let l = 0;
    function func(){
        if( l < poemLines.length) {
            let txt = poemLines[l];
            document.getElementById(`${count}${i}`).innerHTML += txt;
            l++;
            setTimeout(func, 70);
        }
        else if (i < 3) {
            display2(lineArray, i+1);
        }else{
            count++;
            build(count);
        }  
    }
    func();  
}

function display(poemLines, i){
    console.log(`display is called with poemLines: ${poemLines}`);
    let l = 0;
    function func(){
        if( l < poemLines.length) {
            let txt = poemLines[l];
            document.getElementById(`${count}${i}`).innerHTML += txt;
            l++;
            setTimeout(func, 70);
        }        
    }
    func();
}

build(count);

