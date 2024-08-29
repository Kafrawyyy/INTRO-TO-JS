const human = {
    name : "mostafa" , 
    "Full name#" : "Mostafa Mohamed",
    humanBeing : true , 
    eatFood : function(){
        console.log("I am eating fooood ") ;
    }
};

console.log(human);

human.name = "hamadaa"
console.log(human.name);
console.log(human["Full name#"]); // 3lshan lw fi character
human.eatFood();

class Human{
    constructor(name , age) {
        this.name = name ;
        this.age = age ;
    }

    eatingFood (){
        console.log("Iam eating class foooood");
    }
}
const myHuman = new Human("mostafa" , 50);
console.log(myHuman);
console.log(myHuman.name);
console.log(myHuman["age"]); // 3lshan lw fi character
myHuman.eatingFood(); 
