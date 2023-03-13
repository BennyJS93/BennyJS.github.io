const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/DSC_0978.jpg") {
    myImage.setAttribute("src", "images/DSC_0853.jpg");
  } else {
    myImage.setAttribute("src", "images/DSC_0978.jpg");
  }
};

const setUsername = () => {
  const userInput = prompt("Enter your name").toString();
  if (!userInput) {
    setUsername;
  } else {
    localStorage.setItem("name", userInput);
    myHeading.textContent = `Space is awesome, ${userInput} `;
  }
};

if (!localStorage.getItem("name")) {
  setUsername();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Space is awesome, ${storedName}`;
}

myButton.onclick = () => {
  setUsername();
};
