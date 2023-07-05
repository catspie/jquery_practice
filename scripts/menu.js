
//채식주의자 전용 메뉴 호출 - 매뉴 되돌리기 기능
$(function(){
   var v = false;
   $('.fish').addClass("fish_fish");
   $('.meat').addClass("meat_meat");
   $("li").not('.fish').addClass("veg_leaf");
   $("li").not('.meat').addClass("veg_leaf");
   $(".menu_title").removeClass("veg_leaf");

   $("button#vegOn").click(function(){

      if(v == false){
         v = true;
         //getElementById('meat')는 값을 하나만 가지고 올 수 있기 때문에 제일 먼저 선언된 id = 'meat' text만 선택된다. 
         //다중 replace: after
         //$(".meat").after("<li class='tofu'>고기를 두부로 대체한 "+"</li>");
         $(".fish").hide();
         $(".meat").hide();
         $(".hamburger").replaceWith("<li class='mushroom'>버섯튀김 (FRIED MUSHROOM)</li>");
         $('.mushroom').addClass("veg_leaf");
         $(".menu_title").not('.fish').addClass("veg_leaf");
         $(".menu_title").not('.meat').addClass("veg_leaf");
         $(".menu_title").removeClass("veg_leaf");
      }   
   });//버튼 끝
   $("button#restoreMe").click(function(){
      if(v == true){
         v = false;
        location.reload();
      }   
   });//버튼 끝
});//함수 끝


