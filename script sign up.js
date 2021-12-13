

/* class for profile objects */
class Profile {
    constructor(name, diet, age, food, img) {
        this.name = name;
        this.diet = diet;
        this.age = age;
        this.food = food;
        this.img = img;
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
    profiles.push(new Profile(names[i], diets[i], ages[i], foods[i], imgs[i]));
}



    function newProfile () {
        var name = document.getElementById('nameInput').value;
        var age = document.getElementById('ageInput').value;
        var food = document.getElementById('foodInput').value;
        var diet = document.getElementById('browser').value;
        var img = document.getElementById('imageInput').value;
    
        profiles.push(new Profile (name, age, food, diet, img));
    
        document.getElementById('nameInput').value = '';
        document.getElementById('ageInput').value = '';
        document.getElementById('foodInput').value = '';
        document.getElementById('browser').value = ''
        document.getElementById('imageInput').value = ''

    };
    



