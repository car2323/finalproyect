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
  $(".modal_title").append("<t class='letterblue'>Create new Accessory or Maintenance</t>");
  $(".modal").modal("show");

  $(".modal-body").append('<strong> KIND: </strong>'+`<select class="form-control" id="kind_mainteop">
                                                             <option value=" ">-Select an option-</option>
                                                             <option value="ACCESSORY">ACCESSORY</option>
                                                             <option value="MAINTENANCE">MAINTENANCE</option>                   
                                                          </select><br>`);
	$(".modal-body").append('<input class="form-control" id="name_mainte"><br>');
  $("#name_mainte").hide();
  $("#kind_mainteop").change(function(){
    if ($("#kind_mainteop").val()===" ")
    {
      $("#name_mainte").val("");
      $("#name_mainte").hide();
    }
    else
    {
      $("#name_mainte").val(""); 
      $("#name_mainte").val($("#kind_mainteop").val());
      $("#name_mainte").prop('disabled', true);
      $("#name_mainte").show();
    }
  })

  $(".modal-body").append('<strong> DESCRIPTION: </strong>'+`<select class="form-control" id="description_mainteop">
                                                             <option value=" ">-Select an option-</option>
                                                             <option value="CLEAN">CLEAN</option>
                                                             <option value="EXTERNAL part/accessory/piece">EXTERNAL part/accessory/piece</option>
                                                             <option value="INTERNAL part/accessory/piece">EXTERNAL part/accessory/piece</option> 
                                                             <option value="OTHER">OTHER</option>                        
                                                          </select><br>`);

    
  $(".modal-body").append('<input class="form-control" id="description_mainte"><br>');
  $("#description_mainte").hide();
  $("#description_mainteop").change(function(){
    if($("#description_mainteop").val()==="OTHER")
    {
      $("#description_mainte").val("");
      $("#description_mainte").prop('disabled', false);
      $("#description_mainte").show();
    }
    else
    {
      $("#description_mainte").val($("#description_mainteop").val());
      $("#description_mainte").prop('disabled', true);
      $("#description_mainte").show();
    }
  })
      
	$(".modal-body").append('<strong> DATE: </strong><input class="form-control" type="date" id="date_mainte"><br>');
	$(".modal-body").append('<strong> PRICE: </strong><input onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode === 44 || event.charCode === 46" class="form-control" id="price"><br>');
	$(".modal-body").append("<br>");
	$(".modal-body").append('<button class="btn btn-primary create_mainte letterblue">add new</button>');
  if ( $('#date_mainte')[0].type != 'date' ) $('#date_mainte').datepicker();
};


