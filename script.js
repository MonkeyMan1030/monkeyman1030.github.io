const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

yesButton.addEventListener("click", function() {
  window.location.href = "https://www.youtube.com/";
});

noButton.addEventListener("click", function() {
  window.close();
});
