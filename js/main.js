const world = document.querySelector('#game');
const c = world.getContext('2d');
const tailleCase = world.clientWidth/15;

// faire une liste de Bomb
var bombList = [];
// faire une liste de joueur
var playerList = [];
var continuer = true;


// charger toute les images
var imgWall = new Image();
imgWall.src = "img/wall.jpg";

var imgDirt = new Image();
imgDirt.src = "img/Dirt1.jpg";

var imgCrate = new Image();
imgCrate.src = "img/Crate1.png";

var imgExplosion = new Image();
imgExplosion.src = "img/Explosion.png";

//image du personnage
var imgP1AKR = new Image();
imgP1AKR.src = "img/P1AKR.png";

var imgP1AKL = new Image();
imgP1AKL.src = "img/P1AKL.png";

var imgP1AKDD = new Image();
imgP1AKDD.src = "img/P1AKDD.png";

var imgP1AKG = new Image();
imgP1AKG.src = "img/P1AKGD.png";

// image coeur
var imgHeart = new Image();
imgHeart.src = "img/Heart.png";

var imgBomb = new Image();
imgBomb.src = "img/PinkBomb.png";








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
             if (bombList[i].owner != player ) {
                isOnBomb = true;
             }
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
        this.nbBombLancer = 0;
        this.time = 0;
        this.poser = false;
    }
}

class Bomb {
    constructor(x, y, player,envoyer,maxi) {
        this.x = x;
        this.y = y;
        this.owner = player;
        this.time = 0;
        this.explosion = false;
        this.envoyer = envoyer;
        this.direction = player.direction;
        this.maxiBomb = maxi;
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
                c.drawImage(imgWall, j*tailleCase, i*tailleCase, tailleCase, tailleCase);
            } else if (tab[i][j] == "x") {
                c.drawImage(imgDirt, j*tailleCase, i*tailleCase, tailleCase, tailleCase);
            } else if (tab[i][j] == "B") {
                c.drawImage(imgCrate, j*tailleCase, i*tailleCase, tailleCase, tailleCase);
            } else if (tab[i][j] == "J") {
                c.drawImage(imgDirt, j*tailleCase, i*tailleCase, tailleCase, tailleCase);
            }
        }
    }

    // pour chaque joueur on l'affiche dans le tableau
    for (var i = 0; i < playerList.length; i++) {
        if (playerList[i].devant) {
            if (playerList[i].direction == "droite") {
                c.drawImage(imgP1AKR, playerList[i].y*tailleCase, playerList[i].x*tailleCase, tailleCase, tailleCase);
            } else  {
                c.drawImage(imgP1AKL, playerList[i].y*tailleCase, playerList[i].x*tailleCase, tailleCase, tailleCase);
            } 
        } else {
            if (playerList[i].direction == "droite") {
                c.drawImage(imgP1AKDD, playerList[i].y*tailleCase, playerList[i].x*tailleCase, tailleCase, tailleCase);
            } else {
                c.drawImage(imgP1AKG, playerList[i].y*tailleCase, playerList[i].x*tailleCase, tailleCase, tailleCase);
            }
        }

    }

    // afficher les pv des deux joeurs
    for (var i = 0; i < playerList[0].pv; i++) {
        c.drawImage(imgHeart, 10+55*i, world.height-50, 50, 50);
    }
    for (var i = 0; i < playerList[1].pv; i++) {
        c.drawImage(imgHeart, world.width-60-55*i, world.height-50, 50, 50);
    }

    // afficher le nombre de bombe poser par le Joueur
    for (var i = 0; i < 5 - playerList[0].nbBombLancer%5; i++) {
        c.drawImage(imgBomb, 10+55*i, world.height-125, 50, 50);
    }
    for (var i = 0; i < 5 - playerList[1].nbBombLancer%5; i++) {
        c.drawImage(imgBomb, world.width-60-55*i, world.height-125, 50, 50);
    }

    // pour chaque bombe dans la liste de bombes
    for (var i = 0; i < bombList.length; i++) {
        if (bombList[i].explosion == false) {
            c.drawImage(imgBomb, bombList[i].y*tailleCase+12, bombList[i].x*tailleCase+12, tailleCase/2, tailleCase/2);
        } 
        if (bombList[i].explosion == true && bombList[i].maxiBomb == false) {
            c.drawImage(imgExplosion, bombList[i].y*tailleCase-50, bombList[i].x*tailleCase-50, tailleCase*3, tailleCase*3);
        } else if (bombList[i].explosion == true && bombList[i].maxiBomb == true) {
            dessinerMaxiBomb(bombList[i]);
        }
    }
    
}

const player1 = new Player(1, 1);
const player2 = new Player(9, 13);

// ajouter le joueur a la liste de joueur
playerList.push(player1);
playerList.push(player2);

