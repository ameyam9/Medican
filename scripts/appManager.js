
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
        return running;
    }
    start(startTime) {
        this.startTime = startTime;
        running = true;
    }
    stop() {
        running = false;
    }


}
///////////////
const PillEntry = {
  name:"",note:"",expirydate:"", time:"",
  lastTime: new Date(null,null, (currentTime.getHours() < time ? daysFrom(-1,currentTime) : currentTime.getDate()), time, null, null, null),
  stopwatch: new Stopwatch(),
};

//////////////////////////////////
//Runs ONLY once
onLogin(); /////////////TEST


////////////////////////////////////////


//How program displays while running

//////LOOP
    getHoursRunning()   ////////Test

    ////has pill been taken
    /////if pill Taken
    onTakePill(); /////////Test




//////////////////////////////////////////

    function onLogin() {
        startTime = new Date(null,null, (lastTime.getHours() >= hourToTakePill ? daysFrom(1, lastTime) : currentTime.getDate()), hourToTakePill, null, null, null);
        stopwatch.start(startDate);
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
