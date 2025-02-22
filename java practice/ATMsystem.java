import java.util.Scanner;

public class ATMsystem {
    private double balance;
    private String name;
    private String pin;

    public ATMsystem(double initialBalance, String userName, String userPin) {
        this.balance = initialBalance;
        this.name = userName;
        this.pin = userPin;
    }

    public boolean verifyPin(String enteredPin) {
        return this.pin.equals(enteredPin);
    }

    public void displayBalance() {
        System.out.println("Your current balance is: $" + this.balance);
    }

    public void deposit(double amount) {
        if(amount > 0) {
            this.balance += amount;
            System.out.println("$" + amount + " is successfully deposited!");
            displayBalance();
        } else {
            System.out.println("Invalid amount, enter a positive amount!!");
        }
    }

    public void changePin(String oldPin, String newPin) {
        if(this.pin.equals(oldPin)) {
            this.pin = newPin;
            System.out.println("Your pin is changed successfully!");
        } else {
            System.out.println("Invalid old pin!!");
        }
    }

    public void name() {
        System.out.println("This account holder's name is: " + this.name);
    }


    public void withdraw(double amount) {
        if(amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            System.out.println("$" + amount + " is successfully withdrawn!");
            displayBalance();
        } else {
            System.out.println("Invalid amount or (lol><) insufficient balance!");
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ATMsystem atm = new ATMsystem(1200, "Manish Choudhary", "3333");

        System.out.println("Enter your pin: ");
        int enteredPin = sc.nextInt();

        if(!atm.verifyPin(String.valueOf(enteredPin))) {
            System.out.println("Invalid pin, you're a theif and exiting!!");
            sc.close();
            return;
        }

        while(true) {

            System.out.println("\n ====== Welcome to Bankrupt ATM system ====== ");

            System.out.println("Choose an option:: ");
            System.out.println("1. Check Balance");
            System.out.println("2. Deposit Money");
            System.out.println("3. Withdraw Money");
            System.out.println("4. Change pin");
            System.out.println("5. View account holder's name");
            System.out.println("6. Exit");

            int option = sc.nextInt();
            
            switch(option) {
                case 1:
                    atm.displayBalance();
                    break;
                case 2:
                    System.out.println("Enter deposit amount: $");
                    double depositAmount = sc.nextDouble();
                    atm.deposit(depositAmount);
                    break;
                case 3:
                    System.out.println("Enter withdraw amount: $");
                    double withdrawAmount = sc.nextDouble();
                    atm.withdraw(withdrawAmount);
                    break;
                case 4:
                    System.out.println("Enter the old pin: ");
                    String oldPin = sc.next();
                    System.out.println("Enter the new pin: ");
                    String newPin = sc.next();
                    atm.changePin(oldPin, newPin);
                    System.out.println("Pin changed successfully!!");
                    break;
                case 5:
                    atm.name();
                    break;
                case 6:
                    System.out.println("Thank you for getting bankrupt Goodbye!");
                    sc.close();
                    return;
                default:
                    System.out.println("Invalid option, try again never!");
            }
        }
    }
}
