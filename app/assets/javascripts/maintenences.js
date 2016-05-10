$(document).on("page:load ready", function () {
  $(".modal-body").empty();
  $(".modal_title").empty();   
  $(".js-clickmanintenances").on("click", function (event) {
      event.preventDefault();
      var equipment_id_btn = $(".js-updateequi");
      var equipment_id = equipment_id_btn.data("equip");

      var mainte_id_btn = $(event.currentTarget);
      var mainte_id = mainte_id_btn.data("mainte");

      var string_url= "/equipments/"+ equipment_id +"/maintenances/"+ mainte_id;

       $.ajax({     
              url: string_url,
              success: function (maintenance){
                 display_maintenance(rental, string_url);
                 console.log("Success");
              },
              error:function (maintenance) {
                  console.log("It failed. :( ");
                  console.log(theError.responseJSON);
              }
            }); 
   });
});
function display_maintenance(one_maintenance, string_url){
  $(".modal_title").empty();
  $(".modal-body").empty();

  $(".modal_title").append("Chose one option MAINTENANCE"); 
  $(".modal-body").append(' ');
  $(".modal-body").append('<button class="btn update_rental">update</button>');
  $(".modal-body").append(' ');
  $(".modal-body").append('<button class="btn btn-danger delete_rental">delete</button>');
  $(".modal-body").append("<br>");
  $(".modal-body").append("<br>");
  $(".modal").modal("show");
  $(".update_rental").on("click", function(){
        $(".modal_title").empty();
        $(".modal_title").append("Update Rental Info");
        $(".modal-body").append('<strong> NAME: </strong>  <input id="name_rental" value="'+ one_rental.name + '"><br>');
        $(".modal-body").append('<strong> DATE: </strong><input id="date_rental" value="'+ one_rental.date + '"><br>');
        $(".modal-body").append('<strong> TOTAL PRICE RENTAL: </strong><input id="total_price_rental" value="'+ one_rental.total_price + '"><br>');
        $(".modal-body").append("<br>");
        $(".modal-body").append('<button class="btn updated_rental">update</button>');

        $(".updated_rental").on("click", function () {
                      update_rentals(string_url);
                      $(".modal").modal("hide");
        });
  });
  $(".delete_rental").on("click", function(){
        $(".modal_title").empty();
        $(".modal-body").empty();
        $(".modal_title").append("DELETE Rental Info");
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