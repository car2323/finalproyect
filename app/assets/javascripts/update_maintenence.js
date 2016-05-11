function update_mainte(string_url){
   console.log(string_url);
  var post_data = {
      name: $("#name_mainte").val(),
      description: $("#description_mainte").val(),
      date: $("#date_mainte").val(),
      price: $("#price").val(),
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