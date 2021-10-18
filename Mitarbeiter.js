class Mitarbeiter {
    constructor (nachname, vorname) {
        this.nachname = nachname;
        this.vorname = vorname;
      }

      getNachname() {
          return this.nachname;
      }
}


const mitarbeiter1 = new Mitarbeiter(prompt("Nachname", prompt("Vorname")));
console.log(mitarbeiter1.getNachname());

   
