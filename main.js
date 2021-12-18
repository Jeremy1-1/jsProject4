//  code for the "click me" button

let button = document.getElementById("btn");
let bodyElement = document.getElementById("body")


button.addEventListener("click", function(){
     let colors = ["red", "blue", "green", "orange"];
     let colors2 = ["lightgoldenrodyellow", "lawngreen", "azure", "thistle"];
     let randomTexts = ["How are you?", "Jeremy is awesome.", "CodeImpact is Super fun.", "God Loves Me so much."]
     let headingElement = document.getElementById("header");

    // document.location.reload();
     headingElement.innerText = randomTexts[Math.floor(Math.random()*randomTexts.length)];
     headingElement.style.color = colors2[Math.floor(Math.random()*colors2.length)];
     bodyElement.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
})

// code for the "Reload" button

let reloadButton = document.getElementById("btn2");

reloadButton.addEventListener("click", function(){
     document.location.reload();
})