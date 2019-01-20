




const PillEntry(name, description, expirationDate, startHour, startMinute) {    
    
    this.name = name 
    this.note = description;
    this.lastExpiration = expirationDate;
    this.pillTime = new Date(null,null,null, startHour, startMinute, null,null);
  
}
