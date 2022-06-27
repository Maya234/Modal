"use strict";

const modalToggle = document.querySelector(".modal-toggle");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const modalOverlay = document.querySelector(".modal-overlay");

const openModal = function () {
  modal.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
};
modalToggle.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
