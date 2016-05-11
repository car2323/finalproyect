function rental_validations(){
 var vali_var = true;
 
   if(($("#name_rental").val()==="")|| ($("#date_rental").val()==="") || 
   	($("#total_price_rental").val()==="")){
      vali_var = false;
   }

  return vali_var
}