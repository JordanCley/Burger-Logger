//
$(document).ready(function() {
  $("#addBurgerForm").on("submit", function() {
    event.preventDefault();
    const burger = $("#enter_text").val();
    console.log(burger);
    $.ajax({
      data: { name: burger },
      url: "/new",
      method: "POST"
    }).then(function(data) {
      location.reload("/");
    });
  });

  $(".devour_form").on("submit", function() {
    console.log("clicked");
    event.preventDefault();
    // console.log(event.data.value);
    const id = $(this)
      .children()
      .attr("id");
    console.log(id);
    $.ajax({
      url: `/${id}`,
      method: "PUT"
    }).then(function(data) {
      location.reload("/");
    });
  });

  $(".delete").on("click", function() {
    event.stopPropagation();
    const id = $(this)
      .prev()
      .prev()
      .attr("id");
    console.log(id);
    $.ajax({
      url: `/${id}`,
      method: "DELETE"
    }).then(function(data) {
      location.reload("/");
    });
  });
});
