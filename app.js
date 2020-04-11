document.addEventListener('DOMContentLoaded',()=>{

 //card options
 const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  cardArray.sort(()=> 0.5 - Math.random())
const grid=document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen=[]
var cardsChosenId=[]
var cardsWon=[]
//create your board

function createBoard(){
    for(let i=0; i < cardArray.length; i++)
    {
        var card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipcard)
        grid.appendChild(card)
    }
}
//check for match
function checkForMatch(){
  var card=document.querySelectorAll('img')
  const optionsOneId=cardsChosenId[0]
  const optionsTwoId=cardsChosenId[1]

  if(cardsChosen[0] === cardsChosen[1])
  {
  alert('you found match')
  card[optionsOneId].setAttribute('src','images/white.png')
  card[optionsTwoId].setAttribute('src','images/white.png')

  cardsWon.push(cardsChosen)
  }
  else
  {
  card[optionsOneId].setAttribute('src','images/blank.png')
  card[optionsTwoId].setAttribute('src','images/blank.png')
  alert('sorry,try again')
  }
  cardsChosen=[]
  cardsChosenId=[]

  resultDisplay.textContent=cardsWon.length

  if(cardsWon.length === cardArray.length/2)
  {
    resultDisplay.textContent='Congrats! you found them all'
  }
}

// create you card

function flipcard()
{
  var cardId=this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src',cardArray[cardId].img)
  if(cardsChosen.length === 2)
  {
    setTimeout(checkForMatch,500)
  }

}



createBoard()

})