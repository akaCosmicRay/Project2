var db = require("../models");
var cocktailAPI = require("../utilities-backend/cocktailapi.js");
var passport = require('passport');

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    var { query } = req.query;

    if(req.user) {
      console.log(req.user.UserID);
    } else {
      console.log("Logged out");
    }

    if(query) {
      cocktailAPI.getDrinksFromCocktaildb(query, cocktails => {
        res.render("index", {
          msg: "Welcome!",
          drinks: cocktails
        })
      })
    } 
    else {
      res.render("index", {
        msg: "Welcome!",
        drinks: []
      });
    }
  });

  // Load example page and pass in an example by id
  app.get("/drink/:id", async (req, res) => {
    var id = req.params.id;
    var drink = await cocktailAPI.getCocktailByID(id);

    res.render("drink", {
      drink
    });
  });

  app.get("/login", (req, res) => {
    res.render("login");
  });

  app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

  app.get('/register', (req, res) => {
    res.render("register");
  })

  app.post('/register', (req, res) => {
    db.User.create(req.body)
      .then(_ => res.redirect('/login'))
      .catch(err => res.redirect('/register'))
  })

  app.get("/favorites", async (req, res) => {
    // Fetch Favorites from DB by UserID
    if(!req.user) {
      res.redirect('/login');
      return;
    }

    db.Favorite.findAll({where: { UserID: req.user.UserID }})
      .then( async favorites => {

        var drinks = []
        for(var i = 0; i < favorites.length; i++) {
          var id = favorites[i].DrinkID
          var drink = await cocktailAPI.getCocktailByID(id);
          drinks.push(drink);
        }

        res.render("favorites", {
          drinks: drinks
        })
      })
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

//add code to add user entry to the database