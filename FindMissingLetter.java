public class FindMissingLetter {
	public static char findMissingLetter(char[] array) {
		// This program is written by zaydam1000000
		int firstchar;
    
		// For loop to check if there is a missing character
		for (int num = 1; num < array.length; num++) {
			firstchar = (int) array[num];
			if ((char) firstchar - 1 != array[num - 1]) {
				firstchar = firstchar - 1;
				return (char) firstchar;
			}
		}
    
		// Default return case
    		return ' ';
  	}
}