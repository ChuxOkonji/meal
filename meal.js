const menu = {
    _courses : {
        appetizers: [],
        mains: [],
        desserts: [],

    },
    get appetizers() {
        return this._courses.appetizers
    },
    set appetizers (appetizersIn) {
        this._courses.appetizers.push(appetizersIn)
    },
    get mains() {
        return this._courses.mains
    },
    set mains(mainIn) {
        this._courses.mains.push(mainIn)

    },
    get desserts() {
        return this._courses.desserts
    },
    set desserts(dessertsIn) {l
        this._courses.desserts.push(dessertsIn)

    },

    get courses () {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },

    addDishToCourse(courseName, dishName, dishPrice) {
       const dish = {
            name:  dishName,
            price:  dishPrice
        }

        this[courseName] = dish;

    },

    getRandomDishFromCourse(courseName) {
        return this[courseName][Math.floor(Math.random()*this[courseName].length)]
        //this method utilizes our getter method, hence the use of this[courseName]
        //this[courseName] gives us access to the array of objects in the courses
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers')
        const main = this.getRandomDishFromCourse('mains')
        const dessert = this.getRandomDishFromCourse('desserts')

        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Meals to be served are: ${appetizer.name}, ${main.name}, and ${dessert.name}.Total cost for the three-course meal is: $${totalPrice}. `
    }

}
menu.addDishToCourse('appetizers','sandwich', 5);
menu.addDishToCourse('appetizers','berries', 6);
menu.addDishToCourse('appetizers','roasted corn', 4);
menu.addDishToCourse('appetizers','oat meal', 7);
menu.addDishToCourse('mains','jolof rice', 10);
menu.addDishToCourse('mains','plantain and egg sauce', 12);
menu.addDishToCourse('mains','fried rice', 12);
menu.addDishToCourse('mains','french fries', 9);
menu.addDishToCourse('desserts','fruit salad', 3);
menu.addDishToCourse('desserts','veggies salad', 2);
menu.addDishToCourse('desserts','orange juice', 1.5);
menu.addDishToCourse('desserts','peanut paste', 2);

let meal = menu.generateRandomMeal()
console.log(meal)
