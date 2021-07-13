let cards=[
    {
        image:"https://static.wikia.nocookie.net/villains/images/5/54/Light_YagamiHD.jpg/revision/latest?cb=20180414020152",
        value:1,
        status:"closed"
    },
    {
        image:"https://static.wikia.nocookie.net/villains/images/5/54/Light_YagamiHD.jpg/revision/latest?cb=20180414020152",
        value:1,
        status:"closed"
    },
    {
        image:"https://www.anime-planet.com/images/characters/l-death-note-1337.jpg",
        value:2,
        status:"closed"
    },
    
    {
        image:"https://www.anime-planet.com/images/characters/l-death-note-1337.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/9a/4f/7c/9a4f7c733dce71fb5ee08e27fa55362a--main-image.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/9a/4f/7c/9a4f7c733dce71fb5ee08e27fa55362a--main-image.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://www.anime-planet.com/images/characters/misa-amane-1340.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://www.anime-planet.com/images/characters/misa-amane-1340.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://static.wikia.nocookie.net/villains/images/8/86/Main-qimg-b53b8895915d9911fedbf5519becffef-c.jpg/revision/latest/top-crop/width/360/height/450?cb=20180115032138",
        value:5,
        status:"closed"
    },
    {
        image:"https://static.wikia.nocookie.net/villains/images/8/86/Main-qimg-b53b8895915d9911fedbf5519becffef-c.jpg/revision/latest/top-crop/width/360/height/450?cb=20180115032138",
        value:5,
        status:"closed"
    },


]

// shuffling algorithm

let temp;
for(let i=cards.length-1; i>=0; i--){
 let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}
let cardscopy=cards;


function displaycards(data){

    let cardsString="";

    data.forEach(function(card,index){

        cardsString+=`
        
        <div class="card" style="background-image:url('${card.image}')">
            <div class="overlay ${card.status}" onclick="opencard(${index})">
            </div>
        </div>
          `;
     });
    

    document.getElementById('cards').innerHTML=cardsString;


}


displaycards(cards);

let cardcount=1;
let val1=null,val2=null;
let score=0
function opencard(index){

    console.log(cards)

cards[index].status="opened";
if(cardcount===1){
    val1=cards[index].value;
    cardcount++;
}
else if(cardcount==2){
    val2=cards[index].value;

    if(val1===val2){
        score++;
        document.getElementById('score').innerText=score;

        // resewt after one guess
        val1=null;
        val2=null;
        cardcount=1;
        
    }
     
    else{
        alert("GAME OVER");
        location.reload();
    }
}

displaycards(cards);

}





