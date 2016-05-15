function rental_validations(event){
   var vali_var = true;
   var datepurcharsed_valid = $(".datepurcharsed_valid");
   var purcharsed_date = datepurcharsed_valid.data("datepur");

   if($("#date_rental").val()< purcharsed_date)
   {
       alert("RENTAL DATE can not be BEFORE equipment purcharsed date");
       $("#date_rental").val("");
   }

   if(($("#name_rental").val()==="")|| ($("#date_rental").val()==="") || 
   	($("#total_price_rental").val()==="")){
      vali_var = false;
   }

  return vali_var
}