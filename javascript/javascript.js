const rowOne = document.getElementById("row-1");
const rowTwo = document.getElementById("row-2");
const rowThree = document.getElementById("row-3");
const rowFour = document.getElementById("row-4");
const rowFive = document.getElementById("row-5");
const rowSix = document.getElementById("row-6");
const keys = document.querySelectorAll(".keyboard-row .key");

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
const elementCounts = {};
rowOneWord = [];
rowTwoWord = [];
rowThreeWord = [];
rowFourWord = [];
rowFiveWord = [];
rowSixWord = [];
rightWord = ["d", "a", "d", "o", "s"];

keys.forEach((key) => {
  key.addEventListener("click", function () {
    if (rowFiveWord.includes("lock")) {
      if (key.id == "Backspace" && i > 0) {
        rowSixWord.pop(key.id);
        i--;
        rowSix.children[i].innerHTML = "";
        rowSix.children[i].classList.remove("words-board-typing");
      } else if (key.id == "Enter" && i < 5) {
        alert("not enough letters");
      } else if (key.id == "Enter" && i == 5) {
        for (let i = 0; i <= 4; i++) {
          if (rightWord.includes(rowSixWord[i])) {
            if (rowSixWord.at(i) == rightWord.at(i)) {
              rowSix.children[i].classList.remove("words-board-typing");
              rowSix.children[i].classList.add("color-right");
              console.log(`exclui o ${rightWord[i]}`);
              rightWord[i] = "right";
              console.log(rightWord);
            }
          }
        }
        for (let i = 0; i <= 4; i++) {
          if (rightWord.includes(rowSixWord[i]) && rightWord.at(i) != "right") {
            console.log(`${i} passou`);
            rowSix.children[i].classList.remove("words-board-typing");
            rowSix.children[i].classList.add("color-right-letter-wrong-place");
            console.log(
              `pintei o ${rightWord[rightWord.indexOf(rowSixWord.at(i))]}`
            );
            rightWord[rightWord.indexOf(rowSixWord.at(i))] = "wrong-place";
            console.log(rightWord);
          } else {
            rowSix.children[i].classList.remove("words-board-typing");
            rowSix.children[i].classList.add("color-wrong");
          }
        }
        rightWord = ["d", "a", "d", "o", "s"];
        rowSixWord.push("lock");
        i = 0;
      } else if (i <= 4 && alowedKeys.includes(`${key.id}`)) {
        rowSix.children[i].innerHTML = `<p>${key.id}</p>`;
        rowSix.children[i].classList.add("words-board-typing");
        rowSixWord.push(key.id);
        i++;
      }
    } else if (rowFourWord.includes("lock")) {
      if (key.id == "Backspace" && i > 0) {
        rowFiveWord.pop(key.id);
        i--;
        rowFive.children[i].innerHTML = "";
        rowFive.children[i].classList.remove("words-board-typing");
      } else if (key.id == "Enter" && i < 5) {
        alert("not enough letters");
      } else if (key.id == "Enter" && i == 5) {
        for (let i = 0; i <= 4; i++) {
          if (rightWord.includes(rowFiveWord[i])) {
            if (rowFiveWord.at(i) == rightWord.at(i)) {
              rowFive.children[i].classList.remove("words-board-typing");
              rowFive.children[i].classList.add("color-right");
              console.log(`exclui o ${rightWord[i]}`);
              rightWord[i] = "right";
              console.log(rightWord);
            }
          }
        }
        for (let i = 0; i <= 4; i++) {
          if (
            rightWord.includes(rowFiveWord[i]) &&
            rightWord.at(i) != "right"
          ) {
            console.log(`${i} passou`);
            rowFive.children[i].classList.remove("words-board-typing");
            rowFive.children[i].classList.add("color-right-letter-wrong-place");
            console.log(
              `pintei o ${rightWord[rightWord.indexOf(rowFiveWord.at(i))]}`
            );
            rightWord[rightWord.indexOf(rowFiveWord.at(i))] = "wrong-place";
            console.log(rightWord);
          } else {
            rowFive.children[i].classList.remove("words-board-typing");
            rowFive.children[i].classList.add("color-wrong");
          }
        }
        rightWord = ["d", "a", "d", "o", "s"];
        rowFiveWord.push("lock");
        i = 0;
      } else if (i <= 4 && alowedKeys.includes(`${key.id}`)) {
        rowFive.children[i].innerHTML = `<p>${key.id}</p>`;
        rowFive.children[i].classList.add("words-board-typing");
        rowFiveWord.push(key.id);
        i++;
      }
    } else if (rowThreeWord.includes("lock")) {
      if (key.id == "Backspace" && i > 0) {
        rowFourWord.pop(key.id);
        i--;
        rowFour.children[i].innerHTML = "";
        rowFour.children[i].classList.remove("words-board-typing");
      } else if (key.id == "Enter" && i < 5) {
        alert("not enough letters");
      } else if (key.id == "Enter" && i == 5) {
        for (let i = 0; i <= 4; i++) {
          if (rightWord.includes(rowFourWord[i])) {
            if (rowFourWord.at(i) == rightWord.at(i)) {
              rowFour.children[i].classList.remove("words-board-typing");
              rowFour.children[i].classList.add("color-right");
              console.log(`exclui o ${rightWord[i]}`);
              rightWord[i] = "right";
              console.log(rightWord);
            }
          }
        }
        for (let i = 0; i <= 4; i++) {
          if (
            rightWord.includes(rowFourWord[i]) &&
            rightWord.at(i) != "right"
          ) {
            console.log(`${i} passou`);
            rowFour.children[i].classList.remove("words-board-typing");
            rowFour.children[i].classList.add("color-right-letter-wrong-place");
            console.log(
              `pintei o ${rightWord[rightWord.indexOf(rowFourWord.at(i))]}`
            );
            rightWord[rightWord.indexOf(rowFourWord.at(i))] = "wrong-place";
            console.log(rightWord);
          } else {
            rowFour.children[i].classList.remove("words-board-typing");
            rowFour.children[i].classList.add("color-wrong");
          }
        }
        rightWord = ["d", "a", "d", "o", "s"];
        rowFourWord.push("lock");
        i = 0;
      } else if (i <= 4 && alowedKeys.includes(`${key.id}`)) {
        rowFour.children[i].innerHTML = `<p>${key.id}</p>`;
        rowFour.children[i].classList.add("words-board-typing");
        rowFourWord.push(key.id);
        i++;
      }
    } else if (rowTwoWord.includes("lock")) {
      if (key.id == "Backspace" && i > 0) {
        rowThreeWord.pop(key.id);
        i--;
        rowThree.children[i].innerHTML = "";
        rowThree.children[i].classList.remove("words-board-typing");
      } else if (key.id == "Enter" && i < 5) {
        alert("not enough letters");
      } else if (key.id == "Enter" && i == 5) {
        for (let i = 0; i <= 4; i++) {
          if (rightWord.includes(rowThreeWord[i])) {
            if (rowThreeWord.at(i) == rightWord.at(i)) {
              rowThree.children[i].classList.remove("words-board-typing");
              rowThree.children[i].classList.add("color-right");
              console.log(`exclui o ${rightWord[i]}`);
              rightWord[i] = "right";
              console.log(rightWord);
            }
          }
        }
        for (let i = 0; i <= 4; i++) {
          if (
            rightWord.includes(rowThreeWord[i]) &&
            rightWord.at(i) != "right"
          ) {
            console.log(`${i} passou`);
            rowThree.children[i].classList.remove("words-board-typing");
            rowThree.children[i].classList.add(
              "color-right-letter-wrong-place"
            );
            console.log(
              `pintei o ${rightWord[rightWord.indexOf(rowThreeWord.at(i))]}`
            );
            rightWord[rightWord.indexOf(rowThreeWord.at(i))] = "wrong-place";
            console.log(rightWord);
          } else {
            rowThree.children[i].classList.remove("words-board-typing");
            rowThree.children[i].classList.add("color-wrong");
          }
        }
        rightWord = ["d", "a", "d", "o", "s"];
        rowThreeWord.push("lock");
        i = 0;
      } else if (i <= 4 && alowedKeys.includes(`${key.id}`)) {
        rowThree.children[i].innerHTML = `<p>${key.id}</p>`;
        rowThree.children[i].classList.add("words-board-typing");
        rowThreeWord.push(key.id);
        i++;
      }
    } else if (rowOneWord.includes("lock")) {
      if (key.id == "Backspace" && i > 0) {
        rowTwoWord.pop(key.id);
        i--;
        rowTwo.children[i].innerHTML = "";
        rowTwo.children[i].classList.remove("words-board-typing");
      } else if (key.id == "Enter" && i < 5) {
        alert("not enough letters");
      } else if (key.id == "Enter" && i == 5) {
        for (let i = 0; i <= 4; i++) {
          if (rightWord.includes(rowTwoWord[i])) {
            if (rowTwoWord.at(i) == rightWord.at(i)) {
              rowTwo.children[i].classList.remove("words-board-typing");
              rowTwo.children[i].classList.add("color-right");
              console.log(`exclui o ${rightWord[i]}`);
              rightWord[i] = "right";
              console.log(rightWord);
            }
          }
        }
        for (let i = 0; i <= 4; i++) {
          if (rightWord.includes(rowTwoWord[i]) && rightWord.at(i) != "right") {
            console.log(`${i} passou`);
            rowTwo.children[i].classList.remove("words-board-typing");
            rowTwo.children[i].classList.add("color-right-letter-wrong-place");
            console.log(
              `pintei o ${rightWord[rightWord.indexOf(rowTwoWord.at(i))]}`
            );
            rightWord[rightWord.indexOf(rowTwoWord.at(i))] = "wrong-place";
            console.log(rightWord);
          } else {
            rowTwo.children[i].classList.remove("words-board-typing");
            rowTwo.children[i].classList.add("color-wrong");
          }
        }
        rightWord = ["d", "a", "d", "o", "s"];
        rowTwoWord.push("lock");
        i = 0;
      } else if (i <= 4 && alowedKeys.includes(`${key.id}`)) {
        rowTwo.children[i].innerHTML = `<p>${key.id}</p>`;
        rowTwo.children[i].classList.add("words-board-typing");
        rowTwoWord.push(key.id);
        i++;
      }
    } else {
      if (key.id == "Backspace" && i > 0) {
        rowOneWord.pop(key.id);
        i--;
        rowOne.children[i].innerHTML = "";
        rowOne.children[i].classList.remove("words-board-typing");
      } else if (key.id == "Enter" && i < 5) {
        alert("not enough letters");
      } else if (key.id == "Enter" && i == 5) {
        for (let i = 0; i <= 4; i++) {
          if (rightWord.includes(rowOneWord[i])) {
            if (rowOneWord.at(i) == rightWord.at(i)) {
              rowOne.children[i].classList.remove("words-board-typing");
              rowOne.children[i].classList.add("color-right");
              console.log(`exclui o ${rightWord[i]}`);
              rightWord[i] = "right";
              console.log(rightWord);
            }
          }
        }
        for (let i = 0; i <= 4; i++) {
          if (rightWord.includes(rowOneWord[i]) && rightWord.at(i) != "right") {
            console.log(`${i} passou`);
            rowOne.children[i].classList.remove("words-board-typing");
            rowOne.children[i].classList.add("color-right-letter-wrong-place");
            console.log(
              `pintei o ${rightWord[rightWord.indexOf(rowOneWord.at(i))]}`
            );
            rightWord[rightWord.indexOf(rowOneWord.at(i))] = "wrong-place";
            console.log(rightWord);
          } else {
            rowOne.children[i].classList.remove("words-board-typing");
            rowOne.children[i].classList.add("color-wrong");
          }
        }
        rightWord = ["d", "a", "d", "o", "s"];
        rowOneWord.push("lock");
        i = 0;
      } else if (i <= 4 && alowedKeys.includes(`${key.id}`)) {
        rowOne.children[i].innerHTML = `<p>${key.id}</p>`;
        rowOne.children[i].classList.add("words-board-typing");
        rowOneWord.push(key.id);
        i++;
      }
    }
  });
});

