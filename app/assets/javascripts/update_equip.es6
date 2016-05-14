$(document).on("page:load ready", function () {
  $(".modal-body").empty();
  $(".modal_title").empty();   
  $(".js-updateequi").on("click", function (event) {
      event.preventDefault();

      var equipment_id_btn = $(event.currentTarget);
      var equipment_id = equipment_id_btn.data("equip");
      //console.log(equipment_id);
       $.ajax({       
              url: "/api/equipments/"+ equipment_id,
              success: function (equipment){
                 display_update_equip(equipment);
                 $(".updated_equip").on("click",function(){
                  var vali_var=equipment_validations();
              if (vali_var === true){
                  $(".modal").modal("hide");
                  var post_data = {
                      name: $("#name").val(),
                      model: $("#model").val(),
                      serial: $("#serial").val(),
                      brand: $("#brand").val(),
                      purchased_date: $("#datepurc").val(),
                      category: $("#category_equip").val(),
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
              }
              else
              {
                alert("Check a empty field BEFORE UPDATE") 
              }    
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
function display_update_equip(one_equipment){
  $(".modal-body").empty();
  $(".modal_title").empty();
  $(".modal_title").append("<t class='letterorange'>Update Equipment Info</t>");
  $(".modal-body").append('<strong> NAME: </strong>  <input class="form-control" id="name" value="'+ one_equipment.name + '"><br>');
  $(".modal-body").append('<strong> MODEL: </strong><input class="form-control" id="model" value="'+ one_equipment.model + '"><br>');
  $(".modal-body").append('<strong> SERIAL: </strong><input class="form-control" id="serial" value="'+ one_equipment.serial + '"><br>');
  $(".modal-body").append('<strong> BRAND: </strong><input class="form-control" id="brand" value="'+ one_equipment.brand + '"><br>');
  $(".modal-body").append('<strong> PURCHARSED DATE: </strong><input class="form-control" id="datepurc" type="date" value="'+ one_equipment.purchased_date + '"><br>');

  $(".modal-body").append('<strong> CATEGORY: </strong>'+`<select class="form-control" id="category_equip">
                                                             <option value=" ">-Select an option-</option>
                                                             <option value="AUDIO">AUDIO</option>
                                                             <option value="VIDEO">VIDEO</option>
                                                             <option value="LIGHT">LIGHT</option>
                                                             <option value="STAGING">STAGING</option>
                                                             <option value="ITCOMPUTER">IT/COMPUTER</option>
                                                          </select><br>`);


  $(".modal-body").append('<strong> ORIGINAL PRICE: </strong><input class="form-control" id="price" value="'+ one_equipment.original_price + '"><br>');
  $(".modal-body").append('<button class="btn btn-primary updated_equip letterorange">update</button>');
  if ( $('#datepurc')[0].type != 'date' ) $('#datepurc').datepicker();
  $(".modal").modal("show");
};