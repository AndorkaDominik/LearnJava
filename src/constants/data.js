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

module17: [
    {
        type: 'margin'
    },
    {
        type: "header",
        level: 2,
        text: "Module 17: Introduction to Spring Boot",
    },
    {
        type: "header",
        level: 3,
        text: "Lesson 17.1: What is Spring Boot?",
    },
    {
        type: "point",
        text: "Spring Boot is an open-source Java-based framework used to create stand-alone, production-grade Spring applications quickly and easily.",
    },
    {
        type: "point",
        text: "Simplifies dependency management and configuration.",
    },
    {
        type: "point",
        text: "Uses embedded servers such as Tomcat or Jetty to run applications without requiring external servers.",
    },
    {
        type: "example",
        code: `// Hello World with Spring Boot
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class HelloWorldApplication {
    public static void main(String[] args) {
        SpringApplication.run(HelloWorldApplication.class, args);
    }
}

@RestController
class HelloWorldController {
    @GetMapping("/")
    public String hello() {
        return "Hello, Spring Boot!";
    }
}`,
    },
    {
        type: "header",
        level: 3,
        text: "Lesson 17.2: Features of Spring Boot",
    },
    {
        type: "point",
        text: "Provides a wide range of features like auto-configuration, embedded servers, and production-ready tools.",
    },
    {
        type: "point",
        text: "Supports microservices architecture.",
    },
    {
        type: "example",
        code: `// Enabling Auto-Configuration
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

// Auto-configures components such as:
// - DataSource for databases
// - Message queues like RabbitMQ
// - Embedded servers like Tomcat`,
    },
    {
        type: "point",
        text: "Production-ready features like health checks, metrics, and monitoring.",
    },
    {
        type: "example",
        code: `// Enabling Actuator for Monitoring
import org.springframework.boot.actuate.autoconfigure.endpoint.web.WebEndpointProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MonitoringApplication {
    public static void main(String[] args) {
        SpringApplication.run(MonitoringApplication.class, args);
    }
}

// Use actuator endpoints like:
// - /actuator/health
// - /actuator/metrics`,
    },
    {
        type: "header",
        level: 3,
        text: "Lesson 17.3: Setting Up Spring Boot",
    },
    {
        type: "point",
        text: "Install Java Development Kit (JDK) and Integrated Development Environment (IDE) like IntelliJ IDEA or Eclipse.",
    },
    {
        type: "point",
        text: "Use Spring Initializr to create a Spring Boot project with required dependencies.",
    },
    {
        type: "example",
        code: `// Steps to create a Spring Boot project using Spring Initializr:
// 1. Visit https://start.spring.io/
// 2. Choose "Maven Project" or "Gradle Project".
// 3. Select Java as the language.
// 4. Add dependencies (e.g., Spring Web, Spring Data JPA).
// 5. Generate the project and import it into your IDE.`,
    },
    {
        type: "point",
        text: "Run the application using the embedded server with `SpringApplication.run()`.",
    },
    {
        type: "example",
        code: `// Running a Spring Boot Application
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RunApplication {
    public static void main(String[] args) {
        SpringApplication.run(RunApplication.class, args);
    }
}

// Once the application starts, access it at:
// http://localhost:8080`,
    },
    {
        type: "header",
        level: 3,
        text: "Lesson 17.4: Understanding Dependencies in Spring Boot",
    },
    {
        type: "point",
        text: "Dependencies in Spring Boot are managed through Maven or Gradle build tools.",
    },
    {
        type: "example",
        code: `// Maven Dependencies for Spring Boot
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

// Gradle Dependencies for Spring Boot
implementation 'org.springframework.boot:spring-boot-starter-web'
implementation 'org.springframework.boot:spring-boot-starter-data-jpa'`,
    },
    {
        type: "point",
        text: "Spring Boot Starter dependencies simplify configuration and include all necessary libraries.",
    },
    {
        type: "example",
        code: `// Spring Boot Starter Web includes:
// - Spring MVC
// - Jackson JSON processing
// - Embedded Tomcat

// Just include one dependency:
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>`,
    },
],

