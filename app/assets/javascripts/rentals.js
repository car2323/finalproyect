$(document).on("page:load ready", function () {
  $(".modal-body").empty();
  $(".modal_title").empty();   
  $(".js-clickrentals").on("click", function (event) {
      event.preventDefault();
      var equipment_id_btn = $(".js-updateequi");
      var equipment_id = equipment_id_btn.data("equip");

      var rental_id_btn = $(event.currentTarget);
      var rental_id = rental_id_btn.data("rental");
      var string_url= "/equipments/"+ equipment_id +"/rentals/"+ rental_id;
       $.ajax({     
              url: string_url,
              success: function (rental){
                 display_rental(rental, string_url);
                 console.log("Success");
              },
              error:function (rental) {
                  console.log("It failed. :( ");
                  console.log(theError.responseJSON);
              }
            }); 
   });
});
function display_rental(one_rental, string_url){
  $(".modal_title").empty();
  $(".modal-body").empty();

  $(".modal_title").append("Choose one option RENTAL"); 
  $(".modal-body").append(' ');
  $(".modal-body").append('<button class="btn update_rental">update</button>');
  $(".modal-body").append(' ');
  $(".modal-body").append('<button class="btn btn-danger delete_rental">delete</button>');
  $(".modal-body").append("<br>");
  $(".modal-body").append("<br>");
  $(".modal").modal("show");
  $(".update_rental").on("click", function(){
        $(".modal_title").empty();
        $(".modal-body").empty();
        $(".modal_title").append("<t class='letterorange'>Update Rental Info</t>");
        $(".modal-body").append('<strong> NAME: </strong>  <input class="form-control" id="name_rental" value="'+ one_rental.name + '"><br>');
        $(".modal-body").append('<strong> DATE: </strong><input class="form-control" type="date" id="date_rental" value="'+ one_rental.date + '"><br>');
        $(".modal-body").append('<strong> TOTAL PRICE RENTAL: </strong><input id="total_price_rental" value="'+ one_rental.total_price + '"><br>');
        $(".modal-body").append("<br>");
        $(".modal-body").append('<button class="btn updated_rental letterorange">update</button>');

        $(".updated_rental").on("click", function () {
                      update_rentals(string_url);
        });
  });
  $(".delete_rental").on("click", function(){
        $(".modal_title").empty();
        $(".modal-body").empty();
        $(".modal_title").append("<t class='letterred'>DELETE Rental Info</t>");
        $(".modal-body").append('<strong> NAME: </strong>'+ one_rental.name + '<br>');
        $(".modal-body").append('<strong> DATE: </strong>'+ one_rental.date + '<br>');
        $(".modal-body").append('<strong> TOTAL PRICE RENTAL: </strong>'+ one_rental.total_price + '<br>');
        $(".modal-body").append("<br>");
        $(".modal-body").append('<button class="btn btn-danger deleted_rental">delete</button>');

        $(".deleted_rental").on("click", function () {
                      deleted_rental(string_url);
                      $(".modal").modal("hide");
        });  
  });
};