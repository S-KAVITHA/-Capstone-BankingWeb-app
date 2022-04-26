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

public class AccountDeposit {

	WebDriver driver;

	@Test(priority = 18, description = " This test is for Account deposit setup")
	public void Setup() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");

		driver = new ChromeDriver();
		driver.get("http://localhost:4200/userlogin");
		 driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);

		Thread.sleep(4000);

	}

	@Test(priority = 19, description = " This test is for Customer login ")
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

	@Test(priority = 20, description = " This test is for  Account deposit ")
	public void Accountdeposit() throws InterruptedException {

		WebElement accounts = driver.findElement(By.xpath("//a[@routerlink ='/accounts']"));
		accounts.click();
		Thread.sleep(3000);

		WebElement accountsopen = driver.findElement(By.xpath("//a[@routerlink ='/accounts/deposit']"));
		accountsopen.click();
		Thread.sleep(3000);

		WebElement accountNo = driver.findElement(By.name("accountNo"));
		accountNo.sendKeys("1004450903");

		WebElement amount = driver.findElement(By.id("amount"));
		amount.sendKeys("10000");

		

		WebElement submitBtn = driver.findElement(By.name("clickOK"));
		submitBtn.click();
		Thread.sleep(4000);
		
		WebElement logout = driver.findElement(By.name("logout"));
		logout.click();

		Thread.sleep(4000);
	}

	@Test(priority = 21, description = " This test is for Admin login approve")
	public void AdminLoginPass() throws InterruptedException {
		Thread.sleep(4000);

		
		driver.get("http://localhost:4200/adminlogin");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);

		System.out.println("Before Login methods");
		WebElement emailId = driver.findElement(By.id("emailId"));
		emailId.sendKeys("raja@gmail.com");

		WebElement passwordLog = driver.findElement(By.id("password"));
		passwordLog.sendKeys("123123");

		WebElement RememberMe = driver.findElement(By.id("rememberme"));
		RememberMe.click();

		WebElement LoginBtn1 = driver.findElement(By.name("login"));
		System.out.println(LoginBtn1);
		LoginBtn1.click();
		Thread.sleep(4000);

	}

	@Test(priority = 22, description = " This test is for  Account deposit approve")
	public void AdminCustApprove() throws InterruptedException {

		WebElement approvals = driver.findElement(By.xpath("//a[@routerlink ='/approvals']"));
		approvals.click();
		Thread.sleep(3000);
		WebElement custapprovals = driver.findElement(By.xpath("//a[@routerlink='/approvals/txnapprove']"));
		System.out.println(custapprovals);
		custapprovals.click();

		Thread.sleep(3000);
		List<WebElement> Rows = driver
				.findElements(By.xpath("//table[@class ='table table-bordered table-primary']/tbody/tr"));
		System.out.println("Total Rows are : " + Rows.size());

		int RowIndex = 1;
		for (WebElement rowElement : Rows) {

			System.out.println(rowElement);
			System.out.println(RowIndex);
			Thread.sleep(3000);
			WebElement approvebtn = rowElement.findElement(By.xpath("//td/button[@name='approve']"));
			System.out.println(approvebtn);
			approvebtn.click();
			Thread.sleep(5000);

			RowIndex = RowIndex + 1;
		}
		
		Thread.sleep(3000);
		WebElement LogoutBtn = driver.findElement(By.name("logout"));
		LogoutBtn.click();

	}
	

	@Test(priority = 23, description = " This test is for  Account deposit close")
	public void TearDown() throws InterruptedException {
		Thread.sleep(4000);
		driver.close();
		System.out.println("After all Test methods");
	}	
}

