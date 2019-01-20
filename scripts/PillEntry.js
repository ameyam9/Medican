




const PillEntry(name, description, expirationDate,hourToTakePill) {

    this.name = name
    this.note = description;
    this.lastExpiration = expirationDate;
    this.pillTime = hourToTakePill;
    this.lastTime = new Date(null,null, currentDate.getDate() - 1, hour, null, null, null)
}
// only from 1-31, dont make entry on 1st iof the month
const inputName = document.querySelector("#name");
inputName.addEventListener("input", getName);

  function getName() {
    result.textContent = this.name;

  }

  const inputNotes = document.querySelector("#notes");
  inputNotes.addEventListener("input", getNotes);

  function getNotes() {
    result.textContent = this.name;

  }
  const inputData = document.querySelector("#data");
  inputData.addEventListener("input", getData);

  function getDate() {

  }
  const inputData = document.querySelector("#time");
  inputData.addEventListener("input", getTime);

  function expiryTime() {


  }
