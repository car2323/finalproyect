function equipment_validations(event){
 var vali_var = true;
 //console.log("entro en la funcion de validacion");
  var time_now = $(".js-timenow");
  var time_now_valid = time_now.data("timedatenow");
 console.log(time_now_valid);
 console.log(time_now);

 if(time_now_valid < $("#datepurc").val())
  {
  	console.log("entro en el si");
    alert("DATE PURCHARSED can not be AFTER DATE NOW");
    $("#datepurc").val("");
  }


   if(($("#name").val()==="")|| ($("#model").val()==="") || ($("#serial").val()==="")
   	|| ($("#brand").val()==="")|| ($("#datepurc").val()==="")|| 
   	($("#category_equip").val()===" ")||($("#price").val()==="")){
      vali_var = false;
   }

  return vali_var
}