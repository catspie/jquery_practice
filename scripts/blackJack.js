
//카드 함수
function card(name, suit, value){
 this.name = name;
 this.suit = suit;
 this.value = value;

 //덱 종류 배열
 var deck = [
    new card('ACE', 'Hearts', 11), 
    new card('TWO', 'Hearts', 2), 
    new card('THREE', 'Hearts', 3), 
    new card('FOUR', 'Hearts', 4), 
    new card('KING', 'Hearts', 10), 
    new card('ACE', 'Diamonds', 11), 
    new card('TWO', 'Diamonds', 2), 
    new card('THREE', 'Diamonds', 3), 
    new card('QUEEN', 'Diamonds', 10), 
    new card('KING', 'Diamonds', 10), 
    new card('ACE', 'Clubs', 11), 
    new card('TWO', 'Clubs', 2), 
    new card('KING', 'Clubs', 10), 
    new card('ACE', 'Spades', 11), 
    new card('TWO', 'Spades', 2), 
    new card('THREE', 'Spades', 3), 
    new card('JACK', 'Spades', 10), 
    new card('QUEEN', 'Spades', 10), 
    new card('KING', 'Spades', 10), 
];
}



//name = ('ACE', 'JACK', 'QUEEN', 'KING'), 
//suit = ('◆', '♥', '♠'), 
//value = (2, 3, 4, 5, 6, 7, 8, 9, 10)
