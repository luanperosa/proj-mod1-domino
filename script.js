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

    

//     printPedras(playerNumber) {
//       // colocar classe que corresponde a todas pedras player1 
//       // 
//       if(playerNumber === 1) {
//         let htmlPlayer = '';
//         let currentPlayer = this.players[0].pedras;
//         currentPlayer.forEach((element) => {
//           htmlPlayer += `<div class="forPedrasPlayer"><div class="pedraVertOne" twoElements = "${element}"><div class="partUp">${element[0]}</div>
//           <div class="partDown">${element[1]}</div></div></div> `;
//         });
//         document.getElementById("playerOne").innerHTML = htmlPlayer;


//       }
//       if (playerNumber === 2) {
//         let htmlPlayer = '';
//         let currentPlayer = this.players[1].pedras;
//         currentPlayer.forEach((element) => {
//           htmlPlayer += `<div class="pedraHori"><div class="partLeft">${element[0]}</div>
//           <div class="partRight">${element[1]}</div></div> `;
//         });
//         document.getElementById("playerTwo").innerHTML = htmlPlayer;
//       }
//       if(playerNumber === 3) {
//         let htmlPlayer = '';
//         let currentPlayer = this.players[2].pedras;
//         currentPlayer.forEach((element) => {
//           htmlPlayer += `<div class="pedraVert"><div class="partUp">${element[0]}</div>
//           <div class="partDown">${element[1]}</div></div> `;
//         });
//         document.getElementById("playerThree").innerHTML = htmlPlayer;
//       }
//       if (playerNumber === 4) {
//         let htmlPlayer = '';
//         let currentPlayer = this.players[3].pedras;
//         currentPlayer.forEach((element) => {
//           htmlPlayer += `<div class="pedraHori"><div class="partLeft">${element[0]}</div>
//           <div class="partRight">${element[1]}</div></div> `;
//         });
//         document.getElementById("playerFour").innerHTML = htmlPlayer;
//       }
//     }

//     printCenter() {
//       let html = '';
//       let currentPecas = this.currentTable;
//       currentPecas.forEach((element) => {
//         html += `<div class="pedraHori"><div class="partLeft">${element[0]}</div>
//         <div class="partRight">${element[1]}</div></div>`;
//       });
      
//       document.getElementById("tableCenter").innerHTML = html;
//     }
    
//     jogando() {
//       play = this.players;
      
//       for(let i=0; i<play.length; i++) {
//         for(let j=0; j<play.pedras.length; j++) {

//         }
//       }
//     }
    
    firstStep() {
      let players = this.players;
      let current = false;
      for(let i=0; i<players.length; i++) {
        for (let j=0; j<players[i].pedras.length; j++) {
          if(players[i].pedras[j][0] === 6 && players[i].pedras[j][1] === 6) {
            let setPedras = players[i].pedras[j];
            this.currentTable.push([...setPedras]);
            //this.pedraEsquerda.push([...setPedras]);
            let result = this.players[i].pedras.splice(j, 1);
            current = true;
            break; 
          } 
          if(current) {break;}
        }   
      }
    }

//     secondStep(pedra) {
//       const sena = this.currentTable;
//       if(pedra[0] !== 6 && pedra[1] !== 6) {return false};
//       if(pedra[0] !== 6){
//         this.currentTable.push([...pedra.reverse()]);
//         //this.pedraDireita.push([...pedra]);
//       }else {
//         this.currentTable.push([...pedra]);
//         //this.pedraDireita.push([...pedra]);
//         console.log(this.pedraDireita)
//       }
//     }

//     thirdStep(pedra) {
//       const pedrasTable = this.currentTable;
//       let lastPedra = pedrasTable.length - 1;
//       if (pedra[0] === 6) {
//         this.currentTable.unshift([...pedra.reverse()]);
//       } else if (pedra[1] === 6) {
//         this.currentTable.unshift([...pedra]);
//       }else if (pedra[0] === pedrasTable[lastPedra][1]) {
//         this.currentTable.push([...pedra]);
//       }else if (pedra[1] === pedrasTable[lastPedra][1]){
//         this.currentTable.push([...pedra.reverse()]);
//       } else {return false;}
//     }

    steepLeft(pedra) {
      console.log(pedra)
      console.log('left')
      const pedrasTable = this.currentTable;
      if(pedra[0] === pedrasTable[0][0]) {
        let reversePedra = pedra.reverse()
        this.currentTable.unshift(reversePedra);
        this.temporyPedra = [];
      console.log(this.currentTable)
        return true
      } else if(pedra[1] === pedrasTable[0][0]) {
        this.currentTable.unshift(pedra);
        this.temporyPedra = [];
      console.log(this.currentTable)
        return true
      } else {
        this.temporyPedra = [];
        return false;
      }
    }

    steepRight(pedra) {
      console.log('right')
      const pedrasTable = this.currentTable;
      const lastPedra = pedrasTable.length -1;
      if(pedra[0] === pedrasTable[lastPedra][1]) {
        this.currentTable.push(pedra);
        this.temporyPedra = [];
      } else if(pedra[1] === pedrasTable[lastPedra][1]) {
        this.currentTable.push(pedra.reverse());
        this.temporyPedra = [];
      } else {
        this.temporyPedra = [];
        return false;
      }
    }

    isLeft(tempory) {
      const pedrasTable = this.currentTable[0];
      if (tempory[0] === pedrasTable[0] && tempory[1] === pedrasTable[1]) {
        return true;
      }else {return false}
    }

    isRigth(tempory) {
      const lastPedra = (this.currentTable.length - 1)
      const pedrasTable = this.currentTable[lastPedra];
      if(tempory[0] === pedrasTable[0] && tempory[1] === pedrasTable[1]) {
        return true;
      }else {return false}
    }


