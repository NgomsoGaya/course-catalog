function tutorOvertimeWageCalculator (timesheetString, level){
    //create a number of days counter
    let daysCounter = 0
    //create a hours counter
    let hoursSum = 0
    //create a wage variable
    let wage = 0
    //split the (-) dash separated string
    var timesheetArray = timesheetString.split("-")
    console.log(timesheetArray)
    //loop over the string of hours
    for (var i=0; i<timesheetArray.length; i++ ){
      var eachNo = timesheetArray[i]
       daysCounter ++
       hoursSum += parseFloat(eachNo)
    }
    //count how many indexes are present if it is between 5 and 7 keep counting else return 0
    if (daysCounter >= 5 && daysCounter <= 7){
       if (level == "1"){
          wage = hoursSum * 75
       }
       else if (level == "2"){
          wage = hoursSum * 90
       }
       else if (level == "3"){
          wage = hoursSum * 105
       }
    }
    else if (daysCounter < 5 || daysCounter > 7){
        wage = 0
    }
    
    //return
    return wage
}