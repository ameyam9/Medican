

currentTime = new Date();

/////////////////
class Stopwatch {

    constructor() {
        this.running = false;
    }

    getHoursRunning(currentTime) {
        let ms = currentTime - startTime
        let hours = ms/(1000 * 60 * 60);
        return Math.floor(hours);
    }

    isRunning() {
        return this.running;
    }
    start(startTime) {
        this.startTime = startTime;
        running = true;
    }
    stop() {
        running = false;
    }


}
///////////////Run at Program Start only
const pillEntry = {
  name:"",note:"",expirydate:"", time:"",
  lastTime: new Date(null,null, (currentTime.getHours() < time ? daysFrom(-1,currentTime) : currentTime.getDate()), time, null, null, null),
  stopwatch: new Stopwatch(),
};
  if(localStorage.lastTime !== undefined && pillEntry.time.parseInt() < 24 && pillEntry.time.parseInt() >= 0) {
    restorePillEntity();
    onLogin();
    //break;
  }
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
    else if(getHoursRunning() <= 0) { ///Test
      //Normal Display
    }
    else {
      //Angry Display
    }

    ////has pill been taken
    /////if(pill Taken)
    onTakePill(); /////////Test

     storePillEntity();
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
        startTime = new Date(null,null, (lastTime.getHours() >= hourToTakePill ? daysFrom(1, lastTime) : currentTime.getDate()), hourToTakePill, null, null, null);
        if(currentTime - startTime >= 24 * 60 * 60 * 1000)
          stopwatch.start(startTime);
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


  /////////////////////////////////////////////////
