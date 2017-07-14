package com.alacriti;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	Scanner sc=new Scanner(System.in);
    	String vehicleName;
    	System.out.print("enter the vehicle name:");
    	vehicleName=sc.next();
    	Vehicles details=new Vehicles(vehicleName);
    	details.wheels();
    	details.size();
    	StringManipulation name=new StringManipulation();
    	System.out.println(name.isPalindrom("323"));
    }
}

