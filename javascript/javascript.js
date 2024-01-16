const rowOne = document.getElementById("row-1");

let i = 0;
const alowedKeys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "Enter",
  "Backspace",
];
currWord = [];
rightWord = ["v", "i", "d", "a", "s"];
let currRow = rowOne;
document.body.addEventListener("keyup", (ev) => {
  if (ev.key == "Backspace" && i > 0) {
    currWord.pop(ev.key);
    i--;
    currRow.children[i].innerHTML = "";
    currRow.children[i].classList.remove("words-board-typing");
  } else if (ev.key == "Enter" && i < 5) {
    alert("not enough letters");
  } else if (ev.key == "Enter" && i == 5) {
    console.log(currWord);
    for (let i = 0; i <= 4; i++) {
      if (currWord[i] == rightWord[i]) {
        currRow.children[i].classList.remove("words-board-typing");
        currRow.children[i].classList.add("color-right");
      } else if (rightWord.includes(currWord[i])) {
        currRow.children[i].classList.remove("words-board-typing");
        currRow.children[i].classList.add("color-right-letter-wrong-place");
      } else {
        currRow.children[i].classList.remove("words-board-typing");
        currRow.children[i].classList.add("color-wrong");
      }
    }
  } else if (i <= 4 && alowedKeys.includes(`${ev.key}`)) {
    currRow.children[i].innerHTML = `<p>${ev.key}</p>`;
    currRow.children[i].classList.add("words-board-typing");
    currWord.push(ev.key);
    i++;
  }
});
