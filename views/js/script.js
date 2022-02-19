$(document).ready(function () {
    $('.help').hide();
    $('.player_stats').hide();

    $('.x_icon').click(function (e) { 
        $('.help').hide();
        $('.web_header').show();        
        $('.keyboard_grid').show();
        $('.letter_grid').show();
    });

    $('.question_link').click(function (e) { 
        $('.help').show();
        $('.web_header').hide();        
        $('.keyboard_grid').hide();
        $('.letter_grid').hide();
    });
    
    $('.stats_link').click(function (e) { 
        e.preventDefault();
        $('.player_stats').show();
    });

    $('.x-button').click(function (e) { 
        e.preventDefault();
        $('.player_stats').hide();
    });

    //game code, client-size implementation first!
    var guess = 0;
    $('.key').click(function (e) { 
        e.preventDefault();
        console.log(e);
    });
});