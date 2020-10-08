class Caballo {
    constructor(nombre = "Donald") {
        this.nombre = nombre
        this.avance = 0
      }

      turno() {
        this.tiro = Math.ceil(Math.random()*6)
         if (this.tiro==1) {
          this.avance += 3
            return this.avance
        }

        if (this.tiro0==2 || this.turno==3) {
          this.avance += 1
            return this.avance
        }

        if (this.tiro>3) {
          this.avance += 2
             return this.avance
        }
        return this.avance += 0
      }
    }
class PosiCarrera {
    constructor(caballos = [], meta = 100) {
        this.cab = caballos
        this.meta = meta
        }

    correr() {
        let termino = false
        let recorrido = []
        while (termino === false) {
        for (let i = 0; i < this.cab.length; i++) {
              recorrido[i] = this.cab[i].turno()
            if (recorrido[i]!==0){
            console.log(this.cab[i].nombre, " va en la posición: ", recorrido[i])
              }
            if(recorrido[i]>=this.meta){
            termino = true
            console.log("El caballo que ganó fue:")
            console.log(this.cab[i].nombre)
            return
            }
        }
        }
    }
}
    let C1 = new Caballo("Caballo #1")
    let C2 = new Caballo("Caballo #2")
    let C3 = new Caballo("Caballo #3")
      
    let cabComp = [C1, C2, C3]
      let carrera = new PosiCarrera(cabComp, 100).correr()