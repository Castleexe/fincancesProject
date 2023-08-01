function calculate()
{   
    let salaryAmt = Number(document.getElementById("SalaryAmount").value);
    let salaryRate = document.getElementById("SalaryRate").value;
    let hoursPerWeek = Number(document.getElementById("hoursPerWeek").value);
    let daysPerWeek = Number(document.getElementById("daysPerWeek").value);
    
    if (salaryRate == "hour")
    {
        var hourly = (salaryAmt).toFixed(2);
        var daily = (hoursPerWeek/daysPerWeek * salaryAmt).toFixed(2);
        var weekly = (daily * daysPerWeek).toFixed(2);
        var biWeekly = (weekly * 2).toFixed(2);
        var monthy = (weekly * 52 / 12).toFixed(2); 
        var yearly = (monthy * 12).toFixed(2);
    }

    if (salaryRate == "day")
    {
        var daily = salaryAmt.toFixed(2);
        var hourly = (daily/(hoursPerWeek/daysPerWeek)).toFixed(2);
        var weekly = (daily * daysPerWeek).toFixed(2);
        var biWeekly = (weekly * 2).toFixed(2);
        var monthy = (weekly * 52 / 12).toFixed(2); 
        var yearly = (monthy * 12).toFixed(2);
    }

    if (salaryRate == "week")
    {   
        var weekly = salaryAmt.toFixed(2);
        var daily = (weekly/daysPerWeek).toFixed(2);
        var hourly = (daily/(hoursPerWeek/daysPerWeek)).toFixed(2);
        var biWeekly = (weekly * 2).toFixed(2);
        var monthy = (weekly * 52 / 12).toFixed(2); 
        var yearly = (monthy * 12).toFixed(2);
    }

    if (salaryRate == "bi-week")
    {
        var biWeekly = salaryAmt.toFixed(2);
        var weekly = (biWeekly/2).toFixed(2);  
        var daily = (weekly/daysPerWeek).toFixed(2);
        var hourly = (daily/(hoursPerWeek/daysPerWeek)).toFixed(2);
        var monthy = (weekly * 52 / 12).toFixed(2); 
        var yearly = (monthy * 12).toFixed(2);
    }

    if (salaryRate == "month")
    {
        var monthy = salaryAmt.toFixed(2);
        var biWeekly = (monthy * 12/26).toFixed(2);
        var weekly = (biWeekly/2).toFixed(2);
        var daily = (weekly/daysPerWeek).toFixed(2);
        var hourly = (daily/(hoursPerWeek/daysPerWeek)).toFixed(2);
        var yearly = (monthy * 12).toFixed(2);
    }

    if (salaryRate == "year")
    {
        var yearly = salaryAmt.toFixed(2);
        var monthy = (yearly/12).toFixed(2);
        var biWeekly = (monthy * 12/26).toFixed(2);
        var weekly = (biWeekly/2).toFixed(2);
        var daily = (weekly/daysPerWeek).toFixed(2);
        var hourly = (daily/(hoursPerWeek/daysPerWeek)).toFixed(2);
    }

    console.log(hourly, daily, weekly, biWeekly, monthy, yearly);
    return false;
}

