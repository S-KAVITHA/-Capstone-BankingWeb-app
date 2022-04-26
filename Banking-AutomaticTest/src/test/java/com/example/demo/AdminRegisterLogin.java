package com.example.demo;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class AdminRegisterLogin {

	WebDriver driver;
	
	@Test (priority = 0 , description = " This test is for Admin register Setup")
	public void Setup() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
				
		driver = new ChromeDriver();
		driver.get("http://localhost:4200/adminlogin");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);

		Thread.sleep(4000);
		System.out.println("Before Login methods");
	}
	
	
	@Test (priority = 1 , description = " This test is for Admin register")
	public void AdminRegister() throws InterruptedException {

		WebElement registerBtn = driver.findElement(By.xpath("//button[@routerlink ='/adminregister']"));
		registerBtn.click();

		WebElement firstName = driver.findElement(By.id("firstName"));
		firstName.sendKeys("Raja");

		WebElement lastName = driver.findElement(By.id("lastName"));
		lastName.sendKeys("Ramalingam");

		WebElement email = driver.findElement(By.id("emailId"));
		email.sendKeys("raja@gmail.com");

		WebElement password = driver.findElement(By.id("password"));
		password.sendKeys("123123");

		WebElement agree = driver.findElement(By.id("agree"));
		agree.click();

		Thread.sleep(4000);

		WebElement submitBtn = driver.findElement(By.name("register"));
		submitBtn.click();
		Thread.sleep(4000);

	}
	
	@Test (priority = 2 , description = " This test is for Admin login fail")
	public void AdminLoginFail() throws InterruptedException {

		WebElement emailId = driver.findElement(By.id("emailId"));
		emailId.sendKeys("raja@gmail.com");

		WebElement passwordLog = driver.findElement(By.id("password"));
		passwordLog.sendKeys("123124");

		WebElement RememberMe = driver.findElement(By.id("rememberme"));
		RememberMe.click();
		Thread.sleep(900);
		WebElement LoginBtn = driver.findElement(By.name("login"));
		LoginBtn.click();

		WebElement ErrorMsg = driver.findElement(By.xpath("//div[contains(@class, 'alert alert-danger')]"));

		String ActMsg = ErrorMsg.getText();
		System.out.println("Error Message " + ActMsg);
		String ExpMsg = "Not a valid buyers credentails";
		if (ActMsg.equals(ExpMsg)) {
			System.out.println("Test Passed");
		} else {
			System.out.println("Test Failed");
		}

	}

	@Test (priority = 3 , description = " This test is for Admin login pass")
	public void AdminLoginPass() throws InterruptedException {

		WebElement emailId = driver.findElement(By.id("emailId"));
		emailId.clear();
		Thread.sleep(900);	emailId.sendKeys("raja@gmail.com");

		WebElement passwordLog = driver.findElement(By.id("password"));
		passwordLog.clear();
		passwordLog.sendKeys("123123");
		
		
		WebElement LoginBtn1 = driver.findElement(By.name("login"));
		System.out.println(LoginBtn1);
		LoginBtn1.click();
		Thread.sleep(4000);

	}
	
	@Test (priority = 4 , description = " This test is for Admin close")
	public void TearDown() {
		driver.close();
		System.out.println("After all Test methods");
	}

}
