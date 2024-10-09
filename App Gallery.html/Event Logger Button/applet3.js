class DataLogger{
    constructor(buttonId, cardContainerId, clearButtonId,logCountId){
        this.logButton = document.getElementById(buttonId);
        this.cardContainerId = document.getElementById(cardContainerId);
        this.clearButtonId = document.getElementById(clearButtonId);
        this.logCountId = document.getElementById(logCountId);
        this.loggedData = [];

        this.logButton.addEventListener('click', () => this.logData());
        this.clearButton.addEventListener('click', () => this.clearLogs()); 
    }

    logData(){
        const timestamp = new Date().toLocaleString();
        this.loggedData.push(timestamp);
        this.updateCardContainer();
    
    }

    clearLogs(){
        this.loggedData = [];
        this.updateCardContainer();
    }
    
}