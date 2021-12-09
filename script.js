

/* class for profile objects */
class Profile {
    constructor(name, diet, age, food, img) {
        this.name = name;
        this.diet = diet;
        this.age = age;
        this.food = food;
    }
}

/* arrays for object properties */
let names = ['Swedish Chef'];
let diets = ['Omnivore'];
let ages = ['61'];
let foods = ['Meatballs'];
let imgs = ['img/profile pic.jpg']

/* array for objects */
let profiles = [];

/* for loop to create objects */
for (let i = 0; i <1; i++) {
    profiles.push(new Profile(names[i], diets[i], ages[i], foods[i]));
}

/* displays object properties in img and p tags */
window.addEventListener('load', (event) => {

        /* displays object properties in p tag */
        nameDisplay = document.getElementById('nameDisplay');
        nameDisplay.innerHTML = names.toString();

        /* displays object properties in p tag  */
        dietDisplay = document.getElementById('dietDisplay');
        dietDisplay.innerHTML = diets.toString();

        /* displays object properties in p tag  */
        ageDisplay = document.getElementById('ageDisplay');
        ageDisplay.innerHTML = ages.toString();

        /* displays object properties in p tag  */
        foodDisplay = document.getElementById('foodDisplay');
        foodDisplay.innerHTML = foods.toString();

        /* displays object properties in img tag with variable */
        var profilePics = document.getElementById('profilePics');
        console.log(profilePics);
        profilePics.src = imgs.toString();
       
    });
