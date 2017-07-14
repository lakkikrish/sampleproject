package com.alacriti;
public class Vehicles implements Vehicle{
	String vehicleName;
	Vehicles(String Name){
		this.vehicleName=Name;
	}
	public void wheels(){
		if (vehicleName.equalsIgnoreCase("car"))
			System.out.println("car: 4 wheels");
		if(vehicleName.equalsIgnoreCase("bike"))
			System.out.println("bike: 2 wheels");
	}
	public void size(){
		if (vehicleName=="car")
			System.out.println("car: 4 wheels");
		if(vehicleName=="bike")
			System.out.println("bike: 2 person travelling");
	}
}
interface Vehicle{
	abstract void wheels();
	abstract void size();
}
