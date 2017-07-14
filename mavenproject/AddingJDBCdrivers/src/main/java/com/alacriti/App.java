package com.alacriti;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class App {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		String url = "jdbc:mysql://192.168.35.160:3306/trainee17";
		String un = "trainee17";
		String pw = "trainee@alac";
		//Class.forName("com.mysql.jdbc.Driver");
		Connection con = DriverManager.getConnection(url, un, pw);
		Statement st = con.createStatement();
		System.out.print("manager:");
		ResultSet rs = st.executeQuery("SElECT * FROM emp");
		rs.next();
		String name = rs.getString("employee");
		System.out.println(name);
		rs.absolute(4);
		String nam = rs.getString("employee");
		System.out.println(nam);
		st.close();
		con.close();

	}

}
