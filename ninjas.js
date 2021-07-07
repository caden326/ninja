class Ninja {
    constructor(name ){
        this.name = name;
        this.health = 100
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log( `${this.name}`)
    }

    showStats(){
        console.log(`${this.health} , ${this.speed} , ${this.strength}`)
    }
    drinkSake (){
        this.health += 10;
        console.log(`${ this.name } drank sake and now has ${this.health} health`)
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();