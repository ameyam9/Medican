


const pillEntry = {
  name:"", note:"", expirydate:"", time:"",

};



const inputName = document.querySelector("#name");
  inputName.addEventListener("input", getName);
  console.log("1" + inputName);
  function getName() {
      pillEntry.name = inputName.value;
      console.log(pillEntry.name);

  }

const inputNote = document.querySelector("#notes");
inputNote.addEventListener("input", getNotes);
  function getNotes() {

pillEntry.note = inputNote.value;
  console.log(pillEntry.note);

  }
  const inputTime = document.querySelector("#time");
    inputTime.addEventListener("input", getTime);
  function getTime() {
  pillEntry.time = inputTime.value
    console.log(pillEntry.time);
}

  const inputDate = document.querySelector("#date");
  inputDate.addEventListener("input", getexpiryTime);
  function getexpiryTime() {
      pillEntry.expirydate = inputDate.value;
        console.log(pillEntry.expirydate);

  }
