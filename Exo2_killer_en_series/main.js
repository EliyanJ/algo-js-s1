// Déjà une équipe de choc  5survivants
// Un tueur en série "Jason", ses stats il peut tuer et 100pv


const caracteristic = ["nerd", "sportif", "blonde", "enfant", "adulte_random", "tueurEnSerie"]
const prenoms = ["Alice", "Bob", "Carol", "Dave", "Eve"]

class Personnage {
    constructor(name, type) {
        this.name = name
        this.type = type
        this.pv = 100
        this.isAlive = true
          }

    attack(survivor) {
        let choice = Math.random()
        if (choice < 0.3) {
            console.log(this.name + " a tué " + survivor.name + " (" + survivor.type + ")")
            survivor.isAlive = false
        } else if (choice < 0.5) {
            console.log(survivor.name + " (" + survivor.type + ") a esquivé et a infligé 10 dmg à " + this.name)
            this.pv -= 10
        } else {
            console.log(survivor.name + " (" + survivor.type + ") a infligé 15 dmg à " + this.name + " mais est mort")
            this.pv -= 15
            survivor.isAlive = false 
        }
    }
}
let survivants = []
for (let i = 0; i < 5; i++) {
    let name = prenoms[Math.floor(Math.random()  * prenoms.length)]
    let type = caracteristic[Math.floor(Math.random() * caracteristic.length)]
    survivants.push(new Personnage(name, type))
}
let jason = new Personnage("Jason", "tueurEnSerie")

while (jason.isAlive && survivants.some(function(s) { return s.isAlive })) {
    for (let i = 0; i < survivants.length; i++) {
        if (survivants[i].isAlive) {
            jason.attack(survivants[i])
            if (jason.pv <= 0) {
                jason.isAlive = false
                console.log("Jason est mort. Les survivants ont gagné !")
                break
            }
        }
    }
}
let morts = []
for (let i = 0; i < survivants.length; i++) {
    if (!survivants[i].isAlive) {
        morts.push(survivants[i].name + " (" + survivants[i].type + ")")
    }
}
console.log("MORTS : " + morts.join(', '))
