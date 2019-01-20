

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