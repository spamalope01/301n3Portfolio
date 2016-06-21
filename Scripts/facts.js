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
    arr.forEach(function(b) {
      $('.thingsToKnow').append(b.toHtml());
    });
  };

  Books.selectOnes = function(){
    Books.fewer = Books.all.reduce(function(literature, ele) {
      if(ele.category === "Horror") {
        literature.push(new Books(ele));
      }
      return literature;
    }, []);
  };

  Books.getAll = function() {
    if (localStorage.bookStuff) {
      Books.loadAll(JSON.parse(localStorage.bookStuff));
      booksView.initBookInfo();

    } else {
      console.log('the else has fired');
      $.getJSON('Data/facts.json', function(bookStuff) {
        Books.display(bookStuff);
        var storage = JSON.stringify(data);
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
