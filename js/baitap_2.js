/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lấy giá trị người dùng nhập vào input
 * * Xử lý
 * * * Từ Tổng thu nhập và số người phụ thuộc tính ra thu nhập chịu thuế theo công thức
 * * * Tạo hàm tính thuế thu nhập cá nhân với tham số truyền vào là Thu nhập chịu thuế đã tính được ở trên
 * * *      => Tách hàm thành từ phần thuế khác nhau
 * * Đầu ra
 * * * Xuất kết quả ra màn hình gồm tên và tiền thuế phải trả
 */

document.getElementById("btnCalcPIT").addEventListener("click", function () {
   var fullName = document.getElementById("txtFullName").value;
   var totalEarning = parseInt(document.getElementById("txtTotalEarning").value);
   var numberPeople = parseInt(document.getElementById("txtNumberPeople").value);

   var currentFormat = new Intl.NumberFormat("vn-VN");

   var result = "";

   if (isNaN(totalEarning)) {
      result = "Vui lòng cho biết thu nhập!!!";
   } else if (isNaN(numberPeople)) {
      result = "Vui lòng cho biết số người phụ thuộc!!!";
   } else if (totalEarning <= 0) {
      result = "Thu nhập phải lớn hơn 0";
   } else if (numberPeople < 0) {
      result = "Số người phụ thuộc không được là số âm";
   } else {
      var taxEarning = totalEarning - 4000000 - numberPeople * 1600000;
      taxEarning <= 0 ? result = fullName + " không cần phải trả tiền thuế TNCN" :
         result = "Kết quả: " + fullName + " phải trả " + currentFormat.format(calcPIT(taxEarning)) + "VND tiền thuế TNCN";
   }

   document.getElementById("txtResult__2").innerHTML = result;
});

function calcPIT(taxEarning) {
   var tax = 0;
   if (taxEarning <= 60000000) {
      tax = tax_60(taxEarning);
   } else if (taxEarning > 60000000 && taxEarning <= 120000000) {
      tax = tax_60(60000000) + tax_60_120(taxEarning - 60000000);
   } else if (taxEarning > 120000000 && taxEarning <= 216000000) {
      tax = tax_60(60000000) + tax_60_120(60000000) + tax_120_216(taxEarning - 120000000);
   } else if (taxEarning > 216000000 && taxEarning <= 384000000) {
      tax = tax_60(60000000) + tax_60_120(60000000) + tax_120_216(96000000) + tax_216_384(taxEarning - 216000000);
   } else if (taxEarning > 384000000 && taxEarning <= 624000000) {
      tax = tax_60(60000000) + tax_60_120(60000000) + tax_120_216(96000000) + tax_216_384(168000000) + tax_384_624(taxEarning - 384000000);
   } else if (taxEarning > 624000000 && taxEarning <= 960000000) {
      tax = tax_60(60000000) + tax_60_120(60000000) + tax_120_216(96000000) + tax_216_384(168000000) + tax_384_624(240000000) + tax_624_960(taxEarning - 624000000);
   } else if (taxEarning > 960000000) {
      tax = tax_60(60000000) + tax_60_120(60000000) + tax_120_216(96000000) + tax_216_384(168000000) + tax_384_624(240000000) + tax_624_960(336000000) + tax_960(taxEarning - 960000000);
   }
   return tax;
}

function tax_60(taxEarning) {
   return taxEarning * 5 / 100;
}

function tax_60_120(taxEarning) {
   return taxEarning * 10 / 100;
}

function tax_120_216(taxEarning) {
   return taxEarning * 15 / 100;
}

function tax_216_384(taxEarning) {
   return taxEarning * 20 / 100;
}

function tax_384_624(taxEarning) {
   return taxEarning * 25 / 100;
}

function tax_624_960(taxEarning) {
   return taxEarning * 30 / 100;
}

function tax_960(taxEarning) {
   return taxEarning * 35 / 100;
}