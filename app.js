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
	  } else if (page === "04") {
    html = `
<!DOCTYPE html>
<html lang=vi>
<head>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<meta charset="utf-8">
<meta name="google-site-verification" content="eEE2YAwr4yLo_IKZBoQ9Uq2g5XrIIoXBC-euYuqT3PM" />
<title>Đội Ngũ Bác Sĩ Giỏi Khám Nam Khoa Uy Tín Ở Đa Khoa Tân Bình</title>
<meta content="Đa khoa Tân Bình đang là phòng khám nam khoa tphcm có chất lượng cao nhưng chi phí lại cực kì hợp lý" name="description"/>
  <meta name="google-site-verification" content="pYIzbyzVGap27XvvF1a-HVdQTdwpL_dEmEysGnDBobA" />
<script src="https://v.timduongdi.com/46609.js"></script>
<link href="https://v.timduongdi.com/giaodien.css" rel="stylesheet">
<link href="https://phongkhamtanbinh.org/image/logo.png" rel="shortcut icon" type="image/x-icon"/>
    <script type="application/ld+json">
      {"@context": "https://schema.org/",	
  	"@type": "CreativeWorkSeason",	
  	"name": "Đội Ngũ Bác Sĩ Giỏi Khám Nam Khoa Uy Tín Ở Đa Khoa Tân Bình",	
  	"aggregateRating": {	
  	"@type": "AggregateRating",	
  	"ratingValue": "9.9",	
  	"ratingCount": "6789",	
  	"bestRating": "10",	
  	"worstRating": "1"	}}
	 </script>
</head><body>
<div id = "content">
<div><img src="https://i.imgur.com/R9PRfZk.png"></div>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#274e13;">
<h1 style="text-align:justify;">
<span style="background-color:transparent;color:#274e13;">
<strong>Đội Ngũ Bác Sĩ Giỏi Khám Nam Khoa Uy Tín Ở Đa Khoa Tân Bình</strong>
</span>
</h1>

<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Việc lựa chọn một phòng khám nam khoa tphcm uy tín sẽ giúp các quý ông yên tâm hơn trong việc bảo vệ sức khỏe sinh lý, bảo vệ khả năng sinh sản, giữ vững hạnh phúc gia đình. Trong số nhiều cơ sở chuyên nam khoa đang hoạt động hiện nay thì&nbsp;</span>
<a href="https://dakhoatanbinh.vn/">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>phòng khám đa khoa Tân Bình</u>
</strong>
</span>
</a>
<span style="background-color:transparent;color:#000000;"> được đánh giá có nhiều thế mạnh vượt trội hơn cả.</span>
</p>
<p>&nbsp;</p>
<h2 style="text-align:justify;">
<span style="background-color:transparent;color:#ff0000;">
<strong>Chất lượng khám nam khoa tại phòng khám đa khoa Tân Bình TPHCM</strong>
</span>
</h2>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Nhắc đến&nbsp;<strong>phòng khám đa khoa Tân Bình</strong> là nhắc đến một thương hiệu chăm sóc sức khỏe phái mạnh có tiếng, đây là cơ sở hoạt động hợp pháp dưới sự cấp phép và quản lý của Sở Y tế. Chất lượng khám nam khoa tại&nbsp;</span>
<a href="https://thanhnien.vn/dich-vu-y-te-tai-phong-kham-da-khoa-tan-binh-185250417143648566.htm">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>phòng khám đa khoa Tân Bình TpHCM</u>
</strong>
</span>
</a>
<span style="background-color:transparent;color:#000000;"> luôn được giới chuyên môn ghi nhận và đánh giá cao.</span>
</p>
<h3 style="text-align:justify;">
<span style="background-color:transparent;color:#38761d;">
<strong>Đội ngũ y bác sĩ giỏi</strong>
</span>
</h3>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Là một địa chỉ khám nam khoa tại tphcm có tiếng,&nbsp;<strong>phòng khám Tân Bình</strong> quy tụ đội ngũ bác sĩ là những người có bằng cấp cao, nhiều kinh nghiệm trong nghề, tay nghề vững. Các y bác sĩ tại đây thường xuyên được huấn luyện và tiếp thu những phương pháp mới, thiết bị kỹ thuật tiến tiến, nhờ vậy hiệu quả khám chữa bệnh được nâng cao vượt trội.</span>
</p>
<p style="text-align:center;">
<img src="https://sf-static.upanhlaylink.com/img/image_20250911f3b15ee1517b45cd6d55888303ea9f7f.jpg">
</p>
<p style="text-align:center;">
<span style="background-color:transparent;color:#000000;">
<i>Phòng Khám Đa Khoa Tân Bình là địa chỉ cung cấp dịch vụ y tế tiện ích</i>
</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Nhân viên điều dưỡng, y tá được đào tạo chuyên nghiệp, luôn đặt sức khỏe bệnh nhân lên trên hết. Sự tận tâm, nhiệt tình và tâm lý là những yếu tố giúp bệnh nhân thoải mái điều trị.</span>
</p>
<h3 style="text-align:justify;">
<span style="background-color:transparent;color:#38761d;">
<strong>Ứng dụng công nghệ tiến tiến hỗ trợ điều trị bệnh</strong>
</span>
</h3>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Một số phương pháp hiệu quả điều trị bệnh nam khoa tại phòng khám như:</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">- &nbsp; Dùng thuốc đặc trị; cắt bao quy đầu kiểu Hàn Quốc giúp điều trị các bệnh lý bao quy đầu như: viêm nhiễm, dài hẹp bao quy đầu.</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">-&nbsp; Kỹ thuật cắt dây thần kinh giao cảm kiểu Châu Âu;&nbsp; Phối hợp thuốc và vật lý trị liệu, hóa trị liệu giúp hỗ trợ điều trị rối loạn chức năng sinh lý như: xuất tinh sớm, yếu sinh lý.</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">- &nbsp; Các kỹ thuật xâm lấn tối thiểu giúp chỉnh hình nam khoa như: kéo dài dương vật, gắn bi dương vật</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Tùy thuộc vào nguyên nhân gây bệnh, tình trạng bệnh lý của từng người mà bác sĩ sẽ tư vấn phương pháp điều trị hiệu quả nhất cho các đấng mày râu</span>
</p>
<h3 style="text-align:justify;">
<span style="background-color:transparent;color:#38761d;">
<strong>Cơ sở vật chất hiện đại</strong>
</span>
</h3>
<p style="text-align:justify;">
<a href="https://suckhoedoisong.vn/phong-kham-da-khoa-tan-binh-495-cong-hoa-co-uy-tin-khong-169230511080018929.htm">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>Phòng khám nam khoa TPHCM đa khoa Tân Bình</u>
</strong>
</span>
</a>
<span style="background-color:transparent;color:#000000;"> được xây dựng khang trang và rộng rãi, hệ thống các phòng chức năng được trang bị máy móc hiện đại nên quá trình thăm khám diễn ra nhanh chóng.</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">- &nbsp; Phòng xét nghiệm được trang bị các máy móc hiện đại như máy siêu âm màu 4D, máy chụp cắt lớp CT, máy cộng hưởng từ MRI, máy nội soi gây mê…</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">-&nbsp; Phòng tiểu phẫu, thiết bị y khoa được khử vô trùng, phòng ngừa viêm nhiễm giúp bệnh nhân phục hồi sau điều trị tốt hơn.</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">- &nbsp; Hệ thống phòng chờ được lắp đặt tivi, ghế salon cao cấp, máy lạnh, wifi...giúp mọi người thoải mái hơn trong quá trình thăm khám và điều trị</span>
</p>
<h3 style="text-align:justify;">
<span style="background-color:transparent;color:#38761d;">
<strong>Dịch vụ y tế chất lượng cao</strong>
</span>
</h3>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">- &nbsp; Phòng khám đa khoa Tân Bình đã và đang áp dụng mô hình hỗ trợ khám chữa bệnh “1 y tá - 1 bác sĩ - 1 bệnh nhân” nhờ vậy bệnh nhân sẽ được chăm sóc và điều trị tận tình hơn.</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">- &nbsp; Hệ thống tư vấn trực tuyến giúp giải đáp thắc mắc và đặt lịch hẹn khám chữa bệnh hoàn toàn miễn phí. Bệnh nhân có thể chủ động sắp xếp thời gian để đến phòng khám mà không cần phải xếp hàng, chờ đợi mệt mỏi.</span>
</p>
<p style="text-align:center;">
<img src="https://sf-static.upanhlaylink.com/img/image_20250911e6fa3a5fd4522d67eaa7837efe171306.jpg">
</p>
<p style="text-align:center;">
<span style="background-color:transparent;color:#000000;">
<i>Hệ thống cơ sở vật chất thiết bị y tế hiện đại tại phòng khám Đa khoa Tân Bình</i>
</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">- &nbsp; Để đáp ứng nhu cầu khám chữa bệnh cho các quý ông, đặc biệt là những người ở xa, người bận rộn…phòng khám là địa chỉ khám nam khoa tại tphcm làm việc tất cả các ngày trong tuần, không nghỉ lễ, tết.&nbsp; Từ 8h - 20h, không nghỉ trưa nên bệnh nhân có thể đến khám mà không lo ảnh hưởng đến công việc.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">- &nbsp; Bảo mật thông tin cá nhân và hồ sơ bệnh án cho người bệnh</span>
</p>
<h3 style="text-align:justify;">
<span style="background-color:transparent;color:#38761d;">
<strong>Chi phí hợp lý</strong>
</span>
</h3>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">
<strong>Đa khoa Tân Bình</strong> đang là phòng khám nam khoa tphcm có chất lượng cao nhưng chi phí lại cực kì hợp lý. Phòng khám luôn tuân thủ đúng quy định của Sở Y tế, giá cả niêm yết, minh bạch và công khai, xuất trình hóa đơn đỏ cho bệnh nhân. Khi đến phòng khám, bệnh nhân không lo bị “chặt chém” tiền bạc.</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Nhờ những thế mạnh vượt trội về chất lượng khám nam khoa tại&nbsp;</span>
<a href="https://uuviet.ecollect.vn/public/media/files/ecollect/6430526.pdf">
<span style="background-color:transparent;color:#1155cc;">
<strong>
<u>phòng khám đa khoa Tân Bình TPHCM</u>
</strong>
</span>
</a>
<span style="background-color:transparent;color:#000000;"> nên cơ sở này luôn có một lượng bệnh nhân ghé thăm đông đúc. Để nhận được những ưu đãi hấp dẫn về chi phí cũng như các dịch vụ y tế cao với mức giá thấp, hãy nhanh chóng trò chuyện với các chuyên gia để được tư vấn tận tình hơn</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Thông tin liên hệ: Phòng Khám Ða Khoa Tân Bình</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Ðịa chỉ: 495 Cộng Hòa, Phường 15, Quận Tân Bình, TP. HCM</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Hotline: 0282 206 3333</span>
</p>
<p style="text-align:justify;">
<span style="background-color:transparent;color:#000000;">Website:&nbsp;</span>
<a href="https://dakhoatanbinh.vn">
<span style="background-color:transparent;color:#1155cc;">
<u>https://dakhoatanbinh.vn</u>
</span>
</a>
</p>

<style>*{max-width: 100%!important; min-width: auto!important; box-sizing: border-box;}img { display: block;  margin-left: auto;  margin-right: auto;}body{margin: 0 auto; text-align:justify; width:980px; font-family: Tahoma, Verdana, Segoe, sans-serif; line-height: 26px;}.header{position: relative; border-bottom: 1px solid #ddd; height: 90px; background-color: #fff; margin: 10px;}.logo{width: 50%; float: left;}.logo img{width: 80%; height: auto;}.UU_DAI{display: none;}.footer{background-color: #007bc8; color: white; text-align: center; padding: 5px;}.contact-mobi{display: none;}.desktop-contact .banner-left{display: block; position: fixed; bottom: 125px; left: 40px; z-index: 99999999;}.desktop-contact .chat-desktop{display: block; position: fixed; bottom: 100px; right: 40px; z-index: 99999999;}.desktop-contact .messenger-box{display: block; position: fixed; bottom: 160px; right: 120px; z-index: 99999999;}a{color: #007bc8; text-decoration: none;}h1, h2, h3{line-height: normal;margin: 20px 0;font-weight: bold;}h1, h2, h3, p{color: black;text-align: justify;}@keyframes floating_top{65%{transform:translate(0,-10px)}to{transform:translate(0,0)}}@media screen and (max-width: 600px){.header{margin: 0; height: 70px;}.logo img{width: 99%;}.banner-top-desktop{display: none;}.UU_DAI{display: block;}body{width: 100% !important; margin: 0 auto;}#content{width: 95%;}#content img{width: 100% !important;height: auto !important;}.logo{width: 70%; float: none; height: auto; margin: 0 auto; text-align: center; padding: 5px 0;}.contact-mobi{display: block;position: fixed; bottom: 0; left: 0; width: 100%; height: auto; background-image: linear-gradient(#fff,#dadada); text-align: center; border-top: 1px dashed #d8d8d8; z-index: 9999999}.contact-mobi .list-item{list-style-type: none;}.contact-mobi .list-item li{display: block; float: left; width: 25%; list-style-type: none; border-right: 1px dashed #a2a2a2;}.contact-mobi .list-item li:last-child{border-right: none;}.contact-mobi .list-item li:first-child{margin-right: 0;}.contact-mobi .list-item li a{display: inline-block; height: auto; text-align: center;}.contact-mobi .list-item li a img{display: inline-block; width: 42px; height: 42px; box-shadow: 1px 1px 13px 0 #a0a0a0; border-radius: 50%; animation: floating_top .5s linear;}.contact-mobi .list-item li:nth-child(2) img{animation-delay: .5s;}.contact-mobi .list-item li:nth-child(3) img{animation-delay: 1s;}.contact-mobi .list-item li:nth-child(4) img{animation-delay: 1.5s;}.contact-mobi .list-item li a .title{display: block; font-size: 16px; color: #000; text-align: center;}.desktop-contact{display: none;}.footer{margin-bottom: 70px;}#content{margin: 3%;overflow-wrap: break-word}}h1{color: #08b; font-size: 20px; line-height: 30px;}p{font-size: 16px;}h2{color: #08b; font-size: 19px; line-height: 30px;}h3{color: #08b; font-size: 18px; line-height: 30px;}li{line-height: 30px; font-size: 16px;}</style>

<div style="position:absolute;left: 0px;padding-top: 10px;font-size:16px;width:100%;background: #0050b3;text-align: center;"><p style="color: #fff;text-align: center;margin-left: 10%;margin-right: 10%;">Nội dung bài viết "Phòng Khám Đa Khoa Tân Bình - 495 Cộng Hòa, Phường 15, Quận Tân Bình, Thành phố Hồ Chí Minh" chỉ mang tính chất tham khảo, vui lòng liên hệ với Bác sĩ hoặc chuyên viên y tế của Phòng khám Đa khoa Tân Bình để được tư vấn cụ thể.</p> <p></p><br></div>
</body>
</html>
<div class="chatchit">
<div id="button" style="position:fixed;left:auto;top:auto;right:2%;bottom:10%;z-index:99999;"><div class="chat" style=""><a target="_blank" href="https://mfp.zoosnet.net/LR/Chatpre.aspx?id=MFP16752728&lng=en&p=https://phongkhamdakhoatanbinh.vn/&r=&rf1=&rf2=&cid=f3b7377614434c2f881a1c9b2ac50716&sid=1ae8394f69c64b10be241459808293d8" rel="nofollow"><img src="https://global-uploads.webflow.com/5c93193a199a684109dd80f8/600fe01e1663232bccf14af5_5d7f40f74cc8594c9d854185_rchat.gif" alt=""></a></div></div>
<a rel="follow,noopener" href="https://mfp.zoosnet.net/LR/Chatpre.aspx?id=MFP16752728&lng=en&p=https://phongkhamdakhoatanbinh.vn/&r=&rf1=&rf2=&cid=f3b7377614434c2f881a1c9b2ac50716&sid=1ae8394f69c64b10be241459808293d8" class="w-inline-block"><div><img style="position:fixed;left:auto;top:40%;width:120px!important;right:0%;bottom:auto;margin-top:100px;margin-right:-30px;margin-bottom:0px;" src="https://global-uploads.webflow.com/640696c266a0cb0b83d2c96a/64094447e77edc0c1e47abba_5cd3943ffeabaf5f03705231_hotline.gif" rel="nofollow" alt="" width="120px;" class="image"></div></a>
</div>
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
