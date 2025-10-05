import BEGIN from "../assets/begin.png";

export const Counter = () => {
  const counterContainer = document.createElement("div");
  counterContainer.className = "counterContainer";
  counterContainer.dataset.itemId = "1";

  const imageHTML = document.createElement("img");
  imageHTML.src = BEGIN;

  const initializationStage = document.createElement("div");
  initializationStage.className = "stageItem";
  initializationStage.textContent = "Нажать для старта";

  const nextChapterText = document.createElement("div");
  nextChapterText.className = "advise";
  nextChapterText.textContent = "Кликните для продолжения.";
  nextChapterText.style.visibility = "hidden";

  const resultsWrapper = document.createElement("div");
  resultsWrapper.className = "resultsWrapper";

  const averageTime = document.createElement("div");
  averageTime.className = "resultItem";
  // averageTime.style.display = "block";
  averageTime.textContent = "Среднее значение: 0мс";

  const attemptsHTML = document.createElement("div");
  attemptsHTML.className = "orderItem";
  attemptsHTML.textContent = "Попытка 0 из 5";

  resultsWrapper.append(averageTime, attemptsHTML);
  counterContainer.append(
    imageHTML,
    initializationStage,
    nextChapterText,
    resultsWrapper
  );
  document.body.append(counterContainer);
};
