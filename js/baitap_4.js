/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * Xử lý
 * * * Dùng vòng lặp for i chạy từ 1 đến 10
 * * * Kết hợp createElement và appendChild để tạo thẻ
 * * * Kiểm tra nếu i là số chẵn thì thêm class có backgroud đỏ, ngược lại lẻ có background xanh
 * * Đầu ra
 * * * Xuất ra màn hình 10 div đã tạo
 */

document.getElementById("btnCreateDiv").addEventListener("click", function () {
    for (var i = 1; i <= 10; i++) {
        var div = document.createElement("DIV");
        var p = document.createElement("P");
        p.innerHTML = i;
        p.className = "h2 m-0";
        div.appendChild(p);
        if (i % 2 == 0) {
            div.className = "col-md-1 bg-danger text-white d-flex align-items-center justify-content-center";
        } else {
            div.className = "col-md-1 bg-primary text-white d-flex align-items-center justify-content-center";
        }
        document.getElementById("txtResult__4").appendChild(div);
    }
});

document.getElementById("btnRemoveDiv").addEventListener("click", function () {
    var parent = document.getElementById("txtResult__4");
    while (parent.childNodes.length > 2) {
        parent.removeChild(parent.childNodes[parent.childNodes.length - 1]);
    }
});
