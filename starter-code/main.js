const theDominoGame = new Tabuleiro();

// carregando inicio do game
theDominoGame.sorteio(theDominoGame.pecas);
theDominoGame.distribuicao();
theDominoGame.printAllPage();
theDominoGame.firstStep();
