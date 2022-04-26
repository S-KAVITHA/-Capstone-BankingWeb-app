
package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//@author Kavitha S

@Entity
@JsonIgnoreProperties

@Table(name = "BankAdmin")
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Id")
	private Long Id;


	@Column(name = "emailId")
	private String emailId;
	
	@Column(name = "password")
	private String password;

	@Column(name = "role")
	private String role;

	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Users(Long id, String emailId, String password, String role) {
		super();
		Id = id;
		this.emailId = emailId;
		this.password = password;
		this.role = role;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	

	}