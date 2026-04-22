// ============================================================
//  AyaBook – navbar.js  (inject Navbar + Footer cho trang html/)
//  Dùng jQuery
// ============================================================

$(document).ready(function () {

    // ─── Inject Navbar ────────────────────────────────────────
    var navbarHtml = `
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid px-4">
            <a class="navbar-brand" href="../index.html">AyaBook</a>
            
            <div class="d-flex align-items-center order-lg-last gap-2 gap-lg-1">
                <div class="d-flex align-items-center gap-1 right-icons-group">
                    <a href="yeuthich.html" class="header-icon-btn">
                        <i class="ti-heart"></i><span class="d-none d-lg-inline">Yêu thích</span>
                    </a>
                    <a href="donhang.html" class="header-icon-btn">
                        <i class="ti-shopping-cart"></i><span class="d-none d-lg-inline">Giỏ hàng</span>
                    </a>
                    <a id="loginBtn" href="dangNhap.html" class="header-icon-btn">
                        <i class="ti-shift-right"></i><span class="d-none d-lg-inline">Đăng nhập</span>
                    </a>
                    <div class="user-avatar-wrapper" style="display:none;" id="userAvatarBtn">
                        <button class="header-icon-btn" type="button">
                            <i class="ti-user"></i><span class="d-none d-lg-inline">Tài khoản</span>
                        </button>
                        <div class="user-dropdown-menu" id="userDropdownMenu">
                            <div id="userDropdownName">Tài khoản</div>
                            <a href="#" class="d-flex align-items-center gap-2" id="logoutBtn">
                                <i class="ti-shift-left"></i> Đăng xuất
                            </a>
                        </div>
                    </div>
                </div>

                <button class="navbar-toggler ms-1 ms-sm-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" style="background-image: none; display: flex; align-items: center; justify-content: center;"><i class="ti-menu"></i></span>
                </button>
            </div>

            <div class="collapse navbar-collapse" id="navbarMain">
                <ul class="navbar-nav me-auto ms-lg-3 gap-1">
                    <li class="nav-item"><a class="nav-link" href="../index.html">Trang chủ</a></li>
                    <li class="nav-item"><a class="nav-link" href="faq.html">FAQ & Hỏi đáp</a></li>
                    <li class="nav-item"><a class="nav-link" href="vechungtoi.html">Về chúng tôi</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button">Chủ đề</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="chude.html?c=tieuthuyet">Tiểu thuyết</a></li>
                            <li><a class="dropdown-item" href="chude.html?c=manga">Manga</a></li>
                            <li><a class="dropdown-item" href="chude.html?c=kynang">Sách kỹ năng</a></li>
                            <li><a class="dropdown-item" href="chude.html?c=hoctap">Sách học tập</a></li>
                            <li><a class="dropdown-item" href="chude.html?c=thieunhi">Sách thiếu nhi</a></li>
                            <li><a class="dropdown-item" href="chude.html?c=trinhtham">Trinh thám</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="navbar-search me-lg-3 my-2 my-lg-0">
                    <input id="book-search-input" type="text" placeholder="Tìm kiếm sách...">
                    <button id="book-search-button" type="button" aria-label="Tìm kiếm">
                        <i class="ti-search"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>`;

    var footerHtml = `
    <footer class="aya-footer">
        <div class="container-fluid px-4 px-lg-5">
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                <div class="footer-copy">
                    <p>&copy; 2026 <strong>AyaBook</strong>. All rights reserved.</p>
                    <p class="footer-sub">Mua sách online dễ dàng &amp; chuyên nghiệp.</p>
                </div>
                <div class="footer-social text-center">
                    <p>KẾT NỐI VỚI CHÚNG TÔI</p>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook"><i class="ti-facebook"></i></a>
                        <a href="https://www.youtube.com/" target="_blank" aria-label="YouTube"><i class="ti-youtube"></i></a>
                        <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram"><i class="ti-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div id="aya-toast-container"></div>`;

    $('body').prepend(navbarHtml);
    // Footer được nhúng trực tiếp trong từng file HTML, không inject ở đây

    // ─── Auth UI ──────────────────────────────────────────────
    function updateNavAuthUI() {
        var isLoggedIn = localStorage.getItem('loggedIn') === 'true';
        var name = localStorage.getItem('name') || '';
        if (isLoggedIn) {
            $('#loginBtn').hide();
            $('#userAvatarBtn').show();
            $('#userDropdownName').text('Xin chào, ' + name);
        } else {
            $('#loginBtn').show();
            $('#userAvatarBtn').hide();
        }
    }
    updateNavAuthUI();

    // ─── User dropdown ────────────────────────────────────────
    $(document).on('click', '#userAvatarBtn', function (e) {
        e.stopPropagation();
        $('#userDropdownMenu').toggleClass('show');
    });
    $(document).on('click', function () {
        $('#userDropdownMenu').removeClass('show');
    });

    // ─── Logout ──────────────────────────────────────────────
    $(document).on('click', '#logoutBtn', function (e) {
        e.preventDefault();
        localStorage.removeItem('loggedIn');
        window.location.reload();
    });

    // ─── Search redirect (from html/ folder) ─────────────────
    function doSearch(q) {
        if (q && q.trim()) {
            window.location.href = 'timkiem.html?q=' + encodeURIComponent(q.trim());
        }
    }

    $(document).on('click', '#book-search-button', function () {
        doSearch($('#book-search-input').val());
    });

    $(document).on('keydown', '#book-search-input', function (e) {
        if (e.key === 'Enter') doSearch($(this).val());
    });

    // ─── Navbar Scroll ────────────────────────────────────────
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) {
            $('nav.navbar').addClass('navbar-scrolled');
        } else {
            $('nav.navbar').removeClass('navbar-scrolled');
        }
    });

    // ─── Toast ───────────────────────────────────────────────
    window.ayaShowToast = function (message, type) {
        type = type || 'success';
        var iconMap = { success: 'ti-check', cart: 'ti-shopping-cart', warning: 'ti-alert', danger: 'ti-close' };
        var colorMap = { success: '#FF6B6B', cart: '#34D399', warning: '#F59E0B', danger: '#EF4444' };
        var icon = iconMap[type] || 'ti-info';
        var color = colorMap[type] || '#FF6B6B';
        var $toast = $('<div class="aya-toast"></div>').html('<i class="' + icon + '" style="color:' + color + '"></i><span>' + message + '</span>').css('border-left-color', color);
        if (!$('#aya-toast-container').length) { $('body').append('<div id="aya-toast-container"></div>'); }
        $('#aya-toast-container').append($toast);
        setTimeout(function () { $toast.addClass('show'); }, 30);
        setTimeout(function () { $toast.removeClass('show'); setTimeout(function () { $toast.remove(); }, 400); }, 3000);
    };
    window.showToast = window.ayaShowToast;

    // ─── Custom Dropdown Toggle for Mobile (No Popper.js) ─────
    $(document).on('click', '.navbar-nav .dropdown-toggle', function (e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            e.stopPropagation();
            var $parent = $(this).parent();
            $parent.toggleClass('show');
            $parent.find('.dropdown-menu').slideToggle(200);
        }
    });

});

// ─── Cart/Fav keys (global fallback) ─────────────────────────
if (typeof window.getAuthEmail !== 'function') {
    window.getAuthEmail = function () {
        return (localStorage.getItem('loggedIn') === 'true') ? localStorage.getItem('email') : 'guest';
    };
}
if (typeof window.getCartKey !== 'function') {
    window.getCartKey = function () { return 'ayaCart_' + window.getAuthEmail(); };
}
if (typeof window.getFavKey !== 'function') {
    window.getFavKey = function () { return 'ayaFavorites_' + window.getAuthEmail(); };
}

// ─── requireLogin (global) ───────────────────────────────────
function requireLogin() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.ayaShowToast && window.ayaShowToast('Bạn cần đăng nhập để thực hiện chức năng này!', 'warning');
        setTimeout(function () { window.location.href = 'dangNhap.html'; }, 1200);
        return false;
    }
    return true;
}
