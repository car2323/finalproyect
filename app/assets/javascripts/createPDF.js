$(document).on("page:load ready", function () {

     $(".js-createpdf").on("click",function (event){

      event.preventDefault();

      var equipment_id_btn = $(event.currentTarget);
      var equipment_id = equipment_id_btn.data("equip");
      console.log(equipment_id);
       $.ajax({       
              url: "/api/equipments/"+ equipment_id,
              success: function (equipment){
                 create_PDFequip(equipment);
         
              },
              error:function (equipment) {
                  console.log("It failed. :( ");
                  console.log(theError.responseJSON);
              }
        }); 
   });
});
function create_PDFequip(one_equipment){

  var doc = new jsPDF();
  doc.setFont("helvetica");
  doc.setFontSize(30);
  doc.setLineWidth(1.5);
  doc.line(0, 35, 300, 35);
  doc.text(65,20,"Equipment Report");
  doc.setFontSize(12);
  doc.text(10,30,"");
  doc.text(10,40,"");
  doc.text(10,50, "CATEGORY: ");
  doc.text(10,60, "NAME: ");
  doc.text(10,70, "MODEL: ");
  doc.text(10,80, "SERIAL: ");
  doc.text(10,90, "BRAND: ");
  doc.text(10,100, "PURCHASED DATE:");
  doc.text(10,110, "ORIGINAL PRICE:");
  doc.text(10,120, "Current Difference against original price: ");
  doc.text(10,130, "Current Difference against original price  plus cost of all maintenance: ");
  doc.text(10,140, "PROFIT: ");
  doc.text(10,150, "RUNNING TIME: ");
  doc.text(10,160, "REPORT DATE: ");
  


  doc.setFontType("bold");
  doc.setTextColor(150);
    doc.text(55,50, one_equipment.category);
	doc.text(55,60, one_equipment.name);
    doc.text(55,70, one_equipment.model);

	doc.text(55,80, one_equipment.serial);
	doc.text(55,90, one_equipment.brand);
	var price=one_equipment.original_price.toString();
	doc.text(55,100, one_equipment.purchased_date);
	  doc.setTextColor(255, 0, 0);
        doc.text(55,110, price+" $");
   


 doc.save(one_equipment.name +"_"+ one_equipment.serial);
};



