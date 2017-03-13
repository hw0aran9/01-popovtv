   $(document).ready(function() {
    $('li.top-menu-item').hover(
     function() {
      $(this).addClass('animated jello'); // Добавляем классы
     },
     function() {
      $(this).removeClass('jello animated'); // Убираем классы
     }
    )})
