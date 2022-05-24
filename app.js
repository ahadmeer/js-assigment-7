function bgcolor(){
    var container = document.getElementById("container")
    var bgcolorName = prompt("Enter BackGroundColor")
    container.style.backgroundColor = bgcolorName;
   
}


function textcolor(){
    var heading = document.getElementById("heading")
    var para = document.getElementById("para")
    var textcolorName = prompt("Enter text Color")
    heading.style.color = textcolorName;
    para.style.color = textcolorName;
}




function imgHandler(condition){
    var img = document.getElementById("img");
    console.log(condition)


    if(condition == "show"){
        img.style.display = "block";
    }
    else if(condition == "hide"){
        img.style.display = "none"
    }
    else if(condition == "small"){
        img.style.width = "200px"
        img.style.height = "200px"
    }
   else if(condition == "large"){
       img.style.width = "400px"
       img.style.height = "400px"
   }
   else{
       return;
   }
}


function imgChange(toggle, e) {
  console.log("helllloo", toggle, e);
  if (toggle == "on") {
    e.src = "bulbOn.jpg";
  } else {
    e.src = "bulbOff.jpg";
  }
}

function Color(){
    var userColor = prompt("enter color para1")
    var userColor1 = prompt("enter color para2")
    var userColor2 = prompt("enter color para3")
    var userColor3 = prompt("enter color para4")
    var elements=document.getElementsByTagName('p');
    elements[1].style.color = userColor;
    elements[2].style.color = userColor1;
    elements[3].style.color = userColor2;    
    elements[4].style.color = userColor3;
    console.log(userColor);
   
}

function onlytwopara(){
    var textcolor1 = prompt ("enter color para 1")
    var textcolor2 = prompt ("enter color para 2")
    var paras = document.getElementsByTagName("p")
    paras[5].style.color = textcolor1;
    paras[6].style.color = textcolor2;
}
