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
  };

  Books.display = function(arr) {
    arr.forEach(function(a) {
      $('.thingsToKnow').append(a.toHtml());
    });
  };

// Using .reduce to apply functionality of both .map and .reduce.
  Books.selectOnes = function(){
    Books.select = Books.all.reduce(function(literature, ele) {
      if(ele.category === "Horror") {
        literature.push(new Books(ele));
      }
      return literature;
    }, []);
    Books.display(Books.select);
  };


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
    Books.selectOnes();
  });
  module.Books = Books;
})(window);
