/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

const inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const ThorX = parseInt(inputs[2]); // Thor's starting X position
const ThorY = parseInt(inputs[3]); // Thor's starting Y position

let currentX = ThorX, currentY = ThorY;
// game loop
while (true) { 

    const E = +readline();
    let move = '';

    if (currentY > lightY && currentY > 0) {
        move += 'N';
        currentY--;
    } else if (currentY < lightY && currentY < 17) {
        move += 'S';
        currentY++;
    }
    if (currentX > lightX && currentY > 0) {
        move += 'W';
        currentX--;
    } else if (currentX < lightX && currentX < 39) {
        move += 'E';
        currentX++;
    }

    print(move);
    
}
