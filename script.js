

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
    
        // location.href = "profile.html";
    };
    
    
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
    profilePics.src = imgs.toString();
   
});



function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementsByTagName('link')[0];

    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == 'style.css') {
        theme.setAttribute('href', 'stylechange.css');
    } else {
        theme.setAttribute('href', 'style.css');
    }
}





{/* <button id="stylesheet1" onclick="initate();"> Default Style Sheet </button>
    <button id="stylesheet2" onclick="other();"> Dark Style Sheet </button>
function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initate() {
    var style1 = document.getElementById("stylesheet1");
    style1.onclick = swapStyleSheet("style.css");
}

function other() {
    var style2 = document.getElementById("stylesheet2");
    style2.onclick = swapStyleSheet("stylechange.css");
} */}