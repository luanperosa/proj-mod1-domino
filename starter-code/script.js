class Player {
    constructor(name) {
        this.name = name;
        this.pedras = [];
    }

}

// eslint-disable-next-line no-unused-vars
class Tabuleiro {
  constructor() {
    this.players = [new Player("Luan"), new Player("Henrrique"), new Player("Matheus"), new Player("Nala")];
    this.pecas = [
      [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
      [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6],
      [3, 3], [3, 4], [3, 5], [3, 6], [4, 4], [4, 5], [4, 6], [5, 5], [5, 6], [6, 6],
    ];
    this.currentTable = [ [2, 3], [4, 5] ];
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
      this.pecas = array;  //return somente para teste, apagar return apos os testes
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
       //return somente para teste, apagar return apos os testes
    }

    printPedras(playerNumber) {
      if(playerNumber === 1) {
        let htmlPlayer = '';
        let currentPlayer = this.players[0].pedras;
        currentPlayer.forEach((element) => {
          htmlPlayer += `<div class="pedraVert"><div class="partUp">${element[0]}</div>
          <div class="partDown">${element[1]}</div></div> `;
        });
        document.getElementById("playerOne").innerHTML = htmlPlayer;
      }
      if (playerNumber === 2) {
        let htmlPlayer = '';
        let currentPlayer = this.players[1].pedras;
        currentPlayer.forEach((element) => {
          htmlPlayer += `<div class="pedraHori"><div class="partLeft">${element[0]}</div>
          <div class="partRight">${element[1]}</div></div> `;
        });
        document.getElementById("playerTwo").innerHTML = htmlPlayer;
      }
      if(playerNumber === 3) {
        let htmlPlayer = '';
        let currentPlayer = this.players[2].pedras;
        currentPlayer.forEach((element) => {
          htmlPlayer += `<div class="pedraVert"><div class="partUp">${element[0]}</div>
          <div class="partDown">${element[1]}</div></div> `;
        });
        document.getElementById("playerThree").innerHTML = htmlPlayer;
      }
      if (playerNumber === 4) {
        let htmlPlayer = '';
        let currentPlayer = this.players[3].pedras;
        currentPlayer.forEach((element) => {
          htmlPlayer += `<div class="pedraHori"><div class="partLeft">${element[0]}</div>
          <div class="partRight">${element[1]}</div></div> `;
        });
        document.getElementById("playerFour").innerHTML = htmlPlayer;
      }
    }

    printCenter() {
      let html = '';
      let currentPecas = this.currentTable;
      currentPecas.forEach((element) => {
        html += `<div class="pedraHori"><div class="partLeft">${element[0]}</div>
        <div class="partRight">${element[1]}</div></div>`;
      });
      
      document.getElementById("tableCenter").innerHTML = html;
    }
    
    firstStep() {
      console.log(this.players[0].pedras)
      //subtituir por 2 for 
      this.players.forEach((player) => {
        player.pedras.forEach((pedra) => {

        })
        if (allPecas[0] === 6 && allPecas[1] === 6) {
          //incluindo pecas no centro atraves do push no atributo currentTable
          let setPecas = allPecas.slice(0, 2)
          allPecas.splice(0)
          this.currentTable.push(setPecas);
          // fazer o splice e redirtribuir com a função de sistribuição no player
        }
      })
    }
    // fazer um grid de matriz para table

  }


const testeTab = new Tabuleiro();
//testeTab.players[0].name = "Luan"; // teste colocando nome do players apenas no [0]
    
console.log("teste acessando o objeto Tabuleiro.pecas[0], ", testeTab.pecas[0][1] );

console.log("testanto metodo de sorteio, ", testeTab.sorteio(testeTab.pecas), testeTab.pecas[0]);

console.log("testando medoto de distribuição, ", testeTab.distribuicao());

console.log("tentando acessar nome do player, ", testeTab.players[0].name);

console.log("tentando logica do metodo teste Print Player, ", testeTab.players[0].pedras[0][0]);

//console.log("tentando testePrint manipulação de DOM, ", testeTab.testePrint(testeTab.players[0].pedras));

testeTab.pecas.forEach((element) => {
  if(element[0] === 6 && element[1] === 6){
    console.log("capturou sena com sena, ", element)
  }
})

testeTab.printPedras(1);
testeTab.printPedras(2);
testeTab.printPedras(3);
testeTab.printPedras(4);

testeTab.firstStep();
//testeTab.printCenter();