document.body.addEventListener("keyup", (ev) => {
  if (rowFiveWord.includes("lock")) {
    if (ev.key == "Backspace" && i > 0) {
      rowSixWord.pop(ev.key);
      i--;
      rowSix.children[i].innerHTML = "";
      rowSix.children[i].classList.remove("words-board-typing");
    } else if (ev.key == "Enter" && i < 5) {
      alert("not enough letters");
    } else if (ev.key == "Enter" && i == 5) {
      for (let i = 0; i <= 4; i++) {
        if (rightWord.includes(rowSixWord[i])) {
          if (rowSixWord.at(i) == rightWord.at(i)) {
            rowSix.children[i].classList.remove("words-board-typing");
            rowSix.children[i].classList.add("color-right");
            console.log(`exclui o ${rightWord[i]}`);
            rightWord[i] = "right";
            console.log(rightWord);
          }
        }
      }
      for (let i = 0; i <= 4; i++) {
        if (rightWord.includes(rowSixWord[i]) && rightWord.at(i) != "right") {
          console.log(`${i} passou`);
          rowSix.children[i].classList.remove("words-board-typing");
          rowSix.children[i].classList.add("color-right-letter-wrong-place");
          console.log(
            `pintei o ${rightWord[rightWord.indexOf(rowSixWord.at(i))]}`
          );
          rightWord[rightWord.indexOf(rowSixWord.at(i))] = "wrong-place";
          console.log(rightWord);
        } else {
          rowSix.children[i].classList.remove("words-board-typing");
          rowSix.children[i].classList.add("color-wrong");
        }
      }
      rightWord = ["d", "a", "d", "o", "s"];
      rowSixWord.push("lock");
      i = 0;
    } else if (i <= 4 && alowedKeys.includes(`${ev.key}`)) {
      rowSix.children[i].innerHTML = `<p>${ev.key}</p>`;
      rowSix.children[i].classList.add("words-board-typing");
      rowSixWord.push(ev.key);
      i++;
    }
  } else if (rowFourWord.includes("lock")) {
    if (ev.key == "Backspace" && i > 0) {
      rowFiveWord.pop(ev.key);
      i--;
      rowFive.children[i].innerHTML = "";
      rowFive.children[i].classList.remove("words-board-typing");
    } else if (ev.key == "Enter" && i < 5) {
      alert("not enough letters");
    } else if (ev.key == "Enter" && i == 5) {
      for (let i = 0; i <= 4; i++) {
        if (rightWord.includes(rowFiveWord[i])) {
          if (rowFiveWord.at(i) == rightWord.at(i)) {
            rowFive.children[i].classList.remove("words-board-typing");
            rowFive.children[i].classList.add("color-right");
            console.log(`exclui o ${rightWord[i]}`);
            rightWord[i] = "right";
            console.log(rightWord);
          }
        }
      }
      for (let i = 0; i <= 4; i++) {
        if (rightWord.includes(rowFiveWord[i]) && rightWord.at(i) != "right") {
          console.log(`${i} passou`);
          rowFive.children[i].classList.remove("words-board-typing");
          rowFive.children[i].classList.add("color-right-letter-wrong-place");
          console.log(
            `pintei o ${rightWord[rightWord.indexOf(rowFiveWord.at(i))]}`
          );
          rightWord[rightWord.indexOf(rowFiveWord.at(i))] = "wrong-place";
          console.log(rightWord);
        } else {
          rowFive.children[i].classList.remove("words-board-typing");
          rowFive.children[i].classList.add("color-wrong");
        }
      }
      rightWord = ["d", "a", "d", "o", "s"];
      rowFiveWord.push("lock");
      i = 0;
    } else if (i <= 4 && alowedKeys.includes(`${ev.key}`)) {
      rowFive.children[i].innerHTML = `<p>${ev.key}</p>`;
      rowFive.children[i].classList.add("words-board-typing");
      rowFiveWord.push(ev.key);
      i++;
    }
  } else if (rowThreeWord.includes("lock")) {
    if (ev.key == "Backspace" && i > 0) {
      rowFourWord.pop(ev.key);
      i--;
      rowFour.children[i].innerHTML = "";
      rowFour.children[i].classList.remove("words-board-typing");
    } else if (ev.key == "Enter" && i < 5) {
      alert("not enough letters");
    } else if (ev.key == "Enter" && i == 5) {
      for (let i = 0; i <= 4; i++) {
        if (rightWord.includes(rowFourWord[i])) {
          if (rowFourWord.at(i) == rightWord.at(i)) {
            rowFour.children[i].classList.remove("words-board-typing");
            rowFour.children[i].classList.add("color-right");
            console.log(`exclui o ${rightWord[i]}`);
            rightWord[i] = "right";
            console.log(rightWord);
          }
        }
      }
      for (let i = 0; i <= 4; i++) {
        if (rightWord.includes(rowFourWord[i]) && rightWord.at(i) != "right") {
          console.log(`${i} passou`);
          rowFour.children[i].classList.remove("words-board-typing");
          rowFour.children[i].classList.add("color-right-letter-wrong-place");
          console.log(
            `pintei o ${rightWord[rightWord.indexOf(rowFourWord.at(i))]}`
          );
          rightWord[rightWord.indexOf(rowFourWord.at(i))] = "wrong-place";
          console.log(rightWord);
        } else {
          rowFour.children[i].classList.remove("words-board-typing");
          rowFour.children[i].classList.add("color-wrong");
        }
      }
      rightWord = ["d", "a", "d", "o", "s"];
      rowFourWord.push("lock");
      i = 0;
    } else if (i <= 4 && alowedKeys.includes(`${ev.key}`)) {
      rowFour.children[i].innerHTML = `<p>${ev.key}</p>`;
      rowFour.children[i].classList.add("words-board-typing");
      rowFourWord.push(ev.key);
      i++;
    }
  } else if (rowTwoWord.includes("lock")) {
    if (ev.key == "Backspace" && i > 0) {
      rowThreeWord.pop(ev.key);
      i--;
      rowThree.children[i].innerHTML = "";
      rowThree.children[i].classList.remove("words-board-typing");
    } else if (ev.key == "Enter" && i < 5) {
      alert("not enough letters");
    } else if (ev.key == "Enter" && i == 5) {
      for (let i = 0; i <= 4; i++) {
        if (rightWord.includes(rowThreeWord[i])) {
          if (rowThreeWord.at(i) == rightWord.at(i)) {
            rowThree.children[i].classList.remove("words-board-typing");
            rowThree.children[i].classList.add("color-right");
            console.log(`exclui o ${rightWord[i]}`);
            rightWord[i] = "right";
            console.log(rightWord);
          }
        }
      }
      for (let i = 0; i <= 4; i++) {
        if (rightWord.includes(rowThreeWord[i]) && rightWord.at(i) != "right") {
          console.log(`${i} passou`);
          rowThree.children[i].classList.remove("words-board-typing");
          rowThree.children[i].classList.add("color-right-letter-wrong-place");
          console.log(
            `pintei o ${rightWord[rightWord.indexOf(rowThreeWord.at(i))]}`
          );
          rightWord[rightWord.indexOf(rowThreeWord.at(i))] = "wrong-place";
          console.log(rightWord);
        } else {
          rowThree.children[i].classList.remove("words-board-typing");
          rowThree.children[i].classList.add("color-wrong");
        }
      }
      rightWord = ["d", "a", "d", "o", "s"];
      rowThreeWord.push("lock");
      i = 0;
    } else if (i <= 4 && alowedKeys.includes(`${ev.key}`)) {
      rowThree.children[i].innerHTML = `<p>${ev.key}</p>`;
      rowThree.children[i].classList.add("words-board-typing");
      rowThreeWord.push(ev.key);
      i++;
    }
  } else if (rowOneWord.includes("lock")) {
    if (ev.key == "Backspace" && i > 0) {
      rowTwoWord.pop(ev.key);
      i--;
      rowTwo.children[i].innerHTML = "";
      rowTwo.children[i].classList.remove("words-board-typing");
    } else if (ev.key == "Enter" && i < 5) {
      alert("not enough letters");
    } else if (ev.key == "Enter" && i == 5) {
      for (let i = 0; i <= 4; i++) {
        if (rightWord.includes(rowTwoWord[i])) {
          if (rowTwoWord.at(i) == rightWord.at(i)) {
            rowTwo.children[i].classList.remove("words-board-typing");
            rowTwo.children[i].classList.add("color-right");
            console.log(`exclui o ${rightWord[i]}`);
            rightWord[i] = "right";
            console.log(rightWord);
          }
        }
      }
      for (let i = 0; i <= 4; i++) {
        if (rightWord.includes(rowTwoWord[i]) && rightWord.at(i) != "right") {
          console.log(`${i} passou`);
          rowTwo.children[i].classList.remove("words-board-typing");
          rowTwo.children[i].classList.add("color-right-letter-wrong-place");
          console.log(
            `pintei o ${rightWord[rightWord.indexOf(rowTwoWord.at(i))]}`
          );
          rightWord[rightWord.indexOf(rowTwoWord.at(i))] = "wrong-place";
          console.log(rightWord);
        } else {
          rowTwo.children[i].classList.remove("words-board-typing");
          rowTwo.children[i].classList.add("color-wrong");
        }
      }
      rightWord = ["d", "a", "d", "o", "s"];
      rowTwoWord.push("lock");
      i = 0;
    } else if (i <= 4 && alowedKeys.includes(`${ev.key}`)) {
      rowTwo.children[i].innerHTML = `<p>${ev.key}</p>`;
      rowTwo.children[i].classList.add("words-board-typing");
      rowTwoWord.push(ev.key);
      i++;
    }
  } else {
    if (ev.key == "Backspace" && i > 0) {
      rowOneWord.pop(ev.key);
      i--;
      rowOne.children[i].innerHTML = "";
      rowOne.children[i].classList.remove("words-board-typing");
    } else if (ev.key == "Enter" && i < 5) {
      alert("not enough letters");
    } else if (ev.key == "Enter" && i == 5) {
      for (let i = 0; i <= 4; i++) {
        if (rightWord.includes(rowOneWord[i])) {
          if (rowOneWord.at(i) == rightWord.at(i)) {
            rowOne.children[i].classList.remove("words-board-typing");
            rowOne.children[i].classList.add("color-right");
            console.log(`exclui o ${rightWord[i]}`);
            rightWord[i] = "right";
            console.log(rightWord);
          }
        }
      }
      for (let i = 0; i <= 4; i++) {
        if (rightWord.includes(rowOneWord[i]) && rightWord.at(i) != "right") {
          console.log(`${i} passou`);
          rowOne.children[i].classList.remove("words-board-typing");
          rowOne.children[i].classList.add("color-right-letter-wrong-place");
          console.log(
            `pintei o ${rightWord[rightWord.indexOf(rowOneWord.at(i))]}`
          );
          rightWord[rightWord.indexOf(rowOneWord.at(i))] = "wrong-place";
          console.log(rightWord);
        } else {
          rowOne.children[i].classList.remove("words-board-typing");
          rowOne.children[i].classList.add("color-wrong");
        }
      }
      rightWord = ["d", "a", "d", "o", "s"];
      rowOneWord.push("lock");
      i = 0;
    } else if (i <= 4 && alowedKeys.includes(`${ev.key}`)) {
      rowOne.children[i].innerHTML = `<p>${ev.key}</p>`;
      rowOne.children[i].classList.add("words-board-typing");
      rowOneWord.push(ev.key);
      i++;
    }
  }
});
