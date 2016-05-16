$(document).on("page:load ready", function () {
  $(".modal-body").empty();
  $(".modal_title").empty();
  //console.log("llego a agregar equipment"); 

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
   var vali_var=equipment_validations();
   if (vali_var === true){    
      $(".modal").modal("hide");
        $.ajax({
            type: "POST", 
            url: "/api/equipments/",
            data: post_data,    
            success: function(){
              console.log("success");
              window.location.reload();
            }, 
            error: function(error) {
              console.log("FAIL!!!");
              console.log(error);
            }            
        });
   }
   else
   {
    alert("Check a empty field BEFORE CREATE") 
   }  
     });  
     
   });
});
function display_create_equip(){
  $(".modal-body").empty();
  $(".modal_title").empty();
  $(".modal_title").append("<t class='letterblue'>Create new Equipment</t>");

  $(".modal-body").append('<strong> NAME: </strong><input class="form-control" id="name"><br>');
  $(".modal-body").append('<strong> MODEL: </strong><input class="form-control" id="model"><br>');
  $(".modal-body").append('<strong> SERIAL: </strong><input class="form-control" id="serial"><br>');
  $(".modal-body").append('<strong> BRAND: </strong><input class="form-control" id="brand"><br>');
  $(".modal-body").append('<strong> PURCHARSED DATE: </strong><input class="form-control" id="datepurc" type="date"><br>');
  $(".modal-body").append('<strong> CATEGORY: </strong>'+`<select class="form-control" id="category_equip">
                                                             <option value=" ">-Select an option-</option>
                                                             <option value="AUDIO">AUDIO</option>
                                                             <option value="VIDEO">VIDEO</option>
                                                             <option value="LIGHT">LIGHT</option>
                                                             <option value="STAGING">STAGING</option>
                                                             <option value="ITCOMPUTER">IT/COMPUTER</option>
                                                          </select><br>`);
  $(".modal-body").append('<strong> ORIGINAL PRICE: </strong><input onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode === 44 || event.charCode === 46" class="form-control" id="price"><br>');
  $(".modal-body").append('<button class="btn btn-primary create_equip letterblue">Create</button>');
  $(".modal").modal("show");
   if ( $('#datepurc')[0].type != 'date' ) $('#datepurc').datepicker();
};