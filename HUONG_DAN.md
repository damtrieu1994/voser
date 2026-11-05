# VOSER–pDMFT – App cài trên điện thoại / máy tính bảng (PWA)

## Trong thư mục này
- index.html – app, giao diện tiếng Anh
- vi.html – app, giao diện tiếng Việt (dùng chung dữ liệu với bản tiếng Anh)
- manifest.webmanifest, sw.js – để cài lên màn hình chính và chạy không cần mạng
- icons/, fonts/, lib/ – biểu tượng, phông chữ, thư viện xuất Excel/ZIP (đều nằm sẵn trong máy, không cần mạng)

## Bước 1 – Đưa app lên mạng (miễn phí, GitHub Pages)
1. Vào https://github.com → Sign up (tạo tài khoản), xác nhận email.
2. Bấm "+" (góc trên phải) → New repository → đặt tên `voser` → chọn **Public** → Create repository.
3. Trong kho vừa tạo: bấm "uploading an existing file" → kéo **toàn bộ nội dung bên trong** thư mục này
   (index.html, vi.html, sw.js, manifest.webmanifest và 3 thư mục icons, fonts, lib) vào → Commit changes.
   Lưu ý: kéo các file vào, KHÔNG kéo cả thư mục cha.
4. Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, thư mục `/ (root)` → Save.
5. Chờ 1–2 phút, link app sẽ là: `https://<tên-tài-khoản>.github.io/voser/`

Kho Public chỉ chứa code của app, KHÔNG chứa dữ liệu người tham gia (dữ liệu nằm trong từng máy).

## Bước 2 – Cài lên máy
- iPad / iPhone: mở link bằng **Safari** → nút Chia sẻ → "Thêm vào MH chính" (Add to Home Screen).
- Android: mở bằng **Chrome** → menu ⋮ → "Cài đặt ứng dụng" / "Thêm vào màn hình chính".
- Mở app một lần khi có mạng; sau đó dùng được cả khi không có mạng.

## Vai trò (lần đầu mở app sẽ hỏi "Bạn là ai?")
- **Người khám**: 3 bước – Mã & sàng lọc → Khám lâm sàng (cDMFT) → Chụp 5 ảnh; kèm Danh sách để Sao lưu.
- **Nha sĩ đọc ảnh**: 2 bước – Chọn phiếu (chỉ thấy mã và tiến độ đọc) → Đọc ảnh (Người đọc 1, 2 hoặc Trọng tài).
  Luôn bật che mù; không thấy kết quả khám hay AI. Cuối buổi bấm "Sao lưu kết quả đọc".
- **Quản lý dữ liệu**: 5 bước đầy đủ, Danh sách, Sao lưu, xuất Excel, Hướng dẫn.
- **Mục pDMFT** (chỉ Quản lý dữ liệu thấy): mô hình KHÔNG chạy trong app. Khi nhóm chạy pDMFT-AI gửi kết quả về,
  nhập 3 số D, M, F (app tự cộng ra pDMFT), ghi phiên bản mô hình, rồi bấm Khóa. Nếu AI không cho kết quả, đánh dấu ô
  "AI không cho kết quả". Kết quả theo từng răng của AI (nếu có) giữ trong file riêng của nhóm chạy mô hình.
- Đổi vai trò bằng nút 👤 ở góc trên. Mỗi máy nhớ vai trò đã chọn.
- Bước "So sánh" đã bỏ khỏi app: so sánh cDMFT – vDMFT – pDMFT làm khi phân tích, từ file Excel xuất ra.

## Ảnh hồ sơ giấy, ảnh dùng chung, kết quả từng mục
- **Ảnh hồ sơ giấy** (bước Nhập ảnh, khung đầu tiên): chụp phần đầu phiếu giấy có mã nghiên cứu để đối chiếu.
  Che họ tên nếu có. Ảnh này chỉ người khám và quản lý thấy; không hiện cho người đọc ảnh, không đưa vào file ảnh cho AI;
  có trong bản Sao lưu.
- **Ảnh dùng chung**: 5 ảnh trong miệng chỉ cần tải một lần ở bước Nhập ảnh; bước Đọc ảnh (vDMFT) và bước pDMFT
  tự hiện cùng bộ ảnh đó.
- **Khung Kết quả** ở đầu mỗi bước: Khám → cDMFT; Đọc ảnh → vDMFT của chính người đọc (trọng tài thấy vDMFT đồng thuận
  sau khi hai người đọc khóa); pDMFT → tổng D + M + F. Mỗi bước chỉ hiện kết quả của chính bước đó để giữ che mù.

## Đổi ngôn ngữ
- Nút **Tiếng Việt / English** ở góc trên bên phải. App nhớ lựa chọn: lần sau mở app sẽ vào đúng ngôn ngữ đã chọn.
- Hai ngôn ngữ dùng chung một bộ dữ liệu trong máy: hồ sơ nhập bằng giao diện nào cũng thấy ở giao diện kia.
- Bấm **Lưu / Save** trước khi đổi ngôn ngữ.

## Bước 3 – Dùng hằng ngày
- Góc trên hiện "Đã lưu trên máy này" / "Saved on this device" = dữ liệu và ảnh được lưu ngay trong máy, tắt app vẫn còn.
- Dữ liệu KHÔNG tự chia sẻ giữa các máy. Cuối mỗi ngày: Danh sách → **Sao lưu** (Records → Backup) (.json, gồm cả ảnh)
  → gửi cho người quản lý dữ liệu; người quản lý dùng nút mở bản sao lưu để gộp vào một máy.
- Xuất Excel (.xlsx) và ảnh (.zip) ở trang Danh sách (Records).
- KHÔNG dùng chế độ duyệt riêng tư (Private), KHÔNG xoá dữ liệu trang web của Safari/Chrome, KHÔNG gỡ app
  khi chưa Backup – làm vậy sẽ mất dữ liệu trong máy.
- iPhone/iPad: Safari có thể xoá dữ liệu của trang không mở trong nhiều tuần; app đã thêm ra màn hình chính
  thì an toàn hơn, nhưng vẫn phải Backup hằng ngày.

## Bước 4 – Khi sửa app
1. Thay file mới trên GitHub (Add file → Upload files, ghi đè).
2. Mở sw.js, đổi `voser-v6` thành `voser-v7` (v8, …) để các máy nhận bản mới.
3. Trên máy: mở app khi có mạng, đóng hẳn rồi mở lại.

## Thử trên máy tính trước khi đưa lên mạng
Mở Terminal trong thư mục này, chạy: `python3 -m http.server 8000`, rồi mở http://localhost:8000
(mở trực tiếp file index.html bằng nhấp đúp vẫn chạy, nhưng không có chế độ ngoại tuyến).
