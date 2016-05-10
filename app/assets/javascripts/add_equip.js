$(document).on("page:load ready", function () {
  $(".modal-body").empty();
  $(".modal_title").empty();
  console.log("llego a agregar equipment"); 
  
  $(".js-new_equip").on("click", function (event) {
      event.preventDefault();
      console.log("adentro del evento"); 
      display_create_equip();
      $(".create_equip").on("click",function(){
      var post_data = {
        name: $("#name").val(),
        model: $("#model").val(),
        serial: $("#serial").val(),
        brand: $("#brand").val(),
        purchased_date: $("#datepurc").val(),
        category: $("#category_equip").val(),
        original_price : $("#price").val()
      }  
      $(".modal").modal("hide");
        $.ajax({
            type: "POST", 
            url: "/api/equipments/",
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
function display_create_equip(){
  $(".modal-body").empty();
  $(".modal_title").empty();
  $(".modal_title").append("Create new Equipment");
  $(".modal-body").append('<strong> NAME: </strong><input id="name"><br>');
  $(".modal-body").append('<strong> MODEL: </strong><input id="model"><br>');
  $(".modal-body").append('<strong> SERIAL: </strong><input id="serial"><br>');
  $(".modal-body").append('<strong> BRAND: </strong><input id="brand"><br>');
  $(".modal-body").append('<strong> PURCHARSED DATE: </strong><input id="datepurc" type="date"><br>');
  $(".modal-body").append('<strong> CATEGORY: </strong>'+`<select id="category_equip">
                                                             <option value="AUDIO">AUDIO</option>
                                                             <option value="VIDEO">VIDEO</option>
                                                             <option value="LIGHT">LIGHT</option>
                                                             <option value="STAGING">STAGING</option>
                                                             <option value="ITCOMPUTER">IT/COMPUTER</option>
                                                          </select><br>`);
  $(".modal-body").append('<strong> ORIGINAL PRICE: </strong><input id="price"><br>');
  $(".modal-body").append('<button class="btn create_equip">Create</button>');
  $(".modal").modal("show");
};