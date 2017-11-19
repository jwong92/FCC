//Using vanilla javascript

// window.onload = documentReady;
//
// function documentReady() {
//
// var arr = [ "Beautiful. Crushingly so. You look like the rest of my life.",
//             "You are fierce. You're a survivor. You're a fighter through and through. Little brave, breathe. There is a warrior within you",
//             "This quiet ongoing solitude of mine is how I say I miss you without admitting it out loud.", "You aren't what has happened to you, you are how you've overcome it.",
//             "But above all else, I wish for your happiness, even should you require my absence to find it."];
//
// const quoteSbmtBtn = document.querySelector(".buttons");
// const quoteText = document.querySelector("#quote");
// const authorText = document.querySelector("#author");
//
// quoteSbmtBtn.onclick = newQuote;
//   function newQuote () {
//   quoteText.innerHTML = arr[Math.floor(Math.random() * arr.length)];
//   authorText.innerHTML = "-Beau Taplin";
// }
//
// }


//Using API's and jQuery

//$ - means we are using jQuery. We are saying when the document has loaded, run the function
$(document).ready(function() {

  var quote;
  var author;

  function getNewQuote() {
    //In jQuery, access the API with the keyword ajax.
    $.ajax ({
      url: "http://api.forismatic.com/api/1.0/",
      // jsonp needs to be defined becuase of control allow origin (CON) - safety of how the browser speaks
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        format: "jsonp",
        lang: "en"
      },
      //this function is run on load (getNewQuote)
      success: function(response) {
        quote = response.quoteText;
        $("#quote").text(quote);
        author = response.quoteAuthor;
        if (author) {
          $("#author").text("- " + author);
        }
        else {
          $("#author").text("-Unknown");
        }
      }
    });
  }

  getNewQuote();
  //Not only do we want to run on load, we also want to run after clicking the button

  $('.buttons').on('click', function(event){
    //preventDefault stops the page from loading at the top each time you submit
    event.preventDefault;
    getNewQuote();
  })

});
