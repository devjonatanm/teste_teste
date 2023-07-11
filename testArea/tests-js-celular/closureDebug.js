let gols = 1

const time1 = function () {
    console.log(gols)
    gols = 2
}

gols = 3

const time2 = function () {
    console.log(gols)
}

time1() // 3

time2() // 2