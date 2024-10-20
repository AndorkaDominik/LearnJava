export const courseData = {
  preview: [
    {
      type: "header",
      level: 1,
      text: "Master Java: A Comprehensive Guide for Developers",
    },
    {
      type: "header",
      level: 2,
      text: "Course Overview",
    },
    {
      type: "point",
      text: "This course is designed for developers who want to master Java. You will explore the fundamentals of Java, dive into advanced concepts, and learn how to build robust applications using Java. The course will cover how to leverage Java's features in real-world applications, and best practices for Java development.",
    },
    {
      type: "header",
      level: 2,
      text: "Prerequisites",
    },
    {
      type: "point",
      text: "Basic to intermediate knowledge of programming concepts.",
    },
    {
      type: "point",
      text: "Familiarity with object-oriented programming principles.",
    },
  ],
  module1: [
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Module 1: Introduction to Java",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 1.1: What is Java?",
    },
    {
      type: "point",
      text: "Overview of Java: What it is and why it’s useful.",
    },
    {
      type: "example",
      code: `// Java Code
public class Greeting {
  public static void main(String[] args) {
    System.out.println("Hello, Java!");
  }
}`,
    },
    {
      type: "point",
      text: "Java is a versatile, high-level programming language that is used for developing a wide range of applications, from web and mobile apps to large-scale enterprise systems.",
    },
    {
      type: "point",
      text: "Java vs. Other Languages: Key differences.",
    },
    {
      type: "example",
      code: `// Java vs. JavaScript
// Java is statically typed, JavaScript is dynamically typed
int number = 42; // Java
let number = 42; // JavaScript

// Java uses classes and objects, JavaScript uses prototypes
public class Dog { // Java class
  String name;
  void bark() {
    System.out.println("Woof!");
  }
}

let dog = { // JavaScript object
  name: "Buddy",
  bark() {
    console.log("Woof!");
  }
};
`,
    },
    {
      type: "point",
      text: "Java has a strong emphasis on object-oriented programming (OOP), which allows for code reuse, modularity, and maintainability.",
    },
    {
      type: "point",
      text: "Setting up a Java development environment.",
    },
    {
      type: "example",
      code: `// Install Java Development Kit (JDK)
sudo apt-get install openjdk-11-jdk

// Compile a Java program
javac HelloWorld.java

// Run the compiled Java program
java HelloWorld

// Alternatively, use an Integrated Development Environment (IDE) like IntelliJ IDEA or Eclipse for a more user-friendly development experience.`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 1.2: Java Basics",
    },
    {
      type: "point",
      text: "Basic data types: int, double, char, boolean, and String.",
    },
    {
      type: "example",
      code: `// Declaring variables of different data types
int age = 30; // Integer
double price = 19.99; // Floating-point number
char grade = 'A'; // Character
boolean isJavaFun = true; // Boolean
String greeting = "Hello, World!"; // String

// Displaying variables
System.out.println("Age: " + age);
System.out.println("Price: " + price);
System.out.println("Grade: " + grade);
System.out.println("Is Java Fun? " + isJavaFun);
System.out.println(greeting);`,
    },
    {
      type: "point",
      text: "Control flow: if, switch, for, while, and do-while.",
    },
    {
      type: "example",
      code: `// If statement
if (age > 18) {
  System.out.println("Adult");
} else {
  System.out.println("Minor");
}

// Switch statement
switch (grade) {
  case 'A':
    System.out.println("Excellent");
    break;
  case 'B':
    System.out.println("Good");
    break;
  default:
    System.out.println("Needs Improvement");
    break;
}

// For loop
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}

// While loop
int count = 0;
while (count < 5) {
  System.out.println(count);
  count++;
}

// Do-while loop
int num = 0;
do {
  System.out.println(num);
  num++;
} while (num < 5);`,
    },
    {
      type: "point",
      text: "Defining and using methods.",
    },
    {
      type: "example",
      code: `public class Calculator {
  // Method to add two numbers
  public int add(int a, int b) {
    return a + b;
  }

  // Method to subtract two numbers
  public int subtract(int a, int b) {
    return a - b;
  }

  public static void main(String[] args) {
    Calculator calc = new Calculator();
    int sum = calc.add(5, 3);
    int difference = calc.subtract(10, 4);
    System.out.println("Sum: " + sum);
    System.out.println("Difference: " + difference);
  }
}`,
    },
    {
      type: "point",
      text: "Understanding classes and objects.",
    },
    {
      type: "example",
      code: `public class Person {
  // Instance variables
  String name;
  int age;

  // Constructor
  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  // Method to introduce the person
  public void introduce() {
    System.out.println("Hi, I'm " + name + " and I'm " + age + " years old.");
  }

  public static void main(String[] args) {
    Person person1 = new Person("Alice", 30);
    Person person2 = new Person("Bob", 25);
    person1.introduce();
    person2.introduce();
  }
}`,
    },
    {
      type: "point",
      text: "Creating and using constructors to initialize objects.",
    },
    {
      type: "example",
      code: `public class Car {
  // Instance variables
  String model;
  int year;

  // Constructor to initialize the car
  public Car(String model, int year) {
    this.model = model;
    this.year = year;
  }

  // Method to display car details
  public void displayDetails() {
    System.out.println("Model: " + model + ", Year: " + year);
  }

  public static void main(String[] args) {
    Car car1 = new Car("Toyota Corolla", 2020);
    Car car2 = new Car("Honda Civic", 2021);
    car1.displayDetails();
    car2.displayDetails();
  }
}`,
    },
    {
      type: "point",
      text: "Exploring access modifiers: public, private, and protected.",
    },
    {
      type: "example",
      code: `public class AccessModifiers {
  public String publicVar = "I'm public";
  private String privateVar = "I'm private";
  protected String protectedVar = "I'm protected";

  public void displayAccess() {
    System.out.println(publicVar);
    System.out.println(privateVar);
    System.out.println(protectedVar);
  }

  public static void main(String[] args) {
    AccessModifiers obj = new AccessModifiers();
    obj.displayAccess();
    System.out.println("Public: " + obj.publicVar);
    // The following line would cause an error if uncommented
    // System.out.println("Private: " + obj.privateVar);
  }
}`,
    },
  ],
  module2: [
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Module 2: Java Syntax and Conventions",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 2.1: Java Syntax Rules",
    },
    {
      type: "point",
      text: "Basic syntax rules and conventions for writing Java code.",
    },
    {
      type: "example",
      code: `// Java syntax example
public class SyntaxExample {
  public static void main(String[] args) {
    // This is a comment
    int number = 10; // Variable declaration and initialization
    System.out.println("Number: " + number);
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 2.2: Naming Conventions",
    },
    {
      type: "point",
      text: "Conventions for naming classes, methods, and variables in Java.",
    },
    {
      type: "example",
      code: `// Naming conventions
public class MyFirstClass { // Class name in PascalCase
  private int myVariable; // Variable name in camelCase

  public void myMethod() { // Method name in camelCase
    // Method body
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 2.3: Indentation and Code Structure",
    },
    {
      type: "point",
      text: "Proper indentation practices and code structure for readability.",
    },
    {
      type: "example",
      code: `// Indentation example
public class IndentationExample {
  public static void main(String[] args) {
    int x = 10;
    if (x > 5) {
      System.out.println("x is greater than 5");
    } else {
      System.out.println("x is 5 or less");
    }
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 2.4: Commenting Code",
    },
    {
      type: "point",
      text: "Best practices for commenting code: single-line, multi-line, and Javadoc comments.",
    },
    {
      type: "example",
      code: `// Single-line comment
/*
  Multi-line comment
*/

/**
 * This is a Javadoc comment.
 * It describes the functionality of the class or method.
 */
public class CommentExample {
  public static void main(String[] args) {
    // This is a single-line comment explaining the next line
    System.out.println("Hello, World!");
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 2.5: Common Coding Standards",
    },
    {
      type: "point",
      text: "Understanding common coding standards like spacing, line length, and braces placement.",
    },
    {
      type: "example",
      code: `// Common coding standards
public class CodingStandards {
  public static void main(String[] args) {
    int number = 5; // One space between variable type and name
    if (number > 0) {
      System.out.println("Positive number"); // Opening brace on the same line
    } else {
      System.out.println("Non-positive number");
    }
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 2.6: Java Keywords",
    },
    {
      type: "point",
      text: "Overview of Java keywords and their usage.",
    },
    {
      type: "example",
      code: `// Java keywords example
public class KeywordExample {
  private int number; // 'private' is a keyword

  public KeywordExample(int number) { // 'public' and 'int' are keywords
    this.number = number; // 'this' is a keyword
  }

  public int getNumber() {
    return number;
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 2.7: Constants and Final Variables",
    },
    {
      type: "point",
      text: "Defining constants using the 'final' keyword and naming them in uppercase.",
    },
    {
      type: "example",
      code: `// Constants example
public class ConstantsExample {
  public static final int MAX_HEIGHT = 100; // Constant value

  public static void main(String[] args) {
    System.out.println("Max Height: " + MAX_HEIGHT);
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 2.8: Code Blocks and Scoping",
    },
    {
      type: "point",
      text: "Understanding code blocks, local and global scope, and variable lifetimes.",
    },
    {
      type: "example",
      code: `// Code blocks and scoping example
public class ScopingExample {
  public static void main(String[] args) {
    int outerVar = 10; // Variable with global scope within main

    {
      int innerVar = 20; // Variable with local scope within this block
      System.out.println("Inner Variable: " + innerVar);
    }

    // innerVar is not accessible here
    System.out.println("Outer Variable: " + outerVar);
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 2.9: Special Characters and Escape Sequences",
    },
    {
      type: "point",
      text: "Using special characters and escape sequences in strings.",
    },
    {
      type: "example",
      code: `// Special characters and escape sequences
public class EscapeSequenceExample {
  public static void main(String[] args) {
    System.out.println("This is a newline character: \\n");
    System.out.println("This is a tab character: \\t");
    System.out.println("This is a backslash: \\\\");
    System.out.println("This is a double quote: \\\"");
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 2.10: Primitive Data Types and Default Values",
    },
    {
      type: "point",
      text: "Overview of Java's primitive data types and their default values.",
    },
    {
      type: "example",
      code: `// Primitive data types example
public class PrimitiveExample {
  byte byteValue; // Default value: 0
  short shortValue; // Default value: 0
  int intValue; // Default value: 0
  long longValue; // Default value: 0L
  float floatValue; // Default value: 0.0f
  double doubleValue; // Default value: 0.0d
  char charValue; // Default value: '\\u0000'
  boolean booleanValue; // Default value: false

  public void printDefaults() {
    System.out.println("byte: " + byteValue);
    System.out.println("short: " + shortValue);
    System.out.println("int: " + intValue);
    System.out.println("long: " + longValue);
    System.out.println("float: " + floatValue);
    System.out.println("double: " + doubleValue);
    System.out.println("char: " + charValue);
    System.out.println("boolean: " + booleanValue);
  }

  public static void main(String[] args) {
    PrimitiveExample example = new PrimitiveExample();
    example.printDefaults();
  }
}`,
    },
  ],
  module3: [
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Module 3: Object-Oriented Programming in Java",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 3.1: Classes and Objects",
    },
    {
      type: "point",
      text: "Defining classes and creating objects in Java.",
    },
    {
      type: "example",
      code: `// Class definition
public class Car {
  // Fields (attributes)
  String model;
  int year;

  // Constructor
  public Car(String model, int year) {
    this.model = model;
    this.year = year;
  }

  // Method to display car details
  public void displayInfo() {
    System.out.println("Model: " + model + ", Year: " + year);
  }
}

// Creating and using an object
public class Main {
  public static void main(String[] args) {
    Car myCar = new Car("Toyota", 2021);
    myCar.displayInfo(); // Output: Model: Toyota, Year: 2021
  }
}`,
    },
    {
      type: "point",
      text: "Constructor methods and overloading.",
    },
    {
      type: "example",
      code: `public class Rectangle {
  int width;
  int height;

  // Constructor with width and height
  public Rectangle(int width, int height) {
    this.width = width;
    this.height = height;
  }

  // Overloaded constructor with a single side
  public Rectangle(int side) {
    this.width = side;
    this.height = side;
  }

  // Method to calculate area
  public int area() {
    return width * height;
  }

  public static void main(String[] args) {
    Rectangle rect1 = new Rectangle(10, 5);
    Rectangle square = new Rectangle(6);
    System.out.println("Rectangle area: " + rect1.area()); // Output: Rectangle area: 50
    System.out.println("Square area: " + square.area()); // Output: Square area: 36
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 3.2: Inheritance and Polymorphism",
    },
    {
      type: "point",
      text: "Understanding inheritance and polymorphism in Java.",
    },
    {
      type: "example",
      code: `// Base class
public class Animal {
  public void makeSound() {
    System.out.println("Some sound");
  }
}

// Derived class
public class Dog extends Animal {
  @Override
  public void makeSound() {
    System.out.println("Bark");
  }
}

// Using polymorphism
public class Main {
  public static void main(String[] args) {
    Animal myDog = new Dog();
    myDog.makeSound(); // Output: Bark

    // Upcasting example
    Dog realDog = (Dog) myDog;
    realDog.makeSound(); // Output: Bark
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 3.3: Interfaces and Abstract Classes",
    },
    {
      type: "point",
      text: "Differences between interfaces and abstract classes, and their usage.",
    },
    {
      type: "example",
      code: `// Interface definition
interface Shape {
  double area();
}

// Abstract class definition
abstract class ShapeBase {
  abstract double area();
  // Common method
  public void display() {
    System.out.println("Area: " + area());
  }
}

// Concrete class implementing interface
public class Circle implements Shape {
  double radius;

  public Circle(double radius) {
    this.radius = radius;
  }

  @Override
  public double area() {
    return Math.PI * radius * radius;
  }

  public static void main(String[] args) {
    Circle circle = new Circle(5.0);
    System.out.println("Area: " + circle.area()); // Output: Area: 78.53981633974483
  }
}

// Concrete class extending abstract class
public class Rectangle extends ShapeBase {
  double width;
  double height;

  public Rectangle(double width, double height) {
    this.width = width;
    this.height = height;
  }

  @Override
  public double area() {
    return width * height;
  }

  public static void main(String[] args) {
    Rectangle rectangle = new Rectangle(4.0, 6.0);
    rectangle.display(); // Output: Area: 24.0
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 3.4: Encapsulation",
    },
    {
      type: "point",
      text: "Protecting data through access control (public, private, protected).",
    },
    {
      type: "example",
      code: `public class BankAccount {
  private double balance;

  // Constructor
  public BankAccount(double initialBalance) {
    this.balance = initialBalance;
  }

  // Method to deposit money
  public void deposit(double amount) {
    if (amount > 0) {
      balance += amount;
    }
  }

  // Method to withdraw money
  public void withdraw(double amount) {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
    }
  }

  // Method to get the balance
  public double getBalance() {
    return balance;
  }

  public static void main(String[] args) {
    BankAccount account = new BankAccount(1000);
    account.deposit(500);
    account.withdraw(200);
    System.out.println("Balance: " + account.getBalance()); // Output: Balance: 1300.0
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 3.5: Composition and Aggregation",
    },
    {
      type: "point",
      text: "Understanding the concepts of composition and aggregation in object-oriented design.",
    },
    {
      type: "example",
      code: `// Class representing an Engine
public class Engine {
  String type;

  public Engine(String type) {
    this.type = type;
  }
}

// Class representing a Car that uses Composition
public class Car {
  private Engine engine; // Car "has-a" Engine

  public Car(Engine engine) {
    this.engine = engine;
  }

  public void displayEngine() {
    System.out.println("Engine type: " + engine.type);
  }

  public static void main(String[] args) {
    Engine myEngine = new Engine("V8");
    Car myCar = new Car(myEngine);
    myCar.displayEngine(); // Output: Engine type: V8
  }
}

// Class representing a Team
public class Team {
  String name;

  public Team(String name) {
    this.name = name;
  }
}

// Class representing a Sports League that uses Aggregation
import java.util.ArrayList;
import java.util.List;

public class SportsLeague {
  private List<Team> teams; // League "has-a" list of Teams

  public SportsLeague() {
    teams = new ArrayList<>();
  }

  public void addTeam(Team team) {
    teams.add(team);
  }

  public void displayTeams() {
    for (Team team : teams) {
      System.out.println("Team: " + team.name);
    }
  }

  public static void main(String[] args) {
    SportsLeague league = new SportsLeague();
    league.addTeam(new Team("Team A"));
    league.addTeam(new Team("Team B"));
    league.displayTeams(); // Output: Team: Team A, Team: Team B
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 3.6: Method Overriding vs Method Overloading",
    },
    {
      type: "point",
      text: "Differences between method overriding and method overloading in Java.",
    },
    {
      type: "example",
      code: `// Method Overloading: Same method name, different parameters
public class MathOperations {
  public int add(int a, int b) {
    return a + b;
  }

  public double add(double a, double b) {
    return a + b;
  }

  public static void main(String[] args) {
    MathOperations math = new MathOperations();
    System.out.println(math.add(5, 10)); // Output: 15
    System.out.println(math.add(5.5, 10.5)); // Output: 16.0
  }
}

// Method Overriding: Subclass redefines a method from the superclass
class Animal {
  public void sound() {
    System.out.println("Animal makes a sound");
  }
}

class Cat extends Animal {
  @Override
  public void sound() {
    System.out.println("Cat meows");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal myAnimal = new Cat();
    myAnimal.sound(); // Output: Cat meows
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 3.7: Static vs Instance Members",
    },
    {
      type: "point",
      text: "Understanding the difference between static and instance members in Java.",
    },
    {
      type: "example",
      code: `public class Counter {
  static int count = 0; // static member
  int instanceCount = 0; // instance member

  public Counter() {
    count++;
    instanceCount++;
  }

  public static void main(String[] args) {
    Counter c1 = new Counter();
    Counter c2 = new Counter();
    Counter c3 = new Counter();

    System.out.println("Total objects created: " + Counter.count); // Output: Total objects created: 3
    System.out.println("Instance count for c1: " + c1.instanceCount); // Output: Instance count for c1: 1
    System.out.println("Instance count for c2: " + c2.instanceCount); // Output: Instance count for c2: 1
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 3.8: Final Keyword in Java",
    },
    {
      type: "point",
      text: "Using the final keyword with classes, methods, and variables.",
    },
    {
      type: "example",
      code: `// Final variable
public class FinalExample {
  final int MAX_VALUE = 100;

  public void showValue() {
    System.out.println("Max value: " + MAX_VALUE);
  }

  public static void main(String[] args) {
    FinalExample example = new FinalExample();
    example.showValue(); // Output: Max value: 100
  }
}

// Final method
class Vehicle {
  public final void start() {
    System.out.println("Vehicle is starting");
  }
}

class Car extends Vehicle {
  // Cannot override the start method because it is final
  // public void start() {
  //   System.out.println("Car is starting");
  // }
}

// Final class
final class Utility {
  public static void printMessage() {
    System.out.println("Utility class");
  }
}

// Cannot extend the Utility class because it is final
// class AdvancedUtility extends Utility {
// }

public class Main {
  public static void main(String[] args) {
    Utility.printMessage(); // Output: Utility class
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 3.9: Exception Handling",
    },
    {
      type: "point",
      text: "Basics of exception handling: try, catch, and finally blocks.",
    },
    {
      type: "example",
      code: `public class ExceptionHandling {
  public static void main(String[] args) {
    try {
      int result = 10 / 0; // This will throw an ArithmeticException
      System.out.println("Result: " + result);
    } catch (ArithmeticException e) {
      System.out.println("Error: Cannot divide by zero");
    } finally {
      System.out.println("This block is always executed");
    }
  }
}`,
    },
    {
      type: "point",
      text: "Creating custom exceptions.",
    },
    {
      type: "example",
      code: `// Custom exception class
class InsufficientFundsException extends Exception {
  public InsufficientFundsException(String message) {
    super(message);
  }
}

// Bank account class with custom exception
public class BankAccount {
  private double balance;

  public BankAccount(double balance) {
    this.balance = balance;
  }

  public void withdraw(double amount) throws InsufficientFundsException {
    if (amount > balance) {
      throw new InsufficientFundsException("Insufficient funds in your account");
    }
    balance -= amount;
  }

  public double getBalance() {
    return balance;
  }

  public static void main(String[] args) {
    BankAccount account = new BankAccount(1000);
    try {
      account.withdraw(1500); // This will throw InsufficientFundsException
    } catch (InsufficientFundsException e) {
      System.out.println("Exception: " + e.getMessage());
    }
  }
}`,
    },
  ],
  module4: [
      {
        type: 'margin'
      },
      {
        type: "header",
        level: 2,
        text: "Module 4: Data Structures in Java",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 4.1: Arrays",
      },
      {
        type: "point",
        text: "Creating and using arrays in Java.",
      },
      {
        type: "example",
        code: `// Array example
  public class ArrayExample {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5}; // Array declaration and initialization
      for (int number : numbers) {
        System.out.println(number);
      }
    }
  }`,
      },
      {
        type: "point",
        text: "Multi-dimensional arrays.",
      },
      {
        type: "example",
        code: `// Multi-dimensional array example
  public class MultiArrayExample {
    public static void main(String[] args) {
      int[][] matrix = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
      };

      for (int i = 0; i < matrix.length; i++) {
        for (int j = 0; j < matrix[i].length; j++) {
          System.out.print(matrix[i][j] + " ");
        }
        System.out.println();
      }
    }
  }`,
      },
      {
        type: "point",
        text: "Common array operations (sorting, searching).",
      },
      {
        type: "example",
        code: `import java.util.Arrays;

  public class ArrayOperations {
    public static void main(String[] args) {
      int[] numbers = {5, 3, 8, 1, 2};
      
      // Sorting array
      Arrays.sort(numbers);
      System.out.println("Sorted array: " + Arrays.toString(numbers)); // Output: [1, 2, 3, 5, 8]

      // Searching in array
      int index = Arrays.binarySearch(numbers, 3);
      System.out.println("Index of 3: " + index); // Output: Index of 3: 2
    }
  }`,
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 4.2: ArrayLists",
      },
      {
        type: "point",
        text: "Using ArrayLists for dynamic arrays in Java.",
      },
      {
        type: "example",
        code: `// ArrayList example
  import java.util.ArrayList;

  public class ArrayListExample {
    public static void main(String[] args) {
      ArrayList<String> list = new ArrayList<>();
      list.add("Apple");
      list.add("Banana");
      list.add("Cherry");

      for (String fruit : list) {
        System.out.println(fruit);
      }
    }
  }`,
      },
      {
        type: "point",
        text: "Common operations on ArrayLists (adding, removing, searching).",
      },
      {
        type: "example",
        code: `import java.util.ArrayList;

  public class ArrayListOperations {
    public static void main(String[] args) {
      ArrayList<String> list = new ArrayList<>();
      list.add("Apple");
      list.add("Banana");
      list.add("Cherry");

      // Removing an element
      list.remove("Banana");
      System.out.println("List after removal: " + list); // Output: [Apple, Cherry]

      // Searching for an element
      boolean hasApple = list.contains("Apple");
      System.out.println("Contains Apple: " + hasApple); // Output: Contains Apple: true
    }
  }`,
      },
      {
        type: "point",
        text: "ArrayList vs Array: When to use which?",
      },
      {
        type: "text",
        text: `Arrays are of fixed size, meaning once created, their size cannot be changed. They are more efficient in terms of memory and performance, especially when the size of the data structure is known in advance. On the other hand, ArrayLists are dynamic and can grow or shrink as needed, making them more flexible but slightly less performant due to the overhead of resizing the underlying array. Use Arrays when dealing with a fixed number of elements and ArrayLists when the number of elements can change over time.`,
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 4.3: LinkedLists",
      },
      {
        type: "point",
        text: "Understanding LinkedLists and their usage in Java.",
      },
      {
        type: "example",
        code: `// LinkedList example
  import java.util.LinkedList;

  public class LinkedListExample {
    public static void main(String[] args) {
      LinkedList<String> list = new LinkedList<>();
      list.add("Red");
      list.add("Green");
      list.add("Blue");

      for (String color : list) {
        System.out.println(color);
      }
    }
  }`,
      },
      {
        type: "point",
        text: "Comparing LinkedList with ArrayList.",
      },
      {
        type: "text",
        text: `LinkedLists are better suited for scenarios where frequent insertion and deletion of elements are required, as they can be done in constant time O(1). However, they have a higher memory overhead due to the need for storing references to the next and previous elements. On the other hand, ArrayLists offer faster access time O(1) for getting elements by index but have slower performance for insertion and deletion operations, especially in the middle of the list, since elements need to be shifted.`,
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 4.4: HashMaps",
      },
      {
        type: "point",
        text: "Using HashMaps to store key-value pairs in Java.",
      },
      {
        type: "example",
        code: `// HashMap example
  import java.util.HashMap;

  public class HashMapExample {
    public static void main(String[] args) {
      HashMap<String, Integer> map = new HashMap<>();
      map.put("Alice", 25);
      map.put("Bob", 30);
      map.put("Charlie", 35);

      // Accessing value by key
      System.out.println("Alice's age: " + map.get("Alice")); // Output: Alice's age: 25

      // Iterating over keys and values
      for (String name : map.keySet()) {
        System.out.println(name + ": " + map.get(name));
      }
    }
  }`,
      },
      {
        type: "point",
        text: "Handling collisions in HashMaps.",
      },
      {
        type: "text",
        text: `In a HashMap, collisions occur when multiple keys hash to the same index. Java handles collisions by storing multiple key-value pairs in a linked list at the same bucket (index). In the case of many collisions, this can degrade the performance of the HashMap from O(1) to O(n). Java 8 introduced a change where, after a threshold, the list at each bucket is replaced with a balanced tree, improving the worst-case performance to O(log n).`,
      },
      {
        type: "point",
        text: "Using LinkedHashMap for ordered key-value pairs.",
      },
      {
        type: "example",
        code: `// LinkedHashMap example
  import java.util.LinkedHashMap;

  public class LinkedHashMapExample {
    public static void main(String[] args) {
      LinkedHashMap<String, Integer> map = new LinkedHashMap<>();
      map.put("Apple", 1);
      map.put("Banana", 2);
      map.put("Cherry", 3);

      // Maintaining insertion order
      for (String key : map.keySet()) {
        System.out.println(key + ": " + map.get(key));
      }
    }
  }`,
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 4.5: Stacks and Queues",
      },
      {
        type: "point",
        text: "Understanding the Stack data structure and its usage in Java.",
      },
      {
        type: "example",
        code: `// Stack example
  import java.util.Stack;

  public class StackExample {
    public static void main(String[] args) {
      Stack<String> stack = new Stack<>();
      stack.push("First");
      stack.push("Second");
      stack.push("Third");

      // Popping elements from the stack
      while (!stack.isEmpty()) {
        System.out.println(stack.pop());
      }
    }
  }`,
      },
      {
        type: "point",
        text: "Understanding the Queue data structure and its usage in Java.",
      },
      {
        type: "example",
        code: `// Queue example
  import java.util.LinkedList;
  import java.util.Queue;

  public class QueueExample {
    public static void main(String[] args) {
      Queue<String> queue = new LinkedList<>();
      queue.add("First");
      queue.add("Second");
      queue.add("Third");

      // Polling elements from the queue
      while (!queue.isEmpty()) {
        System.out.println(queue.poll());
      }
    }
  }`,
      },
      {
        type: "point",
        text: "Deque as a double-ended queue.",
      },
      {
        type: "example",
        code: `// Deque example
  import java.util.ArrayDeque;
  import java.util.Deque;

  public class DequeExample {
    public static void main(String[] args) {
      Deque<String> deque = new ArrayDeque<>();
      
      // Adding elements to both ends
      deque.addFirst("First");
      deque.addLast("Second");
      deque.addLast("Third");
      
      // Removing elements from both ends
      System.out.println("Removed from front: " + deque.removeFirst());
      System.out.println("Removed from end: " + deque.removeLast());
      
      // Displaying remaining elements
      System.out.println("Remaining elements: " + deque);
    }
  }`,
      },
      {
        type: "point",
        text: "Choosing between Stack, Queue, and Deque based on use cases.",
      },
      {
        type: "text",
        text: `- **Stack**: A last-in, first-out (LIFO) data structure. Use when you need to keep track of data in a reverse order, like in undo functionality.
  - **Queue**: A first-in, first-out (FIFO) data structure. Use when you need to process elements in the order they were added, such as task scheduling.
  - **Deque**: A double-ended queue that allows insertion and removal from both ends. Use when you need flexibility to add and remove elements from either end efficiently, like in a sliding window algorithm.`,
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 4.6: Trees and Graphs",
      },
      {
        type: "point",
        text: "Introduction to Tree data structures.",
      },
      {
        type: "example",
        code: `// Basic Tree Node example
  public class TreeNode {
    int value;
    TreeNode left;
    TreeNode right;

    public TreeNode(int value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    public static void main(String[] args) {
      TreeNode root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);

      System.out.println("Root value: " + root.value); // Output: Root value: 1
      System.out.println("Left child value: " + root.left.value); // Output: Left child value: 2
      System.out.println("Right child value: " + root.right.value); // Output: Right child value: 3
    }
  }`,
      },
      {
        type: "point",
        text: "Introduction to Graph data structures.",
      },
      {
        type: "example",
        code: `// Basic Graph example using adjacency list
  import java.util.ArrayList;
  import java.util.List;

  public class GraphExample {
    private List<List<Integer>> adjList;

    public GraphExample(int vertices) {
      adjList = new ArrayList<>();
      for (int i = 0; i < vertices; i++) {
        adjList.add(new ArrayList<>());
      }
    }

    public void addEdge(int v, int w) {
      adjList.get(v).add(w);
      adjList.get(w).add(v); // For undirected graph
    }

    public void printGraph() {
      for (int i = 0; i < adjList.size(); i++) {
        System.out.print("Vertex " + i + ": ");
        for (Integer edge : adjList.get(i)) {
          System.out.print(edge + " ");
        }
        System.out.println();
      }
    }

    public static void main(String[] args) {
      GraphExample graph = new GraphExample(5);
      graph.addEdge(0, 1);
      graph.addEdge(0, 4);
      graph.addEdge(1, 2);
      graph.addEdge(1, 3);
      graph.addEdge(2, 4);

      graph.printGraph();
    }
  }`,
      },
  ],
  module5: [
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Module 5: Basic Input and Output",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 5.1: Reading User Input",
    },
    {
      type: "point",
      text: "Using Scanner for user input.",
    },
    {
      type: "example",
      code: `import java.util.Scanner;

public class InputExample {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter your name: ");
    String name = scanner.nextLine();
    System.out.println("Hello, " + name + "!");
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 5.2: Writing Output",
    },
    {
      type: "point",
      text: "Using System.out.println for output.",
    },
    {
      type: "example",
      code: `// Output example
public class OutputExample {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
    System.out.printf("Formatted output: %d%n", 42);
  }
}`,
    },
  ],
  module6: [
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Module 6: Debugging and Error Handling",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 6.1: Debugging Techniques",
    },
    {
      type: "point",
      text: "Using print statements and debugging tools.",
    },
    {
      type: "example",
      code: `// Debugging example with enhanced logging
import java.util.logging.Level;
import java.util.logging.Logger;

public class DebuggingExample {
  private static final Logger logger = Logger.getLogger(DebuggingExample.class.getName());

  public static void main(String[] args) {
    int result = calculateSum(5, 7);
    logger.log(Level.INFO, "Result: {0}", result);
  }

  public static int calculateSum(int a, int b) {
    int sum = a + b;
    logger.log(Level.INFO, "Debug: sum = {0}", sum); // Debug statement using Logger
    return sum;
  }
}`,
    },
    {
      type: "point",
      text: "Using IDE Debugger Features.",
    },
    {
      type: "text",
      text: `- **Breakpoints**: Pause execution at specific lines to inspect variables and control flow.
- **Step Over/Into/Out**: Navigate through the code line by line or enter/exit methods.
- **Variable Watches**: Monitor variable values in real-time.
- **Call Stack**: View the sequence of method calls leading to the current execution point.`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 6.2: Exception Handling Best Practices",
    },
    {
      type: "point",
      text: "Best practices for handling exceptions.",
    },
    {
      type: "example",
      code: `// Improved exception handling example
public class ImprovedExceptionHandlingExample {
  public static void main(String[] args) {
    try {
      performDivision(10, 0);
    } catch (ArithmeticException e) {
      System.out.println("Error: Division by zero. Details: " + e.getMessage());
    } catch (Exception e) {
      System.out.println("An unexpected error occurred: " + e.getMessage());
    } finally {
      System.out.println("Execution completed.");
    }
  }

  public static void performDivision(int a, int b) {
    if (b == 0) {
      throw new ArithmeticException("Cannot divide by zero");
    }
    System.out.println("Result: " + (a / b));
  }
}`,
    },
    {
      type: "point",
      text: "Creating Custom Exceptions.",
    },
    {
      type: "example",
      code: `// Custom exception example
public class CustomExceptionExample {
  public static void main(String[] args) {
    try {
      checkAge(15);
    } catch (AgeException e) {
      System.out.println("Caught custom exception: " + e.getMessage());
    }
  }

  public static void checkAge(int age) throws AgeException {
    if (age < 18) {
      throw new AgeException("Age must be 18 or older.");
    }
    System.out.println("Age is valid.");
  }
}

// Custom exception class
class AgeException extends Exception {
  public AgeException(String message) {
    super(message);
  }
}`,
    },
    {
      type: "point",
      text: "Exception Chaining.",
    },
    {
      type: "example",
      code: `// Exception chaining example
public class ExceptionChainingExample {
  public static void main(String[] args) {
    try {
      method1();
    } catch (Exception e) {
      System.out.println("Caught in main: " + e.getMessage());
    }
  }

  public static void method1() throws Exception {
    try {
      method2();
    } catch (Exception e) {
      throw new Exception("Exception occurred in method1", e);
    }
  }

  public static void method2() throws Exception {
    throw new Exception("Original exception from method2");
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 6.3: Advanced Debugging and Error Handling",
    },
    {
      type: "point",
      text: "Using Logging Frameworks for Error Tracking.",
    },
    {
      type: "point",
      text: `- Log4j: A popular logging framework that provides fine-grained control over logging levels and output.`,
    },
    {
      type: "point",
      text: `- SLF4J: A facade for various logging frameworks, allowing you to switch implementations without changing code.`,
    },
    {
      type: "point",
      text: `- Java Util Logging: The built-in logging framework in Java, which can be configured to output to various destinations.`,
    },
    {
      type: "example",
      code: `// Example using Log4j for logging
import org.apache.log4j.Logger;
import org.apache.log4j.BasicConfigurator;

public class Log4jExample {
  private static final Logger logger = Logger.getLogger(Log4jExample.class);

  public static void main(String[] args) {
    BasicConfigurator.configure(); // Configure Log4j with default settings
    logger.info("This is an info message");
    logger.error("This is an error message");
  }
}`,
    },
    {
      type: "point",
      text: "Handling Errors in Multi-threaded Applications.",
    },
    {
      type: "point",
      text: `- Thread Interruption: Handle 'InterruptedException' to properly manage thread interruptions.`,
    },
    {
      type: "point",
      text: `- Concurrency Issues: Use synchronization to prevent data corruption in concurrent access scenarios.`,
    },
    {
      type: "point",
      text: `- Thread Pools: Utilize 'ExecutorService' to manage and monitor threads effectively.`,
    },
    {
      type: "example",
      code: `// Handling thread interruption
public class ThreadInterruptionExample {
  public static void main(String[] args) {
    Thread thread = new Thread(() -> {
      try {
        Thread.sleep(5000);
      } catch (InterruptedException e) {
        System.out.println("Thread was interrupted");
      }
    });

    thread.start();
    thread.interrupt(); // Interrupt the thread
  }
}`,
    },
],
  module7: [
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Module 7: Advanced Java Programming",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 7.1: Generics and Collections",
    },
    {
      type: "point",
      text: "Using generics in classes and methods.",
    },
    {
      type: "example",
      code: `// Generic class
public class Box<T> {
  private T content;

  public void setContent(T content) {
    this.content = content;
  }

  public T getContent() {
    return content;
  }
}

// Usage
Box<String> stringBox = new Box<>();
stringBox.setContent("Hello");
String content = stringBox.getContent();`,
    },
    {
      type: "point",
      text: "Working with Java Collections Framework.",
    },
    {
      type: "example",
      code: `// Using ArrayList
import java.util.ArrayList;
import java.util.List;

List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");

for (String name : names) {
  System.out.println(name);
}

// Using HashMap
import java.util.HashMap;
import java.util.Map;

Map<String, Integer> ages = new HashMap<>();
ages.put("Alice", 30);
ages.put("Bob", 25);

for (Map.Entry<String, Integer> entry : ages.entrySet()) {
  System.out.println(entry.getKey() + ": " + entry.getValue());
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 7.2: Exception Handling and File I/O",
    },
    {
      type: "point",
      text: "Handling exceptions with try-catch.",
    },
    {
      type: "example",
      code: `// Exception handling
try {
  int result = 10 / 0;
} catch (ArithmeticException e) {
  System.out.println("Cannot divide by zero");
} finally {
  System.out.println("Execution completed");
}`,
    },
    {
      type: "point",
      text: "Working with files: reading and writing.",
    },
    {
      type: "example",
      code: `// Reading from a file
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
  String line;
  while ((line = br.readLine()) != null) {
    System.out.println(line);
  }
} catch (IOException e) {
  e.printStackTrace();
}

// Writing to a file
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

try (BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"))) {
  bw.write("Hello, World!");
} catch (IOException e) {
  e.printStackTrace();
}`,
    },
  ],
  module8: [
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Module 8: Collections Framework",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 8.1: List Interface",
    },
    {
      type: "point",
      text: "Understanding and using List implementations like ArrayList and LinkedList.",
    },
    {
      type: "example",
      code: `// List example using ArrayList and LinkedList
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class ListExample {
  public static void main(String[] args) {
    List<String> arrayList = new ArrayList<>();
    arrayList.add("Apple");
    arrayList.add("Banana");
    arrayList.add("Cherry");

    // ArrayList operations
    System.out.println("ArrayList: " + arrayList);
    arrayList.remove("Banana");
    System.out.println("ArrayList after removal: " + arrayList);
    System.out.println("ArrayList contains Apple? " + arrayList.contains("Apple"));
    System.out.println("ArrayList size: " + arrayList.size());

    List<String> linkedList = new LinkedList<>();
    linkedList.add("Xylophone");
    linkedList.add("Zebra");

    // LinkedList operations
    System.out.println("LinkedList: " + linkedList);
    linkedList.addFirst("Apple");
    linkedList.addLast("Banana");
    System.out.println("LinkedList after additions: " + linkedList);
    System.out.println("LinkedList first element: " + linkedList.getFirst());
    System.out.println("LinkedList last element: " + linkedList.getLast());
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 8.2: Set Interface",
    },
    {
      type: "point",
      text: "Using Set implementations like HashSet and TreeSet.",
    },
    {
      type: "example",
      code: `// Set example using HashSet and TreeSet
import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

public class SetExample {
  public static void main(String[] args) {
    Set<String> hashSet = new HashSet<>();
    hashSet.add("Dog");
    hashSet.add("Cat");
    hashSet.add("Bird");
    hashSet.add("Cat"); // Duplicate element (won't be added)

    // HashSet operations
    System.out.println("HashSet: " + hashSet);
    hashSet.remove("Bird");
    System.out.println("HashSet after removal: " + hashSet);
    System.out.println("HashSet contains Cat? " + hashSet.contains("Cat"));
    System.out.println("HashSet size: " + hashSet.size());

    Set<String> treeSet = new TreeSet<>();
    treeSet.add("Cherry");
    treeSet.add("Apple");
    treeSet.add("Banana");

    // TreeSet operations
    System.out.println("TreeSet: " + treeSet); // Sorted order
    System.out.println("TreeSet first element: " + treeSet.first());
    System.out.println("TreeSet last element: " + treeSet.last());
    System.out.println("TreeSet size: " + treeSet.size());
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 8.3: Map Interface",
    },
    {
      type: "point",
      text: "Using Map implementations like HashMap and TreeMap.",
    },
    {
      type: "example",
      code: `// Map example using HashMap and TreeMap
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

public class MapExample {
  public static void main(String[] args) {
    Map<String, Integer> hashMap = new HashMap<>();
    hashMap.put("Alice", 30);
    hashMap.put("Bob", 25);
    hashMap.put("Charlie", 35);

    // HashMap operations
    System.out.println("HashMap: " + hashMap);
    System.out.println("HashMap value for Bob: " + hashMap.get("Bob"));
    hashMap.remove("Charlie");
    System.out.println("HashMap after removal: " + hashMap);
    System.out.println("HashMap size: " + hashMap.size());

    Map<String, Integer> treeMap = new TreeMap<>();
    treeMap.put("Delta", 40);
    treeMap.put("Echo", 20);
    treeMap.put("Foxtrot", 30);

    // TreeMap operations
    System.out.println("TreeMap: " + treeMap); // Sorted by keys
    System.out.println("TreeMap first key: " + treeMap.firstKey());
    System.out.println("TreeMap last key: " + treeMap.lastKey());
    System.out.println("TreeMap size: " + treeMap.size());
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 8.4: Queue Interface",
    },
    {
      type: "point",
      text: "Using Queue implementations like PriorityQueue and ArrayDeque.",
    },
    {
      type: "example",
      code: `// Queue example using PriorityQueue and ArrayDeque
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.ArrayDeque;
import java.util.Deque;

public class QueueExample {
  public static void main(String[] args) {
    Queue<String> priorityQueue = new PriorityQueue<>();
    priorityQueue.add("Peach");
    priorityQueue.add("Apple");
    priorityQueue.add("Banana");

    // PriorityQueue operations
    System.out.println("PriorityQueue: " + priorityQueue);
    System.out.println("PriorityQueue poll: " + priorityQueue.poll());
    System.out.println("PriorityQueue after poll: " + priorityQueue);

    Deque<String> arrayDeque = new ArrayDeque<>();
    arrayDeque.add("Front");
    arrayDeque.addLast("Back");

    // ArrayDeque operations
    System.out.println("ArrayDeque: " + arrayDeque);
    arrayDeque.addFirst("New Front");
    System.out.println("ArrayDeque after addFirst: " + arrayDeque);
    System.out.println("ArrayDeque removeFirst: " + arrayDeque.removeFirst());
    System.out.println("ArrayDeque after removeFirst: " + arrayDeque);
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 8.5: Collection Utilities",
    },
    {
      type: "point",
      text: "Using utility classes from the `java.util.Collections` class.",
    },
    {
      type: "example",
      code: `// Collection utilities example
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CollectionUtilitiesExample {
  public static void main(String[] args) {
    List<String> list = new ArrayList<>();
    list.add("Apple");
    list.add("Banana");
    list.add("Cherry");

    // Collections utility methods
    System.out.println("Original list: " + list);
    Collections.shuffle(list);
    System.out.println("Shuffled list: " + list);
    Collections.sort(list);
    System.out.println("Sorted list: " + list);
    System.out.println("List max element: " + Collections.max(list));
    System.out.println("List min element: " + Collections.min(list));
  }
}`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 8.6: Custom Collection Implementations",
    },
    {
      type: "point",
      text: "Implementing your own collection classes.",
    },
    {
      type: "example",
      code: `// Custom collection implementation example
import java.util.AbstractList;

public class CustomList<E> extends AbstractList<E> {
  private Object[] elements;
  private int size;

  public CustomList(int capacity) {
    elements = new Object[capacity];
    size = 0;
  }

  @Override
  public E get(int index) {
    if (index >= size || index < 0) {
      throw new IndexOutOfBoundsException();
    }
    return (E) elements[index];
  }

  @Override
  public int size() {
    return size;
  }

  @Override
  public boolean add(E e) {
    if (size == elements.length) {
      ensureCapacity();
    }
    elements[size++] = e;
    return true;
  }

  private void ensureCapacity() {
    int newSize = elements.length * 2;
    Object[] newElements = new Object[newSize];
    System.arraycopy(elements, 0, newElements, 0, size);
    elements = newElements;
  }

  public static void main(String[] args) {
    CustomList<String> customList = new CustomList<>(2);
    customList.add("Hello");
    customList.add("World");
    customList.add("!");
    System.out.println("Custom list: " + customList);
  }
}`,
    },
],
  module9: [
      {
        type: 'margin'
      },
      {
        type: "header",
        level: 2,
        text: "Module 9: Java Streams and Lambdas",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 9.1: Introduction to Streams",
      },
      {
        type: "point",
        text: "Using Streams to process collections.",
      },
      {
        type: "point",
        text: "Streams are a powerful abstraction for processing sequences of elements, supporting sequential and parallel operations.",
      },
      {
        type: "example",
        code: `// Stream example
  import java.util.Arrays;
  import java.util.List;
  import java.util.stream.Collectors;

  public class StreamExample {
    public static void main(String[] args) {
      List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");

      // Creating a stream from the list
      List<String> filteredNames = names.stream()
                      .filter(name -> name.startsWith("J")) // Filtering names that start with 'J'
                      .map(String::toUpperCase) // Converting each name to uppercase
                      .sorted() // Sorting the names
                      .collect(Collectors.toList()); // Collecting the results into a new list

      System.out.println("Filtered and Processed Names: " + filteredNames);
    }
  }`,
      },
      {
        type: "point",
        text: "The stream pipeline consists of a sequence of operations: source, intermediate operations (filter, map, etc.), and terminal operations (collect, forEach, etc.).",
      },
      {
        type: "point",
        text: "Intermediate operations are lazy, meaning they are not executed until a terminal operation is invoked.",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 9.2: Lambda Expressions",
      },
      {
        type: "point",
        text: "Using Lambda expressions for concise code.",
      },
      {
        type: "point",
        text: "Lambda expressions provide a clear and concise way to represent a function interface using an expression.",
      },
      {
        type: "example",
        code: `// Lambda expression example
  import java.util.Arrays;
  import java.util.List;

  public class LambdaExample {
    public static void main(String[] args) {
      List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");

      // Using lambda expressions to iterate and print names
      names.forEach(name -> System.out.println(name));

      // Sorting using lambda expressions
      names.sort((a, b) -> b.compareTo(a)); // Sorting in reverse alphabetical order
      System.out.println("Sorted Names: " + names);
    }
  }`,
      },
      {
        type: "point",
        text: "Lambda syntax: (parameters) -> expression. Lambda expressions can have zero or more parameters and can return a value.",
      },
      {
        type: "point",
        text: "Common use cases for lambdas include functional interfaces such as `Runnable`, `Callable`, and the `Consumer`, `Function`, and `Predicate` interfaces from `java.util.function`.",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 9.3: Stream Intermediate Operations",
      },
      {
        type: "point",
        text: "Common intermediate operations include `filter`, `map`, `flatMap`, `distinct`, `sorted`, and `limit`.",
      },
      {
        type: "example",
        code: `// Stream intermediate operations example
  import java.util.Arrays;
  import java.util.List;
  import java.util.stream.Collectors;

  public class StreamIntermediateExample {
    public static void main(String[] args) {
      List<String> sentences = Arrays.asList("Hello world", "Java Streams are cool", "Lambda expressions are powerful");

      List<String> words = sentences.stream()
                      .flatMap(sentence -> Arrays.stream(sentence.split(" "))) // Flattening lists of words
                      .distinct() // Removing duplicates
                      .sorted() // Sorting words
                      .limit(5) // Limiting to first 5 elements
                      .collect(Collectors.toList());

      System.out.println("Processed Words: " + words);
    }
  }`,
      },
      {
        type: "point",
        text: "The `flatMap` operation is used to flatten a stream of collections into a single stream.",
      },
      {
        type: "point",
        text: "Intermediate operations do not modify the source but return a new stream.",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 9.4: Stream Terminal Operations",
      },
      {
        type: "point",
        text: "Terminal operations include `collect`, `forEach`, `reduce`, `count`, `min`, `max`, and `anyMatch`.",
      },
      {
        type: "example",
        code: `// Stream terminal operations example
  import java.util.Arrays;
  import java.util.List;
  import java.util.Optional;

  public class StreamTerminalExample {
    public static void main(String[] args) {
      List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

      // Reduce example
      Optional<Integer> sum = numbers.stream()
                        .reduce((a, b) -> a + b); // Summing elements
      System.out.println("Sum: " + sum.orElse(0));

      // Count example
      long count = numbers.stream()
                      .filter(num -> num % 2 == 0) // Filtering even numbers
                      .count();
      System.out.println("Count of even numbers: " + count);

      // AnyMatch example
      boolean anyGreaterThanThree = numbers.stream()
                      .anyMatch(num -> num > 3); // Check if any number is greater than 3
      System.out.println("Any number greater than 3? " + anyGreaterThanThree);
    }
  }`,
      },
      {
        type: "point",
        text: "Terminal operations produce a result or a side-effect and terminate the stream.",
      },
      {
        type: "point",
        text: "For example, `collect` gathers the results into a collection, while `forEach` performs an action for each element.",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 9.5: Combining Streams and Lambdas",
      },
      {
        type: "point",
        text: "Combining streams with lambda expressions to perform complex data processing tasks.",
      },
      {
        type: "example",
        code: `// Combining streams and lambdas example
  import java.util.Arrays;
  import java.util.List;
  import java.util.stream.Collectors;

  public class CombinedStreamLambdaExample {
    public static void main(String[] args) {
      List<String> phrases = Arrays.asList("The quick brown fox", "jumps over", "the lazy dog");

      // Combining streams and lambdas for complex processing
      List<String> result = phrases.stream()
                      .flatMap(phrase -> Arrays.stream(phrase.split(" "))) // Flattening words
                      .map(String::toLowerCase) // Converting to lowercase
                      .filter(word -> word.length() > 3) // Filtering words longer than 3 characters
                      .distinct() // Removing duplicates
                      .sorted() // Sorting words
                      .collect(Collectors.toList()); // Collecting results

      System.out.println("Processed Words: " + result);
    }
  }`,
      },
      {
        type: "point",
        text: "Complex processing often involves chaining multiple operations and utilizing both intermediate and terminal operations.",
      },
      {
        type: "point",
        text: "Understanding how to effectively use streams and lambdas can lead to more concise and readable code.",
      },
  ],
  module10: [
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Module 10: GUI Development in Java",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 10.1: Introduction to Java GUI",
    },
    {
      type: "point",
      text: "Overview of GUI in Java: Understanding Graphical User Interfaces (GUIs) and their significance in creating user-friendly applications.",
    },
    {
      type: "point",
      text: "Java's GUI frameworks: Swing and JavaFX. Swing is older and provides a lightweight, platform-independent windowing system. JavaFX is newer, offering modern UI controls, 3D graphics, and a more flexible design system.",
    },
    {
      type: "point",
      text: "Why learn GUI development? GUIs allow users to interact with software visually, making applications accessible to a broader audience and enhancing user experience.",
    },
    {
      type: "example",
      code: `// Java Swing Example: Basic Frame
import javax.swing.JFrame;

public class MyFrame {
  public static void main(String[] args) {
    JFrame frame = new JFrame("My First GUI");
    frame.setSize(400, 400);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}`,
    },
    {
      type: "point",
      text: "Explanation: The code above creates a basic Swing application with a window (JFrame). The window size is set to 400x400 pixels, and the program terminates when the window is closed.",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 10.2: Components and Layouts",
    },
    {
      type: "point",
      text: "Introduction to GUI components: Components are the building blocks of any GUI. They include elements like buttons, labels, text fields, checkboxes, and more.",
    },
    {
      type: "point",
      text: "Using JButton, JLabel, and JTextField: These are commonly used components in Swing. JButton represents a clickable button, JLabel is used for displaying text or images, and JTextField allows for user input.",
    },
    {
      type: "example",
      code: `// Java Swing Example: Adding Components
import javax.swing.*;

public class MyFrame {
  public static void main(String[] args) {
    JFrame frame = new JFrame("Component Example");
    JButton button = new JButton("Click Me!");
    JLabel label = new JLabel("Label Example");
    JTextField textField = new JTextField("Enter Text Here");

    frame.setLayout(null); // Disable default layout
    button.setBounds(150, 100, 100, 40);
    label.setBounds(150, 50, 200, 30);
    textField.setBounds(150, 150, 200, 30);

    frame.add(button);
    frame.add(label);
    frame.add(textField);

    frame.setSize(500, 400);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}`,
    },
    {
      type: "point",
      text: "Explanation: In the code above, we create a window and add three components: a button, a label, and a text field. The setBounds method is used to manually set the position and size of each component.",
    },
    {
      type: "point",
      text: "Introduction to Layout Managers: Layout managers handle the positioning and sizing of components within a container. Java provides several layout managers, such as FlowLayout, BorderLayout, GridLayout, and more.",
    },
    {
      type: "point",
      text: "FlowLayout: Arranges components in a left-to-right flow, like text in a paragraph.",
    },
    {
      type: "example",
      code: `// Java Swing Example: FlowLayout
import javax.swing.*;
import java.awt.*;

public class FlowLayoutExample {
  public static void main(String[] args) {
    JFrame frame = new JFrame("FlowLayout Example");
    frame.setLayout(new FlowLayout());

    frame.add(new JButton("Button 1"));
    frame.add(new JButton("Button 2"));
    frame.add(new JButton("Button 3"));

    frame.setSize(300, 200);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}`,
    },
    {
      type: "point",
      text: "BorderLayout: Divides the container into five regions: North, South, East, West, and Center. Each component is placed in one of these regions.",
    },
    {
      type: "example",
      code: `// Java Swing Example: BorderLayout
import javax.swing.*;
import java.awt.*;

public class BorderLayoutExample {
  public static void main(String[] args) {
    JFrame frame = new JFrame("BorderLayout Example");
    frame.setLayout(new BorderLayout());

    frame.add(new JButton("North"), BorderLayout.NORTH);
    frame.add(new JButton("South"), BorderLayout.SOUTH);
    frame.add(new JButton("East"), BorderLayout.EAST);
    frame.add(new JButton("West"), BorderLayout.WEST);
    frame.add(new JButton("Center"), BorderLayout.CENTER);

    frame.setSize(400, 400);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}`,
    },
    {
      type: "point",
      text: "GridLayout: Arranges components in a grid of cells, where each cell has the same size. It’s useful for creating forms and tables.",
    },
    {
      type: "example",
      code: `// Java Swing Example: GridLayout
import javax.swing.*;
import java.awt.*;

public class GridLayoutExample {
  public static void main(String[] args) {
    JFrame frame = new JFrame("GridLayout Example");
    frame.setLayout(new GridLayout(2, 3)); // 2 rows, 3 columns

    frame.add(new JButton("Button 1"));
    frame.add(new JButton("Button 2"));
    frame.add(new JButton("Button 3"));
    frame.add(new JButton("Button 4"));
    frame.add(new JButton("Button 5"));
    frame.add(new JButton("Button 6"));

    frame.setSize(300, 200);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}`,
    },
    {
      type: "point",
      text: "Explanation: The GridLayout example arranges buttons in a 2x3 grid. Each button occupies one cell in the grid.",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 10.3: Event Handling in GUI",
    },
    {
      type: "point",
      text: "Understanding Event-Driven Programming: In GUI applications, actions such as button clicks, mouse movements, or keyboard inputs are events. Event-driven programming involves writing code that responds to these events.",
    },
    {
      type: "point",
      text: "ActionListener: An interface used to handle action events, such as button clicks. The ActionListener interface must be implemented by a class that processes the event.",
    },
    {
      type: "example",
      code: `// Java Swing Example: Handling Button Click with ActionListener
import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class ButtonClickExample implements ActionListener {
  private JButton button;

  public ButtonClickExample() {
    JFrame frame = new JFrame("Event Handling Example");
    button = new JButton("Click Me!");
    button.addActionListener(this);

    frame.add(button);
    frame.setSize(300, 200);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    button.setText("Clicked!");
  }

  public static void main(String[] args) {
    new ButtonClickExample();
  }
}`,
    },
    {
      type: "point",
      text: "Explanation: The code above changes the button’s label when it is clicked. The ActionListener is implemented by the ButtonClickExample class, and the actionPerformed method is overridden to define the action that occurs when the button is clicked.",
    },
    {
      type: "point",
      text: "Using Anonymous Inner Classes for Event Handling: Anonymous inner classes are a concise way to implement listeners directly within the component that generates the event.",
    },
    {
      type: "example",
      code: `// Java Swing Example: Anonymous Inner Class for Event Handling
import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class AnonymousClassExample {
  public static void main(String[] args) {
    JFrame frame = new JFrame("Anonymous Inner Class Example");
    JButton button = new JButton("Click Me!");

    button.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        button.setText("Clicked!");
      }
    });

    frame.add(button);
    frame.setSize(300, 200);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}`,
    },
    {
      type: "point",
      text: "Explanation: Here, an ActionListener is implemented as an anonymous inner class. This method is more concise, especially when the listener is only needed in one place.",
    },
       {
      type: "header",
      level: 3,
      text: "Lesson 10.4: Working with Menus and Toolbars",
    },
    {
      type: "point",
      text: "Adding Menus to a GUI: Menus provide a structured way to present a list of commands or options to the user. In Swing, you can create menus using the JMenu, JMenuItem, and JMenuBar classes.",
    },
    {
      type: "example",
      code: `// Java Swing Example: Creating a Simple Menu
import javax.swing.*;

public class MenuExample {
  public static void main(String[] args) {
    JFrame frame = new JFrame("Menu Example");
    JMenuBar menuBar = new JMenuBar();

    JMenu fileMenu = new JMenu("File");
    JMenuItem openItem = new JMenuItem("Open");
    JMenuItem saveItem = new JMenuItem("Save");
    JMenuItem exitItem = new JMenuItem("Exit");

    fileMenu.add(openItem);
    fileMenu.add(saveItem);
    fileMenu.addSeparator(); // Adds a separator line
    fileMenu.add(exitItem);

    menuBar.add(fileMenu);
    frame.setJMenuBar(menuBar);

    frame.setSize(400, 300);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}`,
    },
    {
      type: "point",
      text: "Explanation: The code above demonstrates how to create a basic menu with 'File' as the main menu and 'Open', 'Save', and 'Exit' as menu items. The separator adds a dividing line between the items.",
    },
    {
      type: "point",
      text: "Toolbars: Toolbars offer quick access to frequently used actions. In Swing, you can create a toolbar using the JToolBar class, which can contain buttons, separators, and other components.",
    },
    {
      type: "example",
      code: `// Java Swing Example: Creating a Toolbar
import javax.swing.*;

public class ToolbarExample {
  public static void main(String[] args) {
    JFrame frame = new JFrame("Toolbar Example");
    JToolBar toolbar = new JToolBar();

    JButton newButton = new JButton("New");
    JButton openButton = new JButton("Open");
    JButton saveButton = new JButton("Save");

    toolbar.add(newButton);
    toolbar.add(openButton);
    toolbar.add(saveButton);

    frame.add(toolbar, "North");

    frame.setSize(400, 300);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}`,
    },
    {
      type: "point",
      text: "Explanation: The code above creates a toolbar with three buttons: 'New', 'Open', and 'Save'. The toolbar is added to the top (North) of the window using a BorderLayout.",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 5.5: Dialogs and Pop-up Windows",
    },
    {
      type: "point",
      text: "Understanding Dialogs: Dialogs are small windows that prompt the user for input or provide information. Swing provides various dialog classes, such as JOptionPane for standard dialogs.",
    },
    {
      type: "point",
      text: "Using JOptionPane for Message Dialogs: JOptionPane can be used to display information, warnings, or error messages to the user.",
    },
    {
      type: "example",
      code: `// Java Swing Example: JOptionPane for Information Dialog
import javax.swing.*;

public class MessageDialogExample {
  public static void main(String[] args) {
    JFrame frame = new JFrame();
    JOptionPane.showMessageDialog(frame, "This is an information dialog.", "Information", JOptionPane.INFORMATION_MESSAGE);
  }
}`,
    },
    {
      type: "point",
      text: "Explanation: The code above creates a simple information dialog that displays a message to the user. The message type is set to INFORMATION_MESSAGE.",
    },
    {
      type: "point",
      text: "Input Dialogs: Input dialogs prompt the user to enter a value, which can then be used within the application.",
    },
    {
      type: "example",
      code: `// Java Swing Example: Input Dialog
import javax.swing.*;

public class InputDialogExample {
  public static void main(String[] args) {
    String name = JOptionPane.showInputDialog("Enter your name:");
    System.out.println("Name entered: " + name);
  }
}`,
    },
    {
      type: "point",
      text: "Explanation: The code above creates an input dialog that prompts the user to enter their name. The entered value is then printed to the console.",
    },
    {
      type: "point",
      text: "Confirm Dialogs: Confirm dialogs ask the user to make a decision, typically presented as Yes/No or OK/Cancel options.",
    },
    {
      type: "example",
      code: `// Java Swing Example: Confirm Dialog
import javax.swing.*;

public class ConfirmDialogExample {
  public static void main(String[] args) {
    int response = JOptionPane.showConfirmDialog(null, "Do you want to proceed?", "Confirmation", JOptionPane.YES_NO_OPTION);

    if (response == JOptionPane.YES_OPTION) {
      System.out.println("User chose to proceed.");
    } else {
      System.out.println("User chose not to proceed.");
    }
  }
}`,
    },
    {
      type: "point",
      text: "Explanation: The code above shows a confirmation dialog with 'Yes' and 'No' options. The user's response is captured and handled accordingly.",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 10.6: Advanced GUI Design with JavaFX",
    },
    {
      type: "point",
      text: "Introduction to JavaFX: JavaFX is a modern UI toolkit for Java that provides rich features for developing visually appealing desktop applications. It supports advanced graphics, animations, and media playback.",
    },
    {
      type: "point",
      text: "Setting up JavaFX: Unlike Swing, JavaFX is not included in the standard JDK after Java 8. You'll need to download and configure it separately or use a build tool like Maven or Gradle.",
    },
    {
      type: "example",
      code: `// JavaFX Example: Basic Application
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class JavaFXExample extends Application {
  @Override
  public void start(Stage primaryStage) {
    Button btn = new Button("Click Me!");
    btn.setOnAction(e -> System.out.println("Button Clicked"));

    StackPane root = new StackPane();
    root.getChildren().add(btn);

    Scene scene = new Scene(root, 300, 250);
    primaryStage.setTitle("JavaFX Example");
    primaryStage.setScene(scene);
    primaryStage.show();
  }

  public static void main(String[] args) {
    launch(args);
  }
}`,
    },
    {
      type: "point",
      text: "Explanation: The code above demonstrates a basic JavaFX application. It creates a window with a button. When the button is clicked, a message is printed to the console. The StackPane layout is used to center the button within the window.",
    },
    {
      type: "point",
      text: "Working with Scenes and Nodes: In JavaFX, every UI element is a node, and a scene represents a container for all the nodes in a window. Nodes can include controls, shapes, images, and more.",
    },
    {
      type: "example",
      code: `// JavaFX Example: Working with Multiple Nodes
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class MultiNodeExample extends Application {
  @Override
  public void start(Stage primaryStage) {
    Button btn1 = new Button("Button 1");
    Button btn2 = new Button("Button 2");

    VBox vbox = new VBox(10); // VBox with spacing of 10 pixels
    vbox.getChildren().addAll(btn1, btn2);

    Scene scene = new Scene(vbox, 300, 250);
    primaryStage.setTitle("JavaFX Multi-Node Example");
    primaryStage.setScene(scene);
    primaryStage.show();
  }

  public static void main(String[] args) {
    launch(args);
  }
}`,
    },
    {
      type: "point",
      text: "Explanation: This example creates a VBox layout, which arranges two buttons vertically with a 10-pixel space between them. The scene is then set to the primary stage and displayed.",
    },
    {
      type: "point",
      text: "JavaFX Controls: JavaFX offers a wide range of controls, such as TextField, Label, Checkbox, RadioButton, and more, which can be used to build complex UIs.",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 10.7: Styling and Theming GUIs with CSS",
    },
    {
      type: "point",
      text: "Introduction to CSS in JavaFX: JavaFX allows you to style your GUI components using CSS (Cascading Style Sheets). This enables you to separate the design from the application logic, making it easier to maintain and update the look and feel of your application.",
    },
    {
      type: "point",
      text: "Applying CSS Styles: You can apply CSS styles directly in your JavaFX application or link to an external CSS file. Styles can be applied to individual components or globally across the entire application.",
    },
    {
      type: "example",
      code: `/* Example of an external CSS file for JavaFX */
.button {
  -fx-background-color: #2a9d8f;
  -fx-text-fill: white;
  -fx-font-size: 14px;
  -fx-padding: 10px;
}

/* JavaFX Example: Applying CSS Styles */
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class CssExample extends Application {
  @Override
  public void start(Stage primaryStage) {
    Button btn = new Button("Styled Button");
    btn.getStyleClass().add("button"); // Applying CSS class

    StackPane root = new StackPane();
    root.getChildren().add(btn);

    Scene scene = new Scene(root, 300, 250);
    scene.getStylesheets().add("styles.css"); // Linking CSS file
    primaryStage.setTitle("JavaFX CSS Example");
    primaryStage.setScene(scene);
    primaryStage.show();
  }

  public static void main(String[] args) {
    launch(args);
  }
}`,
    },
    {
      type: "point",
      text: "Explanation: The example shows how to style a button in JavaFX using an external CSS file. The CSS class `.button` is defined in the CSS file, and the style is applied to the button in the JavaFX application using `getStyleClass().add(\"button\")`.",
    },
    {
      type: "point",
      text: "Theming Applications: JavaFX allows you to apply different themes by simply switching the CSS files. This provides a flexible way to change the entire appearance of an application with minimal code changes.",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 10.8: Animations and Effects in JavaFX",
    },
    {
      type: "point",
      text: "Introduction to JavaFX Animations: JavaFX provides powerful animation features that allow you to create dynamic, visually engaging UIs. Animations can be used to move objects, fade elements in and out, rotate components, and more.",
    },
    {
      type: "point",
      text: "Using the Timeline Class: The Timeline class is used to define a sequence of keyframes that can animate the properties of nodes over time.",
    },
    {
      type: "example",
      code: `// JavaFX Example: Simple Animation using Timeline
import javafx.animation.KeyFrame;
import javafx.animation.Timeline;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;
import javafx.util.Duration;

public class AnimationExample extends Application {
  @Override
  public void start(Stage primaryStage) {
    Button btn = new Button("Animate Me");

    Timeline timeline = new Timeline(
        new KeyFrame(Duration.ZERO, e -> btn.setScaleX(1)),
        new KeyFrame(new Duration(500), e -> btn.setScaleX(1.5)),
        new KeyFrame(new Duration(1000), e -> btn.setScaleX(1))
    );

    timeline.setCycleCount(Timeline.INDEFINITE);
    timeline.play();

    StackPane root = new StackPane();
    root.getChildren().add(btn);

    Scene scene = new Scene(root, 300, 250);
    primaryStage.setTitle("JavaFX Animation Example");
    primaryStage.setScene(scene);
    primaryStage.show();
  }

  public static void main(String[] args) {
    launch(args);
  }
}`,
    },
    {
      type: "point",
      text: "Explanation: In this example, a simple animation is applied to a button, causing it to scale up and down continuously. The Timeline class is used to define the keyframes for the animation, and `setCycleCount(Timeline.INDEFINITE)` makes the animation repeat indefinitely.",
    },
    {
      type: "point",
      text: "Working with Transition Classes: JavaFX provides several transition classes, such as FadeTransition, TranslateTransition, RotateTransition, and ScaleTransition, that make it easier to implement common animations.",
    },
    {
      type: "example",
      code: `// JavaFX Example: RotateTransition
import javafx.animation.RotateTransition;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;
import javafx.util.Duration;

public class RotateTransitionExample extends Application {
  @Override
  public void start(Stage primaryStage) {
    Button btn = new Button("Rotate Me");

    RotateTransition rotateTransition = new RotateTransition(Duration.millis(2000), btn);
    rotateTransition.setByAngle(360);
    rotateTransition.setCycleCount(RotateTransition.INDEFINITE);
    rotateTransition.setAutoReverse(true);

    btn.setOnAction(e -> rotateTransition.play());

    StackPane root = new StackPane();
    root.getChildren().add(btn);

    Scene scene = new Scene(root, 300, 250);
    primaryStage.setTitle("JavaFX Rotate Transition Example");
    primaryStage.setScene(scene);
    primaryStage.show();
  }

  public static void main(String[] args) {
    launch(args);
  }
}`,
    },
    {
      type: "point",
      text: "Explanation: This example uses the RotateTransition class to rotate a button 360 degrees when it is clicked. The rotation repeats indefinitely and reverses after each cycle.",
    },
    {
      type: "point",
      text: "Applying Effects: JavaFX also supports visual effects, such as shadows, lighting, and reflections, which can be applied to nodes to enhance the visual appeal of your application.",
    },
    {
      type: "example",
      code: `// JavaFX Example: DropShadow Effect
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.effect.DropShadow;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class DropShadowExample extends Application {
  @Override
  public void start(Stage primaryStage) {
    Button btn = new Button("Button with Shadow");
    btn.setEffect(new DropShadow());

    StackPane root = new StackPane();
    root.getChildren().add(btn);

    Scene scene = new Scene(root, 300, 250);
    primaryStage.setTitle("JavaFX DropShadow Example");
    primaryStage.setScene(scene);
    primaryStage.show();
  }

  public static void main(String[] args) {
    launch(args);
  }
}`,
    },
    {
      type: "point",
      text: "Explanation: In this example, a DropShadow effect is applied to a button, giving it a shadowed appearance. The DropShadow effect is just one of many effects available in JavaFX.",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 10.9: Best Practices in GUI Development",
    },
    {
      type: "point",
      text: "Consistency: Ensure that your GUI is consistent across different parts of the application. This includes using similar colors, fonts, and layouts to provide a cohesive user experience.",
    },
    {
      type: "point",
      text: "Usability: Focus on creating an intuitive and easy-to-use interface. Avoid cluttering the UI with too many elements and ensure that the most important features are easily accessible.",
    },
    {
      type: "point",
      text: "Responsiveness: Design your GUI to be responsive, meaning it should adapt to different screen sizes and resolutions. In JavaFX, this can be achieved by using flexible layouts and avoiding fixed sizes where possible.",
    },
    {
      type: "point",
      text: "Accessibility: Consider accessibility in your design by providing keyboard shortcuts, screen reader support, and ensuring that color schemes are usable by people with visual impairments.",
    },
    {
      type: "point",
      text: "Performance: Optimize your GUI to run smoothly, especially when dealing with complex animations or large datasets. Avoid unnecessary redraws and optimize event handling to reduce lag.",
    },
    {
      type: "header",
      level: 3,
      text: "Conclusion and Further Resources",
    },
    {
      type: "point",
      text: "This module has provided an in-depth look at GUI development in Java, covering both Swing and JavaFX. With these skills, you're now equipped to create user-friendly, visually appealing desktop applications.",
    },
    {
      type: "point",
      text: "Further Learning: Explore the official [JavaFX documentation](https://openjfx.io/) and [Swing tutorials](https://docs.oracle.com/javase/tutorial/uiswing/) to deepen your understanding and learn about more advanced features.",
    },
    {
      type: "point",
      text: "Practice: Build small projects, such as a calculator, a simple game, or a text editor, to apply what you've learned and gain hands-on experience.",
    },
    {
      type: "margin"
    }
  ],
  module11: [
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Module 11: Multithreading and Concurrency",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 11.1: Basics of Multithreading",
    },
    {
      type: "point",
      text: "Creating and managing threads.",
    },
    {
      type: "point",
      text: "Multithreading allows multiple threads to run concurrently, making efficient use of CPU resources and improving performance.",
    },
    {
      type: "point",
      text: "Threads in Java can be created by either implementing the `Runnable` interface or extending the `Thread` class.",
    },
    {
      type: "example",
      code: `// Multithreading example using Runnable
public class MultithreadingExample {
  public static void main(String[] args) {
    // Runnable task
    Runnable task = () -> {
      for (int i = 0; i < 5; i++) {
        System.out.println("Task running in thread " + Thread.currentThread().getName());
      }
    };

    // Creating threads
    Thread thread1 = new Thread(task, "Thread-1");
    Thread thread2 = new Thread(task, "Thread-2");

    // Starting threads
    thread1.start();
    thread2.start();
  }
}`,
    },
    {
      type: "point",
      text: "In the example, two threads are created and started. They execute the same task concurrently, demonstrating basic multithreading.",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 11.2: Synchronization and Concurrency Utilities",
    },
    {
      type: "point",
      text: "Using synchronization to prevent thread interference.",
    },
    {
      type: "point",
      text: "Thread interference occurs when multiple threads access shared data simultaneously, potentially leading to inconsistent or incorrect results.",
    },
    {
      type: "point",
      text: "Synchronization is used to control the access of multiple threads to shared resources, ensuring that only one thread can access the resource at a time.",
    },
    {
      type: "example",
      code: `// Synchronization example
public class Counter {
  private int count = 0;

  // Synchronized method to ensure thread safety
  public synchronized void increment() {
    count++;
  }

  public int getCount() {
    return count;
  }
}

public class SynchronizedExample {
  public static void main(String[] args) {
    Counter counter = new Counter();

    Runnable task = () -> {
      for (int i = 0; i < 1000; i++) {
        counter.increment();
      }
    };

    // Creating threads
    Thread thread1 = new Thread(task);
    Thread thread2 = new Thread(task);

    // Starting threads
    thread1.start();
    thread2.start();

    try {
      // Waiting for threads to finish
      thread1.join();
      thread2.join();
    } catch (InterruptedException e) {
      e.printStackTrace();
    }

    // Output the final count
    System.out.println("Final Count: " + counter.getCount());
  }
}`,
    },
    {
      type: "point",
      text: "In the example, the `increment` method is synchronized to prevent thread interference. Each thread waits its turn to execute this method, ensuring data consistency.",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 11.3: Advanced Synchronization Techniques",
    },
    {
      type: "point",
      text: "Advanced synchronization techniques include using `ReentrantLock`, `ReadWriteLock`, and concurrent collections.",
    },
    {
      type: "point",
      text: "The `ReentrantLock` class provides more flexibility than synchronized blocks, including try-lock and timed lock features.",
    },
    {
      type: "example",
      code: `// ReentrantLock example
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class ReentrantLockExample {
  private static final Lock lock = new ReentrantLock();
  private static int count = 0;

  public static void main(String[] args) {
    Runnable task = () -> {
      for (int i = 0; i < 1000; i++) {
        lock.lock();
        try {
          count++;
        } finally {
          lock.unlock();
        }
      }
    };

    Thread thread1 = new Thread(task);
    Thread thread2 = new Thread(task);

    thread1.start();
    thread2.start();

    try {
      thread1.join();
      thread2.join();
    } catch (InterruptedException e) {
      e.printStackTrace();
    }

    System.out.println("Final Count: " + count);
  }
}`,
    },
    {
      type: "point",
      text: "In this example, `ReentrantLock` is used to provide thread-safe access to the shared `count` variable. The `lock` and `unlock` methods ensure that only one thread can update the count at a time.",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 11.4: Concurrency Utilities",
    },
    {
      type: "point",
      text: "Java provides several utilities in the `java.util.concurrent` package to simplify concurrent programming.",
    },
    {
      type: "point",
      text: "Key utilities include `ExecutorService` for managing thread pools, `Callable` for tasks that return results, and `Future` for handling asynchronous computation results.",
    },
    {
      type: "example",
      code: `// ExecutorService example
import java.util.concurrent.Callable;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.ExecutorService;

public class ExecutorServiceExample {
  public static void main(String[] args) throws Exception {
    ExecutorService executor = Executors.newFixedThreadPool(2);

    Callable<Integer> task = () -> {
      Thread.sleep(1000); // Simulate work
      return 123;
    };

    Future<Integer> future = executor.submit(task);

    // Retrieve the result
    Integer result = future.get();
    System.out.println("Task result: " + result);

    executor.shutdown();
  }
}`,
    },
    {
      type: "point",
      text: "The `ExecutorService` manages a pool of threads and executes tasks asynchronously. The `Future` interface is used to retrieve results from these tasks.",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 11.5: Thread Safety and Avoiding Deadlocks",
    },
    {
      type: "point",
      text: "Ensuring thread safety involves careful management of shared resources and synchronization to prevent race conditions and deadlocks.",
    },
    {
      type: "point",
      text: "A deadlock occurs when two or more threads are waiting for each other to release resources, resulting in a standstill.",
    },
    {
      type: "point",
      text: "Avoiding deadlocks involves strategies such as acquiring locks in a consistent order, using timeout mechanisms, and avoiding nested locks.",
    },
    {
      type: "example",
      code: `// Deadlock example
public class DeadlockExample {
  private static final Object lock1 = new Object();
  private static final Object lock2 = new Object();

  public static void main(String[] args) {
    Runnable task1 = () -> {
      synchronized (lock1) {
        System.out.println("Thread 1: Holding lock 1...");
        try { Thread.sleep(100); } catch (InterruptedException e) { e.printStackTrace(); }
        System.out.println("Thread 1: Waiting for lock 2...");
        synchronized (lock2) {
          System.out.println("Thread 1: Acquired lock 2!");
        }
      }
    };

    Runnable task2 = () -> {
      synchronized (lock2) {
        System.out.println("Thread 2: Holding lock 2...");
        try { Thread.sleep(100); } catch (InterruptedException e) { e.printStackTrace(); }
        System.out.println("Thread 2: Waiting for lock 1...");
        synchronized (lock1) {
          System.out.println("Thread 2: Acquired lock 1!");
        }
      }
    };

    Thread thread1 = new Thread(task1);
    Thread thread2 = new Thread(task2);

    thread1.start();
    thread2.start();
  }
}`,
    },
    {
      type: "point",
      text: "In the example, `thread1` and `thread2` each hold one lock while waiting for the other, resulting in a deadlock situation.",
    },
  ],
  module12: [
      {
        type: 'margin'
      },
      {
        type: "header",
        level: 2,
        text: "Module 12: Networking in Java",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 12.1: Basics of Java Networking",
      },
      {
        type: "point",
        text: "Understanding sockets and basic networking concepts.",
      },
      {
        type: "point",
        text: "Networking in Java involves using sockets to establish communication between a client and a server over a network.",
      },
      {
        type: "point",
        text: "A `ServerSocket` is used by the server to listen for incoming connections, while a `Socket` is used by the client to connect to the server.",
      },
      {
        type: "example",
        code: `// Simple client-server example

  // Server code
  import java.io.*;
  import java.net.*;

  public class SimpleServer {
    public static void main(String[] args) throws IOException {
      ServerSocket serverSocket = new ServerSocket(12345);
      System.out.println("Server started. Waiting for a client...");
      Socket clientSocket = serverSocket.accept();
      System.out.println("Client connected.");

      PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
      BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));

      String inputLine;
      while ((inputLine = in.readLine()) != null) {
        out.println("Server received: " + inputLine);
      }

      in.close();
      out.close();
      clientSocket.close();
      serverSocket.close();
    }
  }

  // Client code
  import java.io.*;
  import java.net.*;

  public class SimpleClient {
    public static void main(String[] args) throws IOException {
      Socket socket = new Socket("localhost", 12345);
      PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
      BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));

      out.println("Hello Server");
      String response = in.readLine();
      System.out.println("Server response: " + response);

      in.close();
      out.close();
      socket.close();
    }
  }`,
      },
      {
        type: "point",
        text: "In this example, the server listens for connections on port 12345 and responds to messages from the client. The client connects to the server, sends a message, and prints the server's response.",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 12.2: HTTP Networking",
      },
      {
        type: "point",
        text: "Using HTTP requests with `HttpURLConnection` for communication over the web.",
      },
      {
        type: "point",
        text: "The `HttpURLConnection` class is used to make HTTP requests and handle responses from web servers.",
      },
      {
        type: "point",
        text: "You can use methods like `setRequestMethod`, `getInputStream`, and `disconnect` to interact with the server and handle the response.",
      },
      {
        type: "example",
        code: `// HTTP request example
  import java.io.BufferedReader;
  import java.io.InputStreamReader;
  import java.net.HttpURLConnection;
  import java.net.URL;

  public class HttpExample {
    public static void main(String[] args) throws Exception {
      URL url = new URL("https://jsonplaceholder.typicode.com/posts/1");
      HttpURLConnection connection = (HttpURLConnection) url.openConnection();
      connection.setRequestMethod("GET");

      BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
      String inputLine;
      StringBuilder content = new StringBuilder();

      while ((inputLine = in.readLine()) != null) {
        content.append(inputLine);
      }

      in.close();
      connection.disconnect();

      System.out.println("Response: " + content.toString());
    }
  }`,
      },
      {
        type: "point",
        text: "This example demonstrates how to perform a GET request to a web API, read the response, and output it. The `HttpURLConnection` is configured to make the request and handle the response appropriately.",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 12.3: Advanced Networking Techniques",
      },
      {
        type: "point",
        text: "Advanced networking techniques include handling different types of HTTP requests, managing cookies, and dealing with various response codes.",
      },
      {
        type: "point",
        text: "Understanding these advanced techniques allows for more robust and interactive network communication, such as handling POST requests and managing authentication.",
      },
      {
        type: "example",
        code: `// Advanced HTTP request example: POST request with JSON
  import java.io.OutputStream;
  import java.io.BufferedReader;
  import java.io.InputStreamReader;
  import java.net.HttpURLConnection;
  import java.net.URL;

  public class AdvancedHttpExample {
    public static void main(String[] args) throws Exception {
      URL url = new URL("https://jsonplaceholder.typicode.com/posts");
      HttpURLConnection connection = (HttpURLConnection) url.openConnection();
      connection.setRequestMethod("POST");
      connection.setRequestProperty("Content-Type", "application/json; utf-8");
      connection.setRequestProperty("Accept", "application/json");
      connection.setDoOutput(true);

      String jsonInputString = "{\"title\": \"foo\", \"body\": \"bar\", \"userId\": 1}";

      try (OutputStream os = connection.getOutputStream()) {
        byte[] input = jsonInputString.getBytes("utf-8");
        os.write(input, 0, input.length);
      }

      BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream(), "utf-8"));
      String inputLine;
      StringBuilder response = new StringBuilder();

      while ((inputLine = in.readLine()) != null) {
        response.append(inputLine.trim());
      }

      in.close();
      connection.disconnect();

      System.out.println("Response: " + response.toString());
    }
  }`,
      },
      {
        type: "point",
        text: "In this example, a POST request is made to send JSON data to the server. The request headers are set for content type and accepted response format. The response from the server is read and printed.",
      },
  ],
  module13: [
      {
        type: 'margin'
      },
      {
        type: "header",
        level: 2,
        text: "Module 13: Java Database Connectivity (JDBC)",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 13.1: Introduction to JDBC",
      },
      {
        type: "point",
        text: "Connecting to a database and executing queries.",
      },
      {
        type: "point",
        text: "JDBC (Java Database Connectivity) is an API that allows Java applications to interact with databases using SQL.",
      },
      {
        type: "point",
        text: "The `DriverManager` class is used to establish a connection to the database. You need to specify the database URL, username, and password.",
      },
      {
        type: "point",
        text: "A `Statement` object is used to execute SQL queries. The `ResultSet` object holds the results returned by the query.",
      },
      {
        type: "example",
        code: `// JDBC example
  import java.sql.Connection;
  import java.sql.DriverManager;
  import java.sql.ResultSet;
  import java.sql.Statement;

  public class JdbcExample {
    public static void main(String[] args) {
      String url = "jdbc:mysql://localhost:3306/mydatabase";
      String user = "root";
      String password = "password";

      try (Connection connection = DriverManager.getConnection(url, user, password);
          Statement statement = connection.createStatement();
          ResultSet resultSet = statement.executeQuery("SELECT * FROM mytable")) {

        while (resultSet.next()) {
          System.out.println("ID: " + resultSet.getInt("id") + ", Name: " + resultSet.getString("name"));
        }

      } catch (Exception e) {
        e.printStackTrace();
      }
    }
  }`,
      },
      {
        type: "point",
        text: "This example demonstrates connecting to a MySQL database, executing a query to retrieve data from a table, and processing the results.",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 13.2: Prepared Statements and Transactions",
      },
      {
        type: "point",
        text: "Using prepared statements to prevent SQL injection and manage transactions for maintaining data integrity.",
      },
      {
        type: "point",
        text: "Prepared statements are precompiled SQL statements that improve performance and security by avoiding SQL injection attacks.",
      },
      {
        type: "point",
        text: "Transactions are used to ensure that a series of database operations are completed successfully or not at all, maintaining the integrity of the database.",
      },
      {
        type: "example",
        code: `// Prepared Statement and Transaction example
  import java.sql.Connection;
  import java.sql.DriverManager;
  import java.sql.PreparedStatement;
  import java.sql.SQLException;

  public class JdbcPreparedStatementExample {
    public static void main(String[] args) {
      String url = "jdbc:mysql://localhost:3306/mydatabase";
      String user = "root";
      String password = "password";

      try (Connection connection = DriverManager.getConnection(url, user, password)) {
        connection.setAutoCommit(false); // Disable auto-commit mode

        String insertSQL = "INSERT INTO mytable (name) VALUES (?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(insertSQL)) {
          preparedStatement.setString(1, "John Doe");
          preparedStatement.executeUpdate();

          // Commit transaction
          connection.commit();
        } catch (SQLException e) {
          // Rollback transaction on error
          connection.rollback();
          e.printStackTrace();
        }

      } catch (Exception e) {
        e.printStackTrace();
      }
    }
  }`,
      },
      {
        type: "point",
        text: "In this example, a transaction is started by setting `autoCommit` to `false`. After executing the prepared statement, the transaction is committed if successful. If an error occurs, the transaction is rolled back to maintain data integrity.",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 13.3: Handling Database Metadata and Batch Processing",
      },
      {
        type: "point",
        text: "Retrieving database metadata and performing batch processing for efficiency.",
      },
      {
        type: "point",
        text: "Database metadata can provide information about database structure, such as tables, columns, and data types, using the `DatabaseMetaData` class.",
      },
      {
        type: "point",
        text: "Batch processing allows multiple SQL statements to be executed as a batch, improving performance by reducing the number of database round-trips.",
      },
      {
        type: "example",
        code: `// Database Metadata and Batch Processing example
  import java.sql.Connection;
  import java.sql.DatabaseMetaData;
  import java.sql.DriverManager;
  import java.sql.PreparedStatement;
  import java.sql.SQLException;
  import java.sql.Statement;

  public class JdbcAdvancedExample {
    public static void main(String[] args) {
      String url = "jdbc:mysql://localhost:3306/mydatabase";
      String user = "root";
      String password = "password";

      try (Connection connection = DriverManager.getConnection(url, user, password)) {
        // Retrieve database metadata
        DatabaseMetaData metaData = connection.getMetaData();
        System.out.println("Database Product Name: " + metaData.getDatabaseProductName());
        System.out.println("Database Product Version: " + metaData.getDatabaseProductVersion());

        // Batch processing
        try (Statement statement = connection.createStatement()) {
          statement.addBatch("INSERT INTO mytable (name) VALUES ('Alice')");
          statement.addBatch("INSERT INTO mytable (name) VALUES ('Bob')");
          statement.addBatch("INSERT INTO mytable (name) VALUES ('Charlie')");
          
          int[] updateCounts = statement.executeBatch();
          System.out.println("Batch executed. Number of rows affected: " + updateCounts.length);
        }

      } catch (Exception e) {
        e.printStackTrace();
      }
    }
  }`,
      },
      {
        type: "point",
        text: "This example shows how to retrieve metadata about the database and perform batch processing. Metadata provides information about the database system, while batch processing groups multiple SQL statements to be executed together for efficiency.",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 13.4: Error Handling and Connection Management",
      },
      {
        type: "point",
        text: "Handling SQL exceptions and managing database connections effectively.",
      },
      {
        type: "point",
        text: "Handling SQL exceptions is crucial for debugging and ensuring that your application can recover gracefully from database errors.",
      },
      {
        type: "point",
        text: "Proper connection management involves closing connections, statements, and result sets to avoid resource leaks and ensure optimal performance.",
      },
      {
        type: "example",
        code: `// Error Handling and Connection Management example
  import java.sql.Connection;
  import java.sql.DriverManager;
  import java.sql.PreparedStatement;
  import java.sql.SQLException;

  public class JdbcErrorHandlingExample {
    public static void main(String[] args) {
      String url = "jdbc:mysql://localhost:3306/mydatabase";
      String user = "root";
      String password = "password";

      try (Connection connection = DriverManager.getConnection(url, user, password)) {
        String insertSQL = "INSERT INTO mytable (name) VALUES (?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(insertSQL)) {
          preparedStatement.setString(1, "Jane Doe");
          preparedStatement.executeUpdate();
        } catch (SQLException e) {
          System.err.println("Error executing SQL statement: " + e.getMessage());
        }
      } catch (SQLException e) {
        System.err.println("Error connecting to the database: " + e.getMessage());
      }
    }
  }`,
      },
      {
        type: "point",
        text: "This example illustrates proper error handling for SQL operations and database connections. It ensures that exceptions are caught and logged, and resources are closed properly.",
      },
  ],
  module14: [
      {
        type: 'margin'
      },
      {
        type: "header",
        level: 2,
        text: "Module 14: Java Reflection and Annotations",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 14.1: Understanding Reflection",
      },
      {
        type: "point",
        text: "Using reflection to inspect and manipulate classes at runtime.",
      },
      {
        type: "point",
        text: "Reflection in Java allows you to analyze and interact with classes, methods, fields, and other elements of the Java language at runtime, providing flexibility and introspection capabilities.",
      },
      {
        type: "point",
        text: "The `Class` class is the entry point for reflection. You can obtain a `Class` object representing a class or interface using methods like `Class.forName()`, `.getClass()`, or `.class`.",
      },
      {
        type: "point",
        text: "You can inspect class details (e.g., methods, fields, constructors) using methods of the `Class` class, such as `getDeclaredMethods()`, `getDeclaredFields()`, and `getConstructors()`. You can also manipulate fields and invoke methods dynamically.",
      },
      {
        type: "example",
        code: `// Reflection example
  import java.lang.reflect.Method;

  public class ReflectionExample {
    public static void main(String[] args) throws Exception {
      Class<?> clazz = Class.forName("java.lang.String");
      Method[] methods = clazz.getDeclaredMethods();

      for (Method method : methods) {
        System.out.println("Method: " + method.getName());
      }
    }
  }`,
      },
      {
        type: "point",
        text: "In this example, we use reflection to inspect the `java.lang.String` class. We retrieve and print the names of all declared methods in the `String` class.",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 14.2: Annotations in Java",
      },
      {
        type: "point",
        text: "Creating and using custom annotations for metadata and runtime processing.",
      },
      {
        type: "point",
        text: "Annotations are a form of metadata that provide additional information about code elements (e.g., classes, methods, fields). They do not affect program semantics but can be used by the compiler or runtime environment for various purposes.",
      },
      {
        type: "point",
        text: "Custom annotations are defined using the `@interface` keyword. Annotations can include elements (methods) that can be used to provide values.",
      },
      {
        type: "point",
        text: "Annotations can be retained at runtime or compile-time. The `@Retention` annotation specifies how long annotations are retained. Use `RetentionPolicy.RUNTIME` for runtime processing.",
      },
      {
        type: "example",
        code: `// Custom annotation example
  import java.lang.annotation.Retention;
  import java.lang.annotation.RetentionPolicy;

  @Retention(RetentionPolicy.RUNTIME)
  @interface MyCustomAnnotation {
    String value();
  }

  public class AnnotationExample {
    @MyCustomAnnotation("Example")
    public void annotatedMethod() {
      System.out.println("Method with MyCustomAnnotation");
    }

    public static void main(String[] args) throws Exception {
      AnnotationExample example = new AnnotationExample();
      example.annotatedMethod();

      // Checking for annotation
      MyCustomAnnotation annotation = example.getClass()
                      .getMethod("annotatedMethod")
                      .getAnnotation(MyCustomAnnotation.class);

      if (annotation != null) {
        System.out.println("Annotation value: " + annotation.value());
      }
    }
  }`,
      },
      {
        type: "point",
        text: "In this example, we define a custom annotation `@MyCustomAnnotation` with a single element `value`. We apply this annotation to a method and then retrieve and print the annotation value using reflection.",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 14.3: Practical Uses of Reflection and Annotations",
      },
      {
        type: "point",
        text: "Exploring practical applications of reflection and annotations in Java.",
      },
      {
        type: "point",
        text: "Reflection is often used in frameworks and libraries to provide features such as dependency injection, serialization, and object mapping. It allows these tools to interact with objects dynamically without needing compile-time knowledge.",
      },
      {
        type: "point",
        text: "Annotations are commonly used in Java frameworks such as Spring and Hibernate to define configuration, behavior, and mappings in a declarative manner. For example, `@Autowired` in Spring and `@Entity` in Hibernate.",
      },
      {
        type: "example",
        code: `// Example of using reflection for a simple dependency injection framework
  import java.lang.reflect.Constructor;

  public class SimpleDIContainer {
    public static void main(String[] args) throws Exception {
      // Assuming we have a class 'MyService' with a constructor
      Class<?> clazz = Class.forName("MyService");
      Constructor<?> constructor = clazz.getConstructor();
      Object instance = constructor.newInstance();

      System.out.println("Created instance of: " + instance.getClass().getName());
    }
  }

  // A sample service class
  class MyService {
    public MyService() {
      System.out.println("MyService instance created");
    }
  }`,
      },
      {
        type: "point",
        text: "In this example, we demonstrate a simple dependency injection mechanism using reflection. We create an instance of `MyService` using reflection to call its constructor. This is a simplified version of what frameworks like Spring do under the hood.",
      },
  ],
    module15: [
      {
        type: 'margin'
      },
      {
        type: "header",
        level: 2,
        text: "Module 15: Building Java Applications",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 15.1: Building a Simple Java Application",
      },
      {
        type: "point",
        text: "Setting up a project structure.",
      },
      {
        type: "point",
        text: "A well-organized project structure improves maintainability and scalability. A standard Maven project structure includes separate directories for main source code and test code.",
      },
      {
        type: "point",
        text: "Here is a basic Maven project structure:",
      },
      {
        type: "example",
        code: `// Basic project structure
  src/
    main/
      java/
        com/
          example/
            App.java
    test/
      java/
        com/
          example/
            AppTest.java
  pom.xml
  `,
      },
      {
        type: "point",
        text: `In this structure:
        - src/main/java/ contains the main application code.
        - src/test/java/ contains test code.
        - pom.xml is the Maven build configuration file that manages project dependencies and build lifecycle.`,
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 15.2: Implementing Core Features and Functionalities",
      },
      {
        type: "point",
        text: "Implementing core features involves writing the main application logic and ensuring that it meets the requirements. It’s important to follow good coding practices and maintain code quality.",
      },
      {
        type: "point",
        text: "In the example below, we create a basic Java application with a greeting feature and a corresponding JUnit test case.",
      },
      {
        type: "example",
        code: `// Core functionality - App.java
  package com.example;

  public class App {
    public static void main(String[] args) {
      App app = new App();
      System.out.println(app.getGreeting());
    }

    public String getGreeting() {
      return "Welcome to the Java Application!";
    }
  }

  // Testing functionality - AppTest.java
  package com.example;

  import static org.junit.Assert.assertEquals;
  import org.junit.Test;

  public class AppTest {
    @Test
    public void testGreeting() {
      App app = new App();
      assertEquals("Welcome to the Java Application!", app.getGreeting());
    }
  }
  `,
      },
      {
        type: "point",
        text: "The `App` class contains a `getGreeting` method that returns a greeting string. The `AppTest` class uses JUnit to test that the `getGreeting` method returns the expected string.",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 15.3: Building, Deploying, and Running the Application",
      },
      {
        type: "point",
        text: "After implementing the core features, you need to build, deploy, and run the application. Maven is commonly used for building and managing Java projects.",
      },
      {
        type: "point",
        text: "Build the application using Maven. This will compile the code, run tests, and package the application into a JAR file.",
      },
      {
        type: "example",
        code: `// Build and run commands
  // Run these commands from the root directory of your project where the pom.xml file is located.

  mvn clean package   // Cleans previous builds and packages the application

  java -jar target/app.jar  // Runs the packaged JAR file
  `,
      },
      {
        type: "point",
        text: "The `mvn clean package` command cleans any previously compiled files and then packages the application into a JAR file located in the `target` directory. The `java -jar` command runs the JAR file.",
      },
      {
        type: "header",
        level: 3,
        text: "Lesson 15.4: Continuous Integration and Deployment",
      },
      {
        type: "point",
        text: "Integrating Continuous Integration (CI) and Continuous Deployment (CD) practices into your workflow can streamline development, testing, and deployment processes.",
      },
      {
        type: "point",
        text: "Tools like Jenkins, Travis CI, and GitHub Actions can automate the build, test, and deployment pipeline. For instance, a CI/CD pipeline can automatically build and deploy the application whenever changes are pushed to the repository.",
      },
      {
        type: "example",
        code: `// Example of a simple GitHub Actions workflow file (.github/workflows/ci.yml)
  name: Java CI

  on:
    push:
      branches: [main]

  jobs:
    build:
      runs-on: ubuntu-latest

      steps:
      - uses: actions/checkout@v3
      - name: Set up JDK 17
        uses: actions/setup-java@v3
        with:
          java-version: '17'
      - name: Build with Maven
        run: mvn clean package
  `,
      },
      {
        type: "point",
        text: "This GitHub Actions workflow sets up a JDK environment, checks out the code, and builds the project using Maven. You can extend this workflow to include deployment steps as needed.",
      },
  ],
  module16: [
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Module 16: Java Development Tools",
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 16.1: Using IDEs for Java Development",
    },
    {
      type: "point",
      text: "Setting up and using popular IDEs.",
    },
    {
      type: "point",
      text: "Integrated Development Environments (IDEs) streamline Java development by providing tools for coding, debugging, and project management.",
    },
    {
      type: "point",
      text: "Popular IDEs include IntelliJ IDEA and Eclipse. Here’s how to set up a Java project in these IDEs:",
    },
    {
      type: "example",
      code: `// IntelliJ IDEA setup example
// 1. Download and install IntelliJ IDEA from https://www.jetbrains.com/idea/
// 2. Open IntelliJ IDEA and select "New Project"
// 3. Choose "Java" and configure project SDK (ensure JDK is installed)
// 4. Click "Next" and then "Finish" to create the project
// 5. Add a new Java class by right-clicking on the "src" directory and selecting "New" -> "Java Class"
// 6. Write and run Java code by clicking the green play button or using the Run menu

// Eclipse setup example
// 1. Download and install Eclipse IDE for Java Developers from https://www.eclipse.org/downloads/
// 2. Open Eclipse and select "File" -> "New" -> "Java Project"
// 3. Enter a project name and click "Finish"
// 4. Right-click on the "src" folder, select "New" -> "Class" to create a new Java class
// 5. Write and run Java code by right-clicking on the file and selecting "Run As" -> "Java Application"
  `,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 16.2: Build Tools",
    },
    {
      type: "point",
      text: "Introduction to Maven and Gradle.",
    },
    {
      type: "point",
      text: "Build tools automate the build process, manage dependencies, and facilitate project management. Maven and Gradle are two popular build tools in the Java ecosystem.",
    },
    {
      type: "point",
      text: "Here's a basic overview of how to use Maven and Gradle:",
    },
    {
      type: "example",
      code: `// Maven example
// Maven uses a file named pom.xml to configure the project, manage dependencies, and define the build process.
// Example pom.xml configuration:

<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/POM/4.0.0">

  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>my-app</artifactId>
  <version>1.0-SNAPSHOT</version>

  <dependencies>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter-api</artifactId>
      <version>5.7.0</version>
      <scope>test</scope>
    </dependency>
  </dependencies>

</project>

// Gradle example
// Gradle uses a file named build.gradle for project configuration and dependency management.
// Example build.gradle configuration:

plugins {
  id 'java'
}

repositories {
  mavenCentral()
}

dependencies {
  testImplementation 'org.junit.jupiter:junit-jupiter-api:5.7.0'
}
  `,
    },
    {
      type: "point",
      text: `Maven and Gradle handle dependencies and build configurations differently:`,
    },
    {
      type: "point",
      text: `- Maven uses XML for its configuration and has a lifecycle model with predefined phases.`,
    },
    {
      type: "point",
      text: `- Gradle uses a Groovy or Kotlin DSL for configuration and provides more flexibility with its build scripts.`,
    },
    {
      type: "header",
      level: 3,
      text: "Lesson 16.3: Version Control Systems",
    },
    {
      type: "point",
      text: "Version control systems (VCS) like Git help manage code changes and collaborate with other developers.",
    },
    {
      type: "point",
      text: "Git is the most widely used VCS, and platforms like GitHub, GitLab, and Bitbucket facilitate remote repository hosting and collaboration.",
    },
    {
      type: "example",
      code: `// Basic Git commands
// Initialize a Git repository
git init

// Add files to staging area
git add .

// Commit changes
git commit -m "Initial commit"

// Create a new branch
git branch feature-branch

// Switch to the new branch
git checkout feature-branch

// Push changes to a remote repository
git push origin feature-branch
`,
    },
    {
      type: "point",
      text: `Git commands are essential for version control:`,
    },
    {
      type: "point",
      text: `- ' git init ' : Initializes a new Git repository.`,
    },
    {
      type: "point",
      text: `- ' git add . ' : Stages all changes for the next commit.`,
    },
    {
      type: "point",
      text: `- ' git commit -m "message" ' : Commits changes with a message.`,
    },
    {
      type: "point",
      text: `- ' git branch branch-name ' : Creates a new branch.`,
    },
    {
      type: "point",
      text: `- ' git checkout branch-name ' : Switches to the specified branch.`,
    },
    {
      type: "point",
      text: `- ' git push origin branch-name ' : Pushes commits to the remote repository.`,
    },
    
  ],

  project1:[
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Project 1: Simple Calculator",
    },
    {
      type: "point",
      text: "Create a command-line calculator that can perform basic arithmetic operations like addition, subtraction, multiplication, and division.",
    },
    {
      type: "example",
      code: `import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("Choose an operation: +, -, *, / or type 'exit' to quit:");
            String operation = scanner.next();

            if (operation.equals("exit")) {
                break;
            }

            System.out.print("Enter the first number: ");
            double num1 = scanner.nextDouble();
            System.out.print("Enter the second number: ");
            double num2 = scanner.nextDouble();

            double result = 0;
            boolean validOperation = true;

            switch (operation) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    if (num2 != 0) {
                        result = num1 / num2;
                    } else {
                        System.out.println("Error: Division by zero.");
                        validOperation = false;
                    }
                    break;
                default:
                    System.out.println("Invalid operation.");
                    validOperation = false;
            }

            if (validOperation) {
                System.out.println("Result: " + result);
            }
        }
        scanner.close();
    }
}
`,
    },
  ],
  project2:[
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Project 2: Todo List Application",
    },
    {
      type: "point",
      text: "Develop a simple to-do list application where users can add, remove, and view tasks.",
    },
    {
      type: "example",
      code: `import java.util.ArrayList;
import java.util.Scanner;

public class TodoListApp {
    private static ArrayList<String> todoList = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("Choose an option: add, remove, view, or exit:");
            String option = scanner.next();

            if (option.equals("exit")) {
                break;
            }

            switch (option) {
                case "add":
                    System.out.println("Enter a task to add:");
                    scanner.nextLine(); // Consume the newline
                    String task = scanner.nextLine();
                    todoList.add(task);
                    System.out.println("Task added.");
                    break;
                case "remove":
                    System.out.println("Enter the task number to remove:");
                    int index = scanner.nextInt() - 1;
                    if (index >= 0 && index < todoList.size()) {
                        todoList.remove(index);
                        System.out.println("Task removed.");
                    } else {
                        System.out.println("Invalid task number.");
                    }
                    break;
                case "view":
                    System.out.println("Todo List:");
                    for (int i = 0; i < todoList.size(); i++) {
                        System.out.println((i + 1) + ". " + todoList.get(i));
                    }
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        }
        scanner.close();
    }
}
`,
    },
  ],
  project3:[
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Project 3: Currency Converter",
    },
    {
      type: "point",
      text: "Develop a program that converts one currency to another based on user input.",
    },
    {
      type: "example",
      code: `import java.util.Scanner;

public class CurrencyConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Hardcoded exchange rates (for simplicity)
        double usdToEurRate = 0.85;
        double eurToUsdRate = 1.18;

        while (true) {
            System.out.println("Currency Converter");
            System.out.println("1: USD to EUR");
            System.out.println("2: EUR to USD");
            System.out.println("Type 'exit' to quit.");
            String choice = scanner.next();

            if (choice.equals("exit")) {
                break;
            }

            double amount = 0;
            double convertedAmount = 0;

            switch (choice) {
                case "1":
                    System.out.print("Enter amount in USD: ");
                    amount = scanner.nextDouble();
                    convertedAmount = amount * usdToEurRate;
                    System.out.printf("Converted amount in EUR: %.2f", convertedAmount);
                    break;
                case "2":
                    System.out.print("Enter amount in EUR: ");
                    amount = scanner.nextDouble();
                    convertedAmount = amount * eurToUsdRate;
                    System.out.printf("Converted amount in USD: %.2f", convertedAmount);
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        }
        scanner.close();
    }
}
`,
    },
  ],
  project4:[
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Project 4: Tic-Tac-Toe Game",
    },
    {
      type: "point",
      text: "Build a simple Tic-Tac-Toe game that two players can play on the command line.",
    },
    {
      type: "example",
      code: `import java.util.Scanner;

public class TicTacToe {
    private static char[][] board = {{' ', ' ', ' '}, {' ', ' ', ' '}, {' ', ' ', ' '}};
    private static char currentPlayer = 'X';

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean gameWon = false;

        while (true) {
            printBoard();
            int[] move = getPlayerMove(scanner);
            board[move[0]][move[1]] = currentPlayer;

            if (checkWin()) {
                gameWon = true;
                break;
            }

            if (isBoardFull()) {
                break;
            }

            currentPlayer = (currentPlayer == 'X') ? 'O' : 'X'; // Switch player
        }

        printBoard();
        if (gameWon) {
            System.out.println("Player " + currentPlayer + " wins!");
        } else {
            System.out.println("It's a tie!");
        }

        scanner.close();
    }

    private static void printBoard() {
        System.out.println("  0 1 2");
        for (int i = 0; i < 3; i++) {
            System.out.print(i + " ");
            for (int j = 0; j < 3; j++) {
                System.out.print(board[i][j]);
                if (j < 2) System.out.print("|");
            }
            System.out.println();
            if (i < 2) System.out.println("  -----");
        }
    }

    private static int[] getPlayerMove(Scanner scanner) {
        int row, col;
        while (true) {
            System.out.println("Player " + currentPlayer + ", enter your move (row and column): ");
            row = scanner.nextInt();
            col = scanner.nextInt();
            if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] == ' ') {
                break;
            } else {
                System.out.println("This move is not valid. Try again.");
            }
        }
        return new int[]{row, col};
    }

    private static boolean checkWin() {
        // Check rows, columns, and diagonals
        return (checkRowColDiag(board[0][0], board[0][1], board[0][2]) ||
                checkRowColDiag(board[1][0], board[1][1], board[1][2]) ||
                checkRowColDiag(board[2][0], board[2][1], board[2][2]) ||
                checkRowColDiag(board[0][0], board[1][0], board[2][0]) ||
                checkRowColDiag(board[0][1], board[1][1], board[2][1]) ||
                checkRowColDiag(board[0][2], board[1][2], board[2][2]) ||
                checkRowColDiag(board[0][0], board[1][1], board[2][2]) ||
                checkRowColDiag(board[0][2], board[1][1], board[2][0]));
    }

    private static boolean checkRowColDiag(char c1, char c2, char c3) {
        return (c1 == c2 && c2 == c3 && c1 != ' ');
    }

    private static boolean isBoardFull() {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[i][j] == ' ') {
                    return false;
                }
            }
        }
        return true;
    }
}
`,
    },
  ],
  project5:[
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Project 5: Basic Inventory Management System",
    },
    {
      type: "point",
      text: "Create a simple inventory system to manage products in a store, where users can add, remove, and view items.",
    },
    {
      type: "example",
      code: `import java.util.ArrayList;
import java.util.Scanner;

class Product {
    private String name;
    private int quantity;
    private double price;

    public Product(String name, int quantity, double price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    @Override
    public String toString() {
        return "Product Name: " + name + ", Quantity: " + quantity + ", Price: $" + price;
    }
}

public class InventoryManagementSystem {
    private static ArrayList<Product> inventory = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Inventory Management System");
            System.out.println("1. Add Product");
            System.out.println("2. View Products");
            System.out.println("3. Remove Product");
            System.out.println("4. Exit");
            System.out.print("Choose an option: ");
            int option = scanner.nextInt();

            switch (option) {
                case 1:
                    addProduct(scanner);
                    break;
                case 2:
                    viewProducts();
                    break;
                case 3:
                    removeProduct(scanner);
                    break;
                case 4:
                    System.out.println("Exiting the system.");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid option. Please try again.");
            }
        }
    }

    private static void addProduct(Scanner scanner) {
        System.out.print("Enter product name: ");
        scanner.nextLine(); // Consume newline
        String name = scanner.nextLine();
        System.out.print("Enter quantity: ");
        int quantity = scanner.nextInt();
        System.out.print("Enter price: ");
        double price = scanner.nextDouble();

        inventory.add(new Product(name, quantity, price));
        System.out.println("Product added successfully.");
    }

    private static void viewProducts() {
        if (inventory.isEmpty()) {
            System.out.println("No products in inventory.");
        } else {
            System.out.println("Inventory:");
            for (Product product : inventory) {
                System.out.println(product);
            }
        }
    }

    private static void removeProduct(Scanner scanner) {
        System.out.print("Enter the name of the product to remove: ");
        scanner.nextLine(); // Consume newline
        String name = scanner.nextLine();

        boolean removed = inventory.removeIf(product -> product.getName().equalsIgnoreCase(name));
        if (removed) {
            System.out.println("Product removed successfully.");
        } else {
            System.out.println("Product not found.");
        }
    }
}
`,
    },
  ],
  project6:[
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Project 6: Advanced Inventory Management System with User Authentication",
    },
    {
      type: "point",
      text: "Create a more advanced inventory management system where users can add, remove, view, and update products. The system should include user authentication and role-based access (admin and regular user). Data should be saved and loaded from a file.",
    },
    {
      type: "example",
      code: `import java.io.*;
import java.util.ArrayList;
import java.util.Scanner;

// User class for authentication
class User {
    private String username;
    private String password;
    private boolean isAdmin;

    public User(String username, String password, boolean isAdmin) {
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }

    public String getUsername() {
        return username;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public boolean authenticate(String password) {
        return this.password.equals(password);
    }
}

// Product class
class Product implements Serializable {
    private String name;
    private int quantity;
    private double price;

    public Product(String name, int quantity, double price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    @Override
    public String toString() {
        return "Product Name: " + name + ", Quantity: " + quantity + ", Price: $" + price;
    }
}

// Inventory Management System
public class AdvancedInventoryManagementSystem {
    private static ArrayList<Product> inventory = new ArrayList<>();
    private static ArrayList<User> users = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        loadInventory();
        createDefaultUsers();

        User loggedInUser = authenticateUser(scanner);
        if (loggedInUser == null) {
            System.out.println("Authentication failed. Exiting.");
            return;
        }

        while (true) {
            System.out.println("Advanced Inventory Management System");
            System.out.println("1. Add Product");
            System.out.println("2. View Products");
            System.out.println("3. Remove Product");
            System.out.println("4. Update Product");
            System.out.println("5. Save & Exit");
            System.out.print("Choose an option: ");
            int option = scanner.nextInt();

            switch (option) {
                case 1:
                    if (loggedInUser.isAdmin()) {
                        addProduct(scanner);
                    } else {
                        System.out.println("Access denied. Only admins can add products.");
                    }
                    break;
                case 2:
                    viewProducts();
                    break;
                case 3:
                    if (loggedInUser.isAdmin()) {
                        removeProduct(scanner);
                    } else {
                        System.out.println("Access denied. Only admins can remove products.");
                    }
                    break;
                case 4:
                    if (loggedInUser.isAdmin()) {
                        updateProduct(scanner);
                    } else {
                        System.out.println("Access denied. Only admins can update products.");
                    }
                    break;
                case 5:
                    saveInventory();
                    System.out.println("Exiting and saving the system.");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid option. Please try again.");
            }
        }
    }

    private static void createDefaultUsers() {
        users.add(new User("admin", "admin123", true));
        users.add(new User("user", "user123", false));
    }

    private static User authenticateUser(Scanner scanner) {
        System.out.print("Enter username: ");
        String username = scanner.next();
        System.out.print("Enter password: ");
        String password = scanner.next();

        for (User user : users) {
            if (user.getUsername().equals(username) && user.authenticate(password)) {
                System.out.println("Authentication successful. Welcome, " + username);
                return user;
            }
        }
        return null;
    }

    private static void addProduct(Scanner scanner) {
        System.out.print("Enter product name: ");
        scanner.nextLine(); // Consume newline
        String name = scanner.nextLine();
        System.out.print("Enter quantity: ");
        int quantity = scanner.nextInt();
        System.out.print("Enter price: ");
        double price = scanner.nextDouble();

        inventory.add(new Product(name, quantity, price));
        System.out.println("Product added successfully.");
    }

    private static void viewProducts() {
        if (inventory.isEmpty()) {
            System.out.println("No products in inventory.");
        } else {
            System.out.println("Inventory:");
            for (Product product : inventory) {
                System.out.println(product);
            }
        }
    }

    private static void removeProduct(Scanner scanner) {
        System.out.print("Enter the name of the product to remove: ");
        scanner.nextLine(); // Consume newline
        String name = scanner.nextLine();

        boolean removed = inventory.removeIf(product -> product.getName().equalsIgnoreCase(name));
        if (removed) {
            System.out.println("Product removed successfully.");
        } else {
            System.out.println("Product not found.");
        }
    }

    private static void updateProduct(Scanner scanner) {
        System.out.print("Enter the name of the product to update: ");
        scanner.nextLine(); // Consume newline
        String name = scanner.nextLine();

        for (Product product : inventory) {
            if (product.getName().equalsIgnoreCase(name)) {
                System.out.print("Enter new quantity: ");
                int quantity = scanner.nextInt();
                System.out.print("Enter new price: ");
                double price = scanner.nextDouble();

                product.setQuantity(quantity);
                product.setPrice(price);
                System.out.println("Product updated successfully.");
                return;
            }
        }
        System.out.println("Product not found.");
    }

    private static void loadInventory() {
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("inventory.dat"))) {
            inventory = (ArrayList<Product>) ois.readObject();
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("No saved inventory found. Starting fresh.");
        }
    }

    private static void saveInventory() {
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("inventory.dat"))) {
            oos.writeObject(inventory);
        } catch (IOException e) {
            System.out.println("Error saving inventory.");
        }
    }
}
`,
    },
  ],
  project7:[
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Project 7: Online Exam System",
    },
    {
      type: "point",
      text: "Develop an online exam system where teachers can add questions, and students can take tests. The questions should be stored using JSON, and the system should support multithreading for exam timers. Testing should be done using JUnit.",
    },
    {
      type: "example",
      code: `import javax.swing.*;
import java.awt.*;
import java.io.*;
import java.util.*;
import java.util.List;
import org.json.*;
import java.util.concurrent.*;

// Question class for managing questions
class Question {
    private String questionText;
    private List<String> options;
    private int correctOption;

    public Question(String questionText, List<String> options, int correctOption) {
        this.questionText = questionText;
        this.options = options;
        this.correctOption = correctOption;
    }

    public String getQuestionText() {
        return questionText;
    }

    public List<String> getOptions() {
        return options;
    }

    public int getCorrectOption() {
        return correctOption;
    }

    public JSONObject toJSON() {
        JSONObject json = new JSONObject();
        json.put("questionText", questionText);
        json.put("options", options);
        json.put("correctOption", correctOption);
        return json;
    }

    public static Question fromJSON(JSONObject json) {
        String questionText = json.getString("questionText");
        List<String> options = new ArrayList<>();
        JSONArray optionsArray = json.getJSONArray("options");
        for (int i = 0; i < optionsArray.length(); i++) {
            options.add(optionsArray.getString(i));
        }
        int correctOption = json.getInt("correctOption");
        return new Question(questionText, options, correctOption);
    }
}

// ExamSystem class to manage the system
public class OnlineExamSystem {
    private static List<Question> questions = new ArrayList<>();
    private static String questionFile = "questions.json";

    public static void main(String[] args) {
        loadQuestions();

        JFrame frame = new JFrame("Online Exam System");
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JPanel panel = new JPanel();
        frame.add(panel);
        placeComponents(panel);
        frame.setVisible(true);
    }

    private static void placeComponents(JPanel panel) {
        panel.setLayout(null);

        JLabel userLabel = new JLabel("Username:");
        userLabel.setBounds(10, 20, 80, 25);
        panel.add(userLabel);

        JTextField userText = new JTextField(20);
        userText.setBounds(100, 20, 165, 25);
        panel.add(userText);

        JButton teacherButton = new JButton("Teacher");
        teacherButton.setBounds(10, 80, 150, 25);
        panel.add(teacherButton);

        JButton studentButton = new JButton("Student");
        studentButton.setBounds(10, 110, 150, 25);
        panel.add(studentButton);

        teacherButton.addActionListener(e -> {
            String username = userText.getText();
            if (username.equalsIgnoreCase("teacher")) {
                openTeacherPanel();
            } else {
                JOptionPane.showMessageDialog(null, "Access denied. Only teachers can add questions.");
            }
        });

        studentButton.addActionListener(e -> {
            String username = userText.getText();
            if (username.equalsIgnoreCase("student")) {
                openStudentPanel();
            } else {
                JOptionPane.showMessageDialog(null, "Access denied. Only students can take exams.");
            }
        });
    }

    // Teacher Panel to add questions
    private static void openTeacherPanel() {
        JFrame teacherFrame = new JFrame("Teacher - Add Questions");
        teacherFrame.setSize(400, 300);
        JPanel panel = new JPanel();
        teacherFrame.add(panel);
        panel.setLayout(new GridLayout(5, 2));

        JTextField questionText = new JTextField();
        panel.add(new JLabel("Question:"));
        panel.add(questionText);

        JTextField option1 = new JTextField();
        panel.add(new JLabel("Option 1:"));
        panel.add(option1);

        JTextField option2 = new JTextField();
        panel.add(new JLabel("Option 2:"));
        panel.add(option2);

        JTextField option3 = new JTextField();
        panel.add(new JLabel("Option 3:"));
        panel.add(option3);

        JTextField correctOption = new JTextField();
        panel.add(new JLabel("Correct Option (1/2/3):"));
        panel.add(correctOption);

        JButton addButton = new JButton("Add Question");
        addButton.addActionListener(e -> {
            String qText = questionText.getText();
            List<String> options = Arrays.asList(option1.getText(), option2.getText(), option3.getText());
            int correct = Integer.parseInt(correctOption.getText());

            questions.add(new Question(qText, options, correct));
            saveQuestions();
            JOptionPane.showMessageDialog(null, "Question added successfully.");
        });
        panel.add(addButton);

        teacherFrame.setVisible(true);
    }

    // Student Panel to take exams
    private static void openStudentPanel() {
        JFrame studentFrame = new JFrame("Student - Take Exam");
        studentFrame.setSize(400, 300);
        JPanel panel = new JPanel();
        studentFrame.add(panel);
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));

        for (Question question : questions) {
            panel.add(new JLabel(question.getQuestionText()));

            ButtonGroup group = new ButtonGroup();
            for (String option : question.getOptions()) {
                JRadioButton button = new JRadioButton(option);
                group.add(button);
                panel.add(button);
            }
        }

        JButton submitButton = new JButton("Submit");
        panel.add(submitButton);

        // Timer with multithreading
        ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
        scheduler.schedule(() -> {
            JOptionPane.showMessageDialog(null, "Time's up!");
            studentFrame.dispose();
        }, 5, TimeUnit.MINUTES);

        submitButton.addActionListener(e -> {
            JOptionPane.showMessageDialog(null, "Exam Submitted!");
            studentFrame.dispose();
            scheduler.shutdownNow();
        });

        studentFrame.setVisible(true);
    }

    // Load questions from JSON file
    private static void loadQuestions() {
        try (BufferedReader reader = new BufferedReader(new FileReader(questionFile))) {
            StringBuilder jsonText = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                jsonText.append(line);
            }
            JSONArray jsonArray = new JSONArray(jsonText.toString());
            for (int i = 0; i < jsonArray.length(); i++) {
                questions.add(Question.fromJSON(jsonArray.getJSONObject(i)));
            }
        } catch (IOException e) {
            System.out.println("Error loading questions: " + e.getMessage());
        }
    }

    // Save questions to JSON file
    private static void saveQuestions() {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(questionFile))) {
            JSONArray jsonArray = new JSONArray();
            for (Question question : questions) {
                jsonArray.put(question.toJSON());
            }
            writer.write(jsonArray.toString());
        } catch (IOException e) {
            System.out.println("Error saving questions: " + e.getMessage());
        }
    }
}
`,
    },
  ],
  project8:[
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Project 8: Online Course Management System",
    },
    {
      type: "point",
      text: "Develop an online course management system where teachers can create courses, upload materials, assign quizzes or assignments, and track student progress. Students can view materials, complete quizzes, and see their progress.",
    },
    {
      type: "example",
      code: `import javax.swing.*;
import java.awt.*;
import java.io.*;
import java.util.*;
import org.json.*;
import java.util.concurrent.*;

class Course {
    private String courseName;
    private String courseMaterial;
    private List<String> assignments;
    private List<String> quizzes;

    public Course(String courseName, String courseMaterial) {
        this.courseName = courseName;
        this.courseMaterial = courseMaterial;
        this.assignments = new ArrayList<>();
        this.quizzes = new ArrayList<>();
    }

    public String getCourseName() {
        return courseName;
    }

    public String getCourseMaterial() {
        return courseMaterial;
    }

    public void addAssignment(String assignment) {
        assignments.add(assignment);
    }

    public void addQuiz(String quiz) {
        quizzes.add(quiz);
    }

    public List<String> getAssignments() {
        return assignments;
    }

    public List<String> getQuizzes() {
        return quizzes;
    }

    public JSONObject toJSON() {
        JSONObject json = new JSONObject();
        json.put("courseName", courseName);
        json.put("courseMaterial", courseMaterial);
        json.put("assignments", assignments);
        json.put("quizzes", quizzes);
        return json;
    }

    public static Course fromJSON(JSONObject json) {
        String courseName = json.getString("courseName");
        String courseMaterial = json.getString("courseMaterial");
        Course course = new Course(courseName, courseMaterial);

        JSONArray assignmentArray = json.getJSONArray("assignments");
        for (int i = 0; i < assignmentArray.length(); i++) {
            course.addAssignment(assignmentArray.getString(i));
        }

        JSONArray quizArray = json.getJSONArray("quizzes");
        for (int i = 0; i < quizArray.length(); i++) {
            course.addQuiz(quizArray.getString(i));
        }

        return course;
    }
}

// Main class for Online Course Management
public class OnlineCourseManagementSystem {
    private static List<Course> courses = new ArrayList<>();
    private static String coursesFile = "courses.json";

    public static void main(String[] args) {
        loadCourses();

        JFrame frame = new JFrame("Online Course Management System");
        frame.setSize(500, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JPanel panel = new JPanel();
        frame.add(panel);
        placeComponents(panel);
        frame.setVisible(true);
    }

    private static void placeComponents(JPanel panel) {
        panel.setLayout(null);

        JLabel userLabel = new JLabel("Username:");
        userLabel.setBounds(10, 20, 80, 25);
        panel.add(userLabel);

        JTextField userText = new JTextField(20);
        userText.setBounds(100, 20, 165, 25);
        panel.add(userText);

        JButton teacherButton = new JButton("Teacher");
        teacherButton.setBounds(10, 80, 150, 25);
        panel.add(teacherButton);

        JButton studentButton = new JButton("Student");
        studentButton.setBounds(10, 110, 150, 25);
        panel.add(studentButton);

        teacherButton.addActionListener(e -> {
            String username = userText.getText();
            if (username.equalsIgnoreCase("teacher")) {
                openTeacherPanel();
            } else {
                JOptionPane.showMessageDialog(null, "Access denied. Only teachers can manage courses.");
            }
        });

        studentButton.addActionListener(e -> {
            String username = userText.getText();
            if (username.equalsIgnoreCase("student")) {
                openStudentPanel();
            } else {
                JOptionPane.showMessageDialog(null, "Access denied. Only students can view courses.");
            }
        });
    }

    // Teacher panel to create courses and upload materials
    private static void openTeacherPanel() {
        JFrame teacherFrame = new JFrame("Teacher - Manage Courses");
        teacherFrame.setSize(400, 300);
        JPanel panel = new JPanel();
        teacherFrame.add(panel);
        panel.setLayout(new GridLayout(5, 2));

        JTextField courseNameField = new JTextField();
        panel.add(new JLabel("Course Name:"));
        panel.add(courseNameField);

        JTextField courseMaterialField = new JTextField();
        panel.add(new JLabel("Course Material:"));
        panel.add(courseMaterialField);

        JButton addCourseButton = new JButton("Add Course");
        addCourseButton.addActionListener(e -> {
            String courseName = courseNameField.getText();
            String courseMaterial = courseMaterialField.getText();

            Course course = new Course(courseName, courseMaterial);
            courses.add(course);
            saveCourses();
            JOptionPane.showMessageDialog(null, "Course added successfully.");
        });
        panel.add(addCourseButton);

        JButton manageCoursesButton = new JButton("Manage Courses");
        manageCoursesButton.addActionListener(e -> openManageCoursesPanel());
        panel.add(manageCoursesButton);

        teacherFrame.setVisible(true);
    }

    // Manage existing courses (assignments and quizzes)
    private static void openManageCoursesPanel() {
        JFrame manageFrame = new JFrame("Teacher - Manage Existing Courses");
        manageFrame.setSize(400, 300);
        JPanel panel = new JPanel();
        manageFrame.add(panel);
        panel.setLayout(new GridLayout(4, 2));

        JComboBox<String> courseComboBox = new JComboBox<>();
        for (Course course : courses) {
            courseComboBox.addItem(course.getCourseName());
        }
        panel.add(new JLabel("Select Course:"));
        panel.add(courseComboBox);

        JTextField assignmentField = new JTextField();
        panel.add(new JLabel("New Assignment:"));
        panel.add(assignmentField);

        JButton addAssignmentButton = new JButton("Add Assignment");
        addAssignmentButton.addActionListener(e -> {
            String selectedCourseName = (String) courseComboBox.getSelectedItem();
            String assignment = assignmentField.getText();
            courses.stream()
                    .filter(c -> c.getCourseName().equals(selectedCourseName))
                    .findFirst()
                    .ifPresent(c -> c.addAssignment(assignment));
            saveCourses();
            JOptionPane.showMessageDialog(null, "Assignment added successfully.");
        });
        panel.add(addAssignmentButton);

        JTextField quizField = new JTextField();
        panel.add(new JLabel("New Quiz:"));
        panel.add(quizField);

        JButton addQuizButton = new JButton("Add Quiz");
        addQuizButton.addActionListener(e -> {
            String selectedCourseName = (String) courseComboBox.getSelectedItem();
            String quiz = quizField.getText();
            courses.stream()
                    .filter(c -> c.getCourseName().equals(selectedCourseName))
                    .findFirst()
                    .ifPresent(c -> c.addQuiz(quiz));
            saveCourses();
            JOptionPane.showMessageDialog(null, "Quiz added successfully.");
        });
        panel.add(addQuizButton);

        manageFrame.setVisible(true);
    }

    // Student panel to view courses and track progress
    private static void openStudentPanel() {
        JFrame studentFrame = new JFrame("Student - View Courses");
        studentFrame.setSize(400, 300);
        JPanel panel = new JPanel();
        studentFrame.add(panel);
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));

        for (Course course : courses) {
            JLabel courseLabel = new JLabel("Course: " + course.getCourseName());
            panel.add(courseLabel);

            JLabel materialLabel = new JLabel("Material: " + course.getCourseMaterial());
            panel.add(materialLabel);

            JButton viewAssignmentsButton = new JButton("View Assignments");
            panel.add(viewAssignmentsButton);
            viewAssignmentsButton.addActionListener(e -> {
                JOptionPane.showMessageDialog(null, "Assignments: " + course.getAssignments());
            });

            JButton viewQuizzesButton = new JButton("View Quizzes");
            panel.add(viewQuizzesButton);
            viewQuizzesButton.addActionListener(e -> {
                JOptionPane.showMessageDialog(null, "Quizzes: " + course.getQuizzes());
            });
        }

        studentFrame.setVisible(true);
    }

    // Load courses from JSON file
    private static void loadCourses() {
        try (BufferedReader reader = new BufferedReader(new FileReader(coursesFile))) {
            StringBuilder jsonText = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                jsonText.append(line);
            }
            JSONArray jsonArray = new JSONArray(jsonText.toString());
            for (int i = 0; i < jsonArray.length(); i++) {
                courses.add(Course.fromJSON(jsonArray.getJSONObject(i)));
            }
        } catch (IOException e) {
            System.out.println("Error loading courses: " + e.getMessage());
        }
    }

    // Save courses to JSON file
    private static void saveCourses() {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(coursesFile))) {
            JSONArray jsonArray = new JSONArray();
            for (Course course : courses) {
                jsonArray.put(course.to
                jsonArray.put(course.toJSON());
            }
            writer.write(jsonArray.toString());
        } catch (IOException e) {
            System.out.println("Error saving courses: " + e.getMessage());
        }
    }
}
`,
    },
    {
      type: "header",
      level: 3,
      text: "Example JSON Structure:",
    },
    {
      type: "example",
      code: `
[
    {
        "courseName": "Introduction to Programming",
        "courseMaterial": "ProgrammingBasics.pdf",
        "assignments": ["Assignment 1", "Assignment 2"],
        "quizzes": ["Quiz 1", "Quiz 2"]
    },
    {
        "courseName": "Data Structures",
        "courseMaterial": "DataStructures.pdf",
        "assignments": ["Assignment 1"],
        "quizzes": ["Quiz 1"]
    }
]

      `,
    }
  ],
  project9:[
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Project 9: Fitness Tracker Application",
    },
    {
      type: "point",
      text: "Develop a fitness tracker application that allows users to log their activities, set fitness goals, track health metrics, and receive exercise routine suggestions.",
    },
    {
      type: "example",
      code: `import javax.swing.*;
import java.awt.*;
import java.io.*;
import java.util.*;
import org.json.*;

class User {
    private String name;
    private int age;
    private double weight;
    private double height;
    private List<Activity> activities;

    public User(String name, int age, double weight, double height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.activities = new ArrayList<>();
    }

    public void addActivity(Activity activity) {
        activities.add(activity);
    }

    public List<Activity> getActivities() {
        return activities;
    }

    public JSONObject toJSON() {
        JSONObject json = new JSONObject();
        json.put("name", name);
        json.put("age", age);
        json.put("weight", weight);
        json.put("height", height);
        
        JSONArray activityArray = new JSONArray();
        for (Activity activity : activities) {
            activityArray.put(activity.toJSON());
        }
        json.put("activities", activityArray);
        return json;
    }

    public static User fromJSON(JSONObject json) {
        String name = json.getString("name");
        int age = json.getInt("age");
        double weight = json.getDouble("weight");
        double height = json.getDouble("height");
        
        User user = new User(name, age, weight, height);
        JSONArray activityArray = json.getJSONArray("activities");
        for (int i = 0; i < activityArray.length(); i++) {
            user.addActivity(Activity.fromJSON(activityArray.getJSONObject(i)));
        }
        return user;
    }
}

class Activity {
    private String name;
    private int duration; // in minutes
    private int caloriesBurned;

    public Activity(String name, int duration, int caloriesBurned) {
        this.name = name;
        this.duration = duration;
        this.caloriesBurned = caloriesBurned;
    }

    public JSONObject toJSON() {
        JSONObject json = new JSONObject();
        json.put("name", name);
        json.put("duration", duration);
        json.put("caloriesBurned", caloriesBurned);
        return json;
    }

    public static Activity fromJSON(JSONObject json) {
        String name = json.getString("name");
        int duration = json.getInt("duration");
        int caloriesBurned = json.getInt("caloriesBurned");
        return new Activity(name, duration, caloriesBurned);
    }

    @Override
    public String toString() {
        return name + " - Duration: " + duration + " mins, Calories Burned: " + caloriesBurned;
    }
}

// Main class for Fitness Tracker Application
public class FitnessTrackerApplication {
    private static User user;
    private static String userFile = "user.json";

    public static void main(String[] args) {
        loadUser();

        JFrame frame = new JFrame("Fitness Tracker Application");
        frame.setSize(500, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JPanel panel = new JPanel();
        frame.add(panel);
        placeComponents(panel);
        frame.setVisible(true);
    }

    private static void placeComponents(JPanel panel) {
        panel.setLayout(null);

        JLabel nameLabel = new JLabel("Name:");
        nameLabel.setBounds(10, 20, 80, 25);
        panel.add(nameLabel);

        JTextField nameField = new JTextField(user.getName());
        nameField.setBounds(100, 20, 165, 25);
        panel.add(nameField);

        JButton addActivityButton = new JButton("Add Activity");
        addActivityButton.setBounds(10, 80, 150, 25);
        panel.add(addActivityButton);

        JButton viewActivitiesButton = new JButton("View Activities");
        viewActivitiesButton.setBounds(10, 110, 150, 25);
        panel.add(viewActivitiesButton);

        addActivityButton.addActionListener(e -> {
            String activityName = JOptionPane.showInputDialog("Enter activity name:");
            int duration = Integer.parseInt(JOptionPane.showInputDialog("Enter duration in minutes:"));
            int caloriesBurned = Integer.parseInt(JOptionPane.showInputDialog("Enter calories burned:"));

            Activity activity = new Activity(activityName, duration, caloriesBurned);
            user.addActivity(activity);
            saveUser();
            JOptionPane.showMessageDialog(null, "Activity added successfully.");
        });

        viewActivitiesButton.addActionListener(e -> {
            StringBuilder activitiesList = new StringBuilder("Activities:\n");
            for (Activity activity : user.getActivities()) {
                activitiesList.append(activity).append("\\n");
            }
            JOptionPane.showMessageDialog(null, activitiesList.toString());
        });
    }

    // Load user data from JSON file
    private static void loadUser() {
        try (BufferedReader reader = new BufferedReader(new FileReader(userFile))) {
            StringBuilder jsonText = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                jsonText.append(line);
            }
            JSONObject json = new JSONObject(jsonText.toString());
            user = User.fromJSON(json);
        } catch (IOException e) {
            System.out.println("Error loading user data: " + e.getMessage());
            user = new User("Default User", 25, 70.0, 175.0); // Default user if not found
        }
    }

    // Save user data to JSON file
    private static void saveUser() {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(userFile))) {
            writer.write(user.toJSON().toString());
        } catch (IOException e) {
            System.out.println("Error saving user data: " + e.getMessage());
        }
    }
}
`,
    },
  ],
  project10:[
    {
      type: 'margin'
    },
    {
      type: "header",
      level: 2,
      text: "Project 10: Job Portal with Resume Parsing",
    },
    {
      type: "point",
      text: "Develop a job portal that enables job seekers to upload their resumes, which are then automatically parsed to extract relevant information and matched with job listings.",
    },
    {
      type: "example",
      code: `import javax.swing.*;
import java.awt.*;
import java.io.*;
import java.util.*;
import org.json.*;
import java.util.regex.*;

class JobListing {
    private String title;
    private String description;
    private String company;
    
    public JobListing(String title, String description, String company) {
        this.title = title;
        this.description = description;
        this.company = company;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getCompany() {
        return company;
    }

    public JSONObject toJSON() {
        JSONObject json = new JSONObject();
        json.put("title", title);
        json.put("description", description);
        json.put("company", company);
        return json;
    }

    public static JobListing fromJSON(JSONObject json) {
        return new JobListing(json.getString("title"), json.getString("description"), json.getString("company"));
    }
}

class ResumeParser {
    public static Map<String, String> parseResume(String resumeText) {
        Map<String, String> parsedData = new HashMap<>();

        // Example regex patterns for name and email
        String namePattern = "Name: (.+)";
        String emailPattern = "Email: (\\S+@\\S+\\.\\S+)";
        
        Matcher nameMatcher = Pattern.compile(namePattern).matcher(resumeText);
        Matcher emailMatcher = Pattern.compile(emailPattern).matcher(resumeText);

        if (nameMatcher.find()) {
            parsedData.put("name", nameMatcher.group(1));
        }
        if (emailMatcher.find()) {
            parsedData.put("email", emailMatcher.group(1));
        }

        return parsedData;
    }
}

// Main class for Job Portal
public class JobPortal {
    private static List<JobListing> jobListings = new ArrayList<>();
    private static String jobListingsFile = "job_listings.json";

    public static void main(String[] args) {
        loadJobListings();

        JFrame frame = new JFrame("Job Portal");
        frame.setSize(500, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JPanel panel = new JPanel();
        frame.add(panel);
        placeComponents(panel);
        frame.setVisible(true);
    }

    private static void placeComponents(JPanel panel) {
        panel.setLayout(null);

        JButton uploadResumeButton = new JButton("Upload Resume");
        uploadResumeButton.setBounds(10, 20, 150, 25);
        panel.add(uploadResumeButton);

        JButton viewJobListingsButton = new JButton("View Job Listings");
        viewJobListingsButton.setBounds(10, 60, 150, 25);
        panel.add(viewJobListingsButton);

        uploadResumeButton.addActionListener(e -> {
            JFileChooser fileChooser = new JFileChooser();
            int returnValue = fileChooser.showOpenDialog(null);
            if (returnValue == JFileChooser.APPROVE_OPTION) {
                File file = fileChooser.getSelectedFile();
                String resumeText = readResumeFile(file);
                Map<String, String> parsedData = ResumeParser.parseResume(resumeText);
                JOptionPane.showMessageDialog(null, "Parsed Data: " + parsedData);
            }
        });

        viewJobListingsButton.addActionListener(e -> {
            StringBuilder jobListingsList = new StringBuilder("Job Listings:\n");
            for (JobListing job : jobListings) {
                jobListingsList.append(job.getTitle()).append(" at ").append(job.getCompany()).append("\\n");
            }
            JOptionPane.showMessageDialog(null, jobListingsList.toString());
        });
    }

    // Load job listings from JSON file
    private static void loadJobListings() {
        try (BufferedReader reader = new BufferedReader(new FileReader(jobListingsFile))) {
            StringBuilder jsonText = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                jsonText.append(line);
            }
            JSONArray jsonArray = new JSONArray(jsonText.toString());
            for (int i = 0; i < jsonArray.length(); i++) {
                jobListings.add(JobListing.fromJSON(jsonArray.getJSONObject(i)));
            }
        } catch (IOException e) {
            System.out.println("Error loading job listings: " + e.getMessage());
        }
    }

    // Read resume file and return its content as a string
    private static String readResumeFile(File file) {
        StringBuilder resumeText = new StringBuilder();
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = br.readLine()) != null) {
                resumeText.append(line).append("\\n");
            }
        } catch (IOException e) {
            System.out.println("Error reading resume file: " + e.getMessage());
        }
        return resumeText.toString();
    }
}
`,
    },
    {
      type: "header",
      level: 3,
      text: "Example Resume Format:",
    },
    {
      type: "example",
      code: `
Name: John Doe
Email: john.doe@example.com

Experience:
- Software Engineer at Tech Company A
- Data Analyst at Data Company B
      `,
    }
  ],
};
