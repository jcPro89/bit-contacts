function cargarTecladoNumero() {
    tecladoNumeros[0] = "0"
    tecladoNumeros[1] = "1"
    tecladoNumeros[2] = "2"
    tecladoNumeros[3] = "3"
    tecladoNumeros[4] = "4"
    tecladoNumeros[5] = "5"
    tecladoNumeros[6] = "6"
    tecladoNumeros[7] = "7"
    tecladoNumeros[8] = "8"
    tecladoNumeros[9] = "9"
}
function resetearVariables(seccionOrigen: string) {
    cargarTecladoNombre()
    establecerModo(0)
    menuPrincipal = true
    nombreActual = ""
    registroActual = 0
    ingresandoNombre = false
    ingresandoTelefono = false
    if (seccionOrigen != "opcionMenu") {
        listaNombres = []
        opcionesMenuPrincipal = []
        listaTelefonos = []
        opcionMenuActual = 1
    }
}
function establecerModo(numOpcionMenu: number) {
    modoAgregarContacto = numOpcionMenu == 1
    modoListado = numOpcionMenu == 2
    modoUpdate = numOpcionMenu == 3
    modoBorrarContacto = numOpcionMenu == 4
}
input.onButtonPressed(Button.A, function () {
    if (menuPrincipal) {
        if (opcionMenuActual > 1) {
            opcionMenuActual += -1
        } else {
            opcionMenuActual = 4
        }
    } else if (modoAgregarContacto || (modoListado || (modoUpdate || modoBorrarContacto))) {
        menuPrincipal = true
        resetearVariables("opcionMenu")
    } else {

    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    modoListado = true
    basic.showString("Nombres guardados:", 50)
    for (let index = 0; index <= listaNombres.length - 1; index++) {
        basic.clearScreen()
        basic.showString("" + index + "-" + listaNombres[index])
    }
})
input.onButtonPressed(Button.AB, function () {
    if (menuPrincipal) {
        menuPrincipal = false
        if (opcionMenuActual == 1) {
            if (ingresandoNombre) {
                telefono = ""
                basic.clearScreen()
                basic.showString("Ingresa el telefono", 50)
                ingresandoTelefono = true
                ingresandoNombre = false
            } else {
                nombre = ""
                basic.clearScreen()
                basic.showString("Ingresa el nombre", 50)
                ingresandoNombre = true
                modoAgregarContacto = true
                modoBorrarContacto = false
                modoListado = false
                modoUpdate = false
            }
        } else if (opcionMenuActual == 2) {
            if (listaNombres.length == 0) {
                basic.clearScreen()
                basic.showString("No hay registros", 50)
            } else {
                registroActual = 0
                modoAgregarContacto = false
                modoListado = true
                modoUpdate = false
                modoBorrarContacto = false
            }
        } else if (opcionMenuActual == 3) {
            modoAgregarContacto = false
            modoListado = true
            modoUpdate = true
            modoBorrarContacto = false
        } else if (opcionMenuActual == 4) {
            modoAgregarContacto = false
            modoListado = false
            modoUpdate = false
            modoBorrarContacto = true
        }
    } else if (ingresandoNombre) {
        listaNombres.push(nombre)
        ingresandoNombre = false
        ingresandoTelefono = true
    } else if (ingresandoTelefono) {
        listaTelefonos.push(telefono)
        ingresandoTelefono = false
        menuPrincipal = true
    } else {

    }
})
input.onButtonPressed(Button.B, function () {
    if (ingresandoNombre) {
        nombre = "" + nombre + tecladoLetras[caracterActual]
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
    } else if (menuPrincipal) {
        if (opcionMenuActual < 4) {
            opcionMenuActual += 1
        } else {
            opcionMenuActual = 1
        }
    } else if (ingresandoTelefono) {
        telefono = "" + telefono + tecladoNumeros[caracterActual]
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
    } else if (modoListado) {
        registroActual += 1
    } else {

    }
})
function cargarTecladoNombre() {
    tecladoLetras[0] = "A"
    tecladoLetras[1] = "B"
    tecladoLetras[2] = "C"
    tecladoLetras[3] = "D"
    tecladoLetras[4] = "E"
    tecladoLetras[5] = "F"
    tecladoLetras[6] = "G"
    tecladoLetras[7] = "H"
    tecladoLetras[8] = "I"
    tecladoLetras[9] = "J"
    tecladoLetras[10] = "K"
    tecladoLetras[11] = "L"
    tecladoLetras[12] = "M"
    tecladoLetras[13] = "N"
    tecladoLetras[14] = "0"
    tecladoLetras[15] = "P"
    tecladoLetras[16] = "Q"
    tecladoLetras[17] = "R"
    tecladoLetras[18] = "S"
    tecladoLetras[19] = "T"
    tecladoLetras[20] = "U"
    tecladoLetras[21] = "V"
    tecladoLetras[22] = "W"
    tecladoLetras[23] = "X"
    tecladoLetras[24] = "Y"
    tecladoLetras[25] = "Z"
    tecladoLetras[26] = "_"
}
let nombre = ""
let telefono = ""
let modoBorrarContacto = false
let modoUpdate = false
let modoListado = false
let modoAgregarContacto = false
let opcionMenuActual = 0
let listaTelefonos: string[] = []
let opcionesMenuPrincipal: number[] = []
let listaNombres: string[] = []
let ingresandoTelefono = false
let ingresandoNombre = false
let registroActual = 0
let nombreActual = ""
let menuPrincipal = false
let tecladoNumeros: string[] = []
let tecladoLetras: string[] = []
let caracterActual = 0
resetearVariables("inicio")
basic.clearScreen()
basic.showString("Menu", 50)
basic.forever(function () {
    if (modoAgregarContacto) {
        if (ingresandoNombre) {
            while (input.acceleration(Dimension.X) > 200) {
                if (caracterActual < tecladoLetras.length - 1) {
                    caracterActual += 1
                }
                basic.showString("" + (tecladoLetras[caracterActual]), 256 - ((input.acceleration(Dimension.X) * 2) / 4))
            }
            while (input.acceleration(Dimension.X) < -200) {
                basic.clearScreen()
                if (caracterActual > 0) {
                    caracterActual += -1
                }
                basic.showString("" + (tecladoLetras[caracterActual]), 256 - (-(input.acceleration(Dimension.X) * 2) / 4))
            }
        } else {
            while (input.acceleration(Dimension.X) > 200) {
                if (caracterActual < tecladoNumeros.length - 1) {
                    caracterActual += 1
                }
                basic.showString("" + (tecladoNumeros[caracterActual]), 256 - ((input.acceleration(Dimension.X) * 2) / 4))
            }
            while (input.acceleration(Dimension.X) < -200) {
                basic.clearScreen()
                if (caracterActual > 0) {
                    caracterActual += -1
                }
                basic.showString("" + (tecladoNumeros[caracterActual]), 256 - (-(input.acceleration(Dimension.X) * 2) / 4))
            }
        }
    } else if (menuPrincipal) {
        if (opcionMenuActual == 1) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
        } else if (opcionMenuActual == 2) {
            basic.showLeds(`
                # . # # #
                . . . . .
                # # # . #
                . . . . .
                # # . # #
                `)
        } else if (opcionMenuActual == 3) {
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . . . . .
                # . . . .
                `)
        } else if (opcionMenuActual == 4) {
            basic.showIcon(IconNames.No)
        }
    } else if (modoListado) {
        basic.showString("" + (listaNombres[registroActual]))
        basic.showString("" + (listaTelefonos[registroActual]))
    } else {

    }
})
