$(function(){
  $('.tab li').on('click',function(){
    $('.tab li').removeClass('select');
    $(this).addClass('select');

    $('.content').addClass('hide');

    let index = $('.tab li').index($(this));
    console.log(index)

    $('.content').eq(index).removeClass('hide');
  });
});

$(function () {
  $('#accordion dd').hide();
  $('#accordion dt').on('click',function(){
    $('dd').each(function(){
      $(this).next('dd').slideToggle('');
    })
    //nextにしかなってないから、次の要素のtwitterしか表示されない,のでeachを使ってみた
  });
});
