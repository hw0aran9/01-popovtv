   $(document).ready(function() {
    $('li.top-menu-item').hover(
     function() {
      $(this).addClass('animated jello'); // Добавляем класс
     },
     function() {
      $(this).removeClass('jello animated'); // Убираем класс
     }
    )})

 $(document).ready(function() {
    $('li.top-menu-item-branch').hover(
     function() {
      $(this).addClass('animated jello'); // Добавляем класс
     },
     function() {
      $(this).removeClass('jello animated'); // Убираем класс
     }
    )})