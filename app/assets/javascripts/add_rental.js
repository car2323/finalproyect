$(document).on("page:load ready", function () {
  $(".modal-body").empty();
  $(".modal_title").empty();
  //console.log("llego a agregar equipment"); 

  $(".js-addrental").on("click", function (event) {
      event.preventDefault();
      event.preventDefault();

      var equipment_id_btn = $(".js-updateequi");
      var equipment_id = equipment_id_btn.data("equip");

      display_create_rental();
      $(".create_rental").on("click",function(){
      var post_data = {
      name: $("#name_rental").val(),
      date: $("#date_rental").val(),
      total_price: $("#total_price_rental").val(),
      }
      $(".modal").modal("hide");
        $.ajax({
            type: "POST", 
            url: "/equipments/"+ equipment_id +"/rentals",
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
function display_create_rental(){
    $(".modal-body").empty();
    $(".modal_title").empty();
    $(".modal_title").append("<t class='letterblue'>Create new Rental</t>");
    $(".modal").modal("show");
	$(".modal-body").append('<strong> NAME: </strong>  <input id="name_rental"><br>');
	$(".modal-body").append('<strong> DATE: </strong><input type="date" id="date_rental"><br>');
	$(".modal-body").append('<strong> TOTAL PRICE RENTAL: </strong><input id="total_price_rental"><br>');
	$(".modal-body").append("<br>");
	$(".modal-body").append('<button class="btn create_rental letterblue">add new</button>');
};


