// pkpk.js

// Chứa toàn bộ nội dung các trang theo key = page
var pages = {
  "01": `
    <h1>Trang giới thiệu Phòng Khám TPHCM</h1>
    <p>Đây là nội dung mẫu cho page 01. Bạn thay thế theo ý muốn.</p>
  `,
  "02": `
    <h1>Trang 02</h1>
    <p>Nội dung riêng cho page 02 hiển thị tại đây.</p>
  `,
  "03": `
    <h1>Trang 03</h1>
    <p>Nội dung của trang số 03. Bạn cập nhật thoải mái.</p>
  `,
  "04": `
    <h1>Trang 04</h1>
    <p>Nội dung HTML tùy chỉnh cho trang 04.</p>
  `,
  "05": `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="utf-8">
      <title>Đội Ngũ Bác Sĩ Giỏi Khám Nam Khoa Uy Tín Ở Đa Khoa Tân Bình</title>
      <link href="https://v.timduongdi.com/giaodien.css" rel="stylesheet">
    </head>
    <body>
      <h1>Đội Ngũ Bác Sĩ Giỏi Khám Nam Khoa Uy Tín Ở Đa Khoa Tân Bình</h1>
      <p>Nội dung đầy đủ của trang 05 mà bạn gửi ở trên sẽ đặt vào đây.</p>
    </body>
    </html>
  `
};

// Hàm render nội dung ra index.html
function renderPage() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  if (page && pages[page]) {
    document.body.innerHTML = pages[page];
  } else {
    document.body.innerHTML = "<h2>Trang không tồn tại</h2>";
  }
}

// Gọi khi load trang
renderPage();
