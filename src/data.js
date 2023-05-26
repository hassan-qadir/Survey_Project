export const data = [
  {
    id: 1,
    title: "Sum of two numbers",
    Marks: `Easy, C++(Basic),max score: 10,Success Rate:90.39%`,
    question: `
Sum of two numbers`,
    sampleOutput: "10",
    default: `#include <cmath>
    #include <cstdio>
    #include <vector>
    #include <iostream>
    #include <algorithm> 
    using namespace std;


    int main(){ 
        int x = ;
        int y = ;


        return 0;
    }`,
    language: "c_cpp",
    catageory: "C++",
  },
  {
    id: 2,
    title: 'Say "Hello World!" with C++',
    Marks: `Easy, C++(Basic),max score: 5,Success Rate:80.29%`,
    question: `
This is a simple challenge to help you practice printing to stdout.
You may also want to complete Solve Me First in C++ before attempting 
this challenge. We re starting out by printing the most famous 
computing phrase of all time! 
In the editor below, use either printf or cout to print the string
 "Hello World!"  
to stdout. The more popular command form is cout. It has the 
following basic form:cout<<value_to_print<<value_to_print; Any 
number of values can be printed using one command as shown.The printf 
command comes from C language. It accepts an optional format 
specification and a list of variables. 
Two examples for printing a string are: 
printf("%s", string); printf(string);`,

    sampleOutput: "Hello World!",
    default: `#include <iostream>

    using namespace std;
    
    int main() {
        
        return 0;
    }`,
    language: "c_cpp",
    catageory: "C++",
  },
  {
    id: 3,
    title: "Basic Data Types",
    Marks: `Easy, C++(Basic),max score: 10,Success Rate:92.89%`,
    question: `
Some C++ data types, their format specifiers, and their most common
bit widths are as follows:

    Int ("%d"): 32 Bit integer
    Long ("%ld"): 64 bit integer
    Char ("%c"): Character type
    Float ("%f"): 32 bit real value
    Double ("%lf"): 64 bit real value
    
    Reading
To read a data type, use the following syntax:
scanf("format_specifier", &val)

For example, to read a character followed by a double:
char ch;
double d;
scanf("%c %lf", &ch, &d);

Printing
To print a data type, use the following syntax:
printf("format_specifier", val)
For example, to print a character followed by a double:

char ch = 'd';
double d = 234.432;
printf("%c %lf", ch, d);

Note: You can also use cin and cout instead of scanf and printf;
however,if you are taking a million numbers as input and printing 
a million lines,it is faster to use scanf and printf.

`,

    sampleOutput: `3
    12345678912345
    a
    334.230
    14049.304930000`,
    default: `#include <iostream>
    #include <cstdio>
    using namespace std;
    
    int main() {
        // Complete the code.
        return 0;
    }`,
    language: "c_cpp",
    catageory: "C++",
  },
  {
    id: 4,
    title: "For Loop",
    Marks: `Easy, C++(Basic),max score: 15,Success Rate:95.39%`,
    question: `
A for loop is a programming language statement which allows code to
be repeatedly executed.

  The syntax is

  for ( <expression_1> ; <expression_2> ; <expression_3> )
  <statement>
    
  
expression_1 is used for intializing variables which are generally
used for controlling the terminating flag for the loop.
expression_2 is used to check for the terminating condition.
If this evaluates to false, then the loop is terminated.
expression_3 is generally used to update the flags/variables.

A sample loop is

for(int i = 0; i < 10; i++) {
  ...
}

In this challenge, you will use a for loop to increment a variable
through a range.

Sample Input

8
11
`,

    sampleOutput: `eight
    nine
    even
    odd`,
    default: `#include <iostream>
    #include <cstdio>
    using namespace std;
    
    int main() {
        // Complete the code.
        return 0;
    }`,
    language: "c_cpp",
    catageory: "C++",
  },
  {
    id: 5,
    title: "Welcome to java",
    Marks: `Easy, Java(Basic),max score: 10,Success Rate:92.19%`,
    question: `Welcome to the world of Java! In this challenge, we practice 
printing to stdout.The code stubs in your editor declare a Solution class 
and a main method. Complete the main method by copying the two lines of code 
below and pasting them inside the body of your main method.`,

    sampleOutput: "Hello Java\n",
    default: `public class Solution {

      public static void main(String[] args) {
      /* Enter your code here. Print output to STDOUT. Your class should be named Solution. */
      }
  }`,
    language: "java",
    catageory: "Java",
  },
  {
    id: 6,
    title: "Java Stdin and Stdout |",
    Marks: `Easy, Java(Basic),max score: 15,Success Rate:94.39%`,
    question: `
Most HackerRank challenges require you to read input from stdin (standard input) 
and write output to stdout (standard output).

One popular way to read input from stdin is by using the Scanner class and 
specifying the Input Stream as System.in. For example:
     
Scanner scanner = new Scanner(System.in);
String myString = scanner.next();
int myInt = scanner.nextInt();
scanner.close();

System.out.println("myString is: " + myString);
System.out.println("myInt is: " + myInt);

The code above creates a Scanner object named  and uses it to read a 
String and an int. It then closes the Scanner object because there is 
no more input to read, and prints to stdout using System.out.println(String).
So, if our input is:

Hi 5

Our code will print:

myString is: Hi
myInt is: 5

In this challenge, you must read 3 integers from stdin and then print them 
to stdout. Each integer must be printed on a new line. To make the problem 
a little easier, a portion of the code is provided for you in the editor below.`,

    sampleOutput: `42
    100
    125`,
    default: `import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        // Complete this line
        // Complete this line

        System.out.println(a);
        // Complete this line
        // Complete this line
    }
}`,
    language: "java",
    catageory: "Java",
  },
  {
    id: 7,
    title: "Say Hello, World! With Python ",
    Marks: `Easy, Python(Basic),max score: 10,Success Rate:87.39%`,
    question: `
Here is a sample line of code that can be executed in Python: 
print("Hello, World!")
You can just as easily store a string as a variable and then 
print it to stdout:

my_string = "Hello, World!"

print(my_string)  The above code will print Hello, World! 
on your screen. Try it yourself in the editor below!`,

    sampleOutput: `Hello,World!\n`,
    default: `if __name__ == '__main__':
    print("")`,
    language: "python",
    catageory: "python",
  },
  {
    id: 10,
    title: "Hello World!",
    Marks: `Easy, Js(Basic),max score: 10,Success Rate:93.32%`,
    question: `
In this challenge, we review some basic concepts that 
will get you started with this series. Check out the tutorial 
to learn more about JavaScript's lexical structure.

Task

A greeting function is provided for you in the editor below.
It has one parameter, . Perform the following tasks to 
complete this challenge:

1: Use console.log() to print Hello, World! on a new line in 
the console, which is also known as stdout or standard output. 
The code for this portion of the task is already provided in 
the editor.
2: Use console.log() to print the contents of  
(i.e., the argument passed to main).`,

    sampleOutput: `Hello,World!\n`,
    default: `'use strict';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');
    
`,
    language: "javascript",
    catageory: "Javascript",
  },
  {
    id: 11,
    title: "Arithmetic Operators",
    Marks: `Easy, Js(Basic),max score: 5,Success Rate:85.39%`,
    question: `
In this challenge, we practice using arithmetic operators.
Check out the attached tutorial for resources.

Task

Complete the following functions in the editor below:

1:getArea(length, width): Calculate and return the area of a 
rectangle having sides length and width .
2:getPerimeter(length, width): Calculate and return the 
perimeter of a rectangle having sides length and width .
The values returned by these functions are printed to stdout 
by locked stub code in the editor.

Constraints
1: <= length,width <= 1000
2:length and width are scaled to at most three decimal places.`,

    sampleOutput: `13.5\n15\n`,
    default: `'use strict';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');
    
`,
    language: "javascript",
    catageory: "Javascript",
  },
  {
    id: 12,
    title: "Functions",
    Marks: `Easy, Js(Basic),max score: 15,Success Rate:92.18%`,
    question: `
Today, we're discussing JavaScript functions. Check out the 
attached tutorial for more details.

 Task
    
Implement a function named factorial that has one parameter: 
an integer, n. It must return the value of n!
 (i.e., n factorial).

Constraints
1 <= n <= 10

Output Format

The function must return the value of n!.
`,

    sampleOutput: `24\n`,
    default: `'use strict';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');
  `,
    language: "javascript",
    catageory: "Javascript",
  },
  {
    id: 13,
    title: "Let and Const",
    Marks: `Easy, Js(Basic),max score: 10,Success Rate:93.89%`,
    question: `
In this challenge, we practice declaring variables using 
the let and const keywords. Check out the attached tutorial 
for more details.

 Task
    
1:Declare a constant variable,PI , and assign it the value 
Math.PI. You will not pass this challenge unless the variable 
is declared as a constant and named PI (uppercase).
2:Read a number,r, denoting the radius of a circle from stdin.
3:Use PI and r to calculate the area and perimeter of 
a circle having radius r.
4:Print area as the first line of output and print perimeter 
as the second line of output..

Constraints
0 < r <= 100
r is a floting point number scaled to at most 3 decimals 
places

`,

    sampleOutput: `21.237166338267002\n
    16.336281798666924\n`,
    default: `'use strict';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');
    
   `,
    language: "javascript",
    catageory: "Javascript",
  },
  {
    id: 14,
    title: "Arrays",
    Marks: `Easy, Js(Basic),max score: 15,Success Rate:96.37%`,
    question: `
In this challenge, we learn about Arrays. Check out 
the attached tutorial for more details.

Function Description

Complete the getSecondLargest function in the editor 
below.

getSecondLargest has the following parameters:

1:int nums[n]: an array of integers

Returns

1:int: the second largest number in nums

`,

    sampleOutput: `5\n`,
    default: `'use strict';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');
    
  `,
    language: "javascript",
    catageory: "Javascript",
  },
  {
    id: 15,
    title: "Sum Two Numbers",
    Marks: `Easy, Js(Basic),max score: 10,Success Rate:76.37%`,
    question: `
Sum Two Numbers

`,

    sampleOutput: `4\n`,
    default: `'use strict';
    const num1 = ;
    const num2 = ;

// add two numbers


   `,
    language: "javascript",
    catageory: "Javascript",
  },
];
