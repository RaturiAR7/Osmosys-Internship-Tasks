using System;
namespace HelloWorld{
    class Prog{
        static void Main(string[] args){
            ////Access another class ///Refer to Car.cs
            Car obj=new Car();
            Console.WriteLine(obj.color);
        }
    }
}
