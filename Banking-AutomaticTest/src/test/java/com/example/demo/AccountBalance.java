package com.example.demo;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class AccountBalance {

	WebDriver driver;

	@Test(priority = 30, description = " This test is for Account balance setup")
	public void Setup() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");

		driver = new ChromeDriver();
		driver.get("http://localhost:4200/userlogin");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);

		Thread.sleep(4000);

	}

	@Test(priority = 31, description = " This test is for Customer login ")
	public void CustomerLoginPass() throws InterruptedException {

		Thread.sleep(3000);
		WebElement emailId = driver.findElement(By.id("email"));
		emailId.clear();
		Thread.sleep(900);
		emailId.sendKeys("ramya@gmail.com");

		WebElement passwordLog = driver.findElement(By.id("password"));
		passwordLog.clear();
		passwordLog.sendKeys("123123");

		WebElement RememberMe = driver.findElement(By.id("rememberme"));
		RememberMe.click();

		Thread.sleep(3000);
		WebElement LoginBtn1 = driver.findElement(By.name("login"));
		System.out.println(LoginBtn1);
		LoginBtn1.click();
		Thread.sleep(4000);

	}

	@Test(priority = 32, description = " This test is for Account balance ")
	public void Accountbalance() throws InterruptedException {

		WebElement accounts = driver.findElement(By.xpath("//a[@routerlink ='/accounts']"));
		accounts.click();
		Thread.sleep(3000);

		WebElement accountsbal = driver.findElement(By.xpath("//a[@routerlink ='/accounts/acctbalance']"));
		accountsbal.click();
		Thread.sleep(3000);

		
		WebElement logout = driver.findElement(By.name("logout"));
		logout.click();

		Thread.sleep(4000);
	}

	@Test(priority = 33, description = " This test is for Account balance close")
	public void TearDown() throws InterruptedException {
		
		driver.close();
		System.out.println("After all Test methods");
	}	
}

