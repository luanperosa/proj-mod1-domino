class Player {
    constructor(name) {
        this.name = name;
        this.pedras = [];
    }

}

// eslint-disable-next-line no-unused-vars
class Tabuleiro {
  constructor() {
    this.players = [new Player(), new Player(), new Player(), new Player()];
    this.pecas = [
      [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
      [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6],
      [3, 3], [3, 4], [3, 5], [3, 6], [4, 4], [4, 5], [4, 6], [5, 5], [5, 6], [6, 6],
    ];
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
      const group2 = this.pecas.slice(7, 13);
      const group3 = this.pecas.slice(13, 18);
      const group4 = this.pecas.slice(18, 23);
      this.players[0].pedras = group1;
      this.players[1].pedras = group2;
      this.players[2].pedras = group3;
      this.players[3].pedras = group4;

    }

    printPedras(playerNumber) {
      if(playerNumber === 1) {
        //const htmlPlayer = document.getElementById("playerOne");
        const htmlPlayer = '';
        const currentPlayer = this.players[0].pedras;
        htmlPlayer += `<div class="partUp">${currentPlayer[0][0]}</div>
        <div class="partDown">${currentPlayer[0][1]}</div>`;
        document.getElementById("playerOne").innerHTML = htmlPlayer;
        // dentro do player1 = [[0, 0], [1, 2], [3, 4] ...]
        // dentro do html: <div>` ${currentPlayer[0][0]} `</div>
        // dentro do html: <div>` ${currentPlayer[0][1]} `</div>
      }
    }
}

