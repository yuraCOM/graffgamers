
let mainWindow = document.querySelector('#main')
// console.log(mainWindow)
let allGamers = [
    {"name": 'Yura', 'score': 4000},
    {"name": 'Vasja', 'score': 5000 },
    {"name": 'Petro', 'score': 3000 },
    {"name": 'Masha', 'score': 7000 },
    {"name": 'Dro4er', 'score': 1000 },
    {"name": 'Dick', 'score': 6000 }
]
let newGamer = prompt("Введи имя игрока : ");
let newGamerScore = prompt("Очки игры нового игрока макс 15000: ");
allGamers.unshift({"name": newGamer , 'score':newGamerScore },)
console.log(allGamers[0])
// console.log(allGamers[0]["name"])
// console.log(allGamers[0]["score"])
// console.log(allGamers[1])


allGamers.forEach((element, index) =>{
    // console.log('------------')
    console.log(element.name)
    console.log(index)

    mainWindow.innerHTML += `
        <div class="gamer">
            <p class="score">${element.score}</p>
            <div class="col-gamer${index}"></div>
            <p class="name">${element.name}</p>
        </div>
    `
    // let colGamer = document.querySelector('.col-gamer')
//    ----------------------------
    document.querySelector(`.col-gamer${index}`).style.height = `${element.score/40}px`
    document.querySelector(`.col-gamer${index}`).classList.add('col-gamer')
    document.querySelector(`.col-gamer${0}`).style.backgroundColor = 'green'

    // let colGamer = document.querySelector(`.col-gamer${index}`)

    // console.log(colGamer)
    // if (colGamer){
    //     // console.log(colGamer)
    //     colGamer.forEach((elementCol,index)=>{
    //         console.log(elementCol.score)
    //         console.log('============', allGamers[index])
    //         // console.log(elementCol.style.height = `${element.score}px`)
    //         // elementCol.style.height = "100px"
    //         // console.log(colGamer.style.height)
    //     })
    //
    // } else {
    //     console.log('not')
    // }

});
// //----------------------------
// let colGamer = document.querySelectorAll('.col-gamer')
// // let colGamer
// if (colGamer){
//     console.log(colGamer)
//     colGamer.forEach((element)=>{
//         console.log(element.style.height = `150px`)
//         // colGamer.style.height = "100px"
//         // console.log(colGamer.style.height)
//     })
//
// } else {
//     console.log('not')
// }

