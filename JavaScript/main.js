//navbar turn off the collapse action
$( ".navbar-default:visible" ).click(function() {
    $('.nav a').on('click', function () {
    //    $('.btn-navbar').click(); //bootstrap 2.x
        $('.navbar-toggle').click() //bootstrap 3.x
    });
});

//turn red the hover nav a words
var linkClicked = document.getElementsByClassName('nav-link'); ///////https://codepen.io/RegisIrala/pen/EEwWVy
var numClass = linkClicked.length;
for (var i = 0; i < numClass; i++) {
    linkClicked[i].addEventListener('click', function(){
        var onTheMoment = document.getElementsByClassName('active');
        onTheMoment[0].className = onTheMoment[0].className.replace(' active', '');
        this.className += ' active'; // the active link becomes true
    }, false);
}

//changes the pages 
$('#show_home').click(function () {
    $(".containerAssects .home").show(); // you can use toggle
    $(".containerAssects .aboutUs").hide();
    $(".containerAssects .services").hide();
    $(".containerAssects .contacts").hide();
    $(".containerAssects .news").hide();
});

$('#show_aboutUs').click(function () {
    $(".containerAssects .home").hide(); // you can use toggle
    $(".containerAssects .aboutUs").show();
    $(".containerAssects .services").hide();
    $(".containerAssects .contacts").hide();
    $(".containerAssects .news").hide();
});

$('#show_services').click(function () {
    $(".containerAssects .home").hide(); // you can use toggle
    $(".containerAssects .aboutUs").hide();
    $(".containerAssects .services").show();
    $(".containerAssects .contacts").hide();
    $(".containerAssects .news").hide();
});

$('#show_contact').click(function () {
    $(".containerAssects .home").hide(); // you can use toggle
    $(".containerAssects .aboutUs").hide();
    $(".containerAssects .services").hide();
    $(".containerAssects .contacts").show();
    $(".containerAssects .news").hide();
});

$('#show_news').click(function () {
    $(".containerAssects .home").hide(); // you can use toggle
    $(".containerAssects .aboutUs").hide();
    $(".containerAssects .services").hide();
    $(".containerAssects .contacts").hide();
    $(".containerAssects .news").show();
});

