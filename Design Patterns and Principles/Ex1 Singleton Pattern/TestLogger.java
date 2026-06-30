public class TestLogger {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        logger1.log("First Message");

        Logger logger2 = Logger.getInstance();
        logger2.log("Second Message");

        System.out.println(logger1 == logger2);
    }
}