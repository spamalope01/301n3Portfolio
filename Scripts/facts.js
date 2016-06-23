(function (module) {


  function Books (opts){
    this.title = opts.title;
    this.author = opts.author;
    this.genre = opts.genre;
    this.description = opts.description;
    this.pages = opts.pages;
  }

  Books.all = [];
  Books.select = [];

  Books.prototype.toHtml = function() {
    var booksTemplate = Handlebars.compile($('#thingsMe').html());
    return booksTemplate(this);
  };


  Books.createAll = function(data) {
    data.forEach(function(ele) {
      Books.all.push(new Books(ele));
    });
    Books.filterDown();
  };

  Books.filterDown = function(){
    Books.select = Books.all.reduce(function(literature, ele){
      if(ele.genre === 'Horror') {
        literature.push(ele);
      }
      return literature;
    }, Books.select);
  };

  Books.display = function(arr) {
    arr.forEach(function(a) {
      $('.thingsToKnow').append(a.toHtml());
    });
  };

// Using .reduce to apply functionality of both .map and .reduce.
        // the above line may be one problem.  in the sample code, it's a.push({actorName: b.actor, yearsPlayed: mathhere.})  they're defining the new object there, so i think i need to redefine the book object that is going into books.select.  OR, i need to replace books.select = with a var, then below this, reassign the var to books.select.    i don't have to declare books.select as an empty array globally...because doing this and assigning it to books.select will overwrite the value anyway.  so just on line 35, do var books.select = and go on with the thing.


  Books.getAll = function() {
    if (localStorage.bookStuff) {
      Books.createAll(JSON.parse(localStorage.bookStuff));
      booksView.initBookInfo();
    } else {
      $.getJSON('Data/facts.json', function(bookStuff) {
        Books.createAll(bookStuff);
        var storage = JSON.stringify(bookStuff);
        localStorage.setItem('bookStuff', storage);
        booksView.initBookInfo();
      });
    }
  };


  $(document).ready(function() {
    Books.getAll();
  });
  module.Books = Books;
})(window);
