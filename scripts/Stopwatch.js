

class Stopwatch {
    
    constructor(startTime) {
        this.running = false;
        this.startTime = startTime;
    }
    
    getHoursRunning(currentTime) {
        let ms = currentTime - startTime 
        let hours = ms/(1000 * 60 * 60);
        return Math.floor(hours);
    }
    
    isRunning() {
        return running;
    }
    start() {
        running = true;
    }
    stop() {
        running = false;
    }
    
    
}