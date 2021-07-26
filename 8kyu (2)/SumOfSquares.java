public class SumOfSquares {
	public static int squareSum(int[] n) { 
		// Original problem at https://www.codewars.com/kata/515e271a311df0350d00000f
    
		// Declaring integer
		int count = 0;
    
		// For loop to add the nums
		for (int i = 0; i < n.length; i++) {
			count = count + (n[i] * n[i]);
		}
    
		// Returning it
		return count;
	}
}