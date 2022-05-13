let p = "rooke";
p = p.toLowerCase()

if (p === "king") {
    console.log('Kings move one square in any direction.');
} else if (p === "queen") {
    console.log('Queens move diagonally, horizontally, or vertically any number of squares.');
} else if (p === "rook") {
    console.log('Rooks move horizontally or vertically any number of squares.');
} else if (p === "bishop") {
    console.log('Bishops move diagonally any number of squares.');
} else if (p === "knights") {
    console.log('Knights move in an L shape: two squares in a horizontal or vertical direction, then move one square horizontally or vertically.');
} else if (p === "pawn") {
    console.log('Pawns move vertically forward one square, with the option to move two squares if they have not yet moved.');
} else {
    console.log('ERROR');
}