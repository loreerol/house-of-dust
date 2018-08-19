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
    "clay",
    "straw",
    "plastic",
    "roots",
    "discareded clothing",
    "broken dishes",
    "steel"
]

let locationList = [
    "on open ground",
    "amoung high mountains",
    "on flat land",
    "in a desert",
    "on a mountain",
    "in a cave",
    "on an island",
    "in a green, mossy terrain",
    "by the sea",
    "in an overpopulated area",
    "in heavy jungle undergrowth",
    "among other houses",
    "in a cold windy climate",
    "in a hot climate",
    "in michigan",
    "in a place with both heavy rain and bright sun",
    "by an abandoned lake",
    "in a deserted church",
    "in a metropolis",
    "underwater",
    "in dense woods",
    "deserted factory",
    "by a river"
]

let lightingList = [
    "lit by natural light",
    "using candles",
    "using all available lighting",
    "using electricity"
]

let inhabitantsList = [
    "friends and enemies",
    "fisherman and families",
    "vegitarians",
    "children and old people",
    "french and german speaking people",
    "people who sleep almost all the time",
    "various birds and fish",
    "lovers",
    "horses and birds",
    "people who speak many languages and wear little or no clothing",
    "people who love to read",
    "little boys",
    "people who enjoy eatting together",
    "people who eat a great deal",
    "people who sleep very little",
    "collectors of all types",
    "friends",
    "very tall people"
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
//create an aside for the twitter button to live in

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

