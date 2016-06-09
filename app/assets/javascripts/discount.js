$(document).on("page:load ready", function () {
	console.log("holaaaaaaa");
	var originalrental = parseFloat($(".js-pricelessrental").text());
	var originalpricemainte = parseFloat($(".js-priceplusmainte").text());
	var originalprofit = parseFloat($(".js-profit").text());
	
     $("#js-discount").change(function(){
     	var porcent_discount = $("#js-discount").val();
     	var rental_discount = originalrental * porcent_discount;
     	$(".js-pricelessrental").text( originalrental - rental_discount);
         console.log(rental_discount);
/*--------------------------------------------------------------------------*/



        var rental_discount2 = originalpricemainte * porcent_discount;
     	$(".js-priceplusmainte").text( originalpricemainte - rental_discount2);


/*--------------------------------------------------------------------------*/
        

        var rental_discount3 = originalprofit * porcent_discount;
     	$(".js-profit").text( originalprofit - rental_discount3);
     	});
});



