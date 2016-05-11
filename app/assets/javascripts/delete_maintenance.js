function deleted_mainte(string_url){
    $.ajax({
        type: "DELETE", 
        url: string_url,  
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