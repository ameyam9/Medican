




function PillEntry(name, description, expirationDate,hourToTakePill, currentDate) {

    this.name = name
    this.note = description;
    this.lastExpiration = expirationDate;
    this.pillTime = hourToTakePill;
    this.lastTime = new Date(null,null, (currentTime.getHour() < hourToTakePill ? daysFrom(-1,currentTime) : currentTime.getDate()), hourToTakePill, null, null, null);
    this.stopwatch = new Stopwatch();
}
// only from 1-31, dont make entry on 1st iof the month





    function onLogin() {
        startTime = new Date(null,null, (lastTime.getHour() >= hourToTakePill ? daysFrom(1, lastTime) : currentTime.getDate()), hourToTakePill, null, null, null);
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
