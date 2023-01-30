// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
// 8 KYU

public class MultiplicationTable {
	public static String multiTable(int num) {
		// Declaring variables
		String returned = "";
		int multiplied;
      
		// Adding values to the string
		for (int min = 1; min <= 10; min++) {
			multiplied = min * num;
			returned = returned + "\n" + min + " * " + num + " = " + multiplied;
		}
      
		// Trimming and returning string
		returned = returned.trim();
		return returned;
	}
}