

let currentTime = new Date();

/////////////////
class Stopwatch {

    constructor(startTime) {
        this.running = false;
        this.startTime = startTime;
    }

    getHoursRunning(currentTime) {
        let ms = currentTime - this.startTime
        console.log(this.startTime.toString())
        let hours = ms/(1000 * 60 * 60);
        return Math.floor(hours);
    }

    isRunning() {
        return this.running;
    }
    start() {
        this.running = true;
    }
    stop() {
        running = false;
    }
    printTest() {
      return "I am a stopwatch";
    }


}
///////////////Run at Program Start only
let pillEntry = {
  name:"",note:"",expirydate:"", time:"5",
  lastTime: new Date(currentTime.getFullYear(),currentTime.getMonth(), (currentTime.getHours() < parseInt(this.time) ? daysFrom(-1,currentTime) : currentTime.getDate()), parseInt(this.time), 0, 0, 0),
  //lastTime: new Date(),
  stopwatch: new Stopwatch(),
};
  //// DEBUG:

  ////DEBUG:


  if(localStorage.lastTime !== undefined && parseInt(pillEntry.time) < 24 && parseInt(pillEntry.time) >= 0) {
    restorePillEntity();
    /////*DEBUG/////
  }
  else {
    storePillEntity();
  }
    /////*DEBUG/////

    onLogin();




//}

//////////////////////////////////
//Runs ONLY once




/////////////TEST




////////////////////////////////////////


//How program displays while running

//////Run Continuously AFTER Entry is filled out


    if(!pillEntry.stopwatch.isRunning()) {
      //No Pill display
    }
    else if(pillEntry.stopwatch.getHoursRunning() <= 0) { ///Test
      //Normal Display
    }
    else {
      //Angry Display
    }

    ////has pill been taken
    /////if(pill Taken)
    onTakePill(currentTime); /////////Test

     storePillEntity();
     console.log("Called Store");
/////////////////////////////////////////////////

function storePillEntity() {
  localStorage.lastTime = pillEntry.lastTime.toString();
  localStorage.name = pillEntry.name;
  localStorage.note = pillEntry.note;
  localStorage.expirydate = pillEntry.expirydate;
  localStorage.time = pillEntry.time;

}
function restorePillEntity() {
  pillEntry.lastTime = new Date(localStorage.lastTime.toString());
  pillEntry.name = localStorage.name;
  pillEntry.note = localStorage.note;
  pillEntry.expirydate = localStorage.expirydate;
  pillEntry.time = localStorage.time;
}


//////////////////////////////////////////

    function onLogin() {
        //startTime = new Date(1,1,1,1,1,1,1);
        console.log("PPPPP" + pillEntry.lastTime.toString());





        startTime = new Date(pillEntry.lastTime.getFullYear(),pillEntry.lastTime.getMonth(), (pillEntry.lastTime.getHours() >= parseInt(pillEntry.time) ? daysFrom(1, pillEntry.lastTime) : currentTime.getDate()), 5, 0, 0, 0);

        //if(currentTime - startTime < 24 * 60 * 60 * 1000) {
            pillEntry.stopwatch = new Stopwatch(startTime);
            console.log("SSSSSS" + startTime.toString());
            pillEntry.stopwatch.start();
        //}
    }

    function onTakePill(currentTime) {
        lastTime = currentTime;
    }

    function daysFrom(d, time) {
        let result = new Date();
        result.setTime(time.getTime() - (d*24*60*60*1000));
        return result;
    }

//////////////////////////////////////////////////

const inputName = document.querySelector("#name");
  inputName.addEventListener("input", getName);
  function getName() {
      pillEntry.name = inputName.value;

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


  /////////////////////////////////////////////////
