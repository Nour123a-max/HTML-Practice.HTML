//Calling my DOM elements
   const mealsContainer = document.getElementById("meals");
   const backBtn = document.getElementById("back-btn");
   const errorContainer = document.getElementById("error-container");
   const resultHeading = document.getElementById("result-heading");
   const mealDetails = document.getElementById("meal-details");
   const mealDetailsContent = document.querySelector(".meal-details-content");
   const srchInput = document.getElementById("srch-input");
   const srchBtn = document.getElementById("srch-btn");

  const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";
  const SEARCH_URL = `${BASE_URL}search.php?s=`;
  const LOOKUP_URL = `${BASE_URL}lookup.php?i=`;


   // Add event listeners
   srchBtn.addEventListener("click", getMeals);
   backBtn.addEventListener("click",() => mealDetails.classList.add("hidden"));
   mealsContainer.addEventListener("click", handleMealClick);

   srchInput.addEventListener("keypress", (e) => {
      if(e.key === "Enter") getMeals();

});
 
 async function getMeals() {
  const searchWord = srchInput.value.trim();

 if (!searchWord) { // Checks for empty string, null, undefined,
  errorContainer.textContent = "Please enter a recipe name";
  errorContainer.classList.remove("hidden");
  return;
}

try {
  resultHeading.textContent = `Searching for ${searchWord} ...`;
  mealsContainer.innerHTML = "";
  errorContainer.classList.add("hidden");

  const response = await axios.get(`${SEARCH_URL}${searchWord}`);
  const data = response.data;
  console.log(data);

  if (!data.meals) { // Check if data.meals is null or undefined.
    resultHeading.textContent = "";
    mealsContainer.innerHTML = "";
    errorContainer.textContent = `No recipes found for ${searchWord}. Try another recipe name!`;
    errorContainer.classList.remove("hidden");
  } else {
    resultHeading.textContent = `Search results for ${searchWord}:`;
    displayMeals(data.meals);
    srchInput.value = "";
  }
} catch (error) {
  errorContainer.textContent = "Error, Please try again later.";
  errorContainer.classList.remove("hidden");
}
};

function displayMeals(meals) {
    mealsContainer.innerHTML = ""; // Clear existing content

    meals.forEach((meal) => {
        // Create the main meal container div
        const mealDiv = document.createElement("div");
        mealDiv.classList.add("meal");
        mealDiv.dataset.mealId = meal.idMeal;

        // Create and append the meal image
        const mealImg = document.createElement("img");
        mealImg.src = meal.strMealThumb;
        mealImg.alt = meal.strMeal;
        mealImg.classList.add("meal-img");
        mealDiv.appendChild(mealImg);

        // Create and append the meal info div
        const mealInfo = document.createElement("div");
        mealInfo.classList.add("meal-info");
        mealDiv.appendChild(mealInfo);

        // Create and append the meal title
        const mealTitle = document.createElement("h3");
        mealTitle.classList.add("meal-title");
        mealTitle.textContent = meal.strMeal;
        mealInfo.appendChild(mealTitle);

        // Conditionally create and append the meal category
        if (meal.strCategory) {
            const mealCategory = document.createElement("div");
            mealCategory.classList.add("meal-category");
            mealCategory.textContent = meal.strCategory;
            mealInfo.appendChild(mealCategory);
        }

        // Create and append the favorite button
        const favoriteBtn = document.createElement("button");
        favoriteBtn.classList.add("favorite-btn");
        favoriteBtn.dataset.mealId = meal.idMeal;
        favoriteBtn.textContent = "❤ Favorite";
        mealInfo.appendChild(favoriteBtn);

        // Append the entire meal div to the mealsContainer
        mealsContainer.appendChild(mealDiv);
    });

    // Add event listeners for favorite buttons
    document.querySelectorAll(".favorite-btn").forEach((btn) => {
        btn.addEventListener("click", handleFavoriteClick);
    });
}

function handleFavoriteClick(e) {
  e.stopPropagation(); // Prevent meal click
  const mealId = e.target.getAttribute('data-meal-id');
  // Get meal info from DOM
  const mealCard = e.target.closest('.meal');
  const mealTitle = mealCard.querySelector('.meal-title').textContent;
  const mealImg = mealCard.querySelector('img').src;
  const mealCategory = mealCard.querySelector('.meal-category')?.textContent || "";
  // Build favorite object
  const favorite = {
    id: mealId,
    title: mealTitle,
    img: mealImg,
    category: mealCategory
  };
  // Get current favorites
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  // Avoid duplicates
  if (!favorites.some(fav => fav.id === mealId)) {
    favorites.push(favorite);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Added to favorites!');
  } else {
    alert('Already in favorites!');
  }
}