module18: [
  {
    type: 'margin'
  },
  {
    type: "header",
    level: 2,
    text: "Module 18: Setting Up a Spring Boot Project and Understanding Annotations & Configuration",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 18.1: Introduction to Spring Boot",
  },
  {
    type: "point",
    text: "Spring Boot simplifies the development of Java applications by providing default configurations and minimizing boilerplate code.",
  },
  {
    type: "point",
    text: "It integrates with the Spring Framework, offering embedded servers, auto-configuration, and a production-ready environment.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 18.2: Setting Up a Spring Boot Project",
  },
  {
    type: "point",
    text: "You can create a Spring Boot project using Spring Initializr or manually through Maven or Gradle.",
  },
  {
    type: "example",
    code: `// Example: Using Spring Initializr
// 1. Go to https://start.spring.io/
// 2. Choose your project settings:
//    - Project: Maven
//    - Language: Java
//    - Spring Boot Version: 3.x.x (latest stable)
//    - Dependencies: Spring Web, Spring Data JPA, H2 Database
// 3. Download the generated project.
// 4. Open it in your favorite IDE (e.g., IntelliJ IDEA, Eclipse).
`,
  },
  {
    type: "point",
    text: "To run the project, use the command `mvn spring-boot:run` or the IDE's built-in tools.",
  },
  {
    type: "example",
    code: `// Running a Spring Boot application
// Navigate to the project directory and execute the following:
mvn spring-boot:run

// Alternatively, run the application using the main method in the generated Application class:
public static void main(String[] args) {
  SpringApplication.run(MyApplication.class, args);
}`,
  },
  {
    type: "point",
    text: "Spring Boot projects are structured with default folders like `src/main/java`, `src/main/resources`, and `src/test` for a clear separation of code and resources.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 18.3: Spring Boot Annotations and Configuration",
  },
  {
    type: "point",
    text: "Annotations in Spring Boot simplify the configuration process by reducing XML-based configuration.",
  },
  {
    type: "point",
    text: "@SpringBootApplication is a combination of three annotations: @Configuration, @EnableAutoConfiguration, and @ComponentScan.",
  },
  {
    type: "example",
    code: `// Example: @SpringBootApplication
@SpringBootApplication
public class MyApplication {
  public static void main(String[] args) {
    SpringApplication.run(MyApplication.class, args);
  }
}`,
  },
  {
    type: "point",
    text: "Other commonly used annotations include @Component, @Service, @Repository, and @Controller.",
  },
  {
    type: "example",
    code: `// Example: Using @Component
@Component
public class MyComponent {
  public String sayHello() {
    return "Hello from MyComponent!";
  }
}

// Using @Controller for handling HTTP requests
@Controller
public class MyController {
  @RequestMapping("/hello")
  @ResponseBody
  public String hello() {
    return "Hello, World!";
  }
}`,
  },
  {
    type: "point",
    text: "Spring Boot uses application.properties or application.yml files for configuring application settings, such as server port and database connections.",
  },
  {
    type: "example",
    code: `# Example: application.properties
server.port=8081
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password`,
  },
  {
    type: "point",
    text: "Profiles can be used to define environment-specific configurations. Use @Profile annotation to activate configurations for specific environments (e.g., dev, prod).",
  },
  {
    type: "example",
    code: `// Example: Using @Profile
@Configuration
@Profile("dev")
public class DevConfig {
  @Bean
  public String devBean() {
    return "Development Bean";
  }
}

@Configuration
@Profile("prod")
public class ProdConfig {
  @Bean
  public String prodBean() {
    return "Production Bean";
  }
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 18.4: Auto-Configuration",
  },
  {
    type: "point",
    text: "Spring Boot's @EnableAutoConfiguration enables automatic configuration based on the project's dependencies.",
  },
  {
    type: "example",
    code: `// Example: Auto-Configuration
@SpringBootApplication
public class MyApplication {
  // Spring Boot will auto-configure a default DataSource bean
  public static void main(String[] args) {
    SpringApplication.run(MyApplication.class, args);
  }
}`,
  },
  {
    type: "point",
    text: "You can exclude unwanted auto-configurations using exclude or excludeName attributes.",
  },
  {
    type: "example",
    code: `// Example: Excluding auto-configuration
@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class MyApplication {
  public static void main(String[] args) {
    SpringApplication.run(MyApplication.class, args);
  }
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 18.5: Dependency Injection in Spring Boot",
  },
  {
    type: "point",
    text: "Dependency Injection (DI) is a core feature of the Spring Framework that simplifies object creation and dependency management.",
  },
  {
    type: "point",
    text: "Spring Boot uses annotations like @Autowired and @Qualifier to inject dependencies into beans.",
  },
  {
    type: "example",
    code: `// Example: @Autowired for Dependency Injection
  @Component
  public class GreetingService {
    public String getGreeting() {
      return "Hello, Dependency Injection!";
    }
  }

  @RestController
  public class GreetingController {
    private final GreetingService greetingService;

    @Autowired
    public GreetingController(GreetingService greetingService) {
      this.greetingService = greetingService;
    }

    @GetMapping("/greet")
    public String greet() {
      return greetingService.getGreeting();
    }
  }`,
  },
  {
    type: "point",
    text: "Use @Qualifier to specify which bean to inject when multiple beans of the same type exist.",
  },
  {
    type: "example",
    code: `// Example: Using @Qualifier
  @Component("morningGreeting")
  public class MorningGreetingService implements GreetingService {
    public String getGreeting() {
      return "Good morning!";
    }
  }

  @Component("eveningGreeting")
  public class EveningGreetingService implements GreetingService {
    public String getGreeting() {
      return "Good evening!";
    }
  }

  @RestController
  public class GreetingController {
    private final GreetingService greetingService;

    @Autowired
    public GreetingController(@Qualifier("morningGreeting") GreetingService greetingService) {
      this.greetingService = greetingService;
    }

    @GetMapping("/greet")
    public String greet() {
      return greetingService.getGreeting();
    }
  }`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 18.6: Monitoring and Actuators",
  },
  {
    type: "point",
    text: "Spring Boot Actuator provides production-ready features to monitor and manage your application.",
  },
  {
    type: "point",
    text: "Add the `spring-boot-starter-actuator` dependency to enable Actuator endpoints.",
  },
  {
    type: "example",
    code: `// Example: Adding Actuator to your project
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
  </dependency>`,
  },
  {
    type: "point",
    text: "By default, Actuator enables several endpoints such as /actuator/health, /actuator/metrics, and /actuator/info.",
  },
  {
    type: "example",
    code: `# Example: application.properties for Actuator
  management.endpoints.web.exposure.include=health,info,metrics

  # Customizing the /info endpoint
  info.app.name=My Spring Boot App
  info.app.version=1.0.0
  info.app.description=An example of using Spring Boot Actuator`,
  },
  {
    type: "point",
    text: "Use tools like Prometheus and Grafana for advanced monitoring and visualization by integrating with Actuator's metrics endpoints.",
  },
  {
    type: "example",
    code: `// Example: Accessing Actuator Endpoints
  // After running the application, visit the following URLs:
  // - Health: http://localhost:8080/actuator/health
  // - Metrics: http://localhost:8080/actuator/metrics
  // - Info: http://localhost:8080/actuator/info`,
  },

],

module19: [
  {
    type: "margin",
  },
  {
    type: "header",
    level: 2,
    text: "Module 19: Dependency Injection and Spring Context",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 19.1: What is Dependency Injection (DI)?",
  },
  {
    type: "point",
    text: "Dependency Injection (DI) is a design pattern that allows objects to be loosely coupled by providing their dependencies from an external source rather than the object creating them itself.",
  },
  {
    type: "point",
    text: "Spring uses DI to manage the lifecycle and configuration of objects, simplifying application development.",
  },
  {
    type: "example",
    code: `// Without Dependency Injection
public class UserService {
  private UserRepository userRepository = new UserRepository(); // tightly coupled
}

// With Dependency Injection
public class UserService {
  private UserRepository userRepository;
  
  // Dependency injected via constructor
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 19.2: Types of Dependency Injection in Spring",
  },
  {
    type: "point",
    text: "Spring supports three types of dependency injection: Constructor Injection, Setter Injection, and Field Injection.",
  },
  {
    type: "point",
    text: "Constructor Injection: Dependencies are injected through the constructor of the class.",
  },
  {
    type: "example",
    code: `// Example: Constructor Injection
@Component
public class UserService {
  private final UserRepository userRepository;
  
  @Autowired
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }
}`,
  },
  {
    type: "point",
    text: "Setter Injection: Dependencies are injected through a setter method.",
  },
  {
    type: "example",
    code: `// Example: Setter Injection
@Component
public class UserService {
  private UserRepository userRepository;
  
  @Autowired
  public void setUserRepository(UserRepository userRepository) {
    this.userRepository = userRepository;
  }
}`,
  },
  {
    type: "point",
    text: "Field Injection: Dependencies are injected directly into the fields using the @Autowired annotation.",
  },
  {
    type: "example",
    code: `// Example: Field Injection
@Component
public class UserService {
  @Autowired
  private UserRepository userRepository;
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 19.3: Spring Context",
  },
  {
    type: "point",
    text: "The Spring Context is the central interface for accessing the Spring container, which manages the lifecycle of beans and their dependencies.",
  },
  {
    type: "point",
    text: "ApplicationContext is a subinterface of the BeanFactory, providing more advanced container capabilities like event propagation and AOP integration.",
  },
  {
    type: "example",
    code: `// Example: Using ApplicationContext
@SpringBootApplication
public class MyApplication {
  public static void main(String[] args) {
    ApplicationContext context = SpringApplication.run(MyApplication.class, args);
    
    // Accessing a bean from the context
    UserService userService = context.getBean(UserService.class);
    System.out.println(userService.getUserDetails());
  }
}`,
  },
  {
    type: "point",
    text: "Beans in the Spring Context can be defined through annotations (@Component, @Service, @Repository) or XML configuration.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 19.4: Bean Scopes in Spring",
  },
  {
    type: "point",
    text: "Spring supports different bean scopes to define the lifecycle of a bean within the application context.",
  },
  {
    type: "point",
    text: "Common scopes include: singleton (default), prototype, request, session, and application.",
  },
  {
    type: "example",
    code: `// Example: Defining Bean Scope
@Component
@Scope("prototype")
public class PrototypeBean {
  public String getMessage() {
    return "This is a prototype-scoped bean!";
  }
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 19.5: @Autowired and @Qualifier",
  },
  {
    type: "point",
    text: "The @Autowired annotation is used for automatic dependency injection by type.",
  },
  {
    type: "point",
    text: "The @Qualifier annotation is used to resolve conflicts when multiple beans of the same type are available.",
  },
  {
    type: "example",
    code: `// Example: Using @Autowired and @Qualifier
@Component
public class MyService {
  @Autowired
  @Qualifier("specificBean")
  private MyBean myBean;
}`,
  },
],

module20: [
  {
    type: "margin",
  },
  {
    type: "header",
    level: 2,
    text: "Module 20: Creating RESTful APIs with Spring Boot",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 20.1: Understanding RESTful APIs",
  },
  {
    type: "point",
    text: "REST (Representational State Transfer) is an architectural style for designing networked applications.",
  },
  {
    type: "point",
    text: "A RESTful API uses HTTP methods like GET, POST, PUT, and DELETE to perform CRUD operations on resources.",
  },
  {
    type: "point",
    text: "Spring Boot simplifies the creation of RESTful APIs with annotations and built-in support for HTTP handling.",
  },
  {
    type: "example",
    code: `// Basic REST Controller
@RestController
@RequestMapping("/api")
public class HelloController {
  
  @GetMapping("/hello")
  public String sayHello() {
    return "Hello, World!";
  }
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 20.2: Creating a RESTful API",
  },
  {
    type: "point",
    text: "Use the @RestController annotation to mark a class as a REST controller.",
  },
  {
    type: "point",
    text: "Define endpoints using @RequestMapping and HTTP method-specific annotations like @GetMapping, @PostMapping, @PutMapping, and @DeleteMapping.",
  },
  {
    type: "example",
    code: `// Example: CRUD operations for a User resource
@RestController
@RequestMapping("/api/users")
public class UserController {
  
  private List<User> users = new ArrayList<>();

  @GetMapping
  public List<User> getAllUsers() {
    return users;
  }

  @PostMapping
  public User createUser(@RequestBody User user) {
    users.add(user);
    return user;
  }

  @PutMapping("/{id}")
  public User updateUser(@PathVariable int id, @RequestBody User updatedUser) {
    users.set(id, updatedUser);
    return updatedUser;
  }

  @DeleteMapping("/{id}")
  public String deleteUser(@PathVariable int id) {
    users.remove(id);
    return "User deleted successfully!";
  }
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 20.3: Handling Path Variables and Query Parameters",
  },
  {
    type: "point",
    text: "Use @PathVariable to capture dynamic values from the URL path.",
  },
  {
    type: "point",
    text: "Use @RequestParam to handle query parameters passed in the URL.",
  },
  {
    type: "example",
    code: `// Example: Handling Path Variables and Query Parameters
@RestController
@RequestMapping("/api/greetings")
public class GreetingController {

  @GetMapping("/{name}")
  public String greet(@PathVariable String name, @RequestParam(required = false, defaultValue = "Hello") String prefix) {
    return prefix + ", " + name + "!";
  }
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 20.4: Returning JSON Responses",
  },
  {
    type: "point",
    text: "Spring Boot automatically converts Java objects to JSON using the Jackson library.",
  },
  {
    type: "example",
    code: `// Example: Returning JSON Response
@RestController
@RequestMapping("/api/users")
public class UserController {

  @GetMapping("/{id}")
  public User getUser(@PathVariable int id) {
    return new User(id, "John Doe", "john.doe@example.com");
  }
}

// User model
public class User {
  private int id;
  private String name;
  private String email;

  // Constructor, Getters, and Setters
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 20.5: Exception Handling in REST APIs",
  },
  {
    type: "point",
    text: "Use @ExceptionHandler to handle specific exceptions in a controller.",
  },
  {
    type: "point",
    text: "Create a global exception handler using @ControllerAdvice to handle exceptions across all controllers.",
  },
  {
    type: "example",
    code: `// Example: Global Exception Handling
@ControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(ResourceNotFoundException.class)
  public ResponseEntity<String> handleResourceNotFound(ResourceNotFoundException ex) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
  }
}

// Custom exception
public class ResourceNotFoundException extends RuntimeException {
  public ResourceNotFoundException(String message) {
    super(message);
  }
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 20.6: Testing RESTful APIs",
  },
  {
    type: "point",
    text: "Use tools like Postman or curl to manually test your APIs.",
  },
  {
    type: "point",
    text: "Automate API testing using JUnit and Spring Boot's MockMvc framework.",
  },
  {
    type: "example",
    code: `// Example: Testing with MockMvc
@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @Test
  public void testGetAllUsers() throws Exception {
    mockMvc.perform(get("/api/users"))
      .andExpect(status().isOk())
      .andExpect(jsonPath("$").isArray());
  }
}`,
  },
],

module21: [
  {
    type: "margin",
  },
  {
    type: "header",
    level: 2,
    text: "Module 21: Spring Boot and Database Integration",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 21.1: Introduction to Database Integration",
  },
  {
    type: "point",
    text: "Database integration in Spring Boot simplifies interaction with relational and non-relational databases. Spring Boot's auto-configuration and abstraction layers like JPA reduce boilerplate code.",
  },
  {
    type: "example",
    code: `// Example: Adding Database Dependencies in pom.xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
  <groupId>com.h2database</groupId>
  <artifactId>h2</artifactId>
  <scope>runtime</scope>
</dependency>`,
  },
  {
    type: "point",
    text: "Spring Boot supports common databases like MySQL, PostgreSQL, H2, and MongoDB. Use the correct dependencies for the database you plan to integrate.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 21.2: Configuring a DataSource",
  },
  {
    type: "point",
    text: "A DataSource is a factory for connections to a physical database. Spring Boot can configure it automatically, or you can configure it explicitly in `application.properties` or `application.yml`.",
  },
  {
    type: "example",
    code: `// Example: application.properties for H2 Database
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true`,
  },
  {
    type: "point",
    text: "For production databases like MySQL or PostgreSQL, replace H2 configurations with the appropriate database URL, username, and password.",
  },
  {
    type: "example",
    code: `// Example: application.properties for MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.username=root
spring.datasource.password=password`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 21.3: Using JPA and Hibernate",
  },
  {
    type: "point",
    text: "JPA (Java Persistence API) is a specification for ORM (Object-Relational Mapping). Hibernate is one of its most widely used implementations.",
  },
  {
    type: "example",
    code: `// Example: Annotating an Entity Class
@Entity
@Table(name = "users") // Optional: Maps the class to a specific table
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generate primary key
  private Long id;

  @Column(nullable = false) // Map fields to specific columns
  private String name;

  @Column(unique = true)
  private String email;

  // Constructors, Getters, and Setters
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 21.4: Creating Repositories",
  },
  {
    type: "point",
    text: "Spring Data JPA provides pre-built repository interfaces like `JpaRepository` and `CrudRepository` that abstract common operations like saving, finding, and deleting records.",
  },
  {
    type: "example",
    code: `// Example: Creating a User Repository
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  // Custom Query Method: Find users by name
  List<User> findByName(String name);

  // Custom Query Method: Find by email
  Optional<User> findByEmail(String email);
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 21.5: Database Initialization with Spring Boot",
  },
  {
    type: "point",
    text: "Spring Boot can initialize your database schema and data using SQL scripts or JPA schema generation. Place these scripts in the `resources` folder.",
  },
  {
    type: "example",
    code: `// Example: application.properties for Database Initialization
spring.sql.init.mode=always
spring.sql.init.schema-locations=classpath:schema.sql
spring.sql.init.data-locations=classpath:data.sql

// schema.sql
CREATE TABLE users (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);

// data.sql
INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com');
INSERT INTO users (name, email) VALUES ('Jane Smith', 'jane.smith@example.com');`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 21.6: Using Spring JDBC",
  },
  {
    type: "point",
    text: "Spring JDBC provides `JdbcTemplate` for executing SQL queries and mapping results. It is faster and less resource-intensive than ORM solutions like Hibernate.",
  },
  {
    type: "example",
    code: `// Example: Using JdbcTemplate to Query Users
@Autowired
private JdbcTemplate jdbcTemplate;

public List<User> findAllUsers() {
  String sql = "SELECT * FROM users";
  return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(User.class));
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 21.7: Transaction Management",
  },
  {
    type: "point",
    text: "Spring provides seamless transaction management with the `@Transactional` annotation. It ensures that a block of code runs within a transaction boundary.",
  },
  {
    type: "example",
    code: `// Example: Transactional Service
@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  @Transactional
  public void updateUserEmail(Long userId, String newEmail) {
    User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
    user.setEmail(newEmail);
    userRepository.save(user);
  }
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 21.8: Testing Database Integration",
  },
  {
    type: "point",
    text: "Spring Boot supports testing with in-memory databases like H2 or external tools like Testcontainers. These environments isolate tests from the production database.",
  },
  {
    type: "example",
    code: `// Example: Testing User Repository with H2 Database
@SpringBootTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)
public class UserRepositoryTest {

  @Autowired
  private UserRepository userRepository;

  @Test
  public void testFindByEmail() {
    Optional<User> user = userRepository.findByEmail("john.doe@example.com");
    Assertions.assertTrue(user.isPresent());
    Assertions.assertEquals("John Doe", user.get().getName());
  }
}`,
  },
],

module22: [
  {
    type: "margin",
  },
  {
    type: "header",
    level: 2,
    text: "Module 22: Spring Boot Security Basics",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 22.1: Introduction to Spring Security",
  },
  {
    type: "point",
    text: "Spring Security is a powerful and customizable authentication and access control framework for Java applications. It integrates seamlessly with Spring Boot to handle security aspects like authentication, authorization, and CSRF protection.",
  },
  {
    type: "example",
    code: `// Example: Adding Spring Security dependency in pom.xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>`,
  },
  {
    type: "point",
    text: "Spring Security provides built-in mechanisms for securing REST APIs, form-based login, and securing methods through annotations like `@PreAuthorize`.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 22.2: Basic Authentication with Spring Security",
  },
  {
    type: "point",
    text: "Basic Authentication is one of the simplest forms of authentication in Spring Security, where the client sends a username and password with each request.",
  },
  {
    type: "example",
    code: `// Example: Configuring Basic Authentication in Spring Security
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .authorizeRequests()
        .antMatchers("/public/**").permitAll() // Allowing public paths without authentication
        .anyRequest().authenticated() // All other requests require authentication
      .and()
      .httpBasic(); // Enable HTTP Basic Authentication
  }

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.inMemoryAuthentication()
      .withUser("user")
      .password("{noop}password") // No encoding for simplicity (use BCrypt in production)
      .roles("USER");
  }
}`,
  },
  {
    type: "point",
    text: "In this configuration, we enable Basic Authentication and configure a user with the username `user` and password `password` for testing purposes. `{noop}` is used to specify no password encoder (this is insecure for production).",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 22.3: Form-Based Authentication",
  },
  {
    type: "point",
    text: "Spring Security also supports form-based authentication. This allows the user to submit their username and password through an HTML form, and Spring Security will handle the authentication process.",
  },
  {
    type: "example",
    code: `// Example: Configuring Form-Based Authentication in Spring Security
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .authorizeRequests()
        .antMatchers("/login", "/register").permitAll() // Allowing public access to login and register pages
        .anyRequest().authenticated() // All other requests require authentication
      .and()
      .formLogin() // Enabling form-based login
        .loginPage("/login") // Custom login page URL
        .permitAll(); // Allowing public access to the login page
  }

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.inMemoryAuthentication()
      .withUser("user")
      .password("{noop}password") // No encoding for simplicity
      .roles("USER");
  }
}`,
  },
  {
    type: "point",
    text: "In this example, we configure a custom login page (`/login`) and allow public access to it. After successful login, users are redirected to the default page or the one they tried to access before login.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 22.4: Role-Based Authorization",
  },
  {
    type: "point",
    text: "Role-based access control (RBAC) is a method of restricting access based on user roles. In Spring Security, roles can be defined and used to authorize or restrict access to specific resources.",
  },
  {
    type: "example",
    code: `// Example: Role-Based Authorization
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .authorizeRequests()
        .antMatchers("/admin/**").hasRole("ADMIN") // Only ADMIN role can access /admin paths
        .antMatchers("/user/**").hasRole("USER") // Only USER role can access /user paths
        .anyRequest().authenticated() // All other requests require authentication
      .and()
      .formLogin();
  }

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.inMemoryAuthentication()
      .withUser("admin")
      .password("{noop}adminpassword")
      .roles("ADMIN")
      .and()
      .withUser("user")
      .password("{noop}userpassword")
      .roles("USER");
  }
}`,
  },
  {
    type: "point",
    text: "This configuration ensures that only users with the `ADMIN` role can access the `/admin/**` path and users with the `USER` role can access the `/user/**` path.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 22.5: Protecting REST APIs with JWT",
  },
  {
    type: "point",
    text: "JSON Web Tokens (JWT) are commonly used to secure REST APIs. Spring Security allows you to integrate JWT for stateless authentication. After successful login, a JWT is issued and must be included in the `Authorization` header of subsequent requests.",
  },
  {
    type: "example",
    code: `// Example: JWT Authentication Filter
public class JwtAuthenticationFilter extends OncePerRequestFilter {

  private final JwtTokenProvider jwtTokenProvider;

  public JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider) {
    this.jwtTokenProvider = jwtTokenProvider;
  }

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    String token = extractJwtFromRequest(request);

    if (token != null && jwtTokenProvider.validateToken(token)) {
      Authentication authentication = jwtTokenProvider.getAuthentication(token);
      SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    filterChain.doFilter(request, response);
  }

  private String extractJwtFromRequest(HttpServletRequest request) {
    String bearerToken = request.getHeader("Authorization");
    if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
      return bearerToken.substring(7);
    }
    return null;
  }
}`,
  },
  {
    type: "point",
    text: "In this example, a custom `JwtAuthenticationFilter` intercepts each request, extracts the JWT from the `Authorization` header, validates it, and sets the authentication context for the request.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 22.6: Customizing Authentication and Authorization",
  },
  {
    type: "point",
    text: "Spring Security provides many ways to customize authentication and authorization logic. You can define custom `UserDetailsService` for loading user-specific data or write custom authorization logic using annotations like `@PreAuthorize`.",
  },
  {
    type: "example",
    code: `// Example: Custom UserDetailsService Implementation
@Service
public class CustomUserDetailsService implements UserDetailsService {

  @Autowired
  private UserRepository userRepository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findByUsername(username)
      .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    
    return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), 
        AuthorityUtils.createAuthorityList(user.getRole()));
  }
}`,
  },
  {
    type: "point",
    text: "The custom `UserDetailsService` implementation loads user information from a database, maps it to Spring Security's `UserDetails` interface, and provides roles/authorities for authorization.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 22.7: Securing Method Calls with @PreAuthorize",
  },
  {
    type: "point",
    text: "Spring Security provides method-level security with annotations like `@PreAuthorize`. This allows you to restrict access to specific methods based on roles or permissions.",
  },
  {
    type: "example",
    code: `// Example: Using @PreAuthorize for Method-Level Security
@PreAuthorize("hasRole('ADMIN')")
public void deleteUser(Long userId) {
  // Only users with the ADMIN role can delete users
  userRepository.deleteById(userId);
}`,
  },
  {
    type: "point",
    text: "In this example, the method `deleteUser` is protected by the `@PreAuthorize` annotation, ensuring that only users with the `ADMIN` role can call it.",
  },
],

module23: [
  {
    type: "margin",
  },
  {
    type: "header",
    level: 2,
    text: "Module 23: Building Microservices with Spring Boot",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 23.1: Introduction to Microservices Architecture",
  },
  {
    type: "point",
    text: "Microservices is an architectural style where an application is composed of small, independently deployable services that communicate with each other over well-defined APIs. These services are loosely coupled and can be developed, deployed, and scaled independently.",
  },
  {
    type: "point",
    text: "Each microservice focuses on a specific business function and can be written in different languages, use different databases, and can be independently scaled.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 23.2: Setting Up a Spring Boot Microservice",
  },
  {
    type: "point",
    text: "To set up a Spring Boot microservice, you start with a basic Spring Boot application and configure it to expose RESTful endpoints. Each microservice should have its own isolated functionality.",
  },
  {
    type: "example",
    code: `// Example: Setting up a simple Spring Boot RESTful microservice
@SpringBootApplication
@RestController
public class ProductServiceApplication {

  public static void main(String[] args) {
    SpringApplication.run(ProductServiceApplication.class, args);
  }

  @GetMapping("/products")
  public List<Product> getAllProducts() {
    return Arrays.asList(new Product("Laptop", 1000), new Product("Smartphone", 800));
  }
}

// Product class
public class Product {
  private String name;
  private int price;

  // Constructor, getters and setters
  public Product(String name, int price) {
    this.name = name;
    this.price = price;
  }
  
  public String getName() { return name; }
  public int getPrice() { return price; }
}`,
  },
  {
    type: "point",
    text: "In this example, we create a simple Spring Boot microservice that exposes a `/products` endpoint. When a GET request is sent to this endpoint, it returns a list of products.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 23.3: Service Discovery with Eureka",
  },
  {
    type: "point",
    text: "Service Discovery is an important aspect of microservices architecture. Eureka, a service discovery tool by Netflix, is commonly used with Spring Cloud to enable services to discover each other dynamically at runtime.",
  },
  {
    type: "example",
    code: `// Example: Adding Eureka Server to the Application
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {

  public static void main(String[] args) {
    SpringApplication.run(EurekaServerApplication.class, args);
  }
}

// Eureka Client configuration in the microservice
@SpringBootApplication
@EnableEurekaClient
public class ProductServiceApplication {

  public static void main(String[] args) {
    SpringApplication.run(ProductServiceApplication.class, args);
  }
}`,
  },
  {
    type: "point",
    text: "In the example above, we have set up an Eureka Server with `@EnableEurekaServer` and a microservice with `@EnableEurekaClient` to register itself with the Eureka server.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 23.4: Communication Between Microservices with RestTemplate",
  },
  {
    type: "point",
    text: "Microservices often need to communicate with each other. `RestTemplate` is a Spring class used to perform HTTP requests to other services. We can use it to call other microservices from within our service.",
  },
  {
    type: "example",
    code: `// Example: Using RestTemplate to call another microservice
@Configuration
public class RestTemplateConfig {

  @Bean
  public RestTemplate restTemplate() {
    return new RestTemplate();
  }
}

@RestController
public class OrderService {

  @Autowired
  private RestTemplate restTemplate;

  @GetMapping("/order")
  public String placeOrder() {
    String productDetails = restTemplate.getForObject("http://product-service/products", String.class);
    return "Order placed for: " + productDetails;
  }
}`,
  },
  {
    type: "point",
    text: "In this example, the `OrderService` microservice uses `RestTemplate` to fetch product details from the `ProductService` microservice. The `@GetMapping` method makes an HTTP GET request to another service's endpoint.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 23.5: API Gateway with Spring Cloud Gateway",
  },
  {
    type: "point",
    text: "An API Gateway acts as an entry point for all microservices. It handles routing, load balancing, and security. Spring Cloud Gateway provides a simple and powerful way to route requests to microservices.",
  },
  {
    type: "example",
    code: `// Example: Setting up Spring Cloud Gateway
@SpringBootApplication
@EnableGateway
public class ApiGatewayApplication {

  public static void main(String[] args) {
    SpringApplication.run(ApiGatewayApplication.class, args);
  }

  @Bean
  public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
    return builder.routes()
      .route(r -> r.path("/product/**")
        .uri("lb://PRODUCT-SERVICE") // Load-balanced route to product service
        .id("productModule"))
      .build();
  }
}`,
  },
  {
    type: "point",
    text: "In the example, we configure Spring Cloud Gateway to route requests to `/product/**` to the `PRODUCT-SERVICE` microservice using service discovery. The `lb://` prefix indicates that the service is load-balanced and registered in Eureka.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 23.6: Externalized Configuration with Spring Cloud Config",
  },
  {
    type: "point",
    text: "Spring Cloud Config provides server and client-side support for externalized configuration in a microservices architecture. It allows services to retrieve their configuration from a central configuration server.",
  },
  {
    type: "example",
    code: `// Example: Config Server Setup
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {

  public static void main(String[] args) {
    SpringApplication.run(ConfigServerApplication.class, args);
  }
}

// Application config client setup
@Configuration
@EnableConfigClient
public class ConfigClientApplication {

  public static void main(String[] args) {
    SpringApplication.run(ConfigClientApplication.class, args);
  }
}`,
  },
  {
    type: "point",
    text: "Here, `ConfigServerApplication` acts as a configuration server, and the client applications use `@EnableConfigClient` to retrieve configuration from the server.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 23.7: Resilience with Spring Cloud Circuit Breaker",
  },
  {
    type: "point",
    text: "Resilience in microservices can be achieved using tools like circuit breakers. Spring Cloud Circuit Breaker integrates with libraries such as Resilience4j or Hystrix to handle service failures gracefully.",
  },
  {
    type: "example",
    code: `// Example: Using Resilience4j Circuit Breaker
@Bean
public CircuitBreakerFactory circuitBreakerFactory() {
  return new Resilience4JCircuitBreakerFactory();
}

public String callProductService() {
  CircuitBreaker circuitBreaker = circuitBreakerFactory.create("productService");
  return circuitBreaker.run(() -> restTemplate.getForObject("http://product-service/products", String.class), 
                            throwable -> "Product service is unavailable");
}`,
  },
  {
    type: "point",
    text: "The `callProductService` method demonstrates how to wrap a service call with a circuit breaker. If the service is down or fails, a fallback response is returned.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 23.8: Monitoring and Logging in Microservices",
  },
  {
    type: "point",
    text: "Monitoring and logging are critical in microservices to track performance, detect failures, and troubleshoot issues. Spring Boot integrates well with tools like Spring Boot Actuator and Sleuth for tracing and monitoring microservices.",
  },
  {
    type: "example",
    code: `// Example: Enabling Spring Boot Actuator for monitoring
@SpringBootApplication
@EnableActuator
public class MonitoringApplication {

  public static void main(String[] args) {
    SpringApplication.run(MonitoringApplication.class, args);
  }
}

management.endpoints.web.exposure.include=health,info,metrics`,
  },
  {
    type: "point",
    text: "By including Spring Boot Actuator, we can monitor the health, metrics, and other endpoints of our microservice. The `management.endpoints.web.exposure.include` configuration allows us to expose specific actuator endpoints for monitoring.",
  },
],

module24: [
  {
    type: "margin",
  },
  {
    type: "header",
    level: 2,
    text: "Module 24: Spring Boot Testing and Debugging",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 24.1: Introduction to Spring Boot Testing",
  },
  {
    type: "point",
    text: "Testing is essential in Spring Boot to ensure the application works as expected. Spring Boot provides various tools to test different layers of the application, such as unit testing, integration testing, and acceptance testing.",
  },
  {
    type: "point",
    text: "Spring Boot’s testing support is based on JUnit and integrates seamlessly with other testing frameworks like TestNG and Mockito.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 24.2: Unit Testing with JUnit and Mockito",
  },
  {
    type: "point",
    text: "Unit testing focuses on testing individual units of functionality in isolation, typically using mock objects to simulate dependencies. Mockito is commonly used for mocking dependencies in Spring Boot applications.",
  },
  {
    type: "example",
    code: `// Example: Unit Test with JUnit and Mockito
@RunWith(MockitoJUnitRunner.class)
public class ProductServiceTest {

  @Mock
  private ProductRepository productRepository;

  @InjectMocks
  private ProductService productService;

  @Test
  public void testGetProductById() {
    Product product = new Product(1L, "Laptop", 1000);
    Mockito.when(productRepository.findById(1L)).thenReturn(Optional.of(product));

    Product result = productService.getProductById(1L);
    
    assertNotNull(result);
    assertEquals("Laptop", result.getName());
  }
}`,
  },
  {
    type: "point",
    text: "In this example, we mock the `ProductRepository` dependency and inject it into the `ProductService`. The `@Test` annotation marks a method as a test, and `Mockito.when()` is used to simulate the repository's behavior.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 24.3: Integration Testing with @SpringBootTest",
  },
  {
    type: "point",
    text: "Integration testing involves testing the interaction between different layers or components of the application. Spring Boot makes integration testing easy with the `@SpringBootTest` annotation.",
  },
  {
    type: "example",
    code: `// Example: Integration Test with @SpringBootTest
@SpringBootTest
public class ProductControllerTest {

  @Autowired
  private ProductController productController;

  @Autowired
  private MockMvc mockMvc;

  @Test
  public void testGetProducts() throws Exception {
    mockMvc.perform(get("/products"))
           .andExpect(status().isOk())
           .andExpect(jsonPath("$[0].name").value("Laptop"));
  }
}`,
  },
  {
    type: "point",
    text: "The `@SpringBootTest` annotation tells Spring to load the full application context for testing. The `MockMvc` object is used to perform HTTP requests and assert the results, like checking the response status and content.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 24.4: Testing with @DataJpaTest for JPA Repositories",
  },
  {
    type: "point",
    text: "When testing Spring Data JPA repositories, you can use the `@DataJpaTest` annotation. It configures an embedded database and performs tests related to JPA repositories without starting the whole application context.",
  },
  {
    type: "example",
    code: `// Example: Repository Test with @DataJpaTest
@DataJpaTest
public class ProductRepositoryTest {

  @Autowired
  private ProductRepository productRepository;

  @Test
  public void testFindByName() {
    Product product = new Product("Laptop", 1000);
    productRepository.save(product);

    Product result = productRepository.findByName("Laptop");
    
    assertNotNull(result);
    assertEquals("Laptop", result.getName());
  }
}`,
  },
  {
    type: "point",
    text: "In this example, we use `@DataJpaTest` to test the repository layer, focusing on JPA functionality. The embedded database is used for saving and querying the `Product` entity.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 24.5: Testing Service Layer with MockBeans",
  },
  {
    type: "point",
    text: "In integration tests, sometimes you need to mock a service layer bean to isolate the test. You can use `@MockBean` to mock beans within the application context.",
  },
  {
    type: "example",
    code: `// Example: Mocking Service Layer Bean
@SpringBootTest
public class OrderServiceTest {

  @Autowired
  private OrderService orderService;

  @MockBean
  private ProductService productService;

  @Test
  public void testPlaceOrder() {
    Product product = new Product(1L, "Laptop", 1000);
    Mockito.when(productService.getProductById(1L)).thenReturn(product);

    String result = orderService.placeOrder(1L);
    
    assertEquals("Order placed for: Laptop", result);
  }
}`,
  },
  {
    type: "point",
    text: "In this example, the `ProductService` is mocked using `@MockBean`. The `orderService` method can then use the mocked service in the test, ensuring the unit is isolated.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 24.6: Debugging Spring Boot Applications",
  },
  {
    type: "point",
    text: "Debugging Spring Boot applications involves using standard debugging tools like breakpoints, logging, and debugging the application context. Spring Boot also has built-in features for tracing issues.",
  },
  {
    type: "point",
    text: "Common ways to debug Spring Boot applications include:",
  },
  {
    type: "list",
    list: [
      "Using `@Slf4j` or `Logger` for logging messages",
      "Setting breakpoints in the IDE and running the application in debug mode",
      "Using Spring Boot's `actuator` endpoints to monitor the application health and metrics",
      "Enabling debug-level logging by setting `logging.level.root=DEBUG` in `application.properties`"
    ],
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 24.7: Using Spring Boot Actuator for Monitoring and Debugging",
  },
  {
    type: "point",
    text: "Spring Boot Actuator provides several built-in endpoints to help with debugging, including `/health`, `/info`, and `/metrics`. These can give insights into the status of the application and performance.",
  },
  {
    type: "example",
    code: `// Example: Enabling Spring Boot Actuator
@SpringBootApplication
@EnableActuator
public class DebugApplication {

  public static void main(String[] args) {
    SpringApplication.run(DebugApplication.class, args);
  }
}

// application.properties
management.endpoints.web.exposure.include=health,info,metrics`,
  },
  {
    type: "point",
    text: "In this example, we enable Spring Boot Actuator and configure it to expose the health, info, and metrics endpoints. These endpoints can be used for debugging and monitoring the application.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 24.8: Test Coverage and Quality with Jacoco",
  },
  {
    type: "point",
    text: "Jacoco is a popular tool used to measure code coverage in Java projects. Integrating Jacoco with Spring Boot allows you to analyze test coverage and improve the quality of your tests.",
  },
  {
    type: "example",
    code: `// Example: Integrating Jacoco in Maven
<plugin>
  <groupId>org.jacoco</groupId>
  <artifactId>jacoco-maven-plugin</artifactId>
  <version>0.8.7</version>
  <executions>
    <execution>
      <goals>
        <goal>prepare-agent</goal>
      </goals>
    </execution>
  </executions>
</plugin>`,
  },
  {
    type: "point",
    text: "In this example, we configure Jacoco in the `pom.xml` to collect code coverage data during the test phase. This helps you monitor the effectiveness of your tests and ensures your application is thoroughly tested.",
  },
],

module25: [
  {
    type: "margin",
  },
  {
    type: "header",
    level: 2,
    text: "Module 25: Spring Boot and Thymeleaf",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 25.1: Introduction to Thymeleaf in Spring Boot",
  },
  {
    type: "point",
    text: "Thymeleaf is a modern server-side Java template engine for web and standalone environments. It is well-suited for use with Spring Boot for rendering dynamic web pages.",
  },
  {
    type: "point",
    text: "Thymeleaf integrates well with Spring Boot and provides a simple way to create dynamic web applications without the complexity of JavaServer Pages (JSP).",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 25.2: Setting Up Thymeleaf in Spring Boot",
  },
  {
    type: "point",
    text: "Setting up Thymeleaf in Spring Boot is easy, as it is included by default in Spring Boot's web starter. You don’t need to add any additional configuration.",
  },
  {
    type: "example",
    code: `// pom.xml dependency for Spring Boot and Thymeleaf
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
</dependencies>`,
  },
  {
    type: "point",
    text: "After adding the necessary dependencies, Thymeleaf templates should be placed in the `src/main/resources/templates` directory, and static resources like CSS and JavaScript in `src/main/resources/static`.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 25.3: Thymeleaf Template Syntax",
  },
  {
    type: "point",
    text: "Thymeleaf uses a simple and intuitive syntax. Most Thymeleaf expressions are wrapped in `${}` to indicate variables or expressions.",
  },
  {
    type: "example",
    code: `<!-- Example: Thymeleaf Template -->
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
  <title>Product List</title>
</head>
<body>
  <h1>Product List</h1>
  <ul>
    <li th:each="product : $ {products}" th:text="$ {product.name}">Product Name</li>
  </ul>
</body>
</html>`,
  },
  {
    type: "point",
    text: "In the example above, the `th:each` attribute is used to loop through a list of products. The `${product.name}` expression will dynamically display the name of each product in the list.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 25.4: Integrating Thymeleaf with Spring Boot Controllers",
  },
  {
    type: "point",
    text: "Thymeleaf templates are rendered by controllers in Spring Boot. A controller method can return a `String`, which corresponds to the name of the Thymeleaf template to render.",
  },
  {
    type: "example",
    code: `// Example: Spring Boot Controller
@Controller
public class ProductController {

  @Autowired
  private ProductService productService;

  @GetMapping("/products")
  public String getProducts(Model model) {
    List<Product> products = productService.getAllProducts();
    model.addAttribute("products", products);
    return "productList";  // This corresponds to the productList.html template
  }
}`,
  },
  {
    type: "point",
    text: "In this example, the `Model` is used to pass the list of products from the controller to the Thymeleaf template. The template name is `productList`, and it will be resolved to `productList.html` in the `templates` folder.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 25.5: Thymeleaf Expressions and Variables",
  },
  {
    type: "point",
    text: "Thymeleaf expressions allow you to output variables, conditionally render elements, and perform simple operations.",
  },
  {
    type: "example",
    code: `<!-- Example: Thymeleaf Expressions -->
<p th:text="'Hello, ' + $ {username}">Hello, user</p>
<p th:if="$ {user != null}" th:text="'Welcome ' + $ {user.name}">Welcome</p>`,
  },
  {
    type: "point",
    text: "In the example, `${username}` is rendered directly, while `th:if` is used to conditionally display a message if the `user` object is not null. Thymeleaf supports logical conditions and string concatenation.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 25.6: Thymeleaf Layouts and Fragments",
  },
  {
    type: "point",
    text: "Thymeleaf allows you to create reusable layouts and fragments to avoid code duplication. A fragment is a snippet of HTML that can be reused across multiple templates.",
  },
  {
    type: "example",
    code: `<!-- Example: Layout with Fragments -->
<!-- header.html -->
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
  <title>My Application</title>
</head>
<body>
  <div th:fragment="header">
    <h1>Welcome to My Application</h1>
  </div>
</body>
</html>`,
  },
  {
    type: "point",
    text: "In the example, the `header.html` template defines a fragment named `header`. You can include this fragment in other templates using the `th:replace` or `th:include` attributes.",
  },
  {
    type: "example",
    code: `<!-- Example: Using Fragment -->
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
  <title>Product List</title>
</head>
<body>
  <div th:replace="~{header}"></div>
  <h2>Product List</h2>
  <ul>
    <li th:each="product : $ {products}" th:text="$ {product.name}">Product Name</li>
  </ul>
</body>
</html>`,
  },
  {
    type: "point",
    text: "Here, the `th:replace` attribute is used to include the `header` fragment from the `header.html` template. This allows for modular code and easy reuse of common components like headers, footers, etc.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 25.7: Form Handling with Thymeleaf",
  },
  {
    type: "point",
    text: "Thymeleaf integrates seamlessly with Spring Boot for form handling. You can bind form fields to model attributes and process them easily in the controller.",
  },
  {
    type: "example",
    code: `<!-- Example: Thymeleaf Form -->
<form action="#" th:action="@{/products}" th:object="$ {product}" method="post">
  <label for="name">Product Name:</label>
  <input type="text" th:field="*{name}" />
  <label for="price">Product Price:</label>
  <input type="text" th:field="*{price}" />
  <button type="submit">Submit</button>
</form>`,
  },
  {
    type: "point",
    text: "In this form, the `th:action` attribute binds the form submission to a Spring controller endpoint, while `th:field` binds the form fields to the corresponding properties in the `product` model object.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 25.8: Error Handling with Thymeleaf",
  },
  {
    type: "point",
    text: "Thymeleaf also supports error handling in forms. You can display error messages for form fields by checking for validation errors in the model.",
  },
  {
    type: "example",
    code: `<!-- Example: Error Handling in Thymeleaf -->
<form action="#" th:action="@{/products}" th:object="$ {product}" method="post">
  <label for="name">Product Name:</label>
  <input type="text" th:field="*{name}" />
  <span th:if="$ {#fields.hasErrors('name')}" th:errors="*{name}"></span>
  <button type="submit">Submit</button>
</form>`,
  },
  {
    type: "point",
    text: "In this example, the `th:if` condition checks if there are validation errors for the `name` field, and `th:errors` displays the error message for that field.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 25.9: Internationalization (i18n) in Thymeleaf",
  },
  {
    type: "point",
    text: "Thymeleaf supports internationalization (i18n) by enabling language-specific messages through message bundles.",
  },
  {
    type: "example",
    code: `<!-- Example: Messages in Thymeleaf -->
<p th:text="#{product.name}">Product Name</p>`,
  },
  {
    type: "point",
    text: "In this example, the `#{product.name}` expression will look for the `product.name` key in the message properties files, allowing the template to be displayed in different languages based on the configured locale.",
  },
],

module26: [
  {
    type: "margin",
  },
  {
    type: "header",
    level: 2,
    text: "Module 26: Working with Spring Boot Actuator",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 26.1: Introduction to Spring Boot Actuator",
  },
  {
    type: "point",
    text: "Spring Boot Actuator is a powerful tool that provides production-ready features like monitoring, health checks, and metrics for Spring Boot applications.",
  },
  {
    type: "point",
    text: "It allows you to gain insights into your application’s health, environment, and performance without the need for additional tools or setup.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 26.2: Setting Up Spring Boot Actuator",
  },
  {
    type: "point",
    text: "To enable Spring Boot Actuator, add the `spring-boot-starter-actuator` dependency in your `pom.xml` or `build.gradle` file.",
  },
  {
    type: "example",
    code: `<!-- pom.xml Dependency for Spring Boot Actuator -->
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
  </dependency>
</dependencies>`,
  },
  {
    type: "point",
    text: "Once added, Spring Boot Actuator exposes various endpoints for health, metrics, environment details, and more.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 26.3: Actuator Endpoints Overview",
  },
  {
    type: "point",
    text: "Spring Boot Actuator provides several built-in endpoints to monitor and manage your application. Common endpoints include `/actuator/health`, `/actuator/metrics`, `/actuator/env`, and `/actuator/beans`.",
  },
  {
    type: "point",
    text: "You can view the health status of your application, metrics related to performance, and configuration properties through these endpoints.",
  },
  {
    type: "example",
    code: `# Example: Actuator Endpoint Configuration in application.properties
management.endpoints.web.exposure.include=health,metrics,env`,
  },
  {
    type: "point",
    text: "In this example, the `application.properties` configuration ensures that only the `health`, `metrics`, and `env` endpoints are exposed. By default, some endpoints are disabled for security reasons.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 26.4: Health Check Endpoint",
  },
  {
    type: "point",
    text: "The `/actuator/health` endpoint provides information about the health of your application, including database connection status, disk space, and custom health indicators.",
  },
  {
    type: "example",
    code: `<!-- Example: Health Check Response -->
$ curl http://localhost:8080/actuator/health
{
  "status": "UP",
  "components": {
    "diskSpace": {
      "status": "UP",
      "details": {
        "total": 1024,
        "free": 512,
        "threshold": 10485760
      }
    },
    "db": {
      "status": "UP"
    }
  }
}`,
  },
  {
    type: "point",
    text: "The health check will return a JSON response, indicating the overall health status (`UP`, `DOWN`, etc.), and detailed status for components like the database or disk space.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 26.5: Custom Health Checks",
  },
  {
    type: "point",
    text: "Spring Boot Actuator allows you to define custom health indicators if you want to monitor specific application components.",
  },
  {
    type: "example",
    code: `// Example: Custom Health Indicator
@Component
public class CustomHealthIndicator extends AbstractHealthIndicator {

    @Override
    protected void doHealthCheck(Health.Builder builder) throws Exception {
        // Custom health check logic
        builder.up().withDetail("CustomCheck", "Everything is fine");
    }
}`,
  },
  {
    type: "point",
    text: "In this example, the `CustomHealthIndicator` class extends `AbstractHealthIndicator` and provides custom logic to determine the health of the application. You can add custom checks for components like external services, queues, etc.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 26.6: Metrics Endpoint",
  },
  {
    type: "point",
    text: "The `/actuator/metrics` endpoint provides various metrics, such as JVM memory usage, HTTP request counts, garbage collection statistics, and more.",
  },
  {
    type: "example",
    code: `# Example: Metrics Endpoint
$ curl http://localhost:8080/actuator/metrics
{
  "mem": {
    "used": 123456,
    "free": 654321,
    "max": 987654
  },
  "http.server.requests": {
    "count": 125,
    "averageResponseTime": 200
  }
}`,
  },
  {
    type: "point",
    text: "The metrics endpoint returns a JSON response that includes system-related metrics like memory usage, request statistics, and more.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 26.7: Exposing Additional Endpoints",
  },
  {
    type: "point",
    text: "You can expose more actuator endpoints by modifying the `application.properties` file to include additional endpoints like `/actuator/logfile`, `/actuator/heapdump`, and `/actuator/threaddump`.",
  },
  {
    type: "example",
    code: `# Example: Exposing Additional Actuator Endpoints
management.endpoints.web.exposure.include=health,metrics,env,logfile,heapdump,threaddump`,
  },
  {
    type: "point",
    text: "This configuration will expose the log file, heap dump, and thread dump endpoints, providing deeper insights into the application’s status and performance.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 26.8: Securing Actuator Endpoints",
  },
  {
    type: "point",
    text: "Actuator endpoints often contain sensitive information, so securing them is important. Spring Boot supports security for actuator endpoints via HTTP basic authentication or other security mechanisms.",
  },
  {
    type: "example",
    code: `# Example: Securing Actuator Endpoints in application.properties
management.endpoints.web.exposure.include=health,metrics
management.endpoints.web.exposure.exclude=beans
spring.security.user.name=admin
spring.security.user.password=admin`,
  },
  {
    type: "point",
    text: "In this example, basic authentication is enabled for the actuator endpoints. Only users with the specified username and password can access the endpoints.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 26.9: Logfile and Log Management",
  },
  {
    type: "point",
    text: "The `/actuator/logfile` endpoint provides access to the application’s log file, which can be useful for debugging or monitoring the application in production.",
  },
  {
    type: "example",
    code: `# Example: Logfile Endpoint Access
$ curl http://localhost:8080/actuator/logfile
2024-12-28 12:30:12 INFO  ProductController - Product List Retrieved`,
  },
  {
    type: "point",
    text: "You can use the `/actuator/logfile` endpoint to read the application's log file. This is especially useful for debugging purposes or for monitoring application logs in production environments.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 26.10: Monitoring and Alerts with Actuator",
  },
  {
    type: "point",
    text: "You can use Spring Boot Actuator in combination with monitoring tools like Prometheus, Grafana, or Micrometer to create advanced monitoring and alerting systems.",
  },
  {
    type: "point",
    text: "Micrometer, a metrics collection library included with Spring Boot, can be integrated with Actuator to expose metrics to external monitoring systems like Prometheus.",
  },
  {
    type: "example",
    code: `# Example: Prometheus and Micrometer Setup
<dependency>
  <groupId>io.micrometer</groupId>
  <artifactId>micrometer-registry-prometheus</artifactId>
</dependency>`,
  },
  {
    type: "point",
    text: "By including the Prometheus registry in your project, you can configure Spring Boot Actuator to expose metrics in a format that Prometheus can scrape and visualize using Grafana.",
  },
],

module27: [
  {
    type: "margin",
  },
  {
    type: "header",
    level: 2,
    text: "Module 27: Deploying Spring Boot Applications",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 27.1: Introduction to Deployment Strategies",
  },
  {
    type: "point",
    text: "Deploying a Spring Boot application involves various strategies depending on the hosting environment, such as cloud platforms, virtual machines, or containerized environments.",
  },
  {
    type: "point",
    text: "Spring Boot makes it easy to deploy by packaging your application as a JAR or WAR file that can be executed independently or deployed to a web server like Tomcat or Jetty.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 27.2: Packaging Spring Boot Application as a JAR or WAR",
  },
  {
    type: "point",
    text: "Spring Boot supports both executable JAR and WAR files, with JAR being the default format. A JAR file contains everything needed to run your application, including dependencies, embedded servlet containers, and application code.",
  },
  {
    type: "point",
    text: "To package your Spring Boot application as a JAR or WAR, use Maven or Gradle. The `spring-boot-maven-plugin` simplifies this process.",
  },
  {
    type: "example",
    code: `<!-- Example: Packaging Spring Boot Application as a JAR in pom.xml -->
<build>
  <plugins>
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
    </plugin>
  </plugins>
</build>`,
  },
  {
    type: "point",
    text: "To build the JAR file, run `mvn clean install` in the terminal, and it will generate an executable JAR file that can be executed with `java -jar`.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 27.3: Deploying on a Virtual Machine (VM)",
  },
  {
    type: "point",
    text: "A virtual machine can be a cost-effective way to host your Spring Boot application, especially for smaller applications or development environments.",
  },
  {
    type: "point",
    text: "To deploy on a VM, copy the packaged JAR file to the remote server and run it using `java -jar`.",
  },
  {
    type: "example",
    code: `# Example: Deploying Spring Boot Application on a VM
scp target/myapp.jar user@remote-server:/path/to/deploy/
ssh user@remote-server
java -jar /path/to/deploy/myapp.jar`,
  },
  {
    type: "point",
    text: "In this example, the JAR file is copied to a remote VM using `scp`, and then executed using `java -jar` after SSH access to the server.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 27.4: Deploying to Cloud Platforms",
  },
  {
    type: "point",
    text: "Spring Boot applications can be deployed to popular cloud platforms such as AWS, Google Cloud, and Heroku. Cloud providers offer managed services like load balancing, scaling, and monitoring.",
  },
  {
    type: "point",
    text: "To deploy on these platforms, you typically need to create a project, configure your application, and deploy the packaged JAR/WAR file.",
  },
  {
    type: "example",
    code: `# Example: Deploying to Heroku
heroku create my-spring-boot-app
git push heroku master
heroku open`,
  },
  {
    type: "point",
    text: "In this example, the Spring Boot application is deployed to Heroku using Git. The application is automatically detected, and Heroku handles the deployment process.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 27.5: Deploying on Docker Containers",
  },
  {
    type: "point",
    text: "Docker provides a portable and consistent environment for deploying Spring Boot applications. You can package your Spring Boot application into a Docker container and deploy it on any environment that supports Docker.",
  },
  {
    type: "point",
    text: "To deploy your Spring Boot app on Docker, create a `Dockerfile` that defines how the application should be built and run in a container.",
  },
  {
    type: "example",
    code: `# Example: Dockerfile for Spring Boot Application
FROM openjdk:11-jdk
VOLUME /tmp
COPY target/myapp.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]`,
  },
  {
    type: "point",
    text: "Once the `Dockerfile` is created, build the Docker image using the `docker build` command, and run the application in a container using `docker run`.",
  },
  {
    type: "example",
    code: `# Example: Build and Run Docker Container
docker build -t my-spring-boot-app .
docker run -p 8080:8080 my-spring-boot-app`,
  },
  {
    type: "point",
    text: "This Docker setup ensures that your Spring Boot application can run consistently across different environments by encapsulating it inside a container.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 27.6: Deploying to Kubernetes",
  },
  {
    type: "point",
    text: "Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications.",
  },
  {
    type: "point",
    text: "To deploy your Spring Boot application to Kubernetes, you need to create Kubernetes manifests such as `deployment.yaml`, `service.yaml`, and other configuration files.",
  },
  {
    type: "example",
    code: `# Example: Kubernetes Deployment YAML
apiVersion: apps/v1
kind: Deployment
metadata:
  name: spring-boot-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: spring-boot-app
  template:
    metadata:
      labels:
        app: spring-boot-app
    spec:
      containers:
        - name: spring-boot-app
          image: my-spring-boot-app:latest
          ports:
            - containerPort: 8080`,
  },
  {
    type: "point",
    text: "The deployment YAML file defines how the Spring Boot app is deployed on Kubernetes, including replicas and container specifications.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 27.7: Configuring Application for Production Environments",
  },
  {
    type: "point",
    text: "Before deploying to production, it’s important to optimize your Spring Boot application for performance, security, and scalability.",
  },
  {
    type: "point",
    text: "Consider settings like database connection pools, external configuration management, logging configurations, and security configurations.",
  },
  {
    type: "example",
    code: `# Example: application.properties for Production
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/prod_db
spring.datasource.username=prod_user
spring.datasource.password=prod_password`,
  },
  {
    type: "point",
    text: "In this example, production-specific configuration values like database URL and credentials are set in the `application.properties` file to ensure the app runs in the production environment.",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 27.8: Monitoring and Logging in Production",
  },
  {
    type: "point",
    text: "Once deployed, monitoring and logging are critical to ensure that the application is running smoothly and to troubleshoot issues.",
  },
  {
    type: "point",
    text: "Spring Boot integrates with popular monitoring and logging tools like Prometheus, Grafana, and ELK stack for centralized logging and application performance monitoring.",
  },
  {
    type: "example",
    code: `# Example: Enabling Prometheus Metrics
management.metrics.export.prometheus.enabled=true`,
  },
  {
    type: "point",
    text: "This configuration enables Prometheus metrics collection for the Spring Boot application, allowing you to integrate with Grafana for visualization and alerting.",
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
