package com.example.demo;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class CustomerCreation {

	WebDriver driver;

	@Test (priority = 5 , description = " This test is for Customer register setup")
	public void Setup() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");

		driver = new ChromeDriver();
		driver.get("http://localhost:4200/userlogin");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);

		Thread.sleep(4000);
		System.out.println("Before Login methods");
	}

	@Test(priority = 6, description = " This test is for Customer register")
	public void CustomerRegister() throws InterruptedException {

		WebElement registerBtn = driver.findElement(By.xpath("//button[@routerlink ='/userregister']"));
		registerBtn.click();

		WebElement firstName = driver.findElement(By.id("firstName"));
		firstName.sendKeys("Ramya");

		WebElement lastName = driver.findElement(By.id("lastName"));
		lastName.sendKeys("Pandian");

		WebElement email = driver.findElement(By.id("email"));
		email.sendKeys("ramya@gmail.com");

		WebElement password = driver.findElement(By.id("password"));
		password.sendKeys("123123");

		WebElement address = driver.findElement(By.id("address"));
		address.sendKeys("568, Enclave Terrace Garden");

		WebElement city = driver.findElement(By.id("city"));
		city.sendKeys("Arlington");

		WebElement state = driver.findElement(By.name("state"));
		state.sendKeys("CA");

		WebElement zipcode = driver.findElement(By.id("zipcode"));
		zipcode.sendKeys("65487");

		WebElement country = driver.findElement(By.id("country"));
		country.sendKeys("USA");

		WebElement birthDate = driver.findElement(By.name("birthDate"));
		birthDate.sendKeys("12/09/1999");

		WebElement agree = driver.findElement(By.id("agree"));
		agree.click();

		Thread.sleep(4000);

		WebElement submitBtn = driver.findElement(By.name("register"));
		submitBtn.click();

	}

	
	@Test(priority = 7, description = " This test is for Admin login for approval")
	public void AdminLoginPass() throws InterruptedException {

		Thread.sleep(4000);
		driver.get("http://localhost:4200/adminlogin");
		 driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);

	
		WebElement emailId = driver.findElement(By.id("emailId"));
		emailId.clear();
		Thread.sleep(900);
		emailId.sendKeys("raja@gmail.com");

		WebElement passwordLog = driver.findElement(By.id("password"));
		passwordLog.clear();
		passwordLog.sendKeys("123123");

		WebElement RememberMe = driver.findElement(By.id("rememberme"));
		RememberMe.click();

		WebElement LoginBtn1 = driver.findElement(By.name("login"));
		System.out.println(LoginBtn1);
		LoginBtn1.click();
		Thread.sleep(4000);

	}

	@Test(priority = 8, description = " This test is for Customer approve")
	public void AdminCustApprove() throws InterruptedException {

		WebElement approvals = driver.findElement(By.xpath("//a[@routerlink ='/approvals']"));
		approvals.click();
		Thread.sleep(3000);
		WebElement custapprovals = driver.findElement(By.xpath("//a[@routerlink='/approvals/custapprove']"));
		System.out.println(custapprovals);
		custapprovals.click();

		Thread.sleep(3000);
		 List<WebElement> Rows = driver.findElements(By.xpath("//table[@class ='table table-bordered table-primary']/tbody/tr"));
	        System.out.println("Total Rows are : " + Rows.size());
	        
	        for (int i=0; i < Rows.size(); i ++) {
	           	        		            
	        	WebElement approvebtn = driver.findElement(By.name("approve"));
	        	System.out.println(approvebtn);
	        	approvebtn.click();
	        }
	        
	        WebElement LoginBtn = driver.findElement(By.name("logout"));
			LoginBtn.click();
				
	}

	@Test(priority = 9, description = " This test is for Customer login fail")
	public void CustomerLoginFail() throws InterruptedException {

		Thread.sleep(4000);
		driver.get("http://localhost:4200/userlogin");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);
		
		WebElement emailId = driver.findElement(By.id("email"));
		emailId.sendKeys("ramya@gmail.com");

		WebElement passwordLog = driver.findElement(By.id("password"));
		passwordLog.sendKeys("123124");

		WebElement RememberMe = driver.findElement(By.id("rememberme"));
		RememberMe.click();
		
		WebElement LoginBtn = driver.findElement(By.name("login"));
		System.out.println(LoginBtn);
		LoginBtn.click();

		WebElement ErrorMsg = driver.findElement(By.xpath("//div[contains(@class, 'alert alert-danger')]"));

		Thread.sleep(3000);
		String ActMsg = ErrorMsg.getText();
		System.out.println("Error Message " + ActMsg);
		String ExpMsg = "Not a valid buyers credentails";
		if (ActMsg.equals(ExpMsg)) {
			System.out.println("Test Passed");
		} else {
			System.out.println("Test Failed");
		}
	}

	@Test(priority = 10, description = " This test is for Customer login pass")
	public void CustomerLoginPass() throws InterruptedException {

		Thread.sleep(3000);
		WebElement emailId = driver.findElement(By.id("email"));
		emailId.clear();
		Thread.sleep(900);
		emailId.sendKeys("ramya@gmail.com");

		WebElement passwordLog = driver.findElement(By.id("password"));
		passwordLog.clear();
		passwordLog.sendKeys("123123");

		Thread.sleep(3000);
		WebElement LoginBtn1 = driver.findElement(By.name("login"));
		System.out.println(LoginBtn1);
		LoginBtn1.click();
		Thread.sleep(4000);
		
		WebElement logoutbtn = driver.findElement(By.name("logout"));
		System.out.println(logoutbtn);
		logoutbtn.click();
		Thread.sleep(4000);

	}

	@Test (priority = 11 , description = " This test is for Customer register close")
	public void TearDown() throws InterruptedException {
		Thread.sleep(4000);
		driver.close();
		System.out.println("After all Test methods");
	}

}
