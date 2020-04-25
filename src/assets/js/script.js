var $initAccord = $('.accord-item--inner'),
    $theAnswer = $('.answer');


function displayAccord () {
  var $t = $(this);
  
  if($t.parent().hasClass('is-active')){
    $t.find($theAnswer).slideUp(100);
    $t.parent().removeClass('is-active')
    return;
  }
  
  $initAccord.parent().removeClass('is-active');
  $initAccord.find($theAnswer).slideUp(100);
  $t.find($theAnswer).slideDown(100);
  $t.parent().addClass('is-active')
  
}


$initAccord.click(displayAccord);