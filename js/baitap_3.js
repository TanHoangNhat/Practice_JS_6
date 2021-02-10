/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lấy giá trị số cần tính giai thừa từ người dùng nhập vào
 * * * var number
 * * Xử lý
 * * * Tạo hàm tính giai thừa, tham số là number
 * * * Tạo biến chứa giai thừa của number => numberFactorial
 * * * Bên trong hàm cho vòng lặp for i chạy từ 1 đến number
 * * *      => numberFactorial *= i
 * * * Hàm trả về mumberFactorial là kết quả bài toán
 * * Đầu ra
 * * * Xuất kết quả ra màn hình
 */

document.getElementById("btnFactorial").addEventListener("click", function () {
    var number = parseInt(document.getElementById("txtNumber").value);

    var result = "";
    if (isNaN(number)) {
        result = "Vui lòng nhập vào số để tính giai thừa!";
    } else if (number <= 0) {
        result = "Vui lòng nhập vào số lớn hơn 0!";
    } else {
        result = "Kết quả: Giai thừa của " + number + " là " + calcFactorial(number);
    }

    document.getElementById("txtResult__3").innerHTML = result;
});

function calcFactorial(number) {
    var numberFactorial = 1;
    for (var i = 1; i <= number; i++) {
        numberFactorial *= i;
    }

    return numberFactorial;
}