'use strict'

const liveStat = document.querySelector('.live')
const hungryStat = document.querySelector('.hungry')
const moneyStat = document.querySelector('.money')
const moodStat = document.querySelector('.mood')
const info = document.querySelector('.info')
const people = ['Vika', 'Dasha', 'Masha', 'Jozel']
const newDay = document.querySelector('.new_day')
let onTheWork
let procastination
let ololo

//stats
let live = 100       //жизька <20
let hungry = 100     //голод  <20
let money = 750      //деньги >800
let mood = 100       //настроение
updateDOM()

const watcher = setInterval(() => {
    if (live < 20) {
        return heal()

    }
    if (hungry < 20) {
        return goToEat()
    }
    if (money <= 50) {
        return goToWork()
    }
    if (mood < 20) {
        if (money > 500) {
            return prosratNaBab()
        }
        if (money > 1000) {
            return onlyOnePutana()
        }
    }

}, 18000)




//посмотреть телек
function watchTV() {
    pushText('Посмотрю что там по телеку...')
    procastination = setTimeout(() => {
        pushText('Фильмы про ментов...фильмы про воров...Рептилойды среди нас...ничего интересного.');
        mood++
    }, 4000)

    procastination = setTimeout(() => {
        pushText('Посмотрел порно, кажеться я знаю этих актрисс, это же мои одноклассницы:');
        for (let girls of people) {
            pushText(girls);
        }
    }, 8000)
    procastination = setTimeout(() => {
        pushText('Наконец-то спокойной ночи малыши.Весь вечер ждал...');
    }, 12000)
    procastination = setTimeout(() => {
        pushText('ХррРРрррРррр.....');
    }, 16000)
    updateDOM()

}

//проснуться

const wakeUp = () => new Promise((resolve, reject) => {
    pushText('ХррРрррр...')
    procastination = setTimeout(() => {
        pushText('*звенит  будильник в 8 утра*')
    }, 4000)
    procastination = setTimeout(() => {
        pushText('ля...опять на работу....')
    }, 8000)
    procastination = setTimeout(() => {
        pushText('в холодильнике опять ничего нет...пожру по дороге')
        resolve()
    }, 12000)
})

//приступить к работе
let counter = 0
const startWork = () => new Promise(async (resolve, reject) =>  {
   
    const rec = () => {
       if (counter < 8) {
           return setTimeout(() => {
               counter++
               goToWork()
                rec()
           }, 3000)
       } else {
           resolve()
       }
   }

   rec()
})


//заработать денег
function goToWork() {
    const randomNum = Math.floor(Math.random() * (21 - 1)) + 1;
    pushText(`заработал ${randomNum} деняк`)
    money = money + randomNum
    hungry = hungry - 5
    mood = mood - 3
    live = live - 4
    updateDOM()
    // resolve()
}

//подлечиться
function heal() {
    pushText('чет мне хреново...пойду в аптеку')
    procastination = setTimeout(() => {
        pushText('закинулся гусиным жиром, немного отпустило...');
    }, 3000)
    procastination = setTimeout(() => {
        pushText('принял ванну с зеленкой, раны затянулись на глазах...');
    }, 6000)
    procastination = setTimeout(() => {
        pushText('Как заново родился.');
    }, 9000)
    live = 100
    updateDOM()
}

//покушать
const goToEat = () => new Promise((resolve, reject) => {
    pushText('Жрать охото, пойду в кафе')
    setTimeout(() => {
        let coast = (100 - hungry) * 2;
        money = money - coast
        hungry = 100
        mood = mood + 10
        live = live + 30
        pushText('Буээ, я пожрал')
        updateDOM()
        resolve()

    }, 5000);
})

//рандомайзер путан
function arrayRandElement(people) {
    let rand = Math.floor(Math.random() * people.length);
    return people[rand];
}
//проокутить с путанами состояние
const prosratNaBab = () => new Promise((resolve, reject) => {
    pushText(`Я заскучал и решил вызвать путан. В кармане было ${money} баксов. `);
    let indexOfGirl = 0
    for (let i = 0; money >= 100; i++) {
        if (money >= 100) {
            indexOfGirl++
            hungry--
            if (indexOfGirl >= people.length) {
                indexOfGirl = 0
            }
            pushText(`Ко мне пришла ${people[indexOfGirl]} и отлично отработала свои 100 баксов`);
            money -= 100
            mood = mood + 10
            if (money >= 100) {
                pushText(`В кармане осталось ${money}гульнём еще.`);
            }
            if (money === 0) {
                pushText('В кармане пусто. Теперь я нищий.');
                break
            }
            if (money < 100) {
                pushText(`деняк мало ${money} нипаебацца.`);
            }

        }
    }
    updateDOM()
    resolve()
})

//покутить с одной путаной разок
const onlyOnePutana = () => new Promise((resolve, reject) => {
    if (money >= 100) {
        pushText(`Ко мне пришла ${arrayRandElement(people)} и отлично отработала свои 100 баксов`);
        money -= 100
        mood = mood + 10
        if (money >= 100) {
            pushText(`В кармане осталось ${money}Ох, хорошечно`);
        }
        if (money === 0) {
            pushText('В кармане пусто. Теперь я нищий.');
            return
        }
        if (money < 100) {
            pushText(`деняк мало ${money} нипаебацца.`);
        }

    }
    updateDOM()
    resolve()
})

function pushText(text) {
    let str = info.innerHTML + '<br>' + text
    info.innerHTML = str
}



//updateDOM
function updateDOM() {
    liveStat.innerHTML = live + 'жизнь'
    hungryStat.innerHTML = hungry + 'сытость'
    moneyStat.innerHTML = money + 'деньги'
    moodStat.innerHTML = mood + 'настроение'
}


const runProcesses = async () => {
    await wakeUp()
    await goToEat()
    await startWork()
    await goToEat()
    await watchTV()
}

newDay.addEventListener('click', runProcesses)
