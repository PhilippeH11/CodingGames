/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/

// Tester les boucles en JS
// game loop
while (true) {
    let position =0;
    let max = 0;
    for (let i = 0; i < 8; i++) {
        let mountainH = +readline();
        if(mountainH >= max) {
            position = i;
            max = mountainH;
        }
    }
    print(position);
}
