$(document).on("page:load", function () {
  $(".modal-body").empty();
  $(".modal_title").empty(); 
  $(".js-deleteequi").on("click", function (event) {
      event.preventDefault();
      var equipment_id_btn = $(event.currentTarget);
      var equipment_id = equipment_id_btn.data("info");
      //console.log(equipment_id);
       $.ajax({
                   
              url: "/api/equipments/"+ equipment_id,
              success: function (equipment){
                 display_delete_equip(equipment);
                 $(".delete_equip").on("click",function(){
                  $(".modal").modal("hide");
                    $.ajax({
                        type: "DELETE", 
                        url: "/api/equipments/" + equipment_id,
                        success: function(){
                          console.log("success");
                          redirect_to_list_equipments();
                        }, 
                        error: function(error) {
                          console.log("FAIL!!!");
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
function display_delete_equip(one_equipment){
  $(".modal-body").empty();
  $(".modal_title").empty();
  $(".modal_title").append("DELETE Equipment");
  $(".modal-body").append('<strong> NAME: </strong>'+ one_equipment.name +'<br>');
  $(".modal-body").append('<strong> MODEL: </strong>'+ one_equipment.model +'<br>');
  $(".modal-body").append('<strong> SERIAL: </strong>'+ one_equipment.serial +'<br>');
  $(".modal-body").append('<strong> BRAND: </strong>'+ one_equipment.brand +'<br>');
  $(".modal-body").append('<strong> PURCHARSED DATE: </strong>'+ one_equipment.purchased_date +'<br>');
  $(".modal-body").append('<strong> ORIGINAL PRICE: </strong>'+ one_equipment.original_price +'<br>');
  $(".modal-body").append('<button class="btn btn-danger delete_equip">delete</button>');
  $(".modal").modal("show");
};
 function redirect_to_list_equipments(){
  window.location.replace("/equipments");
 };