const listOfNames = document.querySelector('.collection-items')
// const button = document.querySelector('.boton')
// const arr = ['Slava', 'Benedict', 'Gosha', 'qwe']
// let resultArr = []
// arr.join(' ') // преобразование масива к строке
// arr.toString() преобразование массива к строке через ,
// arr.push('Karlo') добавляет элемент в конец массива
// arr.pop()  //удаляет последний элемент из массива //возвращает посл элемент
//arr.shift()  удаляет первый элемент и возвращает его
//arr.unshift('Kesha') добавляет первый элемент в начало массива
//arr.indexOf('qwe') покажет индекс элемента массива
// arr.forEach((element)=>{
// console.log(element);
// })       // цикл массива с любым действием внутри
// const newArr = arr.map((element)=>{
// return element + 1
// })           //возвращает новый массив с какими либо изм.
// const newArr = arr.filter((element)=>{
//     return element !== 'Slava'
// })             //фильтрует массив по условию  ..возвращает новый массив по условию
// const ololo = arr.some((element)=>{
//     return element === 'Slava' || element === 'qwe'
// })            //поиск некоторого элемента в массиве, возращает булевое значение если элемент найден
// function initialize(arr){
//     resultArr = []
//     arr.forEach((element)=>{
//         resultArr.push(`<li class="collection-item">${element}</li>`) 
//     }) 
//     listOfNames.innerHTML = resultArr.join(' ')     
// }

// function delQwe(){
//     const newArr = arr.filter((element)=>{
//         return element !== 'qwe'
//     })
//     initialize(newArr)


// }



// initialize(arr)
// button.addEventListener('click', delQwe)




// const arr = ['slava', 'benedict', 'gosha', 'qwe']
// const newArr = arr.map((elem)=>{
//     return elem.slice(0, elem.length - 1) + elem.charAt(elem.length - 1).toUpperCase()

// })
// console.log(newArr);


// const people = ['Vika', 'Dasha', 'Masha', 'Jozel']
// const whoGive = [300, 2000, 1e6, 150]

// const na = []

// people.forEach((el, i)=>{
//     if (whoGive[i] < 300){
//         na.push(el)
//     }

// })


// const resultArr = []
// na.forEach((element)=>{
//     resultArr.push(`<li class="collection-item">${element}</li>`) 
//     }) 
//     listOfNames.innerHTML = resultArr.join(' ')     

//Buttons
// const startBtn = document.querySelector('.startBtn')
// const returnToGameBtns = document.querySelectorAll('.return_to_game_btn')
const more = document.querySelector('.more')
const less = document.querySelector('.less')
const randomNum =  Math.floor(Math.random() * (11 - 1)) + 1; //загадывает от 1 до 10

// let livesCount = 3
// setLife()

// event.preventDefault()
    
// if(!answerValue.value) {
//     alert('Ну комон блять, я писал для тебя игру тут, а ты даже не удосужился(лась) ввести хоть какойто символ? ну ты че? Ну Ё маЁ, я растроен,я больше не хочу играть.........')
//     return window.location.replace('https://natribu.org/ru/')
// }

// const value =  +answerValue.value

// if (value === randomNum) return openBlock(success)

// if(value !== randomNum) livesCount--
// setLife()
// if(livesCount < 1) return openBlock(gameOwerBlock)

// if(isNaN(value)) return openBlock(notCorrectSymbolBlock)

// if(value < 1 || value > 10) return openBlock(errorRangePage)

// if (value < randomNum) {
//     clue.innerText = 'Но вот подсказка. Чило которое мы загадали больше'
//     return openBlock(notOurNumberBlock) 
// }
// if (value > randomNum) {
//     clue.innerText = 'Но вот подсказка. Чило которое мы загадали меньше'
//     return openBlock(notOurNumberBlock) 
// }


// clearInput()
// }

// function clearInput(){
//     answerValue.value = ''
// }

// //Mistake blocks
// function returnToGame() {
//     return openBlock(mainGameBlock)
// }

// function setLife() {
//     lives.innerText = livesCount
// }

// //Events
// startBtn.addEventListener('click', startGame)
// gameForm.addEventListener('submit', checkAnswer)
// })




const goToEat = () => new Promise((res, rej) =>{
    setTimeout(()=>{
        console.log('жру');
        res()
    }, 6000)
})

const goToSleep = () => new Promise((res, rej) => {
    setTimeout(() => {
        console.log('cпл.');
        res()
    }, 1000)
})


const runProcesses = async () =>{
    await goToEat()
    await goToSleep()
}

runProcesses()






// const linear = (arr, target) => {
//     let steps = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       steps++;
//       if (arr[i] === target) return `Found: ${arr[i]} in ${steps} steps`;
//     };
//   };
  
//   console.log(linear(unsortedArr, 40));
//   console.log(linear(sortedArr, 40));