package com.alacriti.example;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("example")
public class Example {
@GET
@Produces(MediaType.TEXT_PLAIN)
public String examples(){
	return "this is example1";
}
@GET
@Path("messages")
@Produces(MediaType.TEXT_PLAIN)
public String getMessages(){
	System.out.println("Messages Method");
	return "messages";
	//return auth.getAllMessages();
}
}