async function handleMealClick(e) {
  try {
    const mealEl = e.target.closest(".meal");
    if (!mealEl) return;
    const mealId = mealEl.getAttribute("data-meal-id");
    const response = await fetch(`${LOOKUP_URL}${mealId}`);
    const data = await response.json();
    console.log(data);
    if (data.meals && data.meals[0]) {
      const meal = data.meals[0];
      const ingredients = Array.from({ length: 20 }, (_, i) => ({
        ingredient: meal[`strIngredient${i + 1}`],
        measure: meal[`strMeasure${i + 1}`]
      })).filter(item => item.ingredient && item.ingredient.trim() !== "");
      mealDetailsContent.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-details-img">
        <h2 class="meal-details-title">${meal.strMeal}</h2>
        <div class="meal-details-category">
          <span>${meal.strCategory || "Uncategorized"}</span>
        </div>
        <div class="meal-details-instructions">
          <h3>Instructions</h3>
          <p>${meal.strInstructions}</p>
        </div>
        <div class="meal-details-ingredients">
          <h3>Ingredients</h3>
          <ul class="ingredients-list">
             ${ingredients
                 .map(
                   (item) => `
                 <li><i class="fas fa-check-circle"></i> ${item.measure} ${item.ingredient}</li>
               `
                 )
                 .join("")}
             </ul>
           </div>
           ${
             meal.strYoutube
               ? `
             <a href="${meal.strYoutube}" target="_blank" class="youtube-link">
               <i class="fab fa-youtube"></i> Watch Video
             </a>
           `
               : ""
           }
         `;

      mealDetails.classList.remove("hidden");
      mealDetails.scrollIntoView({ behavior: "smooth" });
    }
  } catch (error) {
    errorContainer.textContent = "Could not load recipe details. Please try again later.";
    errorContainer.classList.remove("hidden");
  }
}
// Add event listeners for favorite buttons
   document.querySelectorAll('.favorite-btn').forEach(btn => {
     btn.addEventListener('click', handleFavoriteClick);
   });

function showFavorites() {
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  mealsContainer.innerHTML = "";
  if (favorites.length === 0) {
    mealsContainer.innerHTML = '<p>No favorite meals yet.</p>';
    return;
  }
  favorites.forEach(meal => {
    mealsContainer.innerHTML += `
      <div class="meal" data-meal-id="${meal.id}">
        <img src="${meal.img}" alt="${meal.title}" class="meal-img">
        <div class="meal-info">
          <h3 class="meal-title">${meal.title}</h3>
          ${meal.category ? `<div class="meal-category">${meal.category}</div>` : ""}
          <button class="remove-favorite-btn" data-meal-id="${meal.id}">Remove</button>
        </div>
      </div>
    `;
  });
  // Add event listeners for remove buttons
  document.querySelectorAll('.remove-favorite-btn').forEach(btn => {
    btn.addEventListener('click', handleRemoveFavoriteClick);
  });
}

function handleRemoveFavoriteClick(e) {
  e.stopPropagation();
  const mealId = e.target.getAttribute('data-meal-id');
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  favorites = favorites.filter(fav => fav.id !== mealId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  showFavorites();
}

// Optionally, add a button to show favorites
const showFavBtn = document.createElement('button');
showFavBtn.textContent = 'Show Favorites';
showFavBtn.id = 'show-fav-btn';
document.body.insertBefore(showFavBtn, mealsContainer);
showFavBtn.addEventListener('click', showFavorites);



// Navigation 
const navSearchBtn = document.getElementById('nav-search');
const navFavoritesBtn = document.getElementById('nav-favorites');
const navContactBtn = document.getElementById('nav-contact');
const searchSection = document.getElementById('search-section');
const contactSection = document.getElementById('contact-section');

navSearchBtn.addEventListener('click', () => {
  searchSection.classList.remove('hidden');
  mealsContainer.classList.remove('hidden');
  resultHeading.classList.remove('hidden');
  contactSection.classList.add('hidden');
  showFavBtn.classList.remove('hidden');
});

navFavoritesBtn.addEventListener('click', () => {
  searchSection.classList.add('hidden');
  resultHeading.classList.add('hidden');
  contactSection.classList.add('hidden');
  showFavorites();
  showFavBtn.classList.add('hidden');
});

navContactBtn.addEventListener('click', () => {
  searchSection.classList.add('hidden');
  mealsContainer.classList.add('hidden');
  resultHeading.classList.add('hidden');
  contactSection.classList.remove('hidden');
  showFavBtn.classList.add('hidden');
});

