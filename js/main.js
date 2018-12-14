/**
 * Created by GL552JX on 21-Dec-16.
 */

$('#goUp, .headerSlide a').click(function() {
    if(this.hash !== '') {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 75
        }, 1000)
    }
}); /*-- Scroll Animate --*/


$('#goUp').hide();
$(window).scroll(function () {
   if ($(this).scrollTop() > 600) {
       $('#goUp').show();
   } else {
       $('#goUp').hide();
   }
   console.log();
}); /*-- Button Go Up --*/


var countTime = 59;
setInterval(function () {
    if (countTime === 0) {
        countTime = 59;
    }
    $('.countdown').text(--countTime);
}, 1000); /*-- Countdown Event --*/


function animateIcon(x) {
    x.classList.toggle("change");
} /*-- Animation Button --*/

$('#moreContent').hide();
$('#btnSM').click(function () {
    $('#moreContent').show(1000);
}); /*-- Show more --*/


var alertBox = $('.alert-danger');
alertBox.hide();
$('#btnSubmit').click(function () {
    var name = $('#name').val();
    var email = $('#email').val();
    var comment = $('#comment').val();
    var alertContent = $('#alertContent');

    if (name == '') {
        alertBox.show();
        alertContent.text('Vui lòng nhập Tên của bạn');
    } else {
        if (email == '') {
            alertContent.text('Vui lòng nhập Email của bạn');
        } else {
            if (comment == '') {
                alertContent.text('Hãy để lại lời nhắn cho chúng tôi');
            } else {
                alert('Tin nhắn đã được gửi! Cảm ơn Bạn!');
                location.reload();
            }
        }
    }
}); /*-- Validate Form --*/