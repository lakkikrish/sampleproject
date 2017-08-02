package com.alacriti.service;

import java.io.Console;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.naming.InitialContext;
import javax.sql.DataSource;

import com.alacriti.model.AuthonticationModel;

public class AuthonticationService {

	public AuthonticationService() {

	}

	List list = new ArrayList();

	public List getAllMessages() {
		System.out.println("Auth MEthod!!");
		Connection conn = null;
		boolean isError = false;
		try {
			conn = getConnection();
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery("select * from admin");
			while (rs.next()) {
				/*list.add(new AuthonticationModel(rs.getString("name"), rs
						.getString("email")));*/
				list.add("Hello");
			}
		} catch (Exception e) {
			isError = true;
			System.out.println("occurs the error in getMessages "
					+ e.toString());
		} finally {
			closeConnection(conn, isError);
		}
		return list;
	}

	public void putMessages(AuthonticationModel msgs) {
		Connection conn = null;
		boolean isError = false;
		try {
			conn = getConnection();
			PreparedStatement ps = conn
					.prepareStatement("insert into admin(name,email) values(?,?);");
			ps.setString(1, msgs.getName());
			ps.setString(2, msgs.getEmail());
			ps.executeUpdate();

		} catch (Exception e) {
			isError = true;
			System.out.println("occurs the error in putMessages "
					+ e.toString());

		} finally {
			closeConnection(conn, isError);
		}

	}

	public String getResult(AuthonticationModel msgs) {
		Connection conn = null;
		boolean isError = false;
		try {
			conn = getConnection();
			Statement st = conn.createStatement();
			ResultSet rs = st
					.executeQuery("select * from admin where name='lakki' AND email='lakki@gmail.com'");
			if (rs.next()) {
				return "Authontication succeded";
			}
		} catch (Exception e) {
			isError = true;
			System.out.println("error occured in result");
		} finally {
			closeConnection(conn, isError);
			return "Authontication failed";
		}

	}

	protected static void closeConnection(Connection conn, boolean isError) {
		System.out.println("AuthonticationService closeConnection: isError "
				+ isError);

		if (conn != null) {
			if (isError) {
				try {
					System.out.println("Rollback");
					conn.rollback();
				} catch (Exception e) {
					System.out
							.println("Exception occured while rollback the connectio n: "
									+ e);
				}
			} else {
				try {
					System.out.println("Comit");

					conn.commit();
				} catch (Exception e) {
					System.out
							.println("Exception occured while commit the connectio n: "
									+ e);
				}
			}

			try {
				conn.close();
			} catch (Exception e) {
				System.out
						.println("Exception occured while close the connectio n: "
								+ e);
			}
		} else {
			System.out.println("Connection is null, Skipping the close part");
		}

	}

	protected static Connection getConnection() {
		Connection conn = null;
		DataSource ds = null;
		try {
			ds = (DataSource) new InitialContext().lookup("java:jboss/datasources/TRAINEEE");
			conn = ds.getConnection();
			conn.setAutoCommit(false);
		} catch (Exception e) {
			System.out.println("occurs the error in creating connection "
					+ e.toString());
		}
		return conn;
	}
}
