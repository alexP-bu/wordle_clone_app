$(document).ready(function () {
    $('.help').hide();

    $('.x_icon').click(function (e) { 
        $('.help').hide();
        $('.web_header').show();        
        $('.keyboard_grid').show();
        $('.letter_grid').show();
    });

    $('.').click(function (e) { 
        e.preventDefault();
        
    });
});