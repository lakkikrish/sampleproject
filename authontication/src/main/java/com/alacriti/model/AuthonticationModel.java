package com.alacriti.model;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


public class AuthonticationModel {
	private String name;
	private String email;
	public AuthonticationModel(String name,String email) {
		
		this.name=name;
		this.email=email;
		// TODO Auto-generated constructor stub
	}
	public AuthonticationModel(){
		
	}
	///////////////////////getter//////setter////////////////////////
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

}
