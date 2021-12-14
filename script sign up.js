const toggleDropdown = document.querySelector(".sub-links.container");
console.log(toggleDropdown);
const menu = document.querySelector(".drop-down.icon");

menu.addEventListener("click", () => {
  toggleDropdown.classList.toggle("show");
});

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

// /* arrays for object properties */
// let names = ['Swedish Chef'];
// let diets = ['Omnivore'];
// let ages = ['61'];
// let foods = ['Meatballs'];
// let imgs = ['img/profile pic.jpg']

/* array for objects */
let profiles = [];

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

        //localStorage.setItem('')
    };
    
//myStorage = window.localStorage;