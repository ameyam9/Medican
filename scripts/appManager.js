


const pillEntry = {
  name:"", note:"", expirydate:"", time:"",

};

const inputName = document.querySelector("#name");



  function getName() {
    if (inputName) {
        inputName.addEventListener("input", getName);
    }

  pillEntry.name = inputName;
    //console.log(pillEntry.name);
  }

  const inputNote = document.querySelector("#notes");


  function getNotes() {

    if(inputName){

        inputNote.addEventListener("input", getNotes);
    }
      pillEntry.note = inputNote;

  }
  const inputDate = document.querySelector("#date");


  function getDate() {
    if(inputDate) {
        inputDate.addEventListener("input", getDate);
    }
      pillEntry.date = inputDate;

  }
  const inputTime = document.querySelector("#time");


  function getexpiryTime() {
    if(inputTime){
        inputTime.addEventListener("input", getTime);
    }
      pillEntry.time = inputTime;


  }
console.log();
