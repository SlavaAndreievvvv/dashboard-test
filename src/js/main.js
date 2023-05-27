"use strict";

let listItems = document.querySelectorAll("#menuItem");

listItems.forEach(function (item) {
  item.addEventListener("click", function () {
    let isActive = this.classList.contains("activeItem");

    listItems.forEach(function (li) {
      li.classList.remove("activeItem");
    });

    if (!isActive) {
      this.classList.toggle("activeItem");
    }
  });
});
