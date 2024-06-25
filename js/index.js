const buttons = document.getElementById("buttons");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const block1 = document.getElementById("block1");
const mainImg = document.getElementById("main-img");
const body = document.querySelector("body");
const block2 = document.getElementById("block2");
const secondBlock = document.getElementById("second-block");
const content = document.querySelector('.content');
const content1 = document.querySelector('.content1');

button2.addEventListener("click", () => {
    secondBlock.style.backgroundColor = "#F4F4F5";
    mainImg.style.display = "block";
    block2.style.display = "none";
    content1.style.display = "block";
    content.style.color = "black";
  });

  button1.addEventListener("click", () => {
    button1.style.backgroundColor = 'transparent';
    block1.style.backgroundColor = "#18181B";
    mainImg.style.display = "none";
    block2.style.display = "block";
    content.style.display = "block";
    content1.style.color = "white";
    content1.style.display = "none";
  });


//language
const dark = document.getElementById('dark');
const light = document.getElementById('light');
const title = document.getElementById('title');
const title1 = document.getElementById('title1');
const prg = document.getElementById('prg');
const prg1 = document.getElementById('prg1');
const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const lang = document.getElementById('lang');

// dark.innerHTML = 'темный режим';
// light.innerHTML = 'световой режим';
// title.innerHTML = 'Раскройте силу творчества с Figma!';
// title1.innerHTML = 'Раскройте силу творчества с Figma!';
// prg.innerHTML = 'Готовы улучшить свою дизайнерскую игру?';
// prg1.innerHTML = 'Готовы улучшить свою дизайнерскую игру?';
// btn.innerHTML = 'Попробуйте Фигму прямо сейчас';

// dark.innerHTML = 'qorong`u rejim';
// light.innerHTML = 'yorug`lik rejimi';
