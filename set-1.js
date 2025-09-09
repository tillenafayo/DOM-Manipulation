console.dir(document)

//Changing the font size, color and family of the article paragraphs using the select dropdown menus

let textSize = document.querySelector("#font-size-settings");
let textColor = document.querySelector("#font-color-settings");
let textFamily = document.querySelector("#font-family-settings");
let articleParagraphs = document.querySelectorAll(".article-section p");
let para1 = document.querySelector("#para1");
let defaultFontSize = window.getComputedStyle(para1).fontSize; //getting the default font size of the paragraphs from the system
let defaultFontColor = window.getComputedStyle(para1).color;
let defaultFontFamily = window.getComputedStyle(para1).fontFamily;

//let stylePara = window.getComputedStyle(articleParagraphs);

//adding event listeners to the select dropdown menus

textSize.addEventListener('change', changeFontSize);
textColor.addEventListener('change', changeFontColor);
textFamily.addEventListener('change', changeFontFamily);

//changing font size
function changeFontSize(event) {
    let selectedSize = event.target.value;
    let sizeArray = ["Default", "20px", "24px", "28px", "32px"];

    for (let para of articleParagraphs) {
        if (sizeArray.includes(selectedSize) && selectedSize !== "Default") {
            para.style.fontSize = selectedSize;
        }
        else {       
            para.style.fontSize = defaultFontSize;        
    }
    }
}

//changing font color
function changeFontColor(event) {
    let selectedColor = event.target.value;
    let colorArray = ["Default", "red", "blue", "green", "purple"];

    for (let para of articleParagraphs) {
        if (colorArray.includes(selectedColor) && selectedColor !== "Default") {
            para.style.color = selectedColor;
        }
        else {       
            para.style.color = defaultFontColor;        
    }
    }
}

//changing font family
function changeFontFamily(event) {
    let selectedFamily = event.target.value;
    let familyArray = ["Default", "Jost, sans-serif", "Roboto, sans-serif", "Open Sans, sans-serif", "Lato, sans-serif"];

    for (let para of articleParagraphs) {
        if (familyArray.includes(selectedFamily) && selectedFamily !== "Default") {
            para.style.fontFamily = selectedFamily;
        }
        else {       
            para.style.fontFamily = defaultFontFamily;        
    }
    }
}

console.log(window.getComputedStyle(para1).fontSize);
console.log(window.getComputedStyle(para1).color);
console.log(window.getComputedStyle(para1).fontFamily);


//Displaying the number of times a button has been clicked

let clickButton = document.querySelector("#clickButton");
let clickCount = 0;

function displayClickCount() {
    clickCount++;
    
    clickButton.textContent = `Learn More (${clickCount})`;
    
    alert(`Button clicked ${clickCount} ${clickCount === 1 ? "time" : "times"}`);
}

clickButton.addEventListener("click", displayClickCount);


//Toggling password visibility in a form

let passwordInput = document.querySelector("#passwordInput");
let toggleCheckbox = document.querySelector("#toggle");

toggleCheckbox.addEventListener("change", showHidePassword);

function showHidePassword() {
    
    passwordInput.type = toggleCheckbox.checked ? "text" : "password";
}

//Real-time character count in a textarea
let commentInput = document.querySelector("#commentInput");
let charCount = document.querySelector("#charCount");
let feedback = document.querySelector("#feedback");
let maxLength = commentInput.getAttribute("maxLength");

commentInput.addEventListener("input", updateCharCount);

function updateCharCount(event) {
    let value = event.target.value;
    let currentLength = event.target.value.length;
    charCount.textContent = currentLength;

    if (currentLength > maxLength) {
        value = value.slice(0, maxLength);
        event.target.value = value;
        
    }
    else {
        commentInput.disabled = false;
        
    }
}