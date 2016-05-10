$(document).on("ready", function () {
  $(".modal-body").empty();
  $(".modal_title").empty();   
  $(".js-clickrentals").on("click", function (event) {
      event.preventDefault();
      var equipment_id_btn = $(".js-updateequi");
      var equipment_id = equipment_id_btn.data("equip");

      console.log(equipment_id);

      var rental_id_btn = $(event.currentTarget);
      var rental_id = rental_id_btn.data("rental");

      console.log(rental_id);
      console.log ("/equipments/"+ equipment_id +"/rentals/"+ rental_id);
       $.ajax({     
              url: "/equipments/"+ equipment_id +"/rentals/"+ rental_id,
              success: function (rental){
                 display_rental(rental);
                 console.log("success");
              },
              error:function (rental) {
                  console.log("It failed. :( ");
                  console.log(theError.responseJSON);
              }
            }); 
   });
});
function display_rental(one_rental){
  console.log("listo para imprimir");
  $(".modal-body").empty();
  $(".modal_title").empty();

    
  $(".modal-body").append('<button class="btn add_rental">add new</button>');
  $(".modal-body").append('<button class="btn updated_rental">update</button>');
  $(".modal-body").append('<button class="btn btn-danger delete_rental">delete</button>');
  $(".modal").modal("show");
  $(".updated_rental").on("click", function(){
        $(".modal_title").append("Update Rental Info");
        $(".modal-body").append('<strong> NAME: </strong>  <input id="name" value="'+ one_rental.name + '"><br>');
        $(".modal-body").append('<strong> MODEL: </strong><input id="model" value="'+ one_rental.date + '"><br>');
        $(".modal-body").append('<strong> SERIAL: </strong><input id="serial" value="'+ one_rental.total_price + '"><br>');
        $(".modal-body").append('<button class="btn updated_rental">update</button>');

   });
};