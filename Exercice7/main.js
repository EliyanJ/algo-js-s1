let names = []
names.push("vincent", "Paul", "Arthur")

for(let i= 0; i <names.length; i++){
    names[i] +=  " va à la pêche"
    console.log(names[i])
 }

 /* définir les names en tant que tableau [], 
 définir le compteur i à 0 */
 /* écrit dans la console chaque élément du tableau à chaque tour */

names.forEach(name => {
    name+= "va à la pêche"
    console.log(name)
})

/* oublie pas que name c'est pour dire pour chaque élément c'est pas 
le même que pour names le tableau */

