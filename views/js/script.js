import answers from './answers.js';
import guesses from './guesses.js'

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

    //game code, client-size implementation first
    var row = 1;
    var col = 1;
    var wordle = answers[5];
    console.log(wordle);
    $('.key').click(function (event) {
        if(col == 6){

        }else{
            var curLetter = document.querySelector('.letter_grid div:nth-child(' + row + ') div:nth-child(' + col + ')');
            $(curLetter).text($(event.target).text());
            col++;
        } 
    });
});