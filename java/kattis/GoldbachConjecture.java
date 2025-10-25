import java.util.*;

public class GoldbachConjecture {

    static boolean isPrime(int n){
      if(n < 2) return false;
      if(n == 2) return true;
      if(n % 2 == 0) return false;
      for(int i = 3; i * i <=n ; i+=2){
          if(n % i == 0) return false;
      }
      return true;
    }
// function to find all unique representations of n as a sum of two primes
    static List<int[]> goldbach(int n){
        List<int[]> pa tirs =  new ArrayList<>();
        for(int i = 2; i <= n / 2; i++){
            if(isPrime(i) && isPrime(n-i)){
                pairs.add(new )
            }
        }

    }
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
