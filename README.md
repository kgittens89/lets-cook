## Let's Cook!
> My app is called Let’s Cook! It’s a recipe app for people who have trouble deciding on what to cook for the day. Users are initially presented with 3 random recipe choices, which when clicked, leads to the recipe details. Users can also click the "Randomizer" for a random recipe choice. Happy Cooking!

## Link to Deployed App

> https://focused-shannon-5102d7.netlify.app/

## API Used
> https://spoonacular.com/food-api/docs


## Technologies Used 
- CSS
- Javascript
- React
- Visual Studio Code Version 1.63.2

## Installation Instructions
> Note: This app was created using Visual Studio Code Version 1.63.2

- Fork and clone this repo into personal directory of choice

    ``` git clone [SSH or HTTPS KEY] ```

- Change into the repo

    ``` cd lets-cook ```

- Install dependencies

    ``` npm install ```

- Open the folder in VScode

    ``` code . ```

- Start up server

    ``` npm start ```


## Example Data Response 
```Object
aggregateLikes: 1
analyzedInstructions: [{…}]
cheap: false
creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit"
cuisines: []
dairyFree: true
diets: (2) ['dairy free', 'pescatarian']
dishTypes: (4) ['lunch', 'main course', 'main dish', 'dinner']
extendedIngredients: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
gaps: "no"
glutenFree: false
healthScore: 28
id: 654812
image: "https://spoonacular.com/recipeImages/654812-556x370.jpg"
imageType: "jpg"
instructions: "<ol><li>Bring water to a boil for pasta. Cook for 10 minutes or until al dente. In one saucepan heat half of the olive oil. Add garlic and saute for a few seconds. Add tomatoes and cook for 5 minutes or until thickened; season with salt and pepper.</li><li>In another skillet cook the shrimp in half the remaining olive oil. Remove from heat and toss in the parsley; season with salt and pepper. Drain pasta and transfer to a serving bowl; add shrimp and tomato mixtures and toss; do not serve with cheese.</li><li>This recipe yields 2 servings.</li></ol>"
license: "CC BY 3.0"
lowFodmap: false
occasions: []
originalId: null
pricePerServing: 616.45
readyInMinutes: 45
servings: 2
sourceName: "Foodista"
sourceUrl: "http://www.foodista.com/recipe/8YWWDKPS/pasta-and-seafood"
spoonacularScore: 69
spoonacularSourceUrl: "https://spoonacular.com/pasta-and-seafood-654812"
summary: "Pastan and Seafood is a <b>dairy free and pescatarian</b> main course. One serving contains <b>521 calories</b>, <b>38g of protein</b>, and <b>4g of fat</b>. This recipe serves 2 and costs $5.79 per serving. From preparation to the plate, this recipe takes around <b>45 minutes</b>. This recipe from Foodista has 1 fans. If you have shrimp, squid ink linguine, parsley, and a few other ingredients on hand, you can make it. To use up the salt you could follow this main course with the <a href=\"https://spoonacular.com/recipes/apple-turnovers-recipe-48175\">Apple Turnovers Recipe</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 57%</b>. This score is solid. Try <a href=\"https://spoonacular.com/recipes/seafood-pasta-373851\">Seafood Pasta</a>, <a href=\"https://spoonacular.com/recipes/seafood-pasta-246928\">Seafood Pasta</a>, and <a href=\"https://spoonacular.com/recipes/seafood-pasta-22624\">Seafood Pasta</a> for similar recipes."
sustainable: false
title: "Pasta and Seafood"
vegan: false
vegetarian: false
veryHealthy: false
veryPopular: false
weightWatcherSmartPoints: 12
winePairing: {pairedWines: Array(0), pairingText: 'No one wine will suit every pasta dish. Pasta in a…tion if you ask again with a specific pasta dish.', productMatches: Array(0)}
[[Prototype]]: Object
```
paste your sample data here
```results:
ids 654959,
title:
"Pasta With Tuna"
image:
"https://spoonacular.com/recipeImages/654959-312x231.jpg"
imageType:
"jpg"
id: 511728,
title: "Pasta Marcherita
image:
"https://spoonacular.com/recipelmages/511728-312x231.ipg",
imageType: "jpg
id: 654812,
title: "Pasta and Seafood"
image:
"https://spoonacular.com/recipeImages/654812-312x231.jpg"
imageType: "jpg"
id: 654857,
title: "Pasta On The Border"
image:
"https://spoonacular.com/recipeImages/654857-312×231.jpg",
imageType:
"jpg"
id:
654883,
title: "Pasta Vegetable Soup"
image:
"https://spoonacular.com/recipelmages/654883-312x231.jpg"
imageType:
"jpg"
id: 654928,
title:
"Pasta With Italian Sausage"
image:
"https://spoonacular.com/recipeImages/654928-312x231.jpg".
imageType:
"jpg"
id: 654926,
title: "Pasta With Gorgonzola Sauce"
image:
"https://spoonacular.com/recipelmages/654926-312x231.jpg"
imageType:
"jpg"
```

## Working Site Images 

![Home Page](assets/Main.png)

![Recipe Details Page](assets/Details.png)

## Wire Frames
>
<img width="1010" alt="Screen Shot 2022-01-05 at 9 56 46 AM" src="https://media.git.generalassemb.ly/user/39966/files/dcd1a600-6e0d-11ec-9adb-6f23006ab6c5">
<img width="1010" alt="Screen Shot 2022-01-05 at 9 56 39 AM" src="https://media.git.generalassemb.ly/user/39966/files/dd6a3c80-6e0d-11ec-88c8-d722abc0acf5">



## User Stories

### MVP Goals
- As a user, I would like to have randomly suggested recipes so that I can consider which recipe to choose. 
- As a user, I would like recipe details so that I know what the recipe entails.  
- As a user, I would like a photo of the recipe so that I have a visual of the finished recipe
- As a user, I would like to be able to easily navigate back to the home page, so that I don’t have to refresh page

### Stretch Goals
- As a user, I would like to be able to search for a recipe so that I can find one that I want.
- As a user, I would like to set diet preferences so that I only see recipes that fit the preference. 
- As a user, I would like to see similar recipes to the my current recipe choice. 
