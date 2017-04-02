    
   




    //Listens to the button click 
    $("button").on("click", function() {

    var person = $(this).attr("data-person");



    // Storing our giphy API URL for a scientist
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

     // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })

     // After the data from the AJAX request comes back
      .done(function(response) {
        console.log(queryURL)

      // Storing an array to a results variable
      var results = response.data;

      // Clearing nasty pictures
      // if (results[i].rating !== "r"  && results[i].rating !== "pg-13") {

       $('#scientists').append(this).attr(results.images.fixed_height.url);
      // }






    //generating the buttons for the sceintists. 
    // var buttonPerson = "<button>" + person +"</button>";

    // 1. Create the button
    // var button = document.createElement("button");
    // button.innerHTML = "Albert Einstein";

    // // 2. Append somewhere
    // var body = document.getElementsByTagName("scientists")[0];
    // body.appendChild(button);

   

    // Event listener for our button
   





        // // Saving the image_original_url property
        // var imageUrl = response.data.image_original_url;

        // // Creating and storing an image tag
        // var results = response.data;

        // rusults.attr("src", imageURL);
        // results.attr("alt", "personImage");

        // $("#pictures").append(results);

      });
    });
