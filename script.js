

/* class for profile objects */
class Profile {
    constructor(name, diet, age, food, img) {
        this.name = name;
        this.diet = diet;
        this.age = age;
        this.food = food;
    }

    toString() {
        return (this.name);
    }

    name() {
        return (this.name);
    }

    diet() {
        return (this.diet);
    }

    age() {
        return (this.age);
    }

    food() {
        return (this.food);
    }

    img() {
        return (this.img);
    }
}

let names = ['Swedish Chef'];
let diets = ['Omnivore'];
let ages = ['61'];
let foods = ['Meatballs'];
let imgs = ['img/profile pic.jpg']

let profiles = [];

/* for loop to create objects */
for (let i = 0; i <1; i++) {
    profiles.push(new Profile(names[i], diets[i], ages[i], foods[i]));
}

window.addEventListener('load', (event) => {


        nameDisplay = document.getElementById('nameDisplay');
        nameDisplay.innerHTML = names.toString();

        dietDisplay = document.getElementById('dietDisplay');
        dietDisplay.innerHTML = diets.toString();

        ageDisplay = document.getElementById('ageDisplay');
        ageDisplay.innerHTML = ages.toString();

        foodDisplay = document.getElementById('foodDisplay');
        foodDisplay.innerHTML = foods.toString();

        var profilePics = document.getElementById('profilePics');
        console.log(profilePics);
        profilePics.src = imgs.toString();
       
    });



// window.addEventListener('load', (event) => {
// displayName = document.getElementById('nameDisplay');
// displayName.innerHTML = profiles[0].toString();
// });

