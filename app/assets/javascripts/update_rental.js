function update_rentals(string_url){
  var post_data = {
      name: $("#name_rental").val(),
      date: $("#date_rental").val(),
      total_price: $("#total_price_rental").val(),
    }
    var valid_rental = rental_validations();
  if(valid_rental===true){  
    $.ajax({
        type: "PATCH", 
        url: string_url,
        data: post_data,    
        success: function(){
          console.log("Success PATCH");
           $(".modal").modal("hide");
          location.reload();
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