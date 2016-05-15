function maintenance_validations(event){
   var vali_var = true;
   
    var datepurcharsed_valid = $(".datepurcharsed_valid");
    var purcharsed_date = datepurcharsed_valid.data("datepur");

 if($("#date_mainte").val()< purcharsed_date)
  {
    alert("MAINTENANCE DATE can not be BEFORE equipment purcharsed date");
    $("#date_mainte").val("");
  }
   if(($("#name_mainte").val()==="")|| ($("#description_mainte").val()==="") || ($("#date_mainte").val()==="")
   	|| ($("#price_mainte").val()==="")){
      vali_var = false;
    }
  return vali_var
}