function cargarTeclado() {
    Teclado[0] = "A"
    Teclado[1] = "B"
    Teclado[2] = "C"
    Teclado[3] = "D"
    Teclado[4] = "E"
    Teclado[5] = "F"
    Teclado[6] = "G"
    Teclado[7] = "H"
    Teclado[8] = "I"
    Teclado[9] = "J"
    Teclado[10] = "K"
    Teclado[11] = "L"
    Teclado[12] = "M"
    Teclado[13] = "N"
    Teclado[14] = "0"
    Teclado[15] = "P"
    Teclado[16] = "Q"
    Teclado[17] = "R"
    Teclado[18] = "S"
    Teclado[19] = "T"
    Teclado[20] = "U"
    Teclado[21] = "V"
    Teclado[22] = "W"
    Teclado[23] = "X"
    Teclado[24] = "Y"
    Teclado[25] = "Z"
    Teclado[26] = "_"
    Teclado[27] = "0"
    Teclado[28] = "1"
    Teclado[29] = "2"
    Teclado[30] = "3"
    Teclado[31] = "4"
    Teclado[32] = "5"
    Teclado[33] = "6"
    Teclado[34] = "7"
    Teclado[35] = "8"
    Teclado[36] = "9"
}
let caracterActual = 0
let Teclado: string[] = []
cargarTeclado()
basic.forever(function () {
    while (input.acceleration(Dimension.X) > 200) {
        if (caracterActual < 36) {
            caracterActual += 1
        }
        basic.showString("" + (Teclado[caracterActual]), 256 - ((input.acceleration(Dimension.X)) / 4))
    }
    while (input.acceleration(Dimension.X) < -200) {
        basic.clearScreen()
        if (caracterActual > 0) {
            caracterActual += -1
        }
        basic.showString("" + (Teclado[caracterActual]), 256 - (-(input.acceleration(Dimension.X)) / 4))
    }
})
