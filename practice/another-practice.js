// 10. load data
const loadCocktail = async () => {
  const inputField = document.getElementById("search-field");
  const inputText = inputField.value;
  inputField.value = ''; //clear input
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayCocktail(data);
}
// display show data
const displayCocktail = data => {
  const drinks = data.drinks;
  const cocktaildiv = document.getElementById('cocktail');
  for (const drink of drinks) {
    const { strDrink, strDrinkThumb, strInstructions } = drink;
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="card h-100">
        <img onclick="removeItem(event)" src="${strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${strDrink}</h5>
          <p class="card-text">${strInstructions}</p>
        </div>
      </div>
        `;
    cocktaildiv.appendChild(div);
  }
}
// delete item
const removeItem = (e) => {
  e.target.parentNode.parentNode.remove();

}