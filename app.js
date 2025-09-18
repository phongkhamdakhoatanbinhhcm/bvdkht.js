// Lấy tham số page
const params = new URLSearchParams(window.location.search);
const page = params.get("page");

// Danh sách giao diện
const pages = {
  "01": `
    <h1>Giao diện Phòng khám TPHCM</h1>
    <p>Đây là code HTML bạn muốn truyền cho trang 01.</p>
  `,
  "02": `
    <h1>Giao diện Phòng khám Nam khoa</h1>
    <p>Nội dung khác do bạn truyền vào cho trang 02.</p>
  `,
  "03": `
    <h1>Phòng khám Da liễu</h1>
    <p>Giao diện và nội dung riêng của trang 03.</p>
  `
};

// Render ra #app
const app = document.getElementById("app");
if (page && pages[page]) {
  app.innerHTML = pages[page];
} else {
  app.innerHTML = `<h2>Trang mặc định</h2><p>Thêm ?page=01 hoặc ?page=02 vào link để xem giao diện.</p>`;
}
