// https://www.codewars.com/kata/525f47c79f2f25a4db000025
// 6 KYU

public class ValidPhoneNumber {
  public static boolean validPhoneNumber(String phoneNumber) {
		// Simple check for length
		if (phoneNumber.length() != 14) return false;

		// Variables for organization
		boolean charsCorrect, numsAreInts;
		char dig1 = phoneNumber.charAt(1), dig2 = phoneNumber.charAt(2), dig3 = phoneNumber.charAt(3), dig4 = phoneNumber.charAt(6), dig5 = phoneNumber.charAt(7), dig6 = phoneNumber.charAt(8), dig7 = phoneNumber.charAt(10), dig8 = phoneNumber.charAt(11), dig9 = phoneNumber.charAt(12), dig10 = phoneNumber.charAt(13);
    
		// Initializing vars
		charsCorrect = phoneNumber.charAt(0) == '(' && phoneNumber.charAt(4) == ')' && phoneNumber.charAt(5) == ' ' && phoneNumber.charAt(9) == '-';
		numsAreInts = isDig(dig1) && isDig(dig2) && isDig(dig3) && isDig(dig4) && isDig(dig5) && isDig(dig6) && isDig(dig7) && isDig(dig8) && isDig(dig9) && isDig(dig10);
    
		// Returning whether it is a valid phone number
		return charsCorrect && numsAreInts;
	}
  
	// Defining a method to see if a char is a digit
	static boolean isDig(char dig) {
		return dig == '1' || dig == '2' || dig == '3' || dig == '4' || dig == '5' || dig == '6' || dig == '7' || dig == '8' || dig == '9' || dig == '0';
	}
}