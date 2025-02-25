using System;

namespace HelloWorld
{
  class Program
  {
    /////The summary helps the intellisense to give description of the function

     /// <summary>
    /// Prints the array matrix given
    /// </summary>
    
    static void PrintMatrix(int [,] numbers){
      
      for(int i=0;i<2;i++)
      {
        
        for(int j=0;j<3;j++){
          Console.Write(numbers[i,j]+" ");
        }
        Console.WriteLine();
      }
    }
    /// <summary>
    /// Prints the name
    /// </summary>
    static void PrintName(string name)
    {
      Console.Write("My name is: "+name);
    }
    /// <summary>
    /// Method Overloading
    /// </summary>
    /// <param name="firstName"></param>
    /// <param name="lastName"></param>
    /// <returns></returns>
    static string Add(string firstName, string lastName)
    {
      return String.Concat(firstName,lastName);
    }
        /// <summary>
    /// Method Overloading
    /// </summary>
    /// <param name="num1"></param>
    /// <param name="num2"></param>
    /// <returns></returns>
    static int Add(int num1, int num2)
    {
     return num1 + num2;
    }
    static void Main(string[] args)
    {
      /* Multi Line Comment
      Example */
      const string greeting = "Hello, ";
      string firstName = "Anshul";
      string lastName = "Raturi";
      string fullName = firstName + lastName;
      ////String interpolation method
      string name = $"My full name is: {firstName} {lastName}";
      Console.Write(greeting.ToUpper() + fullName + " ");  //////Write does not make a new line 
      Console.WriteLine("How are you?");  /////Write line makes a new line
      long longNum=150000000000122L;
      float floatNum=150.2211F;
      double doubleNum=150.22D;
      float typeCastNum=(float)doubleNum;
      int num=10;
      string num1=Convert.ToString(num);
      for (int i = 0; i < 10; i++){
        Console.WriteLine("Hello Anshul! {0} {1} {2}", i, i * 2,num1+'2');
      }
      Console.WriteLine("Please enter your name and age:");

      string yourName = Console.ReadLine() ?? string.Empty;
      int age=Convert.ToInt32(Console.ReadLine());
      // Console.WriteLine("Your name is {0} and your age after 5 years is {1}", yourName,age+5);
      Console.WriteLine($"Your name is {yourName} and your age after 5 years is {age+5}");


      //////Arrays
      int[] arr={4,3,2,6,0};
      ///Sort the arrays
      Array.Sort(arr);
      ////For Each Loop
      foreach (int item in arr)
      {
        Console.WriteLine(item);
      }
      Console.WriteLine($"Sum of array: {arr.Sum()}");
      /////Double Dimension Array
      int[,] numbers = { {1, 4, 2}, {3, 6, 8} };
      Console.WriteLine(numbers[0,2]);

      PrintMatrix(numbers);
      PrintName(name:"Anshul");///// Named Arguments

      ///////Add Method Overloading
      int sum=Add(10,100);
      string AddedName=Add("Anshul ","Raturi");
      Console.WriteLine("Added Name: " + AddedName);
      Console.WriteLine("Added Number: " + sum);
    }
  }
}