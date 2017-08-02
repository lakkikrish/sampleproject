package com.alacriti.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.alacriti.model.AuthonticationModel;
import com.alacriti.service.AuthonticationService;
@Path("messages")
public class AuthonticationResource {

	AuthonticationService auth = new AuthonticationService();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<AuthonticationModel> getMessages() {
		System.out.println("Messages Method");
		return auth.getAllMessages();
	}

	@Path("putData")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String InsertData(AuthonticationModel msgs) {
		auth.putMessages(msgs);
		
		String result=auth.getResult(msgs);
		return result;
	}

	/*
	 * public String authonticationResult(List<AuthonticationModel> msgs){
	 * return authonticationService.getResult(msgs); }
	 */
}
