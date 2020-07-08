//Objective is to see if four given coordinates create a square

let p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]


//O(1) solution that sorts the distances then returns if 3 sides and the two
//diagonals are equal

//The 6 possible distances
let distances = [dist(p1, p2), dist(p1, p3), dist(p1, p4), dist(p2, p3), dist(p2, p4), dist(p3, p4)]
    
function dist(point1, point2) {
    return Math.pow((point2[0] - point1[0]), 2) + Math.pow((point2[1] - point1[1]), 2)
}
    
//Sort the distances so sides come first, then diagonals
distances.sort((a,b) => {
    return a - b
})
    
//Check 3 sides and the two diagonals
return distances[0] &&
    distances[0] == distances[1] &&
    distances[0] == distances[2] &&
    distances[0] == distances[3] &&
    distances[4] == distances[5]