var db = require("../models");
var drinkUtilities = require("../utilities-backend/cocktailapi.js");

/* Favorites:

      - when listing search results: favorited?
      - 
*/
module.exports = function(app) {
  // ======================== UPDATED ROUTES ==========================
  // app.post("/api/favorite/:userID/:drinkID/:isFavorite", (req, res) => {
  //   const {userID, drinkID, isFavorite = "false"} = req.params;

  //   if(isFavorite === "true") {
  //     console.log("Removing Favorite");
  //     // Remove from favorites
  //     db.Favorite.destroy({
  //       where: { DrinkID: drinkID }
  //     })
  //       .then(() => res.status(200).send())
  //       .catch(err => {
  //         console.log(err)
  //         res.status(500).send()
  //       })

  //     res.status(200);
  //   } else {
  //     console.log("Adding Favorite");
  //     // Add to favorites
  //     db.Favorite.create({DrinkID: drinkID, UserID: userID})
  //       .then(() => res.status(200).send())
  //       .catch(err => {
  //         console.log(err)
  //         res.status(500).send()
  //       })
  //   }

  //   // db.Favorite.
  // })
  app.get('/favorites/:DrinkID', (req, res) => {

    if(!req.user) {
      res.redirect('/login');
      return;
    }
    // user id
    var UserID = req.user.UserID;
    var DrinkID = req.params.DrinkID;

    /*
      db.Favorite.findAll by userID if it containts the drinkID: remove form favorites, otherwise add
    */

    //TODO: Check if exists, add if not
    db.Favorite.create({UserID, DrinkID})
      .then(_ => res.redirect('/favorites'))
  })
  // ======================== UPDATED ROUTES ==========================
  // Get all examples
  app.get("/api/drinks", function(req, res) {
    db.Drink.findAll({}).then(function(dbDrinks) {
      res.json(dbDrinks);
    });
  });

  // Create a new example
  app.post("/api/drinks", function(req, res) {
    db.Drink.create(req.body).then(function(dbDrinks) {
      res.json(dbDrinks);
    });
  });
  
 // POST route for saving a new todo. We can create a todo using the data on req.body
 app.post("/api/drinks", function(req, res) {
  var drinkItem = {
    drink_name: req.body.drink_name,
    complete: req.body.complete
  }

  db.Drink.create(drinkItem).then(function(result) {
    return res.json(result);
  });
});

  // Delete an example by id
  app.delete("/api/drinks/:id", function(req, res) {
    db.Drink.destroy({ where: { id: req.params.id } }).then(function(dbDrinks) {
      res.json(dbDrinks);
    });
  });

  app.get("/api/cocktailapi/:drinkname", function(req, res) {

    var cocktailname = req.params.drinkname;

    drinkUtilities.getDrinksFromCocktaildb(cocktailname, function(data) {

      res.json(data);
      
    });

  });
};
// PUT route for updating todos. We can access the updated todo in req.body
//app.put("/api/drinks", function(req, res) {
//});