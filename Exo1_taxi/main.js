let playlist = ["Annisa-Wejdne", "Retour-du-V-vald", 
"travisscott-sicomode","bendoZ-Pas-bete", "Gambi-Mbappe"]

class Personnage{
    constructor(name, pv){
       this.name = name
       this.pv = pv
    }

    trajet(john){
        let nbrFeuxRestant = 30
        let nbrFeuxRouges = 0
        let nbr_changementsTaxi = 0

        while(nbrFeuxRestant > 0 && this.pv > 0){

           
            let luck = Math.floor(Math.random()*playlist.length)
            let selection_luck = playlist[luck]
            console.log("Tu as la musique",selection_luck, "dans la voiture")
            
            if (selection_luck === playlist[0]){

                john.pv-=1
                console.log("il reste ",john.pv, "pv à John")
                nbrFeuxRouges+=1
                nbr_changementsTaxi+=1
                

            } 
            
            else{
                nbr_changementsTaxi+=1
                console.log("il te reste",john.pv, "pv")
                

            }
            nbrFeuxRestant-=1
            console.log("Il reste",nbrFeuxRestant, "feux rouges à passer")
           
                
            
        }
        if(john.pv === 0){
            console.log("Tu as explosé")
            console.log("Tu as fait",nbr_changementsTaxi,"changements en tout")
        }
        if(nbrFeuxRestant === 0){
            console.log("Tu es arrivé ! il te reste",John.pv,"pv")
        }
           
        
        

    }
}

let John = new Personnage("John",10 )
console.log(John.trajet(John))
