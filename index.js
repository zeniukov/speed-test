import "./index.css";
import AWAIT from "./assets/await.png";
import RESULT from "./assets/result.png";
import FALSE from "./assets/false.png";
import { Header } from "./src/description.module";
import { Counter } from "./src/counter.module";
import { random } from "./utils";

Header();
Counter();

const timeToClick = () => random(600, 2000);

const counterContainer = document.querySelector(".counterContainer");
const averageTime = document.querySelector(".resultItem");
const attemptsHTML = document.querySelector(".orderItem");
const nextChapterText = document.querySelector(".advise");
const initializationStage = document.querySelector(".stageItem");
const imageHTML = document.querySelector("img");

let canClick = false;
let mustClick = 0;
let clickedTime = 0;
let currentResult = 0;
let resultsCollection = [];
let tryInAQue = 0;
let timer;
let isFinished = false;

const changeResult = (resultNow, orderQue) => {
  averageTime.textContent = `Среднее значение: ${resultNow}мс`;
  attemptsHTML.textContent = `Попытка ${orderQue} из 5`;
};

counterContainer.addEventListener("click", (event) => {
  const id = event.currentTarget.dataset.itemId;

  if (isFinished === true) {
    counterContainer.dataset.itemId = "1";
    canClick = false;
    mustClick = 0;
    clickedTime = 0;
    currentResult = 0;
    resultsCollection = [];
    tryInAQue = 0;
    isFinished = false;
    changeResult(currentResult, tryInAQue);
    nextChapterText.textContent = "Кликните для продолжения.";
    nextChapterText.className = "advise";
  }

  if (timer) {
    clearTimeout(timer);
    timer = null;
  }

  if (id === "1") {
    nextChapterText.style.visibility = "hidden";
    initializationStage.textContent = "Ждите зелёный!";
    counterContainer.dataset.itemId = "2";

    imageHTML.src = AWAIT;
    counterContainer.style.background = "hsl(41, 98%, 47%)";

    timer = setTimeout(() => {
      counterContainer.dataset.itemId = "3";
      initializationStage.textContent = "Кликайте";
      counterContainer.style.background = "hsla(135, 100%, 41%, 1.00)";
      canClick = true;
      mustClick = Date.now();
    }, timeToClick());
    return;
  }

  if (id === "2" && canClick === false) {
    initializationStage.textContent = "Слишком рано!";
    counterContainer.style.background = "rgb(61, 57, 65)";
    nextChapterText.style.visibility = "visible";
    counterContainer.dataset.itemId = "1";
    imageHTML.src = FALSE;
  }

  if (id === "3" && canClick === true) {
    imageHTML.src = RESULT;
    clickedTime = Date.now();
    const differenceTime = Number(clickedTime) - Number(mustClick);
    initializationStage.textContent = `${differenceTime} мс`;
    nextChapterText.style.visibility = "hidden";
    tryInAQue++;
    resultsCollection.push(differenceTime);
    const sum = resultsCollection.reduce((num1, num2) => num1 + num2, 0);
    currentResult = Math.round(sum / tryInAQue);
    changeResult(currentResult, tryInAQue);
    counterContainer.dataset.itemId = "1";
    canClick = false;
    if (tryInAQue === 5) {
      counterContainer.style.background = "rgba(96, 124, 237, 1)";
      nextChapterText.textContent = "Ещё?";
      nextChapterText.style.visibility = "visible";
      nextChapterText.className = "againBlock";
      isFinished = true;
      imageHTML.src = RESULT;
    }
  }
});
