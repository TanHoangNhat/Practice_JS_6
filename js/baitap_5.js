/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lấy dữ liệu số giới hạn của người dùng nhập vào input
 * * *      => var num
 * * Xử lý
 * * * Tạo hàm tìm các số nguyên tố, tham số là num
 * * *      - Tạo hàm kiểm tra số nguyên tố, tham số truyền vào là số cần kiểm tra (number)
 * * *      - Tạo biến check kiểu boolean để chứa kết quả kiểm tra
 * * *      - Bên trong hàm chạy vòng lặp for i từ 2 tới < number
 * * *      - Nếu number % i == 0, check = false, break để dừng vòng lặp. Ngược lại check = true, number là số nguyên tố
 * * *      - Trả về biến check
 * * * Bên trong hàm tạo vòng lặp for i chạy từ 2 đến num
 * * * Bên trong for đầu, gọi hàm kiểm tra số nguyên tố, nếu hàm trả về true, thêm i vào chuỗi kết quả
 * * * Trả về chuỗi kết quả
 * * Đầu ra (output)
 * * * Xuất chuỗi kết quả ra màn hình
 */

document.getElementById("btnFindSNT").addEventListener("click", function () {
    var num = parseInt(document.getElementById("txtNum").value);

    var result = "";

    if (isNaN(num)) {
        result = "Vui lòng nhập vào số nguyên!";
    } else if (num < 0) {
        result = "Giá trị nhập vào phải lớn hơn 0!"
    } else {
        for (var i = 2; i <= num; i++) {
            if (i == 2) {
                result += i + " ";
            }
            else if (checkSNT(i) == true) {
                result += i + " ";
            }
        }
    }

    document.getElementById("txtResult__5").innerHTML = "Kết quả: " + result;
});

function checkSNT(number) {
    var check = false;

    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            check = false;
            break;
        } else {
            check = true;
        }
    }
    return check;
}