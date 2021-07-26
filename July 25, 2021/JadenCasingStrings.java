public class JadenCase {
	public String toJadenCase(String phrase) {
		// This program is written by zaydam1000000, original kata at https://www.codewars.com/kata/5390bac347d09b7da40006f6
    
    		// Check if it is null
    		if (phrase == null || phrase.length() == 0) return null;
    
    		// Trim all the spaces at the beginning and end
		phrase.trim();
    
    		// Making an array to split and declaring all the other variables
    		String arr[] = phrase.split(" "), newphrase = "";
    		char first, second;
    		int firstchar;
    
    		// For loop to make the first character of each word capitalized
    		for (int num = 0; num < arr.length; num++) {
      			first = arr[num].charAt(0);
      			firstchar = (int) first - 32;
      			second = (char) firstchar;
      			arr[num] = arr[num].replace(first, second);
      			newphrase = newphrase + arr[num] + " ";
    		}
    
    		// Trimming the last space
    		newphrase = newphrase.trim();
    
    		// Returning the phrase
		return newphrase;
	}
}