//var Schaltjahr = class Schaltjahr {
 //   method () {
        function leapYear(year, result) {
            year = prompt("What year do you want to check ?");
            var result;
            if (year == 0 || year == "") {
                alert("Geben sie ein richtiges Jahr ein!");
            };
            if (year % 4 == 0 && year % 100 != 0 || (year % 400 == 0)) {
                result = true;
                console.log(result);
                return result;
            } else {
                result = false;
                console.log(result);
                return result;
            };
            
        }
        leapYear();
       // new Schaltjahr();
   // }
//}
