const rowOne = document.getElementById("row-1");
const rowTwo = document.getElementById("row-2");

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
];
rowOneWord = [];
rowTwoWord = [];
rightWord = ["v", "i", "d", "a", "s"];
document.body.addEventListener("keyup", (ev) => {
  if (rowOneWord.includes("lock")) {
    if (ev.key == "Backspace" && i > 0) {
      rowTwoWord.pop(ev.key);
      i--;
      rowTwo.children[i].innerHTML = "";
      rowTwo.children[i].classList.remove("words-board-typing");
    } else if (ev.key == "Enter" && i < 5) {
      alert("not enough letters");
    } else if (ev.key == "Enter" && i == 5) {
      for (let i = 0; i <= 4; i++) {
        if (rowTwoWord[i] == rightWord[i]) {
          rowTwo.children[i].classList.remove("words-board-typing");
          rowTwo.children[i].classList.add("color-right");
        } else if (rightWord.includes(rowTwoWord[i])) {
          rowTwo.children[i].classList.remove("words-board-typing");
          rowTwo.children[i].classList.add("color-right-letter-wrong-place");
        } else {
          rowTwo.children[i].classList.remove("words-board-typing");
          rowTwo.children[i].classList.add("color-wrong");
        }
      }
      rowTwoWord.push("lock");
      console.log(`teminei o loop ${rowTwoWord} `);
      i = 0;
    } else if (i <= 4 && alowedKeys.includes(`${ev.key}`)) {
      rowTwo.children[i].innerHTML = `<p>${ev.key}</p>`;
      rowTwo.children[i].classList.add("words-board-typing");
      rowTwoWord.push(ev.key);
      i++;
    }
  } else if (rowTwoWord.includes("lock")) {
    console.log(`a row é a terceira`);
  } else {
    if (ev.key == "Backspace" && i > 0) {
      rowOneWord.pop(ev.key);
      i--;
      rowOne.children[i].innerHTML = "";
      rowOne.children[i].classList.remove("words-board-typing");
    } else if (ev.key == "Enter" && i < 5) {
      alert("not enough letters");
      console.log(i);
    } else if (ev.key == "Enter" && i == 5) {
      console.log(rowOne);
      for (let i = 0; i <= 4; i++) {
        if (rowOneWord[i] == rightWord[i]) {
          rowOne.children[i].classList.remove("words-board-typing");
          rowOne.children[i].classList.add("color-right");
          console.log("coloquei a cor");
        } else if (rightWord.includes(rowOneWord[i])) {
          rowOne.children[i].classList.remove("words-board-typing");
          rowOne.children[i].classList.add("color-right-letter-wrong-place");
        } else {
          rowOne.children[i].classList.remove("words-board-typing");
          rowOne.children[i].classList.add("color-wrong");
        }
      }
      rowOneWord.push("lock");
      console.log(`teminei o loop ${rowOneWord} `);
      i = 0;
    } else if (i <= 4 && alowedKeys.includes(`${ev.key}`)) {
      rowOne.children[i].innerHTML = `<p>${ev.key}</p>`;
      rowOne.children[i].classList.add("words-board-typing");
      rowOneWord.push(ev.key);
      i++;
    }
  }
});
