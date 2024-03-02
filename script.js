"use strict";

const email = document.getElementById("exampleInputEmail1");
const regex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const btnCheckMail = document.querySelector(".btn-checkmail");
const content = document.querySelector(".info-content");
const checkMail = document.querySelector(".info-checkmail");
const errorMail = document.querySelector(".error-mail");
const btnErroMail = document.querySelector(".btn-errormail");

btnCheckMail.addEventListener("click", () => {
  if (regex.test(email.value)) {
    checkMail.classList.add("d-none");
    content.classList.remove("d-none");
  } else {
    checkMail.classList.add("d-none");
    errorMail.classList.remove("d-none");
  }
});

btnErroMail.addEventListener("click", () => {
  errorMail.classList.add("d-none");
  checkMail.classList.remove("d-none");
});

// // thêm chức năng cho thông tin nghề nghiệp
const jobAll = document.querySelectorAll(".job-item");
const viewmore = document.querySelectorAll(".viewmore");
const viewless = document.querySelectorAll(".viewless");
const contents = document.querySelectorAll(".content");
let active = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < jobAll.length; i++) {
  jobAll[i].addEventListener("mouseover", function () {
    if (active[i] === 0) {
      viewmore[i].classList.remove("d-none");
    }
  });
}

for (let i = 0; i < jobAll.length; i++) {
  jobAll[i].addEventListener("mouseout", function () {
    if (active[i] === 0) {
      viewmore[i].classList.add("d-none");
    }
  });
}

for (let i = 0; i < viewmore.length; i++) {
  viewmore[i].addEventListener("click", function () {
    active[i] = 1;
    jobAll[i].style.height = "auto";
    viewmore[i].classList.add("d-none");
    contents[i].classList.remove("d-none");
    viewless[i].classList.remove("d-none");
  });
}

for (let i = 0; i < viewless.length; i++) {
  viewless[i].addEventListener("click", function () {
    active[i] = 0;
    jobAll[i].style.height = "130px";
    viewmore[i].classList.add("d-none");
    contents[i].classList.add("d-none");
    viewless[i].classList.add("d-none");
  });
}

// Nâng cao
// let widthCircle = document.querySelector(".left-circle").style.width;
// let heightCircle = document.querySelector(".left-circle").style.height;
// heightCircle = 50 + "px";
