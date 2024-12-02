function calculate(){
   
    let salaryAmt = Number(document.getElementById("SalaryAmount").value);
    let salaryRate = document.getElementById("SalaryRate").value;
    let hoursPerWeek = Number(document.getElementById("hoursPerWeek").value);
    let daysPerWeek = Number(document.getElementById("daysPerWeek").value);

    /*
    var hourlyValue   = Number(document.getElementById("hourlyValue").value);
    var dailyValue    = Number(document.getElementById("dailyValue").value);
    var weeklyValue   = Number(document.getElementById("weeklyValue").value);
    var biWeeklyValue = Number(document.getElementById("biWeeklyValue").value);
    var monthyValue   = Number(document.getElementById("monthyValue").value);
    var yearlyValue   = Number(document.getElementById("yearlyValue").value);
    */
    
    var hourly;
    var daily;
    var weekly;
    var biWeekly;
    var monthy;
    var yearly; 

    if(salaryAmt > 0)
    {
        console.log("valid");
    }
    else
    {
        alert("Please enter valid values");
        location.reload();
    }
    if(hoursPerWeek > 0)
    {
        console.log("valid");
    }
    else
    {
        alert("Please enter valid values");
        location.reload();
    }
    if(daysPerWeek > 0)
    {
        console.log("valid");
    }
    else
    {
        alert("Please enter valid values");
        location.reload();
    }

    if (salaryRate == "hour")
    {
        hourly = (salaryAmt).toFixed(2);
        daily = (hoursPerWeek/daysPerWeek * salaryAmt).toFixed(2);
        weekly = (daily * daysPerWeek).toFixed(2);
        biWeekly = (weekly * 2).toFixed(2);
        monthy = (weekly * 52 / 12).toFixed(2); 
        yearly = (monthy * 12).toFixed(2);
    }

    if (salaryRate == "day")
    {
        daily = salaryAmt.toFixed(2);
        hourly = (daily/(hoursPerWeek/daysPerWeek)).toFixed(2);
        weekly = (daily * daysPerWeek).toFixed(2);
        biWeekly = (weekly * 2).toFixed(2);
        monthy = (weekly * 52 / 12).toFixed(2); 
        yearly = (monthy * 12).toFixed(2);
    }

    if (salaryRate == "week")
    {   
        weekly = salaryAmt.toFixed(2);
        daily = (weekly/daysPerWeek).toFixed(2);
        hourly = (daily/(hoursPerWeek/daysPerWeek)).toFixed(2);
        biWeekly = (weekly * 2).toFixed(2);
        monthy = (weekly * 52 / 12).toFixed(2); 
        yearly = (monthy * 12).toFixed(2);
    }

    if (salaryRate == "bi-week")
    {
        biWeekly = salaryAmt.toFixed(2);
        weekly = (biWeekly/2).toFixed(2);  
        daily = (weekly/daysPerWeek).toFixed(2);
        hourly = (daily/(hoursPerWeek/daysPerWeek)).toFixed(2);
        monthy = (weekly * 52 / 12).toFixed(2); 
        yearly = (monthy * 12).toFixed(2);
    }

    if (salaryRate == "month")
    {
        monthy = salaryAmt.toFixed(2);
        biWeekly = (monthy * 12/26).toFixed(2);
        weekly = (biWeekly/2).toFixed(2);
        daily = (weekly/daysPerWeek).toFixed(2);
        hourly = (daily/(hoursPerWeek/daysPerWeek)).toFixed(2);
        yearly = (monthy * 12).toFixed(2);
    }

    if (salaryRate == "year")
    {
        yearly = salaryAmt.toFixed(2);
        monthy = (yearly/12).toFixed(2);
        biWeekly = (monthy * 12/26).toFixed(2);
        weekly = (biWeekly/2).toFixed(2);
        daily = (weekly/daysPerWeek).toFixed(2);
        hourly = (daily/(hoursPerWeek/daysPerWeek)).toFixed(2);
    }

    
    document.getElementById("hourlyValue").innerHTML = "$" + hourly;
    document.getElementById("dailyValue").innerHTML = "$" + daily;
    document.getElementById("weeklyValue").innerHTML = "$" + weekly;
    document.getElementById("biWeeklyValue").innerHTML = "$" +biWeekly;   
    document.getElementById("monthlyValue").innerHTML = "$" + monthy;   
    document.getElementById("yearlyValue").innerHTML = "$" + yearly;


    

    console.log(hourly, daily, weekly, biWeekly, monthy, yearly);
    return false;

}
