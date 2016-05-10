$(document).on("page:load ready", function () {
  $(".modal-body").empty();
  $(".modal_title").empty();
  //console.log("llego a agregar equipment"); 

  $(".js-addmainte").on("click", function (event) {
      event.preventDefault();
      event.preventDefault();

      var equipment_id_btn = $(".js-updateequi");
      var equipment_id = equipment_id_btn.data("equip");
      display_create_mainte();
      $(".create_mainte").on("click",function(){
      var post_data = {
      name: $("#name_mainte").val(),
      description: $("#description_mainte").val(),
      date: $("#date_mainte").val(),
      price: $("#price").val(),
      }
      $(".modal").modal("hide");
        $.ajax({
            type: "POST", 
            url: "/equipments/"+ equipment_id +"/maintenances",
            data: post_data,    
            success: function(){
              console.log("success");
              location.reload();
            }, 
            error: function(error) {
              console.log("FAIL!!!");
              console.log(error);
            }            
        }); 
     });  
     
   });
});
function display_create_mainte(){
  $(".modal-body").empty();
  $(".modal_title").empty();
  $(".modal_title").append("Create new Maintenance");
  $(".modal").modal("show");
	$(".modal-body").append('<strong> NAME: </strong>  <input id="name_mainte"><br>');
  $(".modal-body").append('<strong> DESCRIPTION: </strong>  <input id="description_mainte"><br>');
	$(".modal-body").append('<strong> DATE: </strong><input type="date" id="date_mainte"><br>');
	$(".modal-body").append('<strong> PRICE: </strong><input id="price"><br>');
	$(".modal-body").append("<br>");
	$(".modal-body").append('<button class="btn create_mainte">add new</button>');
};


