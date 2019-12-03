// 
$(document).ready(function(){
  $("#addBurgerForm").on("submit", function(){
    event.preventDefault();
    const burger = $("#enter_text").val();
    console.log(burger);
    $.ajax({
      data: {name: burger},
      url: "/burgers/new",
      method: "POST"
    }).then(function(data) {
    location.reload("/burgers");
    });
  })
})

// $(document).ready(function() {
    
//   $(".devour-form").on("submit", function(event) {
//     event.preventDefault();

//     var burger_id = $(this).children(".burger_id").val();
//     console.log(burger_id);
//     $.ajax({
//       method: "PUT",
//       url: "/burgers/" + burger_id
//     }).then(function(data) {
//       // reload page to display devoured burger in proper column
//       location.reload();
//     });

//   });
// });
