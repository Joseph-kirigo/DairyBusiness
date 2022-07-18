
var selling_price=45;
function totalProduction()
{
    var shedA = parseInt(document.getElementById('shedA').value);  
    
    var values = {}
    values["shedA"] = parseInt(document.getElementById('shedA').value);
    values["shedB"] = parseInt(document.getElementById('shedB').value);
    values["shedC"] = parseInt(document.getElementById('shedC').value);
    values["shedD"] = parseInt(document.getElementById('shedD').value);

  
    
    var total = values.shedA+values.shedB + values.shedC +values.shedD;

    document.getElementById("produce-header").innerHTML += '<div class="alert text-white bg-dark h4">Production</div>';
    document.getElementById("produce-body").innerHTML += "<tr><td>Your production in Shed A</td><td>"+ values.shedA +" litres per day </td></tr>";
    document.getElementById("produce-body").innerHTML += "<tr><td>Your production in Shed B</td><td>"+ values.shedB +" litres per day </td></tr>";
    document.getElementById("produce-body").innerHTML += "<tr><td>Your production in Shed C</td><td>"+ values.shedC +" litres per day </td></tr>";
    document.getElementById("produce-body").innerHTML += "<tr><td>Your production in Shed D</td><td>"+ values.shedD +" litres per day </td></tr>";

    document.getElementById("produce-body").innerHTML += "<tr><td>The total production is</td><td>" + total + " litres per day</td></tr>";
     

    resetForm();

    var daily = incomeOverTime(selling_price, 1);
    var weekly = incomeOverTime(selling_price, 7);
    var yearly = incomeOverTime(selling_price, 365);

    document.getElementById("produce-body").innerHTML += "<tr><td></td><td></td></tr>";
    document.getElementById("produce-body").innerHTML += "<tr><td>Your Daily income will be</td><td>Ksh " + (daily*total) + "</td></tr>";
    document.getElementById("produce-body").innerHTML += "<tr><td>Your Monthly income will be</td><td>Ksh " + (weekly*total) + "</td></tr>";
    document.getElementById("produce-body").innerHTML += "<tr><td>Your Yearly income will be</td><td>Ksh " + (yearly*total) + "</td></tr>";


    
    var leapyear = [
    { month : "January",income : (31 * total * selling_price)},
    { month : "February",income : (29 * total * selling_price) },
    { month : "March",income : (31 * total * selling_price) },
    { month : "April",income : (30 * total * selling_price) },
    { month : "May",income : (31 * total * selling_price) },
    { month : "June",income : (30 * total * selling_price) },
    { month : "July",income : (31 * total * selling_price) },
    { month : "August",income : (31 * total * selling_price) },
    { month : "September",income : (30 * total * selling_price) },
    { month : "October",income : (31 * total * selling_price) },
    { month : "November",income : (30 * total * selling_price) },
    { month : "December",income : (31 * total * selling_price) }
    ];
    
    document.getElementById("leapYear-div").innerHTML += '<div class="alert text-white bg-dark h4">Leap Year Income Per Month </div>';
    for(var x=0;x<12;x++)
     {
         document.getElementById("leapYear").innerHTML += "<tr><td>Your income for "+ leapyear[x].month + " is </td><td>Ksh. " + leapyear[x].income + "</td></tr></div>";
     }

    comparison(total)

}

function incomeOverTime(selling_price, time)
{
    return (selling_price*time)
}
