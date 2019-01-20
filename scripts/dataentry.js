const inputName = document.querySelector("#name");
inputName.addEventListener("input", getName);

const result = document.querySelector("span");
  function getName() {
    result.textContent = this.name

  }

c
