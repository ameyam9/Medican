




const PillEntry(name, description, expirationDate,hourToTakePill, currentDate) {

    this.name = name
    this.note = description;
    this.lastExpiration = expirationDate;
    this.pillTime = hourToTakePill;
    this.lastTime = new Date(null,null, (currentTime.getHour() < hourToTakePill ? daysFrom(-1,currentTime) : currentTime.getDate()), hourToTakePill, null, null, null);
    this.stopwatch = new Stopwatch();
}
// only from 1-31, dont make entry on 1st iof the month
const inputName = document.querySelector("#name");
inputName.addEventListener("input", getName);

    function onLogin() {
        startTime = new Date(null,null, (lastTime.getHour() >= hourToTakePill ? daysFrom(1, lastTime) : currentTime.getDate()), hourToTakePill, null, null, null);
        stopwatch.start(startDate);
    }    
    
    function onTakePill(currentTime) {
        lastTime = currentTime;
    }
    
    function daysFrom(d, time) {
        Date result = new Date(null,null,null,null,null,null,null);
        result.setTime(time.getTime() - (d*24*60*60*1000)); 
        return result;
    }
 
    
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
