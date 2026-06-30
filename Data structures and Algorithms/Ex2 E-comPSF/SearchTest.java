import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {

    public static Product linearSearch(Product[] products, int productId) {
        for (Product product : products) {
            if (product.productId == productId) {
                return product;
            }
        }
        return null;
    }
    public static Product binarySearch(Product[] products, int productId) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (products[mid].productId == productId) {
                return products[mid];
            } else if (products[mid].productId < productId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(103, "Laptop", "Electronics"),
                new Product(101, "Mobile", "Electronics"),
                new Product(105, "Shoes", "Fashion"),
                new Product(102, "Watch", "Accessories"),
                new Product(104, "Book", "Education")
        };

        Product result1 = linearSearch(products, 102);

        if (result1 != null) {
            System.out.println("Linear Search Found: "
                    + result1.productName + " - "
                    + result1.category);
        } else {
            System.out.println("Product Not Found");
        }
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
        Product result2 = binarySearch(products, 102);

        if (result2 != null) {
            System.out.println("Binary Search Found: "
                    + result2.productName + " - "
                    + result2.category);
        } else {
            System.out.println("Product Not Found");
        }
    }
}