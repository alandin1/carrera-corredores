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
    
    