$(document).on("page:load ready", function () {
  
  $(".js-depretaicioninfo").on("click", function () {
console.log("hbcwidhbcuewhbckuwehbc");
      $(".modal-body").empty();
      $(".modal_title").empty();
      $(".modal_title").append("<t class='letterred'>Straight-Line Depreciation Formula</t>");
      $(".modal-body").append('<strong class="letterorange"> SALVAGE </strong><t> = 1.2 % of the original equipment price</t><br>');
      $(".modal-body").append('<strong class="letterblue"> LIFE</strong> = useful life of AV equipment<br>');

      $(".modal-body").append('<br>');
      $(".modal-body").append('<strong class="letterblue"> AUDIO  </strong> = approx 12 years<br>');
      $(".modal-body").append('<strong class="letterblue"> VIDEO  </strong> = approx 9 years <br>');
      $(".modal-body").append('<strong class="letterblue"> LIGHT  </strong> = approx 10 years <br>');
      $(".modal-body").append('<strong class="letterblue"> STAGING  </strong> = approx 12 years <br>');
      $(".modal-body").append('<strong class="letterblue"> IT/COMPUTER  </strong> = approx 4 years <br>');
      $(".modal-body").append('<br>');


      $(".modal-body").append('<strong> DEPRECIATION IN ANY PERIOD = </strong>(( original equipment price - <strong class="letterorange">SALVAGE</strong> ) / <strong class="letterblue">LIFE</strong>)<br>');
      $(".modal-body").append('<br>');
  
      $(".modal").modal("show");
  });
});