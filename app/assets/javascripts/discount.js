$(document).on("page:load ready", function () {
	console.log("holaaaaaaa");
	var originalrental = parseFloat(($(".js-pricelessrental").text()));
	$(".js-priceplusmainte");
    $(".js-profit");
     $("#js-discount").change(function(){
     	var porcent_discount = $("#js-discount").val();
     	var rental_discount = originalrental * porcent_discount;
     	$(".js-pricelessrental").text( originalrental - rental_discount);
         console.log(rental_discount);
         $(".js-priceplusmainte");
         $(".js-profit");
     	});
});



