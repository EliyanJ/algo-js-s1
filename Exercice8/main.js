let dndCharacterProfil = {
    name : "Reinor",
    level :5,
    class : "Paladin",
    atk : 25,
    def : 12.5,
    isAlive : false,
}

console.log(dndCharacterProfil.atk)


/*un profil pour un personnage nom variable qu'on veeut
un Object, profil personnage...au moins 3clés
une clé pour le nom prénom et âge.*/

let Profil = {
    firstName : "Tiliyan",
    lastName :"Hunter",
    age : 19,
}


let sentence = Profil.firstName + " " + Profil.lastName + "  a " + Profil.age + " ans et est à l'école"
console.log(sentence)

/* ou cette version */
console.log(Profil.firstName + " " + Profil.lastName +" a "+ Profil.age + " ans et est à l'école" )

