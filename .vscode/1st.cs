using System;

namespace MyApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person("John", "Doe");
            Console.WriteLine("Full Name: " + person.GetFullName());

            Console.Write("Enter your name: ");
            string userName = Console.ReadLine();
            Console.WriteLine("Hello, " + userName + "!");
        }
    }
}
//c# lannguage