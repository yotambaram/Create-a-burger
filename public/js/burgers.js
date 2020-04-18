$(function() {
  //update
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = !$(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: newEat
      };
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newEat);
          location.reload();
        }
      );
    });
  

    //add
    $(".create-form").on("submit", function(event) {
      console.log("test")
      event.preventDefault();
  
      var newBurger = {
        name: $("#burg").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });

  })

  
  
