/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lấy giá trị người dùng nhập vào input
 * * Xử lý
 * * * Tạo hàm tính tiền điện phải trả dựa theo quy tắc đề cho, tham số truyền vào là số KW
 * * *      => Tách hàm thành từ phần điện khác nhau
 * * Đầu ra
 * * * Xuất kết quả ra màn hình gồm tên và tiền điện phải trả
 */

document.getElementById("btnCountElectricMoney").addEventListener("click", function () {
    var fullName = document.getElementById("txtName").value;
    var numberKW = parseFloat(document.getElementById("txtKW").value);

    var currentFormat = new Intl.NumberFormat("vn-VN");

    var result = "";

    if (numberKW <= 0) {
        result = "Số KW phải lớn hơn 0";
    } else if (isNaN(numberKW)) {
        result = "Vui lòng nhập vào số KW đã tiêu thụ";
    } else {
        result = "Kết quả: " + fullName + " phải trả " + currentFormat.format(countElectricMoney(numberKW)) + "VND tiền điện";
    }

    document.getElementById("txtResult__3").innerHTML = result;
});

function countElectricMoney(numberKW) {
    var totalMoney = 0;

    if (numberKW <= 50) {
        totalMoney = count_50(numberKW);
    } else if (numberKW > 50 && numberKW <= 100) {
        totalMoney = count_50(50) + count_50_100(numberKW - 50);
    } else if (numberKW > 100 && numberKW <= 200) {
        totalMoney = count_50(50) + count_50_100(50) + count_100_200(numberKW - 100);
    } else if (numberKW > 200 && numberKW <= 350) {
        totalMoney = count_50(50) + count_50_100(50) + count_100_200(100) + count_200_350(numberKW - 200);
    } else if (numberKW > 350) {
        totalMoney = count_50(50) + count_50_100(50) + count_100_200(100) + count_200_350(150) + count_350(numberKW - 350);
    }
    return totalMoney;
}

function count_50(numberKW) {
    return numberKW * 500;
}

function count_50_100(numberKW) {
    return numberKW * 650;
}

function count_100_200(numberKW) {
    return numberKW * 850;
}

function count_200_350(numberKW) {
    return numberKW * 1100;
}

function count_350(numberKW) {
    return numberKW * 1300;
}