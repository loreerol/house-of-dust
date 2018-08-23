"use strict";"use strict";

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
    "discarded clothing",
    "broken dishes",
    "steel"
]

let locationList = [
    "on open ground",
    "among high mountains",
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
    "in Michigan",
    "in a place with both heavy rain and bright sun",
    "by an abandoned lake",
    "in a deserted church",
    "in a metropolis",
    "underwater",
    "in dense woods",
    "in a deserted factory",
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
    "vegetarians",
    "children and old people",
    "French and German speaking people",
    "people who sleep almost all the time",
    "various birds and fish",
    "lovers",
    "horses and birds",
    "people who speak many languages and wear little or no clothing",
    "people who love to read",
    "little boys",
    "people who enjoy eating together",
    "people who eat a great deal",
    "people who sleep very little",
    "collectors of all types",
    "friends",
    "very tall people"
]


let count = 1;


//I need to generate the areas for my content to live in
function build(peram){
//create a parent div for flexbox 
    var parentDiv = document.createElement('div');
    parentDiv.setAttribute("id", "parent");
//create a div for the poem to live in
    var poemDiv = document.createElement('div');
    poemDiv.setAttribute("id", `${peram}`);
    
//create an aside for the twitter icon to live in
    var twitter = document.createElement('aside');
    twitter.setAttribute("id", `t${peram}`);
    twitter.setAttribute("class", "hidden");
//add  button
    var printBtn = document.createElement('button');
    printBtn.setAttribute("onclick", `twitClick(${peram})`);
    printBtn.setAttribute("id", `p${peram}`);
    printBtn.setAttribute("class", "button");
// add print icon
    var print = document.createElement('i');
    print.setAttribute("class", "fa fa-print");
    
    printBtn.appendChild(print);
    twitter.appendChild(printBtn);
    
//apend the two child elements to parent div
    parentDiv.appendChild(poemDiv);
    parentDiv.appendChild(twitter);
//create 4 paragraphs inside the div with unique ids
    let i = 0;
    let pId = 0;
    
    for(i = 0; i < 4; i++) { 
    var paragraph = document.createElement("p");
    paragraph.setAttribute("id", `${peram}${i}`);
    poemDiv.appendChild(paragraph);
}
//create an aside for the twitter button to live in

    let poemElement = document.getElementById("poem");
    poemElement.insertBefore(parentDiv, poemElement.childNodes[0]);
    let newParagraph = document.getElementById(pId);
    
    generate();
    
}

function generate(){
    //build the poem from randomly selected options
    let lineOne = `A house of ${materialList[Math.floor(Math.random()*materialList.length)]} `;
    let lineTwo = `${locationList[Math.floor(Math.random()*locationList.length)]} `;
    let lineThree = `${lightingList[Math.floor(Math.random()*lightingList.length)]} `;
    let lineFour = `inhabited by ${inhabitantsList[Math.floor(Math.random()*inhabitantsList.length)]} `;
    
    
    let LineArray = [lineOne, lineTwo, lineThree, lineFour];
    display(LineArray, 0);

}

function display(lineArray, i) {
    let poemLines = lineArray[i];
    let l = 0;
    let twitterZone = document.getElementById(`t${count}`);
    
    function func(){
        if( l < poemLines.length) {
            let txt = poemLines[l];
            document.getElementById(`${count}${i}`).innerHTML += txt;
            l++;
            setTimeout(func, 70);
        }
        else if (i < 3) {
            display(lineArray, i+1);
        }else{
             twitterZone.classList.remove("hidden");
            count++;
            build(count);
        }  
    }
    func();  
}

function twitClick(peram){
    var text = document.getElementById(peram).textContent;
    console.log(text);
    
    let twitterWindow = window.open(`https://twitter.com/intent/tweet?text=${text} ` + document.URL, 'twitter-popup', 'height=350,width=600');
  if(twitterWindow.focus) { twitterWindow.focus(); }
    return false;
    
}



build(count);
