// Create class called Movie
// =========================================================

class Movie{
    
    // a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values. 
    // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
    constructor(title, studio, rating="PG­13"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        this.movies = [];
    }
    newMovie(element){
        this.movies.push(element);
    }
    getPG(){
        let temp = this.movies.filter(function(obj){
            return obj.rating === "PG­13";
        })
        return temp; 
    }
}


// Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
let allMovies = new Movie()
allMovies.newMovie(new Movie("Dont Breath", "Eon Productions", "R"));
allMovies.newMovie(new Movie("Big Hero 6", "Eon Productions", "PG­13"));
allMovies.newMovie(new Movie("A Dog's Journey", "Eon Productions", "PG­13"));
allMovies.newMovie(new Movie("Die Hard", "Eon Productions", "R"));


console.log('Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.');
console.log(allMovies.getPG());

// Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
let movie1 = new Movie("Casino Royale", "Eon Productions", "PG­13");

// call out the properties
console.log("Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”");
console.log("movie1.title", movie1.title);
console.log("movie1.studio", movie1.studio);
console.log("movie1.rating", movie1.rating);


// Convert UML diagram to Class Circle
// ==== =======================================================
// By default in JavaScript all all class instance properties and methods are public indicated by + icon in the image

class Circle{

    constructor(radius=1.0, color = "red"){
        this.radius = radius;
        this.color = color;
    }

    set setRadius(radius){
        this.radius = radius;
    }

    get getRadius() {
        return this.radius;
    }

    set setColor(color){
        return this.color = color;
    }

    get getColor(){
        return this.color;
    }

    toString(){
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    getArea(){
        return Math.PI * (this.radius ** 2);
    }

    getCircumference(){
        return 2 * Math.PI * this.radius;
    }

}

let circle1 = new Circle(10, "blue");

// console.log(circle1.toString())
// console.log(circle1.getArea())
// console.log(circle1.getCircumference())


// Write a “person” class to hold all the details.
// =====================================================
class Person{
    constructor(firstname, lastname, age, occupation){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.occupation = occupation;
    }
}

var Divi = new Person("Divi", "Seed", 30, "Designer");


// Write a class to calculate uber price.
// =====================================================


class uberCalculator{
    constructor(timeOfRide, rideDistance){
        // Fixed Components in Pricing Component
        this.baseFare = 60;
        this.costPerMin = 3;
        this.costPerMile = 6;
        this.bookingFee = 30;

        // Components that change based on uber ride
        this.timeOfRide = timeOfRide;
        this.rideDistance = rideDistance;
    }

    getUberCost(){

        // Base Fare + ((Cost per minute x time of the ride) + (cost per mile x ride distance) x surge boost multiplier) + booking fee = Passengers Ride Fare

        let calcPrice = this.baseFare + ((this.costPerMin * this.timeOfRide) + (this.costPerMile * this.rideDistance)) + this.bookingFee;

        return calcPrice;
    }
}

let Uber1 = new uberCalculator(10, 4, 25);
// console.log("Uber1.getUberCost()", Uber1.getUberCost())