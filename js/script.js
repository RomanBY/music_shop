var color = 'rgba(249, 9, 9, 0.65)';

function change1(identifier) {
    identifier.style.background = color;
    document.getElementById('col2').style.cssText = 'background-color: #673e30';
    document.getElementById('col3').style.cssText = 'background-color: #673e30';
    document.getElementById('col4').style.cssText = 'background-color: #673e30';
}
function change2(identifier) {
    identifier.style.background = color;
    document.getElementById('col1').style.cssText = 'background-color: #673e30';
    document.getElementById('col3').style.cssText = 'background-color: #673e30';
    document.getElementById('col4').style.cssText = 'background-color: #673e30';
}
function change3(identifier) {
    identifier.style.background = color;
    document.getElementById('col2').style.cssText = 'background-color: #673e30';
    document.getElementById('col1').style.cssText = 'background-color: #673e30';
    document.getElementById('col4').style.cssText = 'background-color: #673e30';
}
function change4(identifier) {
    identifier.style.background = color;
    document.getElementById('col2').style.cssText = 'background-color: #673e30';
    document.getElementById('col3').style.cssText = 'background-color: #673e30';
    document.getElementById('col1').style.cssText = 'background-color: #673e30';
}


var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function () {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function () {
        clearInterval(switchInterval);
    }, function () {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function () {
        nextSlide();
    });

    $('#prev-btn').click(function () {
        prevSlide();
    });

    $('.slide-nav-btn').click(function () {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });

            slideNow = navBtnId + 1;
        }

    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
    if (slideNow == 1) {
        $('#first-nav-btn').css({
            'background-color': '#f90909cc',
        });
        $('#second-nav-btn').css({
            'background-color': '#fff'
        });
        $('#third-nav-btn').css({
            'background-color': '#fff'
        });
    }
    if (slideNow == 2) {
        $('#first-nav-btn').css({
            'background-color': '#fff',
        });
        $('#second-nav-btn').css({
            'background-color': '#f90909cc'
        });
        $('#third-nav-btn').css({
            'background-color': '#fff'
        });
    }
    if (slideNow == 3) {
        $('#first-nav-btn').css({
            'background-color': '#fff',
        });
        $('#second-nav-btn').css({
            'background-color': '#fff'
        });
        $('#third-nav-btn').css({
            'background-color': '#f90909cc'
        });
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }

}
$(document).ready(function(){
    $('body').append('<a href="#" id="go-top" title="Вверх"></a>');
});

$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});

$(function() {
    $("#go-top").scrollToTop();
});


