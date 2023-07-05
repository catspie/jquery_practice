
//채식주의자 전용 메뉴판을 보여주는 vegOn 함수 시작
$(function(){
   var v = false;
   $("button #vegOn").click(function(){
      if(v == false){
         v = true;
      }   
   });
   $("button #restoreOn").click(function(){
      if(v == true){
         v = false;
      }   
   });
});