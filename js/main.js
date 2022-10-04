const world = document.querySelector('#game');
const c = world.getContext('2d');
const tailleCase = world.width/15;
// faire une liste de Bomb
var bombList = [];
// faire une liste de joueur
var playerList = [];
var continuer = true;

// faire un tableau a deux dimensions
var tab = new Array(11);
for (var i = 0; i < tab.length; i++) {
    tab[i] = new Array(15);
}

//remplir le tableau avec des x
for (var i = 1; i < tab.length-1; i++) {
    for (var j = 0; j < tab[i].length; j++) {
        tab[i][j] = "x";
    }
}
// mettre de M toutes les 2 lignes et colonnes
for (var i = 0; i < tab.length; i+=2) {
    for (var j = 0; j < tab[i].length; j+=2) {
        tab[i][j] = "M";
    }
}

// mettre des B sur au hasard sur les case du milieu si ce n'est pas un M
for (var i = 1; i < tab.length-1; i++) {
    for (var j = 2; j < tab[i].length-2; j++) {
        if (tab[i][j] != "M") {
            var rand = Math.floor(Math.random() * 5);
            if (rand < 4) {
                tab[i][j] = "B";
            }
        }
    }
}

// mettre des "M" sur les 4 bords du tableau
for (var i = 0; i < tab.length; i++) {
    tab[i][0] = "M";
    tab[i][tab[i].length-1] = "M";
}
for (var i = 0; i < tab[0].length; i++) {
    tab[0][i] = "M";
    tab[tab.length-1][i] = "M";
}


afficherTab(tab);

// fonction qui perlet de déplacer le joueur
function movePlayer(direction, player) {
    // nouvelle position du joueur
    var newX = player.x;
    var newY = player.y;
    switch (direction) {
        case "up":
            newX--;
            break;
        case "down":
            newX++;
            break;
        case "left":
            newY--;
            break;
        case "right":
            newY++;
            break;
    }

    var isOnBomb = false;
    for (var i = 0; i < bombList.length; i++) {
        if ((bombList[i].x == newX) && (bombList[i].y == newY)) {
             isOnBomb = true;
        }
    }
    if ((tab[newX][newY] != "M") && (tab[newX][newY] != "B") && (!isOnBomb)) {
        // mettre un x sur l'ancienne position du joueur
        tab[player.x][player.y] = "x";
        player.x = newX;
        player.y = newY;
    }
}

// fonction qui permet d'afficher le tableau en console.log
function afficherTab(tab) {
    for (var i = 0; i < tab.length; i++) {
        for (var j = 0; j < tab[i].length; j++) {
            console.log(tab[i][j]);
        }
    }
}

world.width = world.clientWidth;
world.height = world.clientHeight;


let frames = 0;


class Player {
    constructor(x, y) {
        this.x= x,
        this.y= y,
        this.points = 0,
        this.pv = 3,
        this.direction = "droite"    
        this.devant = true;       
    }
}

class Bomb {
    constructor(x, y, player,envoyer) {
        this.x = x;
        this.y = y;
        this.owner = player;
        this.time = 0;
        this.explosion = false;
        this.envoyer = envoyer;
        this.direction = player.direction;
    }
}

