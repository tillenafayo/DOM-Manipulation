console.dir(document)

//Set 1 Exercises

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


//Set 2 Exercises

//Dynamic list management

let addButton = document.querySelector("#addButton"); //selecting the add button
let itemInput = document.querySelector("#itemInput"); //selecting the input field
let itemList = document.querySelector("#itemList"); //selecting the ul element

addButton.addEventListener("click", addItem); //adding event listener to the add button

//function to add item to the list

function addItem() {
    let itemText = itemInput.value.trim(); //getting the value of the input field and trimming any extra spaces
    if (itemText === "") {alert("Please enter a book title"); return;}; //if the input field is empty, alert the user and return

    let listItem = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = itemText;

    //create an edit button
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.style.padding = "5px";
    editButton.style.marginLeft = "10px";

    //edit button functionality
    editButton.onclick = () => {
        let currentText = span.textContent;
        let newInput = document.createElement("input");
        newInput.type = "text";
        newInput.value = currentText;


        //create a save button
        let saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.style.padding = "5px";
        saveButton.style.marginLeft = "10px";
        saveButton.onclick = () => {
            span.textContent = newInput.value.trim() || currentText;
            span.style.display = "";
            saveButton.remove();
            newInput.remove();
            editButton.style.display = "";
        };

        span.style.display = "none"; //hide the span element
        editButton.style.display = "none"; //hide the edit button

        //insert the new input field and save button before the edit button

        listItem.insertBefore(newInput, editButton);
        listItem.insertBefore(saveButton, editButton);

    }

    //create the delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.padding = "5px";
    deleteButton.style.marginLeft = "10px";
    deleteButton.onclick = () => listItem.remove();

    
    listItem.appendChild(span);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);

    itemInput.value = "";
    itemInput.focus();

}


//Search and filter table rows

let searchInput = document.querySelector("#searchInput");
let membersTable = document.querySelector("#membersTable");
let tableRows = membersTable.getElementsByTagName("tr");

searchInput.addEventListener("input", filterTable);

function filterTable() {
    let filter = searchInput.value.toLowerCase();
    for (let i = 0; i < tableRows.length; i++) {
        let row = tableRows[i]; //get each row in the table
        if (i === 0) continue; //skip the header row
        let cells = row.getElementsByTagName("td");
        let found = false;
        for (let j = 0; j < cells.length; j++) {
            let cell = cells[j]; //get each cell in the row
            if (cell.textContent.toLowerCase().includes(filter)) {
                found = true;
                break;
            }
        }
        row.style.display = found ? "" : "none";  //show the row if found, else hide it
    }
}


//Carousel images display

let carouselImage = document.querySelector("#carouselImage");
let prevButton = document.querySelector("#prevBtn");
let nextButton = document.querySelector("#nextBtn");

let currentImageIndex = 0;
const images = [
    "./assets/Images/kungfu-panda.jpg",
    "./assets/Images/zootopia.webp",
    "./assets/Images/spiderman2.webp",
    "./assets/Images/puss-in-boots.jpg",
    "./assets/Images/hangover.jpg",
    "./assets/Images/avengers2.jpg",
    "./assets/Images/avatar.webp",
    "./assets/Images/avengers1.avif"
];

//function to show the current image

prevButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    carouselImage.src = images[currentImageIndex];
});

nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    carouselImage.src = images[currentImageIndex];
});


//Dark mode toggle

let darkModeToggle = document.querySelector("#darkModeToggle");
let body = document.querySelector("body");



// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.setAttribute("data-theme", savedTheme);
}

// Toggle theme on click
darkModeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});