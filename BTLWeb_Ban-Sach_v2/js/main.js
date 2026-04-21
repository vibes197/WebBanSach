// ============================================================
//  AyaBook – main.js  (khởi tạo chung, dùng jQuery)
// ============================================================

// helper để lưu giỏ hàng và yêu thích theo từng user
window.getAuthEmail = function() {
    return (localStorage.getItem('loggedIn') === 'true') ? localStorage.getItem('email') : 'guest';
};
window.getCartKey = function() { return 'ayaCart_' + window.getAuthEmail(); };
window.getFavKey  = function() { return 'ayaFavorites_' + window.getAuthEmail(); };

$(document).ready(function () {

    // ─── Toast Notifications ──────────────────────────────────
    window.ayaShowToast = function (message, type) {
        type = type || 'success';
        var iconMap = {
            success: 'bi-check-circle-fill',
            cart: 'bi-cart-check-fill',
            warning: 'bi-exclamation-triangle-fill',
            danger: 'bi-x-circle-fill'
        };
        var colorMap = {
            success: '#FF6B6B',
            cart: '#34D399',
            warning: '#F59E0B',
            danger: '#EF4444'
        };
        var icon = iconMap[type] || 'bi-info-circle-fill';
        var color = colorMap[type] || '#FF6B6B';

        var $toast = $('<div class="aya-toast"></div>').html(
            '<i class="bi ' + icon + '" style="color:' + color + '"></i><span>' + message + '</span>'
        ).css('border-left-color', color);

        if (!$('#aya-toast-container').length) {
            $('body').append('<div id="aya-toast-container"></div>');
        }
        $('#aya-toast-container').append($toast);
        setTimeout(function () { $toast.addClass('show'); }, 30);
        setTimeout(function () {
            $toast.removeClass('show');
            setTimeout(function () { $toast.remove(); }, 400);
        }, 3000);
    };
    // Alias cũ cho compatibility
    window.showToast = window.ayaShowToast;

    // ─── Auth UI Update ───────────────────────────────────────
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

    // ─── User Avatar Dropdown ────────────────────────────────
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

    // ─── Search redirect ──────────────────────────────────────
    function doSearch(q) {
        if (q && q.trim()) {
            // Detect nếu ta đang ở root hay html/ folder
            var isRoot = !window.location.pathname.includes('/html/');
            var prefix = isRoot ? 'html/' : '';
            window.location.href = prefix + 'timkiem.html?q=' + encodeURIComponent(q.trim());
        }
    }

    $('#book-search-button').on('click', function () {
        doSearch($('#book-search-input').val());
    });

    $('#book-search-input').on('keydown', function (e) {
        if (e.key === 'Enter') doSearch($(this).val());
    });

    // ─── Navbar Scroll Effect ─────────────────────────────────
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) {
            $('nav.navbar').addClass('navbar-scrolled');
        } else {
            $('nav.navbar').removeClass('navbar-scrolled');
        }
    });

});

// ─── requireLogin (global) ───────────────────────────────────
function requireLogin() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.ayaShowToast && window.ayaShowToast('Bạn cần đăng nhập để thực hiện chức năng này!', 'warning');
        var isRoot = !window.location.pathname.includes('/html/');
        var prefix = isRoot ? 'html/' : '';
        setTimeout(function () {
            window.location.href = prefix + 'dangNhap.html';
        }, 1200);
        return false;
    }
    return true;
}
