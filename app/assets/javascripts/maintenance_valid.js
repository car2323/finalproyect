function maintenance_validations(){
 var vali_var = true;
   if(($("#name_mainte").val()==="")|| ($("#description_mainte").val()==="") || ($("#date_mainte").val()==="")
   	|| ($("#price_mainte").val()==="")){
      vali_var = false;
   }

  return vali_var
}