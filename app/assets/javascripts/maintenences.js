$(document).on("page:load ready", function () {
  $(".modal-body").empty();
  $(".modal_title").empty();   
  $(".js-clickmanintenances").on("click", function (event) {
      event.preventDefault();
      var equipment_id_btn = $(".js-updateequi");
      var equipment_id = equipment_id_btn.data("equip");

      var mainte_id_btn = $(event.currentTarget);
      var mainte_id = mainte_id_btn.data("mainte");

      var string_url= "/equipments/"+ equipment_id +"/maintenances/"+ mainte_id;

       $.ajax({     
              url: string_url,
              success: function (maintenance){
                 display_maintenance(maintenance, string_url);
                 console.log("Success");
              },
              error:function (maintenance) {
                  console.log("It failed. :( ");
                  console.log(theError.responseJSON);
              }
            }); 
   });
});
function display_maintenance(one_maintenance, string_url){
  $(".modal_title").empty();
  $(".modal-body").empty();

  $(".modal_title").append("Choose one option MAINTENANCE"); 
  $(".modal-body").append(' ');
  $(".modal-body").append('<button class="btn update_mainte">update</button>');
  $(".modal-body").append(' ');
  $(".modal-body").append('<button class="btn btn-danger delete_mainte">delete</button>');
  $(".modal-body").append("<br>");
  $(".modal-body").append("<br>");
  $(".modal").modal("show");
  $(".update_mainte").on("click", function(){
        $(".modal_title").empty();
        $(".modal-body").empty();
        $(".modal_title").append("<t class='letterorange'>Update Maintenance Info</t>");
        $(".modal-body").append('<strong> NAME: </strong>  <input class="form-control" id="name_mainte" value="'+ one_maintenance.name + '"><br>');
        $(".modal-body").append('<strong> DESCRIPTION: </strong>  <input class="form-control" id="description_mainte" value="'+ one_maintenance.description + '"><br>');
        $(".modal-body").append('<strong> DATE: </strong><input class="form-control" type="date" id="date_mainte" value="'+ one_maintenance.date + '"><br>');
        $(".modal-body").append('<strong> PRICE: </strong><input class="form-control" id="price_mainte" value="'+ one_maintenance.price + '"><br>');
        $(".modal-body").append("<br>");
        $(".modal-body").append('<button class="btn updated_mainte letterorange">update</button>');

        $(".updated_mainte").on("click", function () {
                      update_mainte(string_url);
        });
  });
  $(".delete_mainte").on("click", function(){
        $(".modal_title").empty();
        $(".modal-body").empty();
        $(".modal_title").append("<t class='letterred'>DELETE Maintenance Info</t>");
        $(".modal-body").append('<strong> NAME: </strong>'+ one_maintenance.name + '<br>');
        $(".modal-body").append('<strong> DESCRIPTION: </strong>'+ one_maintenance.description + '<br>');
        $(".modal-body").append('<strong> DATE: </strong>'+ one_maintenance.date + '<br>');
        $(".modal-body").append('<strong> PRICE: </strong>'+ one_maintenance.price + '<br>');
        $(".modal-body").append("<br>");
        $(".modal-body").append('<button class="btn btn-danger deleted_mainte">delete</button>');

        $(".deleted_mainte").on("click", function () {
                      deleted_mainte(string_url);
                      $(".modal").modal("hide");
        });  
  });
};