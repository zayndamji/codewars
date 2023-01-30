// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
// 6 KYU

public class FindParityOutlier {
	static int find(int[] integers) {
		// Declaring integers
		int odd = 0, even = 0;
		int[] oddArr = new int[integers.length], evenArr = new int[integers.length];
    
		// For loop
		for (int i:integers) {
			// Checking if it is odd or even
			if (i % 2 == 0) {
				oddArr[odd] = i;
				odd++;
			}
			else {
				evenArr[even] = i;
				even++;
			}
		}
    
		// Returning the index of even/odd
		if (even < odd) return evenArr[0];
		if (odd < even) return oddArr[0];
    
		// Default case
		return 0;
	}
}