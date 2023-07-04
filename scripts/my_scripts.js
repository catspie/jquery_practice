
//구버전 $(document).ready(function(){
$(function(){
    $(".guess_box").click(function(){
        //$(".guess_box p").remove();
        var discount = Math.floor((Math.random()*5)+5);
        var discount_msg = "<p>최대"+discount+"%</p>";
        //한 번 실행될 때마다 discount금액이 얼마인지 나타내주는 기능 
        //$(".guess_box").append(discount_msg);
        
        alert("축하! "+discount+"%할인 당첨");
        $(this).append(discount_msg);

        $(".guess_box").each(function(){
            $(this).unbind("click");
        });
    });
});   

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