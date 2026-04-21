// ============================================================
//  AyaBook – Dữ liệu sách (toàn cục)
// ============================================================
var booksData = [
    // --- SÁCH MỚI ---
    {
        id: 'nina', name: 'Nina ở thị trấn cao nguyên - Tập 2',
        title: 'Nina ở thị trấn cao nguyên - Tập 2',
        price: '34,200đ', originalPrice: '38,000đ', discount: '-10%',
        img: '../img/nina.png', category: 'manga',
        categoryLabel: 'Manga', author: 'Ashi',
        publisher: 'NXB Kim Đồng', pages: 192, publishDate: '2024',
        rating: 4.5, ratingCount: 12, sold: 890,
        desc: 'Nina ở thị trấn cao nguyên là bộ manga nhẹ nhàng, dễ thương kể về cuộc sống của cô bé Nina tại một thị trấn bình yên trên cao nguyên.',
        cungTheLoai: ['worldtrigger', 'drstone', 'doraemondoiquan', 'rantaro']
    },
    {
        id: 'tet', name: 'Những ngày tết ta',
        title: 'Những ngày tết ta',
        price: '81,000đ', originalPrice: '90,000đ', discount: '-10%',
        img: '../img/tet.png', category: 'thieunhi',
        categoryLabel: 'Thiếu nhi', author: 'Nhiều tác giả',
        publisher: 'NXB Trẻ', pages: 256, publishDate: '2024',
        rating: 4.7, ratingCount: 25, sold: 1200,
        desc: 'Những ngày tết ta là tập truyện ngắn tập hợp những câu chuyện cảm động về Tết Nguyên Đán của người Việt Nam.',
        cungTheLoai: ['bantusach', 'thiendinh', 'tute', 'damnghi']
    },
    {
        id: 'worldtrigger', name: 'World Trigger - Tập 4',
        title: 'World Trigger - Tập 4',
        price: '31,500đ', originalPrice: '35,000đ', discount: '-10%',
        img: '../img/worldtrigger.png', category: 'manga',
        categoryLabel: 'Manga', author: 'Daisuke Ashihara',
        publisher: 'NXB Kim Đồng', pages: 192, publishDate: '2024',
        rating: 4.8, ratingCount: 40, sold: 2100,
        desc: 'World Trigger kể về cuộc chiến bảo vệ Trái Đất khỏi những kẻ xâm lược đến từ chiều không gian khác.',
        cungTheLoai: ['nina', 'drstone', 'doraemondoiquan', 'rantaro']
    },
    {
        id: 'bantusach', name: 'Những người bạn từ trang sách',
        title: 'Những người bạn từ trang sách',
        price: '85,500đ', originalPrice: '95,000đ', discount: '-10%',
        img: '../img/bantusach.png', category: 'tieuthuyet',
        categoryLabel: 'Tiểu thuyết', author: 'Nguyễn Nhật Ánh',
        publisher: 'NXB Trẻ', pages: 320, publishDate: '2024',
        rating: 4.6, ratingCount: 18, sold: 650,
        desc: 'Cuốn sách dẫn người đọc vào thế giới kỳ diệu của những trang sách, nơi nhân vật và độc giả trở thành những người bạn đồng hành.',
        cungTheLoai: ['tet', 'thiendinh', 'tute', 'damnghi']
    },
    // --- BÁN CHẠY ---
    {
        id: 'shin', name: 'Shin - Cậu bé bút chì - Tập 1',
        title: 'Shin - Cậu bé bút chì - Tập 1',
        price: '19,500đ', originalPrice: '22,000đ', discount: '-11%',
        img: '../img/shin.png', category: 'manga',
        categoryLabel: 'Manga', author: 'Yoshito Usui',
        publisher: 'NXB Kim Đồng', pages: 176, publishDate: '2023',
        rating: 4.9, ratingCount: 98, sold: 5200,
        desc: 'Shin - Cậu bé bút chì là bộ truyện tranh hài hước nổi tiếng về cuộc sống hàng ngày của Shinnosuke – cậu bé tinh nghịch.',
        cungTheLoai: ['nina', 'worldtrigger', 'rantaro', 'drstone']
    },
    {
        id: 'naruto', name: 'Naruto - Quyển 20',
        title: 'Naruto - Quyển 20',
        price: '21,000đ', originalPrice: '23,000đ', discount: '-9%',
        img: '../img/naruto.png', category: 'manga',
        categoryLabel: 'Manga', author: 'Masashi Kishimoto',
        publisher: 'NXB Kim Đồng', pages: 200, publishDate: '2023',
        rating: 5.0, ratingCount: 150, sold: 8800,
        desc: 'Naruto là bộ truyện tranh huyền thoại kể về hành trình trưởng thành của cậu bé ninja Uzumaki Naruto.',
        cungTheLoai: ['worldtrigger', 'drstone', 'shin', 'doraemondoiquan']
    },
    {
        id: 'onepi', name: 'One Piece - Tập 101',
        title: 'One Piece - Tập 101',
        price: '25,000đ', originalPrice: '28,000đ', discount: '-11%',
        img: '../img/onepi.png', category: 'manga',
        categoryLabel: 'Manga', author: 'Eiichiro Oda',
        publisher: 'NXB Kim Đồng', pages: 208, publishDate: '2024',
        rating: 5.0, ratingCount: 200, sold: 12000,
        desc: 'One Piece – bộ manga vĩ đại nhất lịch sử kể về hành trình của Monkey D. Luffy tìm kiếm kho báu One Piece.',
        cungTheLoai: ['naruto', 'shin', 'worldtrigger', 'akutami']
    },
    {
        id: 'akutami', name: 'Chú thuật hồi chiến - Tập 1',
        title: 'Chú thuật hồi chiến - Tập 1',
        price: '30,000đ', originalPrice: '33,000đ', discount: '-9%',
        img: '../img/akutami.png', category: 'manga',
        categoryLabel: 'Manga', author: 'Gege Akutami',
        publisher: 'NXB Kim Đồng', pages: 192, publishDate: '2023',
        rating: 4.9, ratingCount: 185, sold: 9500,
        desc: 'Jujutsu Kaisen – Chú thuật hồi chiến là bộ manga hành động huyền bí hấp dẫn. Itadori Yuji nuốt ngón tay của Vua Lời Nguyền.',
        cungTheLoai: ['naruto', 'onepi', 'shin', 'worldtrigger']
    },
    // --- MANGA COLLECTION ---
    {
        id: 'xebuyt', name: 'XE BUÝT ĐƯA EM ĐI',
        title: 'XE BUÝT ĐƯA EM ĐI',
        price: '36,000đ', originalPrice: '40,000đ', discount: '-10%',
        img: '../img/xebuyt.png', category: 'tieuthuyet',
        categoryLabel: 'Tiểu thuyết', author: 'Nhiều tác giả',
        publisher: 'NXB Kim Đồng', pages: 40, publishDate: '2024',
        rating: 4.3, ratingCount: 8, sold: 320,
        desc: 'Xe buýt đưa em đi là cuốn sách tranh dành cho trẻ em, kể về những chuyến đi thú vị bằng xe buýt.',
        cungTheLoai: ['rantaro', 'drstone', 'doraemondoiquan', 'shin']
    },
    {
        id: 'rantaro', name: 'Ninja Rontaro - Tập 19',
        title: 'Ninja Rontaro - Tập 19',
        price: '36,000đ', originalPrice: '40,000đ', discount: '-10%',
        img: '../img/rantaro.png', category: 'manga',
        categoryLabel: 'Manga', author: 'Sōbē Amako',
        publisher: 'NXB Kim Đồng', pages: 176, publishDate: '2024',
        rating: 4.5, ratingCount: 22, sold: 740,
        desc: 'Ninja Rantaro là bộ truyện hài hước kể về những chú ninja học sinh tinh nghịch tại trường dạy ninja.',
        cungTheLoai: ['xebuyt', 'drstone', 'doraemondoiquan', 'nina']
    },
    {
        id: 'drstone', name: 'Doctor Stone - Tập 21',
        title: 'Doctor Stone - Tập 21',
        price: '22,500đ', originalPrice: '25,000đ', discount: '-10%',
        img: '../img/drstone.png', category: 'manga',
        categoryLabel: 'Manga', author: 'Riichiro Inagaki',
        publisher: 'NXB Kim Đồng', pages: 192, publishDate: '2024',
        rating: 4.8, ratingCount: 55, sold: 1800,
        desc: 'Doctor Stone kể về thiên tài khoa học Senku Ishigami dùng khoa học để xây dựng lại nền văn minh sau tận thế.',
        cungTheLoai: ['naruto', 'worldtrigger', 'rantaro', 'doraemondoiquan']
    },
    {
        id: 'doraemondoiquan', name: 'Đội quân Doraemon - Tập 4',
        title: 'Đội quân Doraemon - Tập 4',
        price: '19,800đ', originalPrice: '22,000đ', discount: '-10%',
        img: '../img/doraemondoiquan.png', category: 'manga',
        categoryLabel: 'Manga', author: 'Fujiko F. Fujio',
        publisher: 'NXB Kim Đồng', pages: 176, publishDate: '2023',
        rating: 4.7, ratingCount: 60, sold: 3200,
        desc: 'Đội quân Doraemon là bộ truyện tranh kinh điển về chú mèo máy Doraemon và những người bạn trong vô số cuộc phiêu lưu.',
        cungTheLoai: ['shin', 'rantaro', 'drstone', 'xebuyt']
    },
    // --- KỸ NĂNG ---
    {
        id: 'thiendinh', name: 'THIỀN ĐỊNH MỖI NGÀY',
        title: 'THIỀN ĐỊNH MỖI NGÀY',
        price: '118,000đ', originalPrice: '130,000đ', discount: '-9%',
        img: '../img/thiendinh.png', category: 'kynang',
        categoryLabel: 'Sách kỹ năng', author: 'Tamara Levitt',
        publisher: 'NXB Tổng hợp TP.HCM', pages: 280, publishDate: '2024',
        rating: 4.8, ratingCount: 33, sold: 920,
        desc: 'Thiền định mỗi ngày là cuốn cẩm nang hướng dẫn thực hành thiền định từ đơn giản đến nâng cao.',
        cungTheLoai: ['tute', 'damnghi', 'bantusach', 'tet']
    },
    {
        id: 'tute', name: 'MỘT NĂM SỐNG TỬ TẾ',
        title: 'MỘT NĂM SỐNG TỬ TẾ',
        price: '168,000đ', originalPrice: '185,000đ', discount: '-9%',
        img: '../img/tute.png', category: 'kynang',
        categoryLabel: 'Sách kỹ năng', author: 'Tutu',
        publisher: 'NXB Hội Nhà Văn', pages: 312, publishDate: '2024',
        rating: 4.9, ratingCount: 47, sold: 1540,
        desc: 'Một năm sống tử tế là tập hợp những câu chuyện nhỏ về lòng tốt, sự chia sẻ và cách sống ý nghĩa mỗi ngày.',
        cungTheLoai: ['thiendinh', 'damnghi', 'sohoc', 'tet']
    },
    {
        id: 'sohoc', name: 'THAY ĐỔI CUỘC SỐNG VỚI NHÂN SỐ HỌC',
        title: 'THAY ĐỔI CUỘC SỐNG VỚI NHÂN SỐ HỌC',
        price: '181,040đ', originalPrice: '200,000đ', discount: '-10%',
        img: '../img/sohoc.png', category: 'kynang',
        categoryLabel: 'Sách kỹ năng', author: 'Nguyễn Vũ Tuấn Anh',
        publisher: 'NXB Tổng hợp TP.HCM', pages: 250, publishDate: '2024',
        rating: 4.5, ratingCount: 19, sold: 560,
        desc: 'Cuốn sách khám phá hệ thống nhân số học phương Tây và cách áp dụng vào cuộc sống thực tế.',
        cungTheLoai: ['thiendinh', 'tute', 'damnghi', 'bantusach']
    },
    {
        id: 'damnghi', name: 'DÁM NGHĨ LẠI',
        title: 'DÁM NGHĨ LẠI',
        price: '117,600đ', originalPrice: '130,000đ', discount: '-10%',
        img: '../img/damnghi.png', category: 'kynang',
        categoryLabel: 'Sách kỹ năng', author: 'Adam Grant',
        publisher: 'NXB Lao Động', pages: 336, publishDate: '2023',
        rating: 4.7, ratingCount: 38, sold: 1100,
        desc: 'Dám nghĩ lại của Adam Grant thách thức chúng ta xem xét lại những niềm tin của mình và suy nghĩ linh hoạt hơn.',
        cungTheLoai: ['thiendinh', 'tute', 'sohoc', 'bantusach']
    }
];

// Helper: Lấy sách theo ID
function getBookById(id) {
    return booksData.find(function(b) { return b.id === id; }) || booksData[0];
}

// Helper: Lấy sách theo category
function getBooksByCategory(cat) {
    return booksData.filter(function(b) { return b.category === cat; });
}

// Helper: Tìm kiếm sách
function searchBooks(query) {
    var q = query.toLowerCase().trim();
    return booksData.filter(function(b) {
        return b.name.toLowerCase().includes(q) ||
               (b.author && b.author.toLowerCase().includes(q));
    });
}
