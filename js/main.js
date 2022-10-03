const world = document.querySelector('#game');
const c = world.getContext('2d');
const tailleCase = 75;
// faire une liste de Bomb
var bombList = [];

// faire un tableau a deux dimensions
var tab = new Array(13);
for (var i = 0; i < tab.length; i++) {
    tab[i] = new Array(13);
}

//remplir le tableau avec des x
for (var i = 0; i < tab.length; i++) {
    for (var j = 0; j < tab[i].length; j++) {
        tab[i][j] = "x";
    }
}
// mettre des M sur les bords
for (var i = 0; i < tab.length; i++) {
    tab[0][i] = "M";
    tab[12][i] = "M";
    tab[i][0] = "M";
    tab[i][12] = "M";
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
            if (rand < 3) {
                tab[i][j] = "B";
            }
        }
    }
}

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
        if ((tab[newX][newY] != "M") && (tab[newX][newY] != "B")) {
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

const keys = {
    arrowUp: { pressed: false },
    arrowDown: { pressed: false },
    arrowLeft: { pressed: false },
    arrowRight: { pressed: false },
}

class Player {
    constructor() {
        this.x= 1,
        this.y= 1,
        this.points = 0,
        this.pv = 3         
    }
}

class Bomb {
    constructor(x, y, player) {
        this.x = x;
        this.y = y;
        this.owner = player;
    }
}

// fonction qui permet de faire un affichage graphique du tableau
function afficherTabGraphique(tab) {
    for (var i = 0; i < tab.length; i++) {
        for (var j = 0; j < tab[i].length; j++) {
            if (tab[i][j] == "M") {
                c.fillStyle = 'black';
                c.fillRect(j*50, i*50, 50, 50);
            } else if (tab[i][j] == "x") {
                c.fillStyle = 'white';
                c.fillRect(j*50, i*50, 50, 50);
            } else if (tab[i][j] == "J") {
                c.fillStyle = 'red';
                c.fillRect(j*50, i*50, 50, 50);
            } else if (tab[i][j] == "B") {
                c.fillStyle = 'blue';
                c.fillRect(j*50, i*50, 50, 50);
            }
        }
    }
    // pour chaque bombe dans la liste de bombes
    for (var i = 0; i < bombList.length; i++) {
        // afficher la bombe
        c.fillStyle = 'orange';
        c.fillRect(bombList[i].y*50+12, bombList[i].x*50+12, 25, 25);
    }
    
}

const player1 = new Player();

const animationLoop= () => {
    requestAnimationFrame(animationLoop);
    c.clearRect(0, 0, world.width, world.height);
    afficherTabGraphique(tab);
    afficherTab(tab);
    frames ++;
}

animationLoop();

addEventListener('keydown', ({key}) => {

    console.log(key);
    switch (key) {
        case 'z':
            keys.arrowUp.pressed = true;
            movePlayer("up", player1);
            break;
        case 's':
            keys.arrowDown.pressed = true;
            movePlayer("down", player1);
            break;
        case 'q':
            keys.arrowLeft.pressed = true;
            movePlayer("left", player1);
            break;
        case 'd':
            keys.arrowRight.pressed = true;
            movePlayer("right", player1);
            break;
        case 'e':
            const bomb = new Bomb(player1.x, player1.y, player1);
            bombList.push(bomb);
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

// fonction pour afficher le tableau en console.log
function afficherTab(tab) {
    // mettre le joueur dans le tableau
    tab[player1.x][player1.y] = "J";
    res = "";
    for (var i = 0; i < tab.length; i++) {
        for (var j = 0; j < tab[i].length; j++) {
            res += tab[i][j];
        }
        res += "\n";
    }
    console.log(res);
}
