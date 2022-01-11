var Schaltjahr = class Schaltjahr {
    method () {
        function leapYear(year) {
            year = prompt("What year do you want to check ?");
            var result;
            if (year == 0 || year == "") {
                alert("You have to give a real year!");
                return;
            };
            if (year % 4 == 0 && year % 100 != 0 || (year % 400 == 0)) {
                result = true;
                console.log(result);
                alert(year + " is a leap Year = " + result);
                return result;
            } else {
                result = false;
                console.log(result);
                alert(year + " is a leap Year = " + result);
                return result;
            };
            
        }
        new Schaltjahr();
    }
    
}
