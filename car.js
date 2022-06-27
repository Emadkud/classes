// 'use strict'
// // → Créez un dossier `classes` dans lequel vous créerez un fichier `index.js`

// // → De la même manière que l’exercice précédent, vous ferez les exercices les uns à la suite des autres en commentant leur titre

// // ## 1 - Batmobile

// // - Créer un fichier `car.js`
// // - Dans car.js, créer un class `Car` avec 2 propriétés de base:
// //     - `brand`
// //     - `speed`
// // - Ajouter 3 méthodes à la classe `Car`:
// //     - `accelerate` (accélérer) qui prendra en paramètre un nombre. Cette méthode va ajouter le nombre a la propriété `speed` définie plus haut
// //     - `brake` (freiner) qui prendra en paramètre un nombre. Cette méthode va soustraire le nombre à la propriété `speed` définie plus haut
// //     - `describe` qui va afficher  `xxx running at yyy km/h` avec `brand` a la place de `xxx` et `speed` a la place de `yyy`
// // - Créer une variable `ford` et  lui assigner l'initialisation de la classe avec la brand `ford` et speed `0` et afficher la variable ford dans la console
// // - Exécuter la fonction `accelerate` de ford avec une vitesse de 50 km/h et afficher `ford` dans la console
// // - Exécuter la fonction `brake` de ford avec une vitesse de 25 km/h et afficher `ford` dans la console
// // - Faites la même chose avec une nouvelle voiture

// // class Car  {
// //     constructor(brand,speed) {
// //         this.brand = brand
// //         this.speed = speed
// //     }
// //     accelerate (number) => {

// //      return   this.speed = this.speed + number
        
// //     }
// //     brake (number) => {
// //         return   this.speed = this.speed - number

// //     }
// //     describe () => {
// //         return `${this.brand} running at ${this.speed} km/h `
// //     }

// // }

// // const ford = new Car ("ford", 0)

// // console.log(ford.accelerate(30))

// // console.log(ford.brake(20))

// // console.log(ford.describe())


// // // const bmw = new Car ("bmw", 0)

// // // console.log(bmw.accelerate(40))

// // // console.log(bmw.brake(10))

// // // console.log(bmw.describe())






// // ## 2 - TV

// // - Créer une class `TV` avec les propriétés `brand`, `channel`, `volume`. La chaine par défaut sera 1, et le volume par défaut sera 50
// // - Ajouter deux méthodes pour baisser et augmenter le volume. Le volume ne peut pas aller en dessous de 0, et pas au dessus de 100
// // - Ajouter une méthode pour changer de chaine. Notre télé a seulement 50 chaines, si on essaye de changer une chaine au dessus de 50, on restera sur la chaine courante. Pareil pour une chaine en dessous de 0
// // - Ajouter une méthode pour reset les paramètres de notre `TV`, qui remettra la chaine et le volume de base
// // - Ajouter une méthode `describe` qui va afficher les infos de notre `TV`
// // - Testez votre classe et ses méthodes avec différentes valeurs





// class Tv  {
//     constructor(brand, channel, volume)  {
//         this.channel = 1
//         this.volume = 50
//         this.brand = brand

//     }


//     increaseVolum = (number) => {

//         if(this.volume < 100) {
//             return  this.volume = this.volume + number
//         }
        
        
//     }

//     baisserVolum = (number) => {
//         if(this.volume > 0) {
//             return this.volume = this.volume - number
//         }
//     }

//     changeChannel  = (number) => {
//         if( number < 50 && number > 0  )

//         this.channel = number


//     }
//     describe = () => {
//                 return ` La télé ${ this.brand} est la chaine ${this.channel} le volume ${this.volume}   `
//          }


// }

//     const tv = new Tv ("LG")
//     console.log(tv.increaseVolum(20))
//     console.log(tv.baisserVolum(12))
//     tv.changeChannel(2)
//     console.log(tv.describe())
    


//     const sam = new Tv ("sam")
//     console.log(sam.increaseVolum(10))
//     console.log(sam.baisserVolum(20))
//     sam.changeChannel(4)
//     console.log(sam.describe())








// ### 3 - Video games

// - Choisissez un jeu de votre choix, et tentez d’implémenter les différentes classes de ce jeu (pas toutes bien évidemment)
//     - Exemple: fifa: (player, team, game, etc.)
// - Si vous n’avez pas d’exemple de jeux vidéos, vous pouvez vous baser sur une application (airbnb, uber, whatsapp, etc.)



class  player {
    constructor(nickname, age, country){
        this.nickname = nickname
        this.age = age
        this.country = country
    }

displayPlayer = () => {
    return this.nickname = Emad
    
}
agePlayer = () => {
    return this.age = 31
    
}
 originePlayer = () => {
    return this.country = Kurdistan
    
}

}

const fifa = new player ("Fifa")






// class  footballPlayer {
//     constructor( name , age , country, speed ) {
        
//     }
// }




