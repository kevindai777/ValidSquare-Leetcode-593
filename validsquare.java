//Java Solution

class Solution {
    public boolean validSquare(int[] p1, int[] p2, int[] p3, int[] p4) {
        int[] dists = {dist(p1, p2), dist(p1, p3), dist(p1, p4), dist(p2, p3), dist(p2, p4), dist(p3, p4)};
        Arrays.sort(dists);
        
        return dists[0] != 0 && 
            dists[0] == dists[1] && 
            dists[0] == dists[2] && 
            dists[0] == dists[3] && 
            dists[4] == dists[5];
    }
    
    public int dist(int[] p1, int[] p2) {
        return (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]);
    }
}