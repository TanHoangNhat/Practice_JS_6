/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lấy giá trị nhập vào của người dùng
 * * *      => var limitNumber
 * * Xử lý
 * * * Tạo hàm tìm số, tham số nhập vào là limitNumber
 * * * Tạo biến total để chứa giá trị so sánh
 * * * Tạo biến number = 0 là biến chạy;
 * * * Bên trong hàm dùng vòng lặp while với điều kiện numbeer < limitNumber
 * * *      => total += number;
 * * * Dừng vòng lặp, có được kết quả number
 * * Đầu ra (output)
 * * * Xuất kết quả ra màn hình
 */

document.getElementById("btnFindNumber").addEventListener("click", function () {
    var limitNumber = parseInt(document.getElementById("txtLimitNumber").value);

    var result = "";

    if (isNaN(limitNumber)) {
        result = "Vui lòng nhập vào số giới hạn!";
    } else if (limitNumber <= 0) {
        result = "Số giới hạn phải lớn hơn 0";
    } else {
        if (findNumber(limitNumber) != 0) {
            result = "Kết quả: Số cần tìm thỏa điều kiện là " + findNumber(limitNumber);
        } else {
            result = "Không tìm được kết quả!";
        }
    }
    document.getElementById("txtResult__1").innerHTML = result;
});

function findNumber(limitNumber) {
    var total = 0;
    var number = 0;

    if (limitNumber == 1) {
        return number;
    }

    while (total <= limitNumber) {
        number++;
        total += number;
    }

    return number;
}