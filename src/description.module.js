export const Header = () => {
  const headingHTML = document.createElement("h2");
  headingHTML.textContent = "Тест-тренажер на скорость реакции";

  const estimationHeader = document.createElement("div");
  estimationHeader.className = "resultsHeader";
  estimationHeader.textContent = "Трактовка результатов";

  const estimationList = document.createElement("ul");
  estimationList.className = "resultsHeader";

  const listItem1 = document.createElement("li");
  const list1B = document.createElement("b");
  list1B.textContent = "до 150мс - ";
  const list1 = document.createElement("span");
  list1.textContent =
    "Превосходно! Можно садиться за штурвал истребителя или болида формулы 1.";
  listItem1.append(list1B, list1);

  const listItem2 = document.createElement("li");
  const list2B = document.createElement("b");
  list2B.textContent = "от 150 - 170мс - ";
  const list2 = document.createElement("span");
  list2.textContent =
    "Это пять с плюсом! Чемпионы мира по пинг-понгу и боксу смотрят на Вас как на конкурента.";
  listItem2.append(list2B, list2);

  const listItem3 = document.createElement("li");
  const list3B = document.createElement("b");
  list3B.textContent = "от 170 - 190мс - ";
  const list3 = document.createElement("span");
  list3.textContent =
    "Великолепно! Мастера спорта международного класса одобряют.";
  listItem3.append(list3B, list3);

  const listItem4 = document.createElement("li");
  const list4B = document.createElement("b");
  list4B.textContent = "от 190 - 200мс - ";
  const list4 = document.createElement("span");
  list4.textContent = "Хорошо! Мастер спорта у Вас в кармане.";
  listItem4.append(list4B, list4);

  const listItem5 = document.createElement("li");
  const list5B = document.createElement("b");
  list5B.textContent = "от 200 - 210мс - ";
  const list5 = document.createElement("span");
  list5.textContent = "Неплохо. КМС зачтен.";
  listItem5.append(list5B, list5);

  const listItem6 = document.createElement("li");
  const list6B = document.createElement("b");
  list6B.textContent = "от 210 - 230мс - ";
  const list6 = document.createElement("span");
  list6.textContent = "Нормально. Вы активны, можете лучше.";
  listItem6.append(list6B, list6);

  const listItem7 = document.createElement("li");
  const list7B = document.createElement("b");
  list7B.textContent = "от 230 - 270мс - ";
  const list7 = document.createElement("span");
  list7.textContent =
    "Средненько. Скорость реакции, как и у большинства людей.";
  listItem7.append(list7B, list7);

  const listItem8 = document.createElement("li");
  const list8B = document.createElement("b");
  list8B.textContent = "от 270 - 350мс - ";
  const list8 = document.createElement("span");
  list8.textContent = "Неуд.";
  listItem8.append(list8B, list8);

  const listItem9 = document.createElement("li");
  const list9B = document.createElement("b");
  list9B.textContent = "от 350 - 500мс - ";
  const list9 = document.createElement("span");
  list9.textContent = "Незачет.";
  listItem9.append(list9B, list9);

  const listItem10 = document.createElement("li");
  const list10B = document.createElement("b");
  list10B.textContent = "от 500 и выше - ";
  const list10 = document.createElement("span");
  list10.textContent =
    "Вы вообще живы там? Лучше отдохните, попробуйте завтра.";
  listItem10.append(list10B, list10);

  estimationList.append(
    listItem1,
    listItem2,
    listItem3,
    listItem4,
    listItem5,
    listItem6,
    listItem7,
    listItem8,
    listItem9,
    listItem10
  );
  document.body.append(headingHTML, estimationHeader, estimationList);
};
