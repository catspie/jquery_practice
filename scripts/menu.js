function goVegiterian(){
    var v = f;
    //버튼에 클릭 메서드를 등록합니다. 
    $("button#vegOn").click(function(){
       if(v == false){
        v = true;
       } 
    }); //버튼 끝
    $("button#restoreMe").click(function(){
        if(v == true){
         v = false;
        } 
     }); //버튼 끝
} //문서가 준비되었을 때 실행하는 함수 끝