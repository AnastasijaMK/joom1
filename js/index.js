$(document).ready(function() {

  //Выбор языка
  $('.arrow_down_1').click(function(){
    $('.lang_list_wrap').fadeIn(100);
  }); 

  $('.english').click(function(){
    $('.RU_flag, .ES_flag, .RU, .ES').hide(0);
    $('.EN_flag, .EN').show(0);
    $(this).parents('.lang_list_wrap').fadeOut(100);
    $('.english').css("background", "#eee");
    $('.russian').css("background", "white");
    $('.spanish').css("background", "white");
  });   

  $('.russian').click(function(){
    $('.EN_flag, .ES_flag, .EN, .ES').hide(0);
    $('.RU_flag, .RU').show(0);
    $(this).parents('.lang_list_wrap').fadeOut(100);
    $('.russian').css("background", "#eee");
    $('.english').css("background", "white");
    $('.spanish').css("background", "white");
  }); 

  $('.spanish').click(function(){
    $('.EN_flag, .RU_flag, .EN, .RU').hide(0);
    $('.ES_flag, .ES').show(0);
    $(this).parents('.lang_list_wrap').fadeOut(100);
    $('.spanish').css("background", "#eee");
    $('.russian').css("background", "white");
    $('.english').css("background", "white");
  }); 

  //Выбор валюты
  $('.arrow_down_2').click(function(){
    $('.currency_list_wrap').fadeIn(100);
  }); 
  
  $('.currency_choice_rub').click(function(){
    $('.USD, .EUR').hide(0);
    $('.RUB').show(0);
    $(this).parents('.currency_list_wrap').fadeOut(100);
    $('.currency_choice_rub').css("background", "#eee");
    $('.currency_choice_usd').css("background", "white");
    $('.currency_choice_eur').css("background", "white");
  });   

  $('.currency_choice_usd').click(function(){
    $('.RUB, .EUR').hide(0);
    $('.USD').show(0);
    $(this).parents('.currency_list_wrap').fadeOut(100);
    $('.currency_choice_usd').css("background", "#eee");
    $('.currency_choice_rub').css("background", "white");
    $('.currency_choice_eur').css("background", "white");
  });  

  $('.currency_choice_eur').click(function(){
    $('.USD, .RUB').hide(0);
    $('.EUR').show(0);
    $(this).parents('.currency_list_wrap').fadeOut(100);
    $('.currency_choice_eur').css("background", "#eee");
    $('.currency_choice_usd').css("background", "white");
    $('.currency_choice_rub').css("background", "white");
  }); 

  // Открытие "Все категории"
  $('.category_block').click(function(){
    $('.category_list_wrap').fadeIn(100);
  }); 
  
  $('td a').click(function(){
    $(this).parents('.category_list_wrap').fadeOut(100);
  });   

   // Открытие бокового меню
  $('.menu_line').click(function(){
    $('.menu_aside_wrap').fadeIn(100);
  }); 
  
  $('.nav_aside_elemnt').click(function(){
    $(this).parents('.menu_aside_wrap').fadeOut(100);
  }); 

  //Показать доп. товары
  $('.button_more').click(function(){
    $('.stroka_dop').show(0);
    $('.stroka_dop').css("display", "flex")
  });  

  //Изменение цвета при наведении
  $(".category_block").mouseover(function(){
    $('.menu_line').css("background", "#ff6262");
    $('.category_all').css("color", "#ff6262");
  }); 

  $('.category_block').mouseout(function(){
    $('.menu_line').css("background", "#3D3F56");
    $('.category_all').css("color", "#3D3F56");
  }); 
});