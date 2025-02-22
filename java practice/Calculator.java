import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("this is a calculator simulator." +
                "\n give an operator to perform any kind of calculation" +
                "\n to stop it enter x");

        int ans = 0;

        while(true){
            System.out.println("enter the operator : ");
            char op = sc.next().trim().charAt(0); //takes first character of the input

            if(op == '+' ||op == '-' ||op == '*' ||op == '/' ||op == '%' ){
                System.out.println("enter two numbers : ");

                int a = sc.nextInt();
                int b = sc.nextInt();

                if(op == '+'){
                    ans = a + b;
                }
                if(op == '-'){
                    ans = a - b;
                }
                if(op == '*'){
                    ans = a * b;
                }
                if(op == '/'){
                    if(b != 0){
                        ans = a / b;
                    }
                }
                if(op == '%'){
                    ans = a % b;
                }
            }
            else if(op == 'x' || op == 'X'){
                break;
            }
            else {
                System.out.println("invalid operation!!!!!");
            }
            System.out.println("result = " +ans);
        }
    }
}
