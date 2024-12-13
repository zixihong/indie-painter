const gridContainer = document.querySelector('.grid-container');
let gridSize = 100;

let isQPressed = false;
let isWPressed = false;
let isEPressed = false;
let isAPressed = false;
let isSPressed = false;
let isDPressed = false;
let isZPressed = false;
let isXPressed = false;
let isCPressed = false;

document.addEventListener('keydown', function(e) {
    switch(e.key.toLowerCase()) {  
        case 'q': isQPressed = true; break;
        case 'w': isWPressed = true; break;
        case 'e': isEPressed = true; break;
        case 'a': isAPressed = true; break;
        case 's': isSPressed = true; break;
        case 'd': isDPressed = true; break;
        case 'z': isZPressed = true; break;
        case 'x': isXPressed = true; break;
        case 'c': isCPressed = true; break;
    }
});

document.addEventListener('keyup', function(e) {
    switch(e.key.toLowerCase()) {
        case 'q': isQPressed = false; break;
        case 'w': isWPressed = false; break;
        case 'e': isEPressed = false; break;
        case 'a': isAPressed = false; break;
        case 's': isSPressed = false; break;
        case 'd': isDPressed = false; break;
        case 'z': isZPressed = false; break;
        case 'x': isXPressed = false; break;
        case 'c': isCPressed = false; break;
    }
});

// scroll whell tracking
document.addEventListener('wheel', function(e){
    if (e.shiftKey){
        if (e.deltaY < 0) { 
            gridSize = Math.min(200, gridSize + 4);
        }
        else {
            gridSize = Math.max(4, gridSize - 4);
        }
        createGrid(gridSize);
    }
});

// reset the board
document.addEventListener('keypress', function(e) {
    if (e.key === 'r') {
        createGrid(gridSize);
    }
})



// helper func to randomize in the ranges
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get1() {
    return getRandomInt(170, 255);
}

function get2() {
    return getRandomInt(85, 170);
}

function get3() {
    return getRandomInt(0, 85);
}