// fonction qui permet de faire un affichage graphique du tableau
function afficherTabGraphique(tab) {
    // mettre le joueur dans le tableau
    for (var i = 0; i < playerList.length; i++) {
        tab[playerList[i].x][playerList[i].y] = "J";
    }

    for (var i = 0; i < tab.length; i++) {
        for (var j = 0; j < tab[i].length; j++) {
            if (tab[i][j] == "M") {
                //c.fillStyle = 'black';
                //c.fillRect(j*50, i*50, 50, 50);
                // mettre une image de brique de 50 par 50
                var img = new Image();
                img.src = "img/wall.jpg";
                c.drawImage(img, j*tailleCase, i*tailleCase, tailleCase, tailleCase);
            } else if (tab[i][j] == "x") {
                //c.fillStyle = 'white';
                //c.fillRect(j*50, i*50, 50, 50);
                var img = new Image();
                img.src = "img/Dirt1.jpg";
                c.drawImage(img, j*tailleCase, i*tailleCase, tailleCase, tailleCase);
            } else if (tab[i][j] == "B") {
                //c.fillStyle = 'blue';
                //c.fillRect(j*50, i*50, 50, 50);
                var img = new Image();
                img.src = "img/Crate1.png";
                c.drawImage(img, j*tailleCase, i*tailleCase, tailleCase, tailleCase);
            } else if (tab[i][j] == "J") {
                //c.fillStyle = 'red';
                //c.fillRect(j*50, i*50, 50, 50);
                var img = new Image();
                img.src = "img/Dirt1.jpg";
                c.drawImage(img, j*tailleCase, i*tailleCase, tailleCase, tailleCase);
            }
        }
    }

    // pour chaque joueur on l'affiche dans le tableau
    for (var i = 0; i < playerList.length; i++) {
        if (playerList[i].devant) {
            if (playerList[i].direction == "droite") {
                var img = new Image();
                img.src = "img/P1AKR.png";
                c.drawImage(img, playerList[i].y*tailleCase, playerList[i].x*tailleCase, tailleCase, tailleCase);
            } else  {
                var img = new Image();
                img.src = "img/P1AKL.png";
                c.drawImage(img, playerList[i].y*tailleCase, playerList[i].x*tailleCase, tailleCase, tailleCase);
            } 
        } else {
            if (playerList[i].direction == "droite") {
                var img = new Image();
                img.src = "img/P1AKDD.png";
                c.drawImage(img, playerList[i].y*tailleCase, playerList[i].x*tailleCase, tailleCase, tailleCase);
            } else {
                var img = new Image();
                img.src = "img/P1AKGD.png";
                c.drawImage(img, playerList[i].y*tailleCase, playerList[i].x*tailleCase, tailleCase, tailleCase);
            }
        }
    }

    // afficher les pv des deux joeurs
    imgVie = new Image();
    imgVie.src = "img/Heart.png";
    for (var i = 0; i < playerList[0].pv; i++) {
        c.drawImage(imgVie, 10+55*i, world.height-75, 50, 50);
    }
    for (var i = 0; i < playerList[1].pv; i++) {
        c.drawImage(imgVie, world.width-60-55*i, world.height-75, 50, 50);
    }


    // pour chaque bombe dans la liste de bombes
    for (var i = 0; i < bombList.length; i++) {
        if (bombList[i].explosion == false) {
            var img = new Image();
            img.src = "img/PinkBomb.png";
            c.drawImage(img, bombList[i].y*tailleCase+12, bombList[i].x*tailleCase+12, tailleCase/2, tailleCase/2);
        } 
        if (bombList[i].explosion == true){
            var img = new Image();
            img.src = "img/Explosion.png";
            c.drawImage(img, bombList[i].y*tailleCase-50, bombList[i].x*tailleCase-50, tailleCase*3, tailleCase*3);
        }
    }
    
}

const player1 = new Player(1, 1);
const player2 = new Player(9, 13);

// ajouter le joueur a la liste de joueur
playerList.push(player1);
playerList.push(player2);

const animationLoop= () => {
    requestAnimationFrame(animationLoop);
    c.clearRect(0, 0, world.width, world.height);
    if (continuer) {
        afficherTabGraphique(tab);
        // essayer d'ajouter 1 a chaque time de chaque bombe
        for (var i = 0; i < bombList.length; i++) {
            bombList[i].time++;
            // si la bomb a un time de 1000 elle explose
            if (bombList[i].envoyer == false ) {
                if (bombList[i].time == 100) {
                    exploserBomb(bombList[i]);
                } else if (bombList[i].time == 109) {
                    // si la bombe a un time de 2000 elle disparait
                    bombList.splice(i, 1);
                }
            } else if (bombList[i].envoyer == true) {
                if (bombList[i].time%10 == 0) {
                    
                    switch (bombList[i].direction) {
                        case "haut":
                            moveBomb(bombList[i]);
                            break;
                        case "bas":
                            moveBomb(bombList[i]);
                            break;
                        case "gauche":
                            moveBomb(bombList[i]);
                            break;
                        case "droite":
                            moveBomb(bombList[i]);
                            break;
                    }
                }
                if (bombList[i].time == 200) {
                    exploserBomb(bombList[i]);
                } else if (bombList[i].time == 209) {
                    // si la bombe a un time de 2000 elle disparait
                    bombList.splice(i, 1);
                }
            }
        }
    } else {
        c.fillStyle = 'black';
        c.fillRect(0, 0, world.width, world.height);
        c.fillStyle = 'white';
        c.font = "30px Arial";
        c.fillText("Game Over", 200, 200);
        for (var i = 0; i < playerList.length; i++) {
            if (playerList[i].pv > 0) {
                c.fillText("Player " + (i+1) + " win", 200, 300);
            } else if (playerList[i].pv == 0) {
                c.fillText("Player " + (i+1) + " loose", 200, 400);
            }
        }
    }
    frames ++;
}

//animationLoop();

