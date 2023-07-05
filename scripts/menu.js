
//채식주의자 전용 메뉴 호출 - 매뉴 되돌리기 기능
$(function(){
   var v = false;
   $("button#vegOn").click(function(){
      if(v == false){
         v = true;
         //$(".meat").detach();
         //id는 값을 하나만 가지고 올 수 있기 때문에 제일 먼저 선언된 text들로 채워진다. 
         //$(".meat").after("<li class='tofu'>고기를 두부로 대체한 "+document.getElementById('meat').innerHTML+"</li>");
         $(".fish").detach();
         $(".hamburger").replaceWith("<li class='mushroom'>버섯튀김 (FRIED MUSHROOM)</li>");
      $f = $(".fish").detach();
      $m = $(".meat").detach();
      $('.tofu').parent().addClass("veg_leaf");   
   }   
   });//버튼 끝
   $("button#restoreMe").click(function(){
      if(v == true){
         v = false;
         location.reload();
      }   
   });//버튼 끝
});//함수 끝


