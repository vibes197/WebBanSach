
$(document).ready(function () {
    updateAuthUI();
});
function updateAuthUI() {
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
function ayaLogin() {
    var email = $('#email').val().trim();
    var pass = $('#password').val();
    var $errorBox = $('#loginError');
    var $errorMsg = $('#loginErrorMsg');
    var $successBox = $('#loginSuccess');
    var $btn = $('#loginBtn');

    $errorBox.hide();
    $successBox.hide();

    if (!email || !pass) {
        $errorMsg.text('Vui lòng nhập đầy đủ thông tin!');
        $errorBox.fadeIn();
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        $errorMsg.text('Vui lòng nhập địa chỉ email hợp lệ!');
        $errorBox.fadeIn();
        return;
    }

    var savedEmail = localStorage.getItem('email');
    var savedPass = localStorage.getItem('password');

    if (email === savedEmail && pass === savedPass) {
        localStorage.setItem('loggedIn', 'true');
        $successBox.fadeIn();
        $btn.html('<i class="bi bi-check-circle"></i> Thành công!').addClass('btn-success-state');
        setTimeout(function () {
            window.location.href = '../index.html';
        }, 900);
    } else {
        $errorMsg.text('Sai tài khoản hoặc mật khẩu!');
        $errorBox.fadeIn();
        var $card = $('.auth-card');
        $card.addClass('shake');
        setTimeout(function () { $card.removeClass('shake'); }, 600);
    }
}
function ayaRegister() {
    var name = $('#regName').val().trim();
    var email = $('#regEmail').val().trim();
    var pass = $('#regPassword').val();
    var passConfirm = $('#regPasswordConfirm').val();
    var agree = $('#agree').is(':checked');
    var $errorBox = $('#regError');
    var $errorMsg = $('#regErrorMsg');
    var $btn = $('#regBtn');

    $errorBox.hide();

    if (!name || !email || !pass || !passConfirm) {
        $errorMsg.text('Vui lòng nhập đầy đủ thông tin!');
        $errorBox.fadeIn();
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        $errorMsg.text('Vui lòng nhập địa chỉ email hợp lệ!');
        $errorBox.fadeIn();
        return;
    }

    if (pass.length < 6) {
        $errorMsg.text('Mật khẩu phải có ít nhất 6 ký tự!');
        $errorBox.fadeIn();
        return;
    }

    if (pass !== passConfirm) {
        $errorMsg.text('Mật khẩu xác nhận không khớp!');
        $errorBox.fadeIn();
        $('#regPasswordConfirm').css('border-color', '#EF4444');
        return;
    }

    if (!agree) {
        $errorMsg.text('Bạn phải đồng ý với điều khoản dịch vụ!');
        $errorBox.fadeIn();
        return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('password', pass);
    localStorage.setItem('name', name);

    $btn.html('<i class="bi bi-check-circle"></i> Đăng ký thành công!').addClass('btn-success-state').prop('disabled', true);
    setTimeout(function () {
        window.location.href = './dangNhap.html';
    }, 900);
}
function ayaLogout() {
    localStorage.removeItem('loggedIn');
    window.location.reload();
}
function requireLogin() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        ayaShowToast('Bạn cần đăng nhập để thực hiện chức năng này!', 'warning');
        setTimeout(function () {
            window.location.href = './html/dangNhap.html';
        }, 1200);
        return false;
    }
    return true;
}
function togglePasswordVisibility(inputId, btn) {
    var $input = $('#' + inputId);
    var $icon = $(btn).find('i');
    if ($input.attr('type') === 'password') {
        $input.attr('type', 'text');
        $icon.removeClass('bi-eye').addClass('bi-eye-slash');
    } else {
        $input.attr('type', 'password');
        $icon.removeClass('bi-eye-slash').addClass('bi-eye');
    }
}

