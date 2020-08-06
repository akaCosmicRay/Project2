# The Project:
**Cosmic Cocktails** Made as part of the Vanderbilt University coding bootcamp made by Adam Wolff, Codie Mitchell, Kathryn Lundy, and Sandy Smith. Cosmic Cocktails is a webapp that hooks into the Cocktail DB to give you drink suggestions based off the following criteria (a cocktail name, a letter or a even a number) to give you the best drink to entertain as well as bring out the **master mixologist** in you!
**The app allows a user to:**
- Search cocktails By Name or by a Letter or even by a number.
- Given a certain Cocktail, visualize: Picture, Description, Recipe (Ingredients & Instructions) and Glass Type.
**Need a drink recipe on the fly?  Looking for a new drink recipe?  Try our app....**
## DRINK SEARCH
1.  In the search bar, enter a specific drink name or a letter, or even a number, this will search the API and give you result(s) that matched your query.
2.  If you searched by a letter or a number, you will be given drink options.  Choose a specific drink from the list. *Do you like the recipe?* You can save it to Favorites, local DB allowing us to return you to it in the future.  
3.  In order to save to Favorites, you will need to first Register with the app and then Login. Once this step is completed, search the app for a drink, if you like the drink, save it to your Favorites. **BAM!** Your Favorites list is started!  This allows the DB to identify you and your Favorites when you return in the future.
## The App
*A picture is worth a thousand words...*
**Product Name Screen Shot**
![Home Page](HomePage.png)
![SignIn Page](SignInPage.png)
![Favorites Page](FavoritesPage.jpg)
![Terminal Page](TerminalLOgs.jpg)
![DB Users](.jpg)
![DB Favorites](HomePage.jpg)
## Built With
Front end design, and organization of github repo and team.
Handlebars,CSS,JavaScript, MVC Architecture, use of the CocktailDB API, and Heroku.
Nodejs
:   Node.js and Node Packages is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.
Boilerplate Template/MVC Controllers
:   Sections of code that have to be included in many places with little or no alteration, using the MVC pattern. 
        Express/Handlebars
        :   Used with Boilerplate, its minimal, its powerful and blends well with express.
Passport-Local - 
:   The popular authentication middleware for Node, together with Sequelize and MySQL to implement user registration and login.
Sequel/Sequelize
:   Open-Source Relational Database Management System
Bootstrap
:   Front-End Framework
Project Link: [Cosmic Cocktails](://github.com/your_username/repo_name)
Live on [Heroku](https://****.herokuapp.com/)
10:07
<!DOCTYPE html>
<html>
<!--- 1 . Message Welcome with a search bar and image / submit button-->
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css">
  <link rel="stylesheet" href="/styles/styles.css" media="screen" title="no title" charset="utf-8">
  <!---javascript-->
  <title>Cosmic Cocktails </title>
</head>
<body class="class-for-main">
  {{!-- Nav Bar --}}
  <nav class="navbar navbar-dark bg-dark">
    <h3 class="my-0 mr-md-auto text-light font-weight-normal"><a class="navbar-brand" href="#" style="max-width: 14%;">
        <img src="assets/img/CosmicCocktails.png" class="img-fluid">
      </a></h3>
    <nav class="my-2 my-md-0 mr-md-3">
      <a class="p-2 text-light" href="/">Home</a>
      <a class="p-2 text-light" href="/favorites">Favorites</a>
    </nav>
    <a class="btn btn-outline-primary" href="/login" id="signIn">Sign In</a>
  </nav>
  <main>
    {{{body}}}
  </main>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</body>
</html>

@Adamkwolff@hotmail.com

