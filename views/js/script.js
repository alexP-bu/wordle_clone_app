import answers from './answers.js';
import guesses from './guesses.js'

$(document).ready(function () {
    $('.help').hide();
    $('.player_stats').hide();
    $('.invalid_word').hide();
    $('.enter_key').hide();
    $('.error_text').hide();

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
    var wordle = answers[Math.floor((Math.random() * ((answers.length - 1) - 0 + 1)))];
    var curString = "";
    var curLetter = document.querySelector('.letter_grid div:nth-child(' + row + ') div:nth-child(' + col + ')');
    console.log(wordle);
    $('.key').click(function (event) {
        curLetter = document.querySelector('.letter_grid div:nth-child(' + row + ') div:nth-child(' + col + ')');
        if(col <= 5){
            $(curLetter).text($(event.target).text());
            curString += $(event.target).text();
            col++;
        }
        if(curString.length == 5){
            $('.key').hide();
            $('.enter_key').show();
        }else{
            $('.key').show();
            $('.enter_key').hide();
        }
    });

    $('.backspace_key').click(function (e) { 
        if(curString.length > 0){
            curString = curString.substring(0, curString.length - 1);
            curLetter = document.querySelector('.letter_grid div:nth-child(' + row + ') div:nth-child(' + (col - 1) + ')');
            $(curLetter).text("");
            col--;        
            console.log(curString);
            console.log(col);
        }
        if(curString.length == 5){
            $('.key').hide();
            $('.enter_key').show();
        }else{
            $('.key').show();
            $('.enter_key').hide();
        }
    });

    $('.enter_key').click(function (e) { 
        //win condition
        if(curString == wordle){
            for(var i = 0; i < 5; i++){
                var letter = document.querySelector('.letter_grid div:nth-child(' + row + ') div:nth-child(' + (i+1) + ')');
                $(letter).css("background-color", "rgb(83,141,78)");
            }
            $('.error_text').text("YOU WIN!");
            $('.error_text').fadeIn(1000).fadeOut(3000);
            $('.enter_key').hide();
            $('.backspace_key').hide();
        }else{
            //otherwise, we didnt win
            if(row > 5){
                $('.error_text').text("YOU LOSE!");
                $('.error_text').css("color", "red");
                $('.error_text').show();
                $('.enter_key').hide();
                $('.backspace_key').hide();
                $('.key').hide();
            }
            if(guesses.has(curString)){
                for(var i = 0; i < curString.length; i++){
                    var letter = document.querySelector('.letter_grid div:nth-child(' + row + ') div:nth-child(' + (i+1) + ')');
                    if(curString.charAt(i) == wordle.charAt(i)){
                        $(letter).css("background-color", "rgb(83,141,78)");
                    }else if(wordle.includes(curString.charAt(i))){
                        $(letter).css("background-color", "rgb(181,159,59)"); 
                    }else{
                        $(letter).css("background-color", "rgb(58,58,60)");
                    }
                }
                row++;
                col = 1;
                curString = "";
                $('.key').show();
                $('.enter_key').hide();
            }else{
                $('.error_text').text("Word is not in list");
                $('.error_text').fadeIn(1000).fadeOut(2000);
            }
        }
    });
});