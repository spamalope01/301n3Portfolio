// i'm going to need a constructor.  I want to create a slideshow of projects that i've done.  each slide in the slideshow will represent a single project.  so the constructor is going to need things like: title, author, date published to the web, client name, description, languages/technologies used.  i can add to that later if i think of other qualities.
var myProj = [];

function Projects (title, client, author, published, description, tech, image){
  this.title = title;
  this.client = client;
  this.author = author;
  this.published = published;
  this.description = description;
  this.tech = tech;
  this.image = image;
  myProj.push(this);

};




// next i'll need...maybe not a prototype, but some function that pushes items through the constructor so that my slideshow can populate.

// i need a function to display the slideshow, and to allow users to scroll back and forth through all the items in it.  so there will be some JQ animations on that, especially since there will be a hover element on each item.


// maybe i should have an admin type page where i can add new projects?  or should i keep that all on the 'back end'?  i wouldn't want that page visible to the public, so unless i hid it behind authentication...then i could have a form with all the fields needed for the constructor, allow image uploads, etc.


// finally, naturally, i'll have to call these functions at the bottom like we did with the blog project.
