const theDominoGame = new Tabuleiro();

// carregando inicio do game
theDominoGame.sorteio(theDominoGame.pecas);
theDominoGame.distribuicao();
theDominoGame.firstStep();


document.addEventListener("DOMContentLoaded", function () {
    let html1 = '';
    let currentPlayer1 = theDominoGame.players[0].pedras;
        currentPlayer1.forEach((element) => {
        html1 += `<div class="forPedrasPlayerOne"><div class="pedraVertOne" twoElements = "${element}"><div class="partUp">${element[0]}</div>
                <div class="partDown">${element[1]}</div></div></div> `;
        });
            document.getElementById("playerOne").innerHTML = html1;    
    
    let html2 = '';
    let currentPlayer2 = theDominoGame.players[1].pedras;
        currentPlayer2.forEach((element) => {
            html2 += `<div class="forPedrasPlayerTwo"><div class="pedraHori" twoElements = "${element}"><div class="partLeft">${element[0]}</div>
                <div class="partRight">${element[1]}</div></div></div> `;
        });
            document.getElementById("playerTwo").innerHTML = html2;    
    
    let html3 = '';
    let currentPlayer3 = theDominoGame.players[2].pedras;
        currentPlayer3.forEach((element) => {
            html3 += `<div class="forPedrasPlayerThree"><div class="pedraVertOne" twoElements = "${element}"><div class="partUp">${element[0]}</div>
                <div class="partDown">${element[1]}</div></div></div> `;
        });
            document.getElementById("playerThree").innerHTML = html3;            
    
    
    let html4 = '';
    let currentPlayer4 = theDominoGame.players[3].pedras;
        currentPlayer4.forEach((element) => {
            html4 += `<div class="forPedrasPlayerFour"><div class="pedraHori" twoElements = "${element}"><div class="partLeft">${element[0]}</div>
                <div class="partRight">${element[1]}</div></div></div> `;
        });
            document.getElementById("playerFour").innerHTML = html4;    
    
    
    let htmlTable = '';
    let currentPedrasTable = theDominoGame.currentTable;
    currentPedrasTable.forEach((element) => {
            if(element[0] === element[1] ) {
              htmlTable += `<div class="forPedrasTable"><div class="pedraVertOne" twoElements = "${element}"><div class="partUp">${element[0]}</div>
            <div class="partDown">${element[1]}</div></div></div>`;
            }
            if(element[0] !== element[1] ) {
              htmlTable += `<div class="forPedrasTable"><div class="pedraHoriTable" twoElements = "${element}"><div class="partLeft">${element[0]}</div>
                <div class="partRight">${element[1]}</div></div></div>`;
                }
    });
    document.getElementById("tableCenter").innerHTML = htmlTable;
    
      document.querySelectorAll(".forPedrasPlayerOne").forEach((element) => {
          element.onclick = (el) => {
            let clickedPedra1 = parseInt(el.currentTarget.children[0].getAttribute('twoelements')[0])
            let clickedPedra2 = parseInt(el.currentTarget.children[0].getAttribute('twoelements')[2])
            theDominoGame.temporyPedra.push(clickedPedra1)
            theDominoGame.temporyPedra.push(clickedPedra2)
            clickedPedra1 = 0;
            clickedPedra2 = 0;
            //
            
            //theDominoGame.steepLeft(theDominoGame.temporyPedra)
            theDominoGame.steepRight(theDominoGame.temporyPedra)
            

            // printCenter
            let htmlTable = '';
    let currentPedrasTable = theDominoGame.currentTable;
    currentPedrasTable.forEach((element) => {
            if(element[0] === element[1] ) {
              htmlTable += `<div class="forPedrasTable"><div class="pedraVertOne" twoElements = "${element}"><div class="partUp">${element[0]}</div>
            <div class="partDown">${element[1]}</div></div></div>`;
            }
            if(element[0] !== element[1] ) {
              htmlTable += `<div class="forPedrasTable"><div class="pedraHoriTable" twoElements = "${element}"><div class="partLeft">${element[0]}</div>
                <div class="partRight">${element[1]}</div></div></div>`;
                }
    });
    document.getElementById("tableCenter").innerHTML = htmlTable;
          }
      })

      document.querySelectorAll(".forPedrasTable").forEach((elem) => {
        elem.onclick = (e) => {
          let clickedPedr1 = parseInt(e.currentTarget.children[0].getAttribute('twoelements')[0])
          let clickedPedr2 = parseInt(e.currentTarget.children[0].getAttribute('twoelements')[2])
          theDominoGame.temporyTable.push(clickedPedr1);
          theDominoGame.temporyTable.push(clickedPedr2);
          clickedPedr1 = 0;
          clickedPedr2 = 0;
          console.log("temporyTable, ", theDominoGame.temporyTable)
          console.log(theDominoGame.currentTable)
        }
      })

})