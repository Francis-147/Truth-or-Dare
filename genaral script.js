// Assigning Elements
const playersEl = document.querySelector(".players");
const questionEl = document.querySelector(".questions");
const playBtn = document.querySelector(".play-button");
const closeModalBtn = document.querySelector(".close-modal");
const trueQues = document.getElementById("true");
const dareQues = document.getElementById("dare");
let selectBtn = document.querySelector(".select");
const style = document.querySelector(".players");
const hmm = ` <button class="button truebtn">TRUE</button>
              <h2>OR</h2>
             <button class="button darebtn">DARE</button>
             `;
let trueBox = [];
let dareBox = [];

// Adding functions to buttons

closeModalBtn.addEventListener("click", function () {
  playersEl.style.left = "-50%";
  document.querySelector(".overlay").style.display = "none";
});

document.querySelector(".menu").addEventListener("click", function () {
  questionEl.style.left = "50%";
  document.querySelector(".overlay").style.display = "block";
});

document
  .querySelector(".close-question")
  .addEventListener("click", function () {
    questionEl.style.left = "-50%";
    document.querySelector(".overlay").style.display = "none";
  });

// configuring true or dare questions

const trueOkBtn = document.querySelector(".ok-True");
const dareOkBtn = document.querySelector(".ok-dare");

trueOkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (trueQues.value !== "") {
    trueBox.push(trueQues.value);
    trueQues.value = "";
    setTrue();
  }
});
dareOkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (dareQues.value !== "") {
    dareBox.push(dareQues.value);
    dareQues.value = "";
    setDare();
  }
});

const guy = function () {
  document.querySelector(".players").style.left = "50%";
  document.querySelector(".overlay").style.display = "block";
  style.classList.remove("question");

  document.querySelector(".close-modal").addEventListener("click", function () {
    document.querySelector(".players").style.left = "-50%";
    document.querySelector(".overlay").style.display = "none";
  });
};

const que = function () {
  trueBox = trueBox.flat();
  dareBox = dareBox.flat();

  const trueQuestionAns = trueBox[Math.trunc(Math.random() * trueBox.length)];
  document.querySelector(".truebtn").addEventListener("click", function (e) {
    e.preventDefault();
    selectBtn.innerHTML =
      trueBox.length === 0
        ? "No True has been Inputed Yet"
        : `"${trueQuestionAns}"`;
    style.classList.add("question");
  });

  document.querySelector(".darebtn").addEventListener("click", function (e) {
    e.preventDefault();
    const dareQuestionAns = dareBox[Math.trunc(Math.random() * dareBox.length)];
    selectBtn.innerHTML =
      dareBox.length === 0
        ? "No Dare has been Inputed Yet"
        : `I Dare You to "${dareQuestionAns}"`;
    style.classList.add("question");
  });
};

const setTrue = function () {
  localStorage.setItem("True", JSON.stringify(trueBox.flat(4)));
};
const setDare = function () {
  localStorage.setItem("Dare", JSON.stringify(dareBox));
};

const data1 = JSON.parse(localStorage.getItem("True"));
const data2 = JSON.parse(localStorage.getItem("Dare"));

window.addEventListener("load", function () {
  if (!data1) return;
  if (!data2) return;
  trueBox.push(data1);
  dareBox.push(data2);
});
