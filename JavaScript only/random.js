console.log("project connected");

const suggestBtn = document.querySelector("#suggestBtn")
const display = document.querySelector("#disPlay");
const showcase = document.querySelector("#showcase")

let mealCategories = [];

async function getRecipe(){
    try {
        const res = await fetch("https://themealdb.com/api/json/v1/1/categories.php")
        const data = await res.json();
        mealCategories = data.categories;
        console.log("Categories fetched", mealCategories)
    } catch (error) {
        console.error("Error Fetching categories", error)
    }

}

function randomize(){
    showcase.innerHTML = "";
    if (mealCategories.length === 0){
        display.innerText = "Loading.."
        return;
    }
    //Display the name
    const randomCategory = mealCategories[Math.floor(Math.random() * mealCategories.length)];
   
         //Save the selected category to localstorage
        localStorage.setItem('lastMealCategory', JSON.stringify(randomCategory)); 
        display.innerHTML = `She's hungry: <strong>${randomCategory.strCategory}</strong>`
        const div = document.createElement("div");
        div.classList.add("card")
        div.innerHTML = `
        <img src="${randomCategory.strCategoryThumb}" alt=${randomCategory.strCategory}"/>
        <div class = "card-body">
        <h5 class = "mealType">${randomCategory.strCategory}</h5>
        <p class= "mealDescription">${randomCategory.strCategoryDescription}</p>
        </div>
        `;
        showcase.appendChild(div);
 
}
    

  

   

 function displaySavedSuggestion(category){
      const div = document.createElement("div");
        div.classList.add("card")
        div.innerHTML = `
       <img src="${category.strCategoryThumb}" alt=${category.strCategory}"/>
        <div class = "card-body">
        <h5 class = "mealType">${category.strCategory}</h5>
       
        </div>
        `;
        showcase.appendChild(div);
 
 }

//create a card

// wait for categories to be fetched. 

async function init(){
     await getRecipe();
    const savedFoods = localStorage.getItem('lastMealCategory');
    if (savedFoods) {
        const parsed = JSON.parse(savedFoods);
        displaySavedSuggestion(parsed);
    } else{
       
        randomize()
    }
   
    suggestBtn.addEventListener("click", randomize)
}

init();


console.log('project connected');

const suggestBtn = document.querySelector('#suggestBtn');

let meals = [];

const global = {
    currentPage: window.location.pathname,
};


suggestBtn.addEventListener('click', randomize);



async function getRecipe() {
   
        const res = await fetch('https://themealdb.com/api/json/v1/1/categories.php');
        const data = await res.json();
        // console.log(data.categories[0].strCategory);
    const mealCategories = data.categories;
    

};
getRecipe();

// console.log(window.location.pathname)



function randomize() { 
    let mealSuggestions = [
    'Beef',
    'Chicken',
    'Dessert',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
    'Breakfast',
    'Goat'
];
   
let disPlay = document.querySelector('#disPlay');
disPlay.innerHTML = mealSuggestions[Math.floor(Math.random() * mealSuggestions.length)];
    console.log(disPlay.innerHTML);

    let endpoint = disPlay;


   
    mealSuggestions.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        
            <img ${} alt="Food"/>
            <div class="card-body">
            <h5 class="mealType>${}</h5>
            <p class="mealDescription">${displayCats.strCategoryDescription}</p>
            </div>
        
        `;
        document.querySelector('#showcase').appendChild(div);
    })

    console.log(displayCats.forEach);
    
};
randomize();

