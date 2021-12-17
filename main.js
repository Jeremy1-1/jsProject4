let button = document.getElementById("btn");
let bodyElement = document.getElementById("body")


button.addEventListener("click", function(){
     let colors = ["red", "blue", "green", "orange"];
     let randomTexts = ["How are you?", "Jeremy is awesome.", "CodeImpact is Super fun.", "God Loves Me so much."]
     let headingElement = document.getElementById("header");

    // document.location.reload();
     headingElement.innerText = randomTexts[Math.floor(Math.random()*randomTexts.length)];
     bodyElement.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
})