//This loads the enviroment variables from the .env folder
//require("dotenv").config();
//var axios = require("axios");
//import axios from "axios";
const axios = require('axios').default;
//Import the keys.js file
//var keys = require("/keys.js");
var parseDrink = (data) => {
    var drink = {
        drinkName: data.strDrink,
        alcohol: data.strAlcoholic,
        glass: data.strGlass,
        instructions: data.strInstructions,
        drinkImage: data.strDrinkThumb,
        idDrink: data.idDrink,
        ingredients: []
    }


    for(var j = 1; j < 16; j++) {
        var name = data["strIngredient" + j]
        var measurement = data["strMeasure" + j]

        if(name !== null) {
            drink.ingredients.push({name, measurement})
        } else {
            break;
        }
    }

    return drink;
}

    
   

var drinkUtilities = {
    getDrinksFromCocktaildb: function(searchQuery, callback) {
        // Run the get request via json using axios
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchQuery)
            .then(function (response) {
                var drinks = response.data.drinks;
                var drinks_final = [];

                // Process each drink data
                for (var i = 0; i < drinks.length; i++) {
                    var drink = parseDrink(drinks[i]);
                    drinks_final.push(drink);
                }

                callback(drinks_final);
            }
        );
    },

    getCocktailByID: async (idDrink) => {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
        const drink_data = response.data.drinks[0];
        return parseDrink(drink_data);
    }
}

module.exports = drinkUtilities;