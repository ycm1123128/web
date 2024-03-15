// var myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// document.querySelector("h1").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
//   });

let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "HIS新年头像.png") {
    myImage.setAttribute("src", "test.png");
  } else {
    myImage.setAttribute("src", "HIS新年头像.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "新年快乐，" + myName;
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "新年快乐，" + storedName;
}
myButton.onclick = function () {
    setUserName();
}
