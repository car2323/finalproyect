function update_rentals(string_url){
  var post_data = {
      name: $("#name_rental").val(),
      date: $("#date_rental").val(),
      total_price: $("#total_price_rental").val(),
    }
    $.ajax({
        type: "PATCH", 
        url: string_url,
        data: post_data,    
        success: function(){
          console.log("Success PATCH");
          location.reload();
        }, 
        error: function(error) {
          console.log("LOSER!!!");
          console.log(error);
        }            
    }); 
};