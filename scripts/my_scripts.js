//랜덤하게 할인율을 뽑는 함수
function getRandom(num){
    var my_num = Math.floor(Math.random()*num);
    return my_num;
}

//div요소 중 하나에 numRand를 숨기는 함수
var hidecode = function(){
    var numRand = getRandom(4);
    $(".guess_box").each(function(index, value){
        if(numRand == index){
            $(this).append("<span id='has_discount'></span>");
            return false;
        }
    });
}

hidecode();
//구버전 $(document).ready(function(){
$(function(){

    $(".guess_box").click(checkForCode);
     
    function checkForCode(){
        //$(".guess_box p").remove();
        //var discount = Math.floor((Math.random()*5)+5);
        //var discount_msg = "<p>최대"+discount+"%</p>";
        
        var discount_msg;        
        if($.contains(this, document.getElementById("has_discount"))){
                var my_num = getRandom(100);
                discount_msg = "<p>특가 찬스!"+my_num+"%할인이 적용됩니다.</p>";

        }else{
            discount_msg = "<p>이런, 다음기회를 노려보세요!</p>";
        }
        
        //한 번 실행될 때마다 discount금액이 얼마인지 나타내주는 기능 
        //$(".guess_box").append(discount_msg);
        //alert("축하! "+discount+"%할인 당첨"); 
       
      $("#result").append(discount_msg);
    }    
});   


function addclass(){
$(".guess_box").each(function(){
    if($.contains(this, document.getElementById("has_discount"))){
        $(this).addClass("disocount");
    }else{
        $(this).addClass("no_discount");
    }
    $(this).unbind();         
});
};

$(function(){
    $('#btn_300_300').click(function(){
        $('img.cat-img')
            .css('border', 'solid 5px red')
            .attr({
                'width': '300',
                'height': '300'
            });
    });
});
