const apiKey = "0074569e89314ee7aa6e1cafa68d4f48";

const recipeListEl = document.getElementById("recipe-list")
const resetItems = document.getElementById("reset-items")

resetItems.addEventListener("click", init)

function displayRecipes(recipes) {
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeItemEL = document.createElement("li");
        recipeItemEL.classList.add("recipe-item");
        const recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image
        recipeImageEl.alt = "recipe image";


        const titleEl = document.createElement("h2");
        titleEl.innerHTML = recipe.title;

        const ingredientEl = document.createElement("p");
        ingredientEl.innerHTML = `
        <strong>Indredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(",")}
        `;

        const recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";

        recipeItemEL.appendChild(recipeImageEl);
        recipeItemEL.appendChild(titleEl);
        recipeItemEL.appendChild(ingredientEl);
        recipeItemEL.appendChild(recipeLinkEl);

        recipeListEl.appendChild(recipeItemEL);
    });


}

async function getRecepies() {
    const response = await fetch(`https:///api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`)

    const data = await response.json();

    return data.recipes
}

async function init() {
    const recipes = await getRecepies();
    displayRecipes(recipes);
    console.log(recipes);
}

init()