addEventListener('keydown', ({key}) => {

    switch (key) {
        case 'z':
            player1.direction = "haut";
            player1.devant = false;
            movePlayer("up", player1);
            break;
        case 's':
            player1.direction = "bas";
            player1.devant = true;
            movePlayer("down", player1);
            break;
        case 'q':
            player1.direction = "gauche";
            movePlayer("left", player1);
            break;
        case 'd':
            player1.direction = "droite";
            movePlayer("right", player1);
            break;
        case 'e':
            const bomb = new Bomb(player1.x, player1.y, player1, false);
            bombList.push(bomb);
            break;
        case 'a':
            const bomb1 = new Bomb(player1.x, player1.y, player1, true);
            bombList.push(bomb1);
            break;
        case 'ArrowUp':
            player2.direction = "haut";
            player2.devant = false;
            movePlayer("up", player2);
            break;
        case 'ArrowDown':
            player2.direction = "bas";
            player2.devant = true;
            movePlayer("down", player2);
            break;
        case 'ArrowLeft':
            player2.direction = "gauche";
            movePlayer("left", player2);
            break;
        case 'ArrowRight':
            player2.direction = "droite";
            movePlayer("right", player2);
            break;
        case 'Enter':
            const bomb2 = new Bomb(player2.x, player2.y, player2, false);
            bombList.push(bomb2);
            break;
        case 'Control':
            const bomb3 = new Bomb(player2.x, player2.y, player2, true);
            bombList.push(bomb3);
            break;
    }
});

addEventListener('keyup', ({key}) => {
    switch (key) {
        case 'z':
            keys.arrowUp.pressed = false;
            break;
        case 's':
            keys.arrowDown.pressed = false;
            break;
        case 'q':
            keys.arrowLeft.pressed = false;
            break;
        case 'd':
            keys.arrowRight.pressed = false;
            break;
    }
});


// faire une fonction exploserBomb qui prend en paramètre une bombe
function exploserBomb(bomb) {
    // la bomb détruit les cases "B" autour d'elle
    // si la case est un "B" alors on la remplace par un "x"
    for (var i = -1; i < 2; i++) {
        for (var j = -1; j < 2; j++) {
            if (tab[bomb.x+i][bomb.y+j] == "B") {
                tab[bomb.x+i][bomb.y+j] = "x";
            } else if (tab[bomb.x+i][bomb.y+j] == "J") {
                // si la case est un "J" alors on retire 1 pv au joueur
                // parcourir la liste pour savoir quelle joueur est sur cette case
                for (var k = 0; k < playerList.length; k++) {
                    if ((playerList[k].x == bomb.x+i) && (playerList[k].y == bomb.y+j)) {
                        playerList[k].pv--;
                        console.log("pv du joueur " + k + " : " + playerList[k].pv);
                        if (playerList[k].pv == 0) {
                            console.log("le joueur " + k + " est mort");
                            continuer = false;
                        }
                    }
                }
            }
        }
    }

    // animation de l'explosion
    //c.fillStyle = 'orange';
    //c.fillRect(bomb.y*50, bomb.x*50, 150, 150);
    var img = new Image();
    img.src = "img/Explosion.png";
    c.drawImage(img, bomb.y*tailleCase, bomb.x*tailleCase, 150, 150);
    bomb.explosion = true;


}


// fonction pour afficher le tableau en console.log
function afficherTab(tab) {
    // mettre le joueur dans le tableau
    res = "";
    for (var i = 0; i < tab.length; i++) {
        for (var j = 0; j < tab[i].length; j++) {
            res += tab[i][j];
        }
        res += "\n";
    }
    console.log(res);
}

// fonction deplacer bomb 
function moveBomb(bomb) {
    var newY = 0;
    var newX = 0;
    switch (bomb.direction) {
        case "haut":
            newX = bomb.x --;
            newY = bomb.y;
            break;
        case "bas":
            newX = bomb.x++;
            newY = bomb.y;
            break;
        case "gauche":
            newX = bomb.x;
            newY = bomb.y --;
            break;
        case "droite":
            newX = bomb.x;
            newY = bomb.y ++;
            break;
    }

    if (!(tab[newX][newY] == "x")) {
        // si la case suivante est un x on deplace la bombe
        bomb.x = newX;
        bomb.y = newY;
    }
}

// fonction qui permet de lancer le jeu
function lancerJeu() {
    var btn = document.querySelector(".btn");
    //var game = document.querySelector(".game");
    // afficher sur la page l'element avec l'id #game
    //game.style.display = "flex";
    // cacher l'element avec l'id #btn
    btn.style.display = "none";
    // on affiche le tableau
    afficherTab(tab);
    // on lance la boucle d'animation
    animationLoop();
}

animationLoop();


