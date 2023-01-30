// https://www.codewars.com/kata/559e3224324a2b6e66000046
// 7 KYU

import java.math.BigInteger;

public class FunctionsOfIntegersOnCatesianPlane {
	public static BigInteger sumin(int n) {
		long val = 0;
		for (int a = 1; a <= n; a++) {
			for (int b = 1; b <= n; b++) {
				val = val + Math.min(a, b);
			}
		}
		return BigInteger.valueOf(val);
	}

	public static BigInteger sumax(int n) {
		long val = 0;
		for (int a = 1; a <= n; a++) {
			for (int b = 1; b <= n; b++) {
				val = val + Math.max(a, b);
			}
		}
		return BigInteger.valueOf(val);
	}

	public static BigInteger sumsum(int n) {
		return sumin(n).add(sumax(n));
	}
}