$(document).on("page:load ready", function () {
  $(".modal-body").empty();
  $(".modal_title").empty();   
  $(".js-addrental").on("click", function (event) {
      event.preventDefault();

      var equipment_id_btn = $(event.currentTarget);
      var equipment_id = equipment_id_btn.data("info");
      //console.log(equipment_id);
       $.ajax({     
              url: "/equipments/"+ equipment_id/rentals,
              success: function (equipment){
                 display_update_rental(equipment);
                 $(".updated_equip").on("click",function(){
                  $(".modal").modal("hide");
                  var post_data = {
                      name: $("#name").val(),
                      model: $("#model").val(),
                      serial: $("#serial").val(),
                      brand: $("#brand").val(),
                      purchased_date: $("#datepurc").val(),
                      original_price : $("#price").val()
                    }
                    $.ajax({
                        type: "PATCH", 
                        url: "/api/equipments/" + equipment_id,
                        data: post_data,    

                        success: function(){
                          console.log("success");
                          location.reload();
                        }, 
                        error: function(error) {
                          console.log("LOSER!!!");
                          console.log(error);
                        }            
                    }); 
                   
                     //console.log("hola");

                 });
              },
              error:function (equipment) {
                  console.log("It failed. :( ");
                  console.log(theError.responseJSON);
              }
            }); 
   });
});
function display_update_rental(one_equipment){
  $(".modal-body").empty();
  $(".modal_title").empty();
  $(".modal_title").append("Update Rantal Info");
  $(".modal-body").append('<strong> NAME: </strong>  <input id="name" value="'+ one_equipment.name + '"><br>');
  $(".modal-body").append('<strong> MODEL: </strong><input id="model" value="'+ one_equipment.model + '"><br>');
  $(".modal-body").append('<strong> SERIAL: </strong><input id="serial" value="'+ one_equipment.serial + '"><br>');
  $(".modal-body").append('<strong> BRAND: </strong><input id="brand" value="'+ one_equipment.brand + '"><br>');
  $(".modal-body").append('<strong> PURCHARSED DATE: </strong><input id="datepurc" type="date" value="'+ one_equipment.purchased_date + '"><br>');
  $(".modal-body").append('<strong> ORIGINAL PRICE: </strong><input id="price" value="'+ one_equipment.original_price + '"><br>');
  $(".modal-body").append('<button class="btn updated_equip">update</button>');
  $(".modal").modal("show");
};