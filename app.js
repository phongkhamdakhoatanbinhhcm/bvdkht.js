// Lấy tham số page từ URL
const params = new URLSearchParams(window.location.search);
const page = params.get("page") || "01";

// Hàm render theo từng page
function render(page) {
  let html = "";

  if (page === "01") {
    html = `
      <h1 style="color:#007bc8; text-align:center;">Phòng Khám Đa Khoa Tân Bình</h1>
      <p style="text-align:justify;">
        Đây là giao diện <b>01</b>. Nội dung giới thiệu cơ bản về phòng khám.
      </p>
    `;
  } else if (page === "02") {
    html = `
      <h1 style="color:green; text-align:center;">Dịch vụ Y Tế</h1>
      <p style="text-align:justify;">
        Đây là giao diện <b>02</b>. Thông tin các dịch vụ khám chữa bệnh nổi bật.
      </p>
    `;
  } else if (page === "03") {
    html = `
      <h1 style="color:darkred; text-align:center;">Liên Hệ Phòng Khám</h1>
      <p style="text-align:justify;">
        Đây là giao diện <b>03</b>. Bao gồm thông tin liên hệ, địa chỉ và hotline.
      </p>
    `;
  } else {
    html = `
      <h1 style="color:gray; text-align:center;">Không tìm thấy giao diện</h1>
      <p style="text-align:justify;">
        Bạn chưa chọn đúng tham số <b>?page=</b>. Ví dụ:
        <br><a href="?page=01">Trang 01</a> |
        <a href="?page=02">Trang 02</a> |
        <a href="?page=03">Trang 03</a>
      </p>
    `;
  }

  document.getElementById("app").innerHTML = html;
}

// Render giao diện
render(page);
