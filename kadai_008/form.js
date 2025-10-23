$(function(){
  // btnボタンをクリックされた時
  $('.btn').on('click',function(){
    //text-boxのvalueを「クリックしました!」にする。
    $('.text-box').prop('value','クリックしました！');
  });
});