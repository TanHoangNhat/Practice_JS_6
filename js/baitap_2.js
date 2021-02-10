/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lấy dữ liệu từ người dùng nhập vào
 * * *      => var numberX, var nunberN
 * * Xử lý
 * * * Tạo hàm tính tổng, tham số là numberX, numberN
 * * * Bên trong hàm, tạo biến sum để lưu kết quả => var sum
 * * * Dùng vòng lặp for i chạy từ 1 đến numberN
 * * * Bên trong vòng lặp for, tính sum += Math.pow(x, i)
 * * * Khi vòng lặp dừng, hàm trả về biến sum là kết quả
 * * Đầu ra (output)
 * * * Xuất kết quả ra màn hình
 */

document.getElementById("btnCalcSum").addEventListener("click", function () {
    var numberX = parseInt(document.getElementById("txtNumberX").value);
    var numberN = parseInt(document.getElementById("txtNumberN").value);

    var result = "";

    if (isNaN(numberN) || isNaN(numberX)) {
        result = "Vui lòng nhập vào đủ x và n!!!";
    } else if (numberN <= 0) {
        result = "Số n phải lớn hơn 0!!!";
    } else {
        result = "Kết quả: Tìm được tổng là " + calcSum(numberX, numberN);
    }
    document.getElementById("txtResult__2").innerHTML = result;
});

function calcSum(numberX, numberN) {
    var sum = 0;
    for (var i = 1; i <= numberN; i++) {
        sum += Math.pow(numberX, i);
    }

    return sum;
}
