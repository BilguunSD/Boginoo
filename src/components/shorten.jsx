button.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value) {
    shorten(input.value);
  } else {
    showError();
    hideResult();
  }
});
