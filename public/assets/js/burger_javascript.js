$(function() {
  $(".devoured").on("click", function(event) {
    var id = $(this).data("id");
    console.log(id);
    var devoured = $(this).data("devoured");
    var burgerEat = {
      devoured: devoured
    };
    console.log("devoured?");
    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: burgerEat
    }).then(function() {
      console.log(`changed burger status to ${devoured}`);
      location.reload();
    });
  });
  $(".delete").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE",
      data: id
    }).then(function() {
      console.log("deleted burger", id);
      location.reload();
    });
  });
});
