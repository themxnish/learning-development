import java.util.Scanner;

public class ECommerceCart {
    static String[] products = {"Mobile", "Laptop", "TV", "Headphones", "Keyboard", "Camera", "Mouse"};
    static int[] prices = {31999, 49999, 34999, 4999, 999, 14999, 1999};

    static String[] cart = new String[10];
    static int[] cartPrices = new int[10];
    static int cartSize = 0;

    static void viewProducts() {
        System.out.println("\nThese are the available products:");
        for (int i = 0; i < products.length; i++) {
            System.out.println((i + 1) + "# " + products[i] + " - $" + prices[i]);
        }
    }

    static void addToCart(Scanner sc) {
        viewProducts();
        System.out.println("Enter the product number: ");
        int productIndex = sc.nextInt();
        System.out.println("Enter the quantity: ");
        int quantity = sc.nextInt();

        if (productIndex > 0 && productIndex <= products.length && cartSize < cart.length) {
            cart[cartSize] = products[productIndex - 1];
            cartPrices[cartSize] = prices[productIndex - 1] * quantity; 
            cartSize++;
            System.out.println(products[productIndex - 1] + " added to cart successfully!");
        } else {
            System.out.println("Invalid product number or cart is full");
        }
    }

    static void viewCart() {
        if (cartSize == 0) {
            System.out.println("Cart is empty");
            return;
        }
        System.out.println("\nYour Cart Items:");
        int totalPrice = 0; 
        for (int i = 0; i < cartSize; i++) {
            System.out.println((i + 1) + ". " + cart[i] + " - $" + cartPrices[i]);
            totalPrice += cartPrices[i];
        }
        System.out.println("Your Grand Total: $" + totalPrice);
    }

    static void removeFromCart(Scanner sc) {
        viewCart();
        if (cartSize == 0) {
            System.out.println("Cart is empty");
            return;
        }
        System.out.println("Enter the product number to remove: ");
        int productIndex = sc.nextInt() - 1;

        if (productIndex >= 0 && productIndex < cartSize) {
            System.out.println(cart[productIndex] + " removed from cart successfully");

            for (int i = productIndex; i < cartSize - 1; i++) {
                cart[i] = cart[i + 1];
                cartPrices[i] = cartPrices[i + 1];
            }
            cartSize--;
        } else {
            System.out.println("Invalid product number");
        }
    }

    static void checkout(Scanner sc) {
        viewCart(); 
        sc.nextLine(); 
        System.out.println("Enter your name: ");
        String name = sc.nextLine();
        System.out.println("Enter your address: ");
        String address = sc.nextLine();

        int totalPrice = 0;
        for (int i = 0; i < cartSize; i++) {
            totalPrice += cartPrices[i];
        }

        System.out.println("\nThank you for your purchase!");
        System.out.println("Name: " + name);
        System.out.println("Address: " + address);
        System.out.println("Total Price: $" + totalPrice);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice;

        do {
            System.out.println("\n ====== Jesu ECommerce Cart System ====== ");
            System.out.println("1. View products");
            System.out.println("2. Add product to cart");
            System.out.println("3. View cart");
            System.out.println("4. Remove product from cart");
            System.out.println("5. Checkout");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    viewProducts();
                    break;
                case 2:
                    addToCart(sc);
                    break;
                case 3:
                    viewCart();
                    break;
                case 4:
                    removeFromCart(sc);
                    break;
                case 5:
                    checkout(sc);
                    break;
                case 6:
                    System.out.println("Thank you for using Jesu ECommerce Cart System");
                    break;
                default:
                    System.out.println("Invalid choice");
            }
        } while (choice != 6); 
        sc.close();
    }
}