const animationLoop= () => {
    setTimeout(requestAnimationFrame(animationLoop), 1000);
    c.clearRect(0, 0, world.width, world.height);
    if (continuer) {
        afficherTabGraphique(tab);
        player1.time++;
        player2.time++;
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
    
    // attendre 100ms avant de relancer la fonction

    frames ++;
}

//animationLoop();

addEventListener('keydown', ({key}) => {

    switch (key) {
        case 'z':
            console.log("z");
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
            if (player1.time > 25 || !player1.poser) {
                player1.nbBombLancer++;
                if (player1.nbBombLancer%5 == 0) {
                    const bomb = new Bomb(player1.x, player1.y, player1, false, true);
                    bombList.push(bomb);
                    console.log(bomb);
                } else {
                    const bomb = new Bomb(player1.x, player1.y, player1, false, false);
                    bombList.push(bomb);
                    console.log(bomb);
                }
                player1.time = 0;
                player1.poser = true;
            }
            break;
        case 'a':
            if (player1.time > 25 || !player1.poser) {
                const bomb1 = new Bomb(player1.x, player1.y, player1, true, false);
                bombList.push(bomb1);
                player1.time = 0;
                player1.poser = true;
            } 
            break;
        case 'o':
            player2.direction = "haut";
            player2.devant = false;
            movePlayer("up", player2);
            break;
        case 'l':
            player2.direction = "bas";
            player2.devant = true;
            movePlayer("down", player2);
            break;
        case 'k':
            player2.direction = "gauche";
            movePlayer("left", player2);
            break;
        case 'm':
            player2.direction = "droite";
            movePlayer("right", player2);
            break;
        case 'p':
            if (player2.time > 25 || !player2.poser) {
                player2.nbBombLancer++;
                if ( player2.nbBombLancer%5 == 0) {
                    const bomb2 = new Bomb(player2.x, player2.y, player2, false, true);
                    bombList.push(bomb2);
                } else {
                    const bomb2 = new Bomb(player2.x, player2.y, player2, false, false);
                    bombList.push(bomb2);
                }
                player2.time = 0;
                player2.poser = true;
            }
            break;
        case 'i':
            if (player2.time > 25 || !player2.poser) {
                const bomb3 = new Bomb(player2.x, player2.y, player2, true);
                bombList.push(bomb3);
                player2.time = 0;
                player2.poser = true;
            }
            break;
    }
});



// faire une fonction exploserBomb qui prend en paramètre une bombe
function exploserBomb(bomb) {
    if (!bomb.maxiBomb)
    {
            // la bomb détruit les cases "B" autour d'elle
        // si la case est un "B" alors on la remplace par un "x"
        for (var i = -1; i < 2; i++) {
            for (var j = -1; j < 2; j++) {
                if (tab[bomb.x+i][bomb.y+j] == "B") {
                    tab[bomb.x+i][bomb.y+j] = "x";
                } else if (tab[bomb.x+i][bomb.y+j] == "J") {
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
        c.drawImage(imgExplosion, bomb.y*tailleCase-(tailleCase*1.5), bomb.x*tailleCase-(tailleCase*1.5), 150, 150);
        bomb.explosion = true;
    } else if (bomb.maxiBomb) {
        bomb.explosion = true;
        for (var i = -3; i < 4; i++) {
            explosionCase(bomb.x, bomb.y+i);
        }
        for (var i = -3; i < 4; i++) {
            explosionCase(bomb.x+i, bomb.y);
        }
    }


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

    if ( newX > 0 && newX < tab.length && newY > 0 && newY < tab[0].length) {
        console.log(tab[newX][newY]);
        if (tab[newX][newY] == "x" ) {
            bomb.x = newX;
            bomb.y = newY;
        }  
    }
}

animationLoop();

// fonction explosionMaxiBomb
function explosionCase(x, y) {
    try {
        if (tab[x][y] == "B") {
            tab[x][y] = "x";
        } else if (tab[x][y] == "J") {
            for (var k = 0; k < playerList.length; k++) {
                if ((playerList[k].x == x) && (playerList[k].y == y)) {
                    playerList[k].pv--;
                    if (playerList[k].pv == 0) {
                        continuer = false;
                    }
                }
            }
        }
        // dessiner du rouge sur cette case
    } catch (e) {
        console.log("dehors");
    }
}


// fonction dessiner maxiBomb
function dessinerMaxiBomb(bomb) {

    if (bomb.time>100) {
        for (var i = -3; i < 4; i++) {
            c.fillStyle = 'yellow';
            c.fillRect(bomb.y*tailleCase-(i*tailleCase), bomb.x*tailleCase, tailleCase, tailleCase);
            c.fillRect(bomb.y*tailleCase, bomb.x*tailleCase-(i*tailleCase), tailleCase, tailleCase);
            c.fillStyle = 'orange';
            c.fillRect(bomb.y*tailleCase-(i*tailleCase), bomb.x*tailleCase+tailleCase/4, tailleCase, tailleCase/2);
            c.fillRect(bomb.y*tailleCase+tailleCase/4, bomb.x*tailleCase-(i*tailleCase), tailleCase/2, tailleCase);
        }
    }

}

