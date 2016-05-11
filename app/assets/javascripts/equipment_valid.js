function equipment_validations(){
 var vali_var = true;
   if(($("#name").val()==="")|| ($("#model").val()==="") || ($("#serial").val()==="")
   	|| ($("#brand").val()==="")|| ($("#datepurc").val()==="")|| 
   	($("#category_equip").val()===" ")||($("#price").val()==="")){
      vali_var = false;
   }

  return vali_var
}