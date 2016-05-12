function update_mainte(string_url){
   console.log(string_url);
  var post_data = {
      name: $("#name_mainte").val(),
      description: $("#description_mainte").val(),
      date: $("#date_mainte").val(),
      price: $("#price_mainte").val(),
      }
  var valid_maintenance = maintenance_validations();
  if(valid_maintenance===true){  
    $.ajax({
        type: "PATCH", 
        url: string_url,
        data: post_data,    
        success: function(){
          console.log("Success PATCH");
          location.reload();
          $(".modal").modal("hide");
        }, 
        error: function(error) {
          console.log("LOSER!!!");
          console.log(error);
        }            
    });
  } 
  else{
    alert("Check a empty field BEFORE UPDATE");
  }
};