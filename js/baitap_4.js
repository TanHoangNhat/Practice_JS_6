/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lấy thông tin khách hàng Cá nhân hay Doanh nghiệp
 * * *      => Dùng checked để kiểm tra
 * * * Lấy thông tin số kênh cao cấp nếu khách hàng là Cá nhân
 * * * Lấy thông tin số kênh cao cấp, số kết nối nếu khách hàng là Doanh nghiệp
 * * Xử lý
 * * * Dùng switch case để tách 2 trường hợp Cá nhân và Doanh nghiệp
 * * * Tạo 2 hàm tính tiền cáp cho mỗi loại khách hàng
 * * *      => Đối với khách hàng cá nhân, tham số truyền vào là số kênh cao cấp
 * * *      => Đối với khách hàng doanh nghiệp, tham số truyền vào là số kênh cao cấp và số kết nối
 * * *
 * * Đầu ra
 * * * Xuất ra màn hình kết quả tổng chi phí thuê cáp
 */


document.getElementById("btnCountCost").addEventListener("click", function () {
    var personal = document.getElementById("radioPersonal")
    var enterprise = document.getElementById("radioEnterprise");
    var channel = parseInt(document.getElementById("txtChannel").value);

    var result = "";

    var customerType = "";

    if (personal.checked == true) {
        customerType = personal.value;
    } else if (enterprise.checked == true) {
        customerType = enterprise.value
    }

    if (isNaN(channel)) {
        result = "Vui lòng nhập vào số kênh cao cấp!";
    } else if (channel < 0) {
        result = "Số kênh cao cấp không được là số âm!";
    } else {
        switch (customerType) {
            case "1":
                result = "Kết quả: Cá nhân phải trả " + personalCost(channel) + "$ tiền phí thuê cáp";
                break;
            case "2":
                var connection = parseInt(document.getElementById("txtConnection").value);
                if (isNaN(connection)) {
                    result = "Vui lòng nhập vào số kết nối!";
                } else if (connection <= 0) {
                    result = "Số kết nối ít nhất phải bằng 1";
                } else {
                    result = "Kết quả: Doanh nghiệp phải trả " + enterpriseCost(channel, connection) + "$ tiền phí thuê cáp";
                }
        }
    }

    document.getElementById("txtResult__4").innerHTML = result;
});

function personalCost(channel) {
    return 4.5 + 20.5 + channel * 7.5;
}

function enterpriseCost(channel, connection) {
    var connectionCost = 0;
    if (connection == 0) {
        connectionCost = 0;
    } else if (connection > 0 && connection <= 10) {
        connectionCost = 75;
    } else {
        connectionCost = 75 + (connection - 10) * 5;
    }
    return 15 + connectionCost + channel * 50;
}

// Hàm check trạng thái của nút radio, nếu là khách hàng cá nhân thì disable ô input số kết nối
function check() {
    if (document.getElementById("radioPersonal").checked == true) {
        document.getElementById("txtConnection").disabled = true;
    } else {
        document.getElementById("txtConnection").disabled = false;
    }
}

// Gọi hàm để check mỗi khi load lại trang
check();