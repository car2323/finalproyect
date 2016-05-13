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
      var valid_maintenance = maintenance_validations();
    if(valid_maintenance===true){  
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
     }
     else{
      alert("Check a empty field BEFORE CREATE");
     } 
     });  
     
   });
});
function display_create_mainte(){
  $(".modal-body").empty();
  $(".modal_title").empty();
  $(".modal_title").append("<t class='letterblue'>Create new Maintenance</t>");
  $(".modal").modal("show");
	$(".modal-body").append('<strong> NAME: </strong>  <input class="form-control" id="name_mainte"><br>');
  $(".modal-body").append('<strong> DESCRIPTION: </strong>  <input class="form-control" id="description_mainte"><br>');
	$(".modal-body").append('<strong> DATE: </strong><input type="date" id="date_mainte"><br>');
	$(".modal-body").append('<strong> PRICE: </strong><input class="form-control" id="price"><br>');
	$(".modal-body").append("<br>");
	$(".modal-body").append('<button class="btn btn-primary create_mainte letterblue">add new</button>');
};


