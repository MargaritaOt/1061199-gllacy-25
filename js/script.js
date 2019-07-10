var search = document.querySelector(".search-link");

var popup = document.querySelector(".search-form");

var close = popup.querySelector(".modal-close");

search.addEventListener("click", function (evt){
evt.preventDefault();
popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt){
evt.preventDefault();
popup.classList.remove("modal-show");
});

var button = document.querySelector("#js-button");

var modal = document.querySelector(".modal-direction");

var close = popup.querySelector(".modal-close");

button.addEventListener("click", function (evt){
evt.preventDefault();
modal.classList.add("modal-show");
});

close.addEventListener("click", function (evt){
evt.preventDefault();
popup.classList.remove("modal-show");
});