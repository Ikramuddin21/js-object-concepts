document.getElementById('spinner').style.display = 'none';
document.getElementById('noResult').style.display = 'none';

const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toggleSearchResult = displayStyle => {
    document.getElementById('meals').style.display = displayStyle;
}

const searchMeal = () => {
    const searchInput = document.getElementById('input-field');
    const searchText = searchInput.value;
    toggleSpinner('block');
    toggleSearchResult('none');
    searchInput.value = '';
    loadMeal(searchText);
    
}
const loadMeal = searchText => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(res => res.json())
    .then(data => displayMeal(data))
}
loadMeal('fish');
const displayMeal = data => {
    // console.log(data);
    const meals = data.meals;
    const mealsDiv = document.getElementById('meals');
    mealsDiv.textContent = '';
    if(!meals) {
        document.getElementById('noResult').style.display = 'block';
    }
    else {
        meals?.forEach(meal => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h1>${meal.strMeal}</h1>
                <p>${meal.strIngredient16 ? meal.strIngredient16 : ''}</p>
                <button onclick="mealDetail('${meal.strMeal}')">Click me</button>
            `;
            mealsDiv.appendChild(div);
        })
    }
    toggleSpinner('none');
    toggleSearchResult('block');
}
const mealDetail = mealName => {
    console.log(mealName);
}