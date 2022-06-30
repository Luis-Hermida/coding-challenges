import java.io.*;
import java.util.*;

class Solution {

  public static void main(String[] argh) {
    Scanner in = new Scanner(System.in);
    int t = in.nextInt();
    for (int i = 0; i < t; i++) {
      int a = in.nextInt();
      int b = in.nextInt();
      int n = in.nextInt();

      for (int nIndex = 0; nIndex < n; nIndex++) {
        a = a + (int) Math.pow(2, nIndex) * b;
        System.out.print(a + " ");
      }
      System.out.println();
    }
    in.close();
  }
}
