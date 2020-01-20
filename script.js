class Player {
    constructor(name) {
        this.name = name;
        this.pedras = [];
    }

}

class Tabuleiro {
  constructor() {
    this.players = [new Player("Luan"), new Player("Henrrique"), new Player("Matheus"), new Player("Nala")];
    this.pecas = [
      [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
      [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6],
      [3, 3], [3, 4], [3, 5], [3, 6], [4, 4], [4, 5], [4, 6], [5, 5], [5, 6], [6, 6],
    ];
    this.currentTable = [];
    this.temporyTable = [];
    this.temporyPedra = [];
  }

    sorteio(array) {
            let currentIndex = array.length;
            let temporyValue = undefined;
            let randomIndex = undefined;

            while(currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporyValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporyValue;
            }           
      this.pecas = array;
    }

    distribuicao() {
      const group1 = this.pecas.slice(0, 7);
      const group2 = this.pecas.slice(7, 14);
      const group3 = this.pecas.slice(14, 21);
      const group4 = this.pecas.slice(21, 28);
      this.players[0].pedras = group1;
      this.players[1].pedras = group2;
      this.players[2].pedras = group3;
      this.players[3].pedras = group4;

    }

    
    firstStep() {
      let players = this.players;
      let current = false;
      for(let i=0; i<players.length; i++) {
        for (let j=0; j<players[i].pedras.length; j++) {
          if(players[i].pedras[j][0] === 6 && players[i].pedras[j][1] === 6) {
            let setPedras = players[i].pedras[j];
            this.currentTable.push([...setPedras]);
            this.players[i].pedras.splice(j, 1);
            current = true;
            break; 
          } 
          if(current) {break;}
        }   
      }

    }

    steepLeft(pedra) {
      const pedrasTable = this.currentTable;
      if(pedra[0] === pedrasTable[0][0]) {
        let reversePedra = pedra.reverse()
        this.currentTable.unshift(reversePedra);
        this.temporyPedra = [];
        return true
      } else if(pedra[1] === pedrasTable[0][0]) {
        this.currentTable.unshift(pedra);
        this.temporyPedra = [];
        return true
      } else {
        this.temporyPedra = [];
        return false;
      }
    }

    steepRight(pedra) {
      const pedrasTable = this.currentTable;
      const lastPedra = pedrasTable.length -1;
      if(pedra[0] === pedrasTable[lastPedra][1]) {
        this.currentTable.push(pedra);
        this.temporyPedra = [];
        return true;
      } else if(pedra[1] === pedrasTable[lastPedra][1]) {
        this.currentTable.push(pedra.reverse());
        this.temporyPedra = [];
        return true
      } else {
        this.temporyPedra = [];
        return false;
      }
    }

    //I will implement improve
    isLeft(tempPedra) {
      const pedrasTable = this.currentTable[0];
      if (tempPedra[0] === pedrasTable[0] && tempPedra[1] === pedrasTable[1]) {
        return true;
      }else {return false}
    }

    isRigth(tempPedra) {
      const lastPedra = (this.currentTable.length - 1)
      const pedrasTable = this.currentTable[lastPedra];
      if(tempPedra[0] === pedrasTable[0] && tempPedra[1] === pedrasTable[1]) {
        return true;
      }else {return false}
    }



    deletePedra(pedra) {
      let playerPedras = this.players[0].pedras
      for(let i=0; i<playerPedras.length; i++) {
        if(pedra[0] === playerPedras[i][0] && pedra[1] === playerPedras[i][1]) {
          this.players[0].pedras.splice(i, 1)
          break;
        }else if (pedra[0] === playerPedras[i][1] && pedra[1] === playerPedras[i][0]) {
          this.players[0].pedras.splice(i, 1)
          break;
        }
      }
    }

}