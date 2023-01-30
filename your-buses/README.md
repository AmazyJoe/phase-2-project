Let me give you an example of the idea I have here.Ever plied the Juja -NRB route?Well, If you have, you must have met LOFA travels and Super Metro. People mostly prefer Super Metro to any other because of many reasons ie the music ,speed ,reliability etc. It's the same case with this busgani app. It should help you make your decisions but over long-distance journeys.
This is in line with a gap I am trying to fill, one  that I have experienced as an enthusiast
In designing the website, we use FIGMA first and also listen from our classmates and friends on the ideas they have . Also keen ear to TMs advise.The website has a theme of blue,black and white mainly and a bit of purple.We route the page and we will be having a landing page showing various destinations and also another page where our buses are fetched and another for key.
For our server, we will create our own db.json to suit what is in mind and we will fetch it so that we can display it.
We will also add in a favourites area so that one can enlist their favourite buses and a search area too.This will use keys and route codes.
I've also created socials on the same and added them to the footer for communication with clients.
In the app, I have 6 components each with a unique function as I will explain.We will have the components:BusCollection,Footer,Key,Logo,NavBar and PopularDestinations.
These components are supposed to help us piece everything that wil make the application meet it's main function of helping a user have sufficient information to make a decision on how and why to travel using a particular bus or shuttle.We will also add in a blog section for the same.
The BusCollection should basically display all the buses we have on our database with a show of the rating ,name and bus slogan.
The Footer component is where we will add in handles/links to the socials we had created before.
The Key component is where we will have the table showing how we give route codes to destinatins to be used in the search bar.
The Logo compnent is where we get our logo from and we instead import it to our Navbar component that is more of like the head of the app and gives directions.Our logo is imported from the PC and thus we have an assets folder for that.
Just to mention,all the components are imported into the APP.JS which is the main component and it's where data is displayed for the user on the webpage,determines the order also that's why <Navbar/>must come first followed by the rest.
Within our Navbar and our index.js is where we do the routing with instructions from week 2 Day 7 code along.

