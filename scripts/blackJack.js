//카드의 기본 속성을 지정하는 함수 (이름, 모양, 점수)
function card(name, suit, value){
    this.name = name;
    this.suit = suit;
    this.value = value;
   }

 //덱 생성 
 var deck = [
    new card('ACE', 'Hearts', 11), 
    new card('TWO', 'Hearts', 2), 
    new card('THREE', 'Hearts', 3), 
    new card('FOUR', 'Hearts', 4), 
    new card('FIVE', 'Hearts', 5), 
    new card('SIX', 'Hearts', 6), 
    new card('SEVEN', 'Hearts', 7), 
    new card('EIGHT', 'Hearts', 8), 
    new card('NINE', 'Hearts', 9), 
    new card('TEN', 'Hearts', 10), 
    new card('KING', 'Hearts', 10), 
    new card('QUEEN', 'Hearts', 10), 
    new card('ACE', 'Diamonds', 11), 
    new card('TWO', 'Diamonds', 2), 
    new card('THREE', 'Diamonds', 3), 
    new card('FOUR', 'Diamonds', 4), 
    new card('FIVE', 'Diamonds', 5), 
    new card('SIX', 'Diamonds', 6), 
    new card('SEVEN', 'Diamonds', 7), 
    new card('EIGHT', 'Diamonds', 8), 
    new card('NINE', 'Diamonds', 9), 
    new card('TEN', 'Diamonds', 10), 
    new card('QUEEN', 'Diamonds', 10), 
    new card('KING', 'Diamonds', 10), 
    new card('ACE', 'Clubs', 11), 
    new card('TWO', 'Clubs', 2), 
    new card('THREE', 'Clubs', 3), 
    new card('FOUR', 'Clubs', 4), 
    new card('FIVE', 'Clubs', 5), 
    new card('SIX', 'Clubs', 6), 
    new card('SEVEN', 'Clubs', 7), 
    new card('EIGHT', 'Clubs', 8), 
    new card('NINE', 'Clubs', 9), 
    new card('TEN', 'Clubs', 10), 
    new card('QUEEN', 'Clubs', 10),     
    new card('KING', 'Clubs', 10), 
    new card('ACE', 'Spades', 11), 
    new card('TWO', 'Spades', 2), 
    new card('THREE', 'Spades', 3), 
    new card('FOUR', 'Spades', 4), 
    new card('FIVE', 'Spades', 5), 
    new card('SIX', 'Spades', 6), 
    new card('SEVEN', 'Spades', 7), 
    new card('EIGHT', 'Spades', 8), 
    new card('NINE', 'Spades', 9), 
    new card('TEN', 'Spades', 10),     
    new card('JACK', 'Spades', 10), 
    new card('QUEEN', 'Spades', 10), 
    new card('KING', 'Spades', 10), 
    ];

// 덱 생성 확인용 콘솔 로그
for(var value of deck){
    console.log(value);
}
 
//지급된 카드를 저장하는 배열
var used_cards = new Array();

//for루프를 사용해 hit() 함수를 두 번 호출 
function deal(){
    for( var i=0;i<2;i++){
        hit();
    }
}

//무작위 숫자를 뽑기 위한 getRandom 함수 
function getRandom(num){
    var my_num = Math.floor(Math.random() * num);
    return my_num;
}

//do-while문을 사용해 카드 뽑기 반복 
function hit(){
    var good_card = false;
    do{
        //52장의 카드 중 무작위 선택
        var index = getRandom(52);
        good_card = true;
        var c = deck[index];
        used_cards[used_cards.length] = index;
        var $d = $('<div>');
        //appendTo : 뒤에 있는객체에 앞의 객체를 붙인다.
        //append : 앞에 있는 객체에 뒤의 객체를 붙인다.
        $("<img>").appendTo($d)
                  .attr("src","/images/deck/"+c.suit+"/"+c.name+".png")
                  .fadeOut("slow")
                  .fadeIn("slow");
        $d.appendTo($("#my_hand"));
    }
    //뽑은 코드가 이미 사용했던 카드라면 다시 시도합니다. 
    while(!good_card);
    good_card = false;
    hand.sumCardTotal();
}

//클릭 시 deal함수를 호출한다. 
$("#btnDeal").click(function(){
    deal();
    //$(this).toggle();
    $(this).hide();
    $("#btnHit").show();
    $("#btnStick").show();
});

$("#btnHit").click(function(){
    hit();
});

$("#btnStick").click(function(){
    $("#hdrResult").html("STICK!");
    $(this).hide();
    end();
});

$("#btnRestart").click(function(){
   location.reload();
});

var hand = {
    cards:new Array(), 
    current_total : 0, 

    sumCardTotal: function(){
        this.current_total = 0;
        
        for(var i=0;i<this.cards.length;i++){
            var c = this.cards[i];
            this.current_total += c.value; 
        }

        $("#hdrTotal").html("Total: "+this.current_total);

        if(this.current_total > 21){
            end();
            $("#imgResult").attr('src', '/images/blackJack/x.png').show();
            $("hdrResult").html("BUST!").attr('class', 'lose');
        }else if(this.current_total == 21){
            end();
            $("#imgResult").attr('src', '/images/blackJack/check.png').show();
            $("hdrResult").html("BLACKJACK!").attr('class', 'win');
        }else if(this.current_total <= 21 && this.cards.length == 5){
            end();
            $("#imgResult").attr('src', '/images/blackJack/check.png').show();
            $("hdrResult").html("BLACKJACK -5 CARD TRICK!").attr('class', 'win');
        }
    }
}

function end(){
    $('#btnHit', '#btnstick', '#imgResult').hide();
    $("#btnRestart").show();    
}