//     printPedrasMesa() {
//       let htm = '';
//       let currentPedras = this.currentTable;
//       currentPedras.forEach((element) => {
//         if(element[0] === element[1] ) {
//         htm += `<div class="forPedras"><div class="pedraVert" twoElements = "${element}"><div class="partUp">${element[0]}</div>
//         <div class="partDown">${element[1]}</div></div></div>`;
//         }
//         if(element[0] !== element[1] ) {
//           htm += `<div class="forPedras"><div class="pedraHoriTable" twoElements = "${element}"><div class="partLeft">${element[0]}</div>
//           <div class="partRight">${element[1]}</div></div></div>`;
//           }
//       })
//       document.getElementById("tableCenter").innerHTML = htm;

//       const arrayNovo = document.querySelectorAll(".forPedrasPlayer");

//       arrayNovo.forEach((elemen) => {
      
//       elemen.onclick = (e) => {
//         let clickedPedra1 = parseInt(e.currentTarget.children[0].getAttribute('twoelements')[0]) 
//         let clickedPedra2 = parseInt(e.currentTarget.children[0].getAttribute('twoelements')[2]) 
//         testeTab.temporyPedra.push(clickedPedra1)
//         testeTab.temporyPedra.push(clickedPedra2)
//       }
//       });  
  
//       const arrayTable = document.querySelectorAll(".forPedras")

//   arrayTable.forEach((elem) => {
//     elem.onclick = (el) => {
//       let clicledPedraTable1 = parseInt(el.currentTarget.children[0].getAttribute('twoelements')[0])
//       let clicledPedraTable2 = parseInt(el.currentTarget.children[0].getAttribute('twoelements')[2])
//       testeTab.temporyTable.push(clicledPedraTable1)
//       testeTab.temporyTable.push(clicledPedraTable2)
//       let lef = testeTab.isLeft(testeTab.temporyTable)
//       let rigt = testeTab.isRigth(testeTab.temporyTable) 
      
//       if (lef) {
//         let inserindo = testeTab.steepLeft(testeTab.temporyPedra)
//         testeTab.printPedrasMesa();
//          if (inserindo) {
//            testeTab.deletePedra(testeTab.temporyPedra);
//            testeTab.temporyPedra = [];
//            testeTab.temporyTable = [];
//            testeTab.printPedras(1);
//            testeTab.printPedras(2);
//            testeTab.printPedras(3);
//            testeTab.printPedras(4);           
//          } 
//       }if (rigt){
//         let inserindo = testeTab.steepRight(testeTab.temporyPedra)
//         testeTab.printPedrasMesa();
//          if (inserindo) {
//            testeTab.deletePedra(testeTab.temporyPedra);
//            testeTab.temporyPedra = [];
//            testeTab.temporyTable = [];
//            testeTab.printPedras(1);
//            testeTab.printPedras(2);
//            testeTab.printPedras(3);
//            testeTab.printPedras(4);           
//          } 
//       }else {
//         testeTab.printPedrasMesa();
//         testeTab.temporyPedra = [];
//         testeTab.temporyTable = [];
//       }
    
//     }
//   })
// }

deletePedra(pedra) {
  let players = this.players;
      let current = false;
      for(let i=0; i<players.length; i++) {
        for (let j=0; j<players[i].pedras.length; j++) {
            if(pedra[0] === players[i].pedras[j][0] && pedra[1] === players[i].pedras[j][1]) {
              this.players[i].pedras.splice(j, 1);
              current = true;
              break;               
            }
          } 
          if(current) {break;}
        }   
      }
}




// const testeTab = new Tabuleiro();

// testeTab.sorteio(testeTab.pecas);
// testeTab.distribuicao();
// testeTab.firstStep();
// testeTab.printPedras(1);
// testeTab.printPedras(2);
// testeTab.printPedras(3);
// testeTab.printPedras(4);
// testeTab.printPedrasMesa();



// const arrayNovo = document.querySelectorAll(".forPedrasPlayer")

// arrayNovo.forEach((element) => {

// element.onclick = (e) => {
//   let clickedPedra1 = parseInt(e.currentTarget.children[0].getAttribute('twoelements')[0]) 
//   let clickedPedra2 = parseInt(e.currentTarget.children[0].getAttribute('twoelements')[2]) 
//   testeTab.temporyPedra.push(clickedPedra1)
//   testeTab.temporyPedra.push(clickedPedra2)
//   console.log("entrou no onclick do player1")
//   console.log("temporyPedras, ", testeTab.temporyPedra)
// }
// });