function createGrid(size) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell')
        cell.addEventListener('mouseover', function(){

            if (isQPressed && isWPressed && isEPressed) {
                this.style.backgroundColor = `rgb(${get1()}, ${get1()}, ${get1()})`;
            } 
            else if (isQPressed && isWPressed && isDPressed) {
                this.style.backgroundColor = `rgb(${get1()}, ${get1()}, ${get2()})`;
            } 
            else if (isQPressed && isWPressed && isCPressed) {
                this.style.backgroundColor = `rgb(${get1()}, ${get1()}, ${get3()})`;
            } 
            else if (isQPressed && isSPressed && isEPressed) {
                this.style.backgroundColor = `rgb(${get1()}, ${get2()}, ${get1()})`;
            } 
            else if (isQPressed && isSPressed && isDPressed) {
                this.style.backgroundColor = `rgb(${get1()}, ${get2()}, ${get2()})`;
            } 
            else if (isQPressed && isSPressed && isCPressed) {
                this.style.backgroundColor = `rgb(${get1()}, ${get2()}, ${get3()})`;
            } 
            else if (isQPressed && isXPressed && isEPressed) {
                this.style.backgroundColor = `rgb(${get1()}, ${get3()}, ${get1()})`;
            } 
            else if (isQPressed && isXPressed && isDPressed) {
                this.style.backgroundColor = `rgb(${get1()}, ${get3()}, ${get2()})`;
            } 
            else if (isQPressed && isXPressed && isCPressed) {
                this.style.backgroundColor = `rgb(${get1()}, ${get3()}, ${get3()})`;
            }
            
            else if (isAPressed && isWPressed && isEPressed) {
                this.style.backgroundColor = `rgb(${get2()}, ${get1()}, ${get1()})`;
            } 
            else if (isAPressed && isWPressed && isDPressed) {
                this.style.backgroundColor = `rgb(${get2()}, ${get1()}, ${get2()})`;
            } 
            else if (isAPressed && isWPressed && isCPressed) {
                this.style.backgroundColor = `rgb(${get2()}, ${get1()}, ${get3()})`;
            } 
            else if (isAPressed && isSPressed && isEPressed) {
                this.style.backgroundColor = `rgb(${get2()}, ${get2()}, ${get1()})`;
            } 
            else if (isAPressed && isSPressed && isDPressed) {
                this.style.backgroundColor = `rgb(${get2()}, ${get2()}, ${get2()})`;
            } 
            else if (isAPressed && isSPressed && isCPressed) {
                this.style.backgroundColor = `rgb(${get2()}, ${get2()}, ${get3()})`;
            } 
            else if (isAPressed && isXPressed && isEPressed) {
                this.style.backgroundColor = `rgb(${get2()}, ${get3()}, ${get1()})`;
            } 
            else if (isAPressed && isXPressed && isDPressed) {
                this.style.backgroundColor = `rgb(${get2()}, ${get3()}, ${get2()})`;
            } 
            else if (isAPressed && isXPressed && isCPressed) {
                this.style.backgroundColor = `rgb(${get2()}, ${get3()}, ${get3()})`;
            }
            
            else if (isZPressed && isWPressed && isEPressed) {
                this.style.backgroundColor = `rgb(${get3()}, ${get1()}, ${get1()})`;
            } 
            else if (isZPressed && isWPressed && isDPressed) {
                this.style.backgroundColor = `rgb(${get3()}, ${get1()}, ${get2()})`;
            } 
            else if (isZPressed && isWPressed && isCPressed) {
                this.style.backgroundColor = `rgb(${get3()}, ${get1()}, ${get3()})`;
            } 
            else if (isZPressed && isSPressed && isEPressed) {
                this.style.backgroundColor = `rgb(${get3()}, ${get2()}, ${get1()})`;
            } 
            else if (isZPressed && isSPressed && isDPressed) {
                this.style.backgroundColor = `rgb(${get3()}, ${get2()}, ${get2()})`;
            } 
            else if (isZPressed && isSPressed && isCPressed) {
                this.style.backgroundColor = `rgb(${get3()}, ${get2()}, ${get3()})`;
            } 
            else if (isZPressed && isXPressed && isEPressed) {
                this.style.backgroundColor = `rgb(${get3()}, ${get3()}, ${get1()})`;
            } 
            else if (isZPressed && isXPressed && isDPressed) {
                this.style.backgroundColor = `rgb(${get3()}, ${get3()}, ${get2()})`;
            } 
            else if (isZPressed && isXPressed && isCPressed) {
                this.style.backgroundColor = `rgb(${get3()}, ${get3()}, ${get3()})`;
            }

            else if (isQPressed && isWPressed) {
                this.style.backgroundColor = `rgb(${get1()}, ${get1()}, 0)`;
            }
            else if (isQPressed && isSPressed) {
                this.style.backgroundColor = `rgb(${get1()}, ${get2()}, 0)`;
            }
            else if (isQPressed && isXPressed) {
                this.style.backgroundColor = `rgb(${get1()}, ${get3()}, 0)`;
            }
            else if (isAPressed && isWPressed) {
                this.style.backgroundColor = `rgb(${get2()}, ${get1()}, 0)`;
            }
            else if (isAPressed && isSPressed) {
                this.style.backgroundColor = `rgb(${get2()}, ${get2()}, 0)`;
            }
            else if (isAPressed && isXPressed) {
                this.style.backgroundColor = `rgb(${get2()}, ${get3()}, 0)`;
            }
            else if (isZPressed && isWPressed) {
                this.style.backgroundColor = `rgb(${get3()}, ${get1()}, 0)`;
            }
            else if (isZPressed && isSPressed) {
                this.style.backgroundColor = `rgb(${get3()}, ${get2()}, 0)`;
            }
            else if (isZPressed && isXPressed) {
                this.style.backgroundColor = `rgb(${get3()}, ${get3()}, 0)`;
            }
            
            else if (isQPressed && isEPressed) {
                this.style.backgroundColor = `rgb(${get1()}, 0, ${get1()})`;
            }
            else if (isQPressed && isDPressed) {
                this.style.backgroundColor = `rgb(${get1()}, 0, ${get2()})`;
            }
            else if (isQPressed && isCPressed) {
                this.style.backgroundColor = `rgb(${get1()}, 0, ${get3()})`;
            }
            else if (isAPressed && isEPressed) {
                this.style.backgroundColor = `rgb(${get2()}, 0, ${get1()})`;
            }
            else if (isAPressed && isDPressed) {
                this.style.backgroundColor = `rgb(${get2()}, 0, ${get2()})`;
            }
            else if (isAPressed && isCPressed) {
                this.style.backgroundColor = `rgb(${get2()}, 0, ${get3()})`;
            }
            else if (isZPressed && isEPressed) {
                this.style.backgroundColor = `rgb(${get3()}, 0, ${get1()})`;
            }
            else if (isZPressed && isDPressed) {
                this.style.backgroundColor = `rgb(${get3()}, 0, ${get2()})`;
            }
            else if (isZPressed && isCPressed) {
                this.style.backgroundColor = `rgb(${get3()}, 0, ${get3()})`;
            }
            
            else if (isWPressed && isEPressed) {
                this.style.backgroundColor = `rgb(0, ${get1()}, ${get1()})`;
            }
            else if (isWPressed && isDPressed) {
                this.style.backgroundColor = `rgb(0, ${get1()}, ${get2()})`;
            }
            else if (isWPressed && isCPressed) {
                this.style.backgroundColor = `rgb(0, ${get1()}, ${get3()})`;
            }
            else if (isSPressed && isEPressed) {
                this.style.backgroundColor = `rgb(0, ${get2()}, ${get1()})`;
            }
            else if (isSPressed && isDPressed) {
                this.style.backgroundColor = `rgb(0, ${get2()}, ${get2()})`;
            }
            else if (isSPressed && isCPressed) {
                this.style.backgroundColor = `rgb(0, ${get2()}, ${get3()})`;
            }
            else if (isXPressed && isEPressed) {
                this.style.backgroundColor = `rgb(0, ${get3()}, ${get1()})`;
            }
            else if (isXPressed && isDPressed) {
                this.style.backgroundColor = `rgb(0, ${get3()}, ${get2()})`;
            }
            else if (isXPressed && isCPressed) {
                this.style.backgroundColor = `rgb(0, ${get3()}, ${get3()})`;
            }

            else if (isQPressed) {
                this.style.backgroundColor = `rgb(${get1()}, 0, 0)`;
            }
            else if (isAPressed) {
                this.style.backgroundColor = `rgb(${get2()}, 0, 0)`;
            }
            else if (isZPressed) {
                this.style.backgroundColor = `rgb(${get3()}, 0, 0)`;
            }
            else if (isWPressed) {
                this.style.backgroundColor = `rgb(0, ${get1()}, 0)`;
            }
            else if (isSPressed) {
                this.style.backgroundColor = `rgb(0, ${get2()}, 0)`;
            }
            else if (isXPressed) {
                this.style.backgroundColor = `rgb(0, ${get3()}, 0)`;
            }
            else if (isEPressed) {
                this.style.backgroundColor = `rgb(0, 0, ${get1()})`;
            }
            else if (isDPressed) {
                this.style.backgroundColor = `rgb(0, 0, ${get2()})`;
            }
            else if (isCPressed) {
                this.style.backgroundColor = `rgb(0, 0, ${get3()})`;
            }
        });
        gridContainer.appendChild(cell);
    }
}

createGrid(gridSize);