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

public class UserBlock {

	WebDriver driver;

	@Test(priority = 46, description = " This test is for user block setup")
	public void Setup() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");

		driver = new ChromeDriver();
		driver.get("http://localhost:4200/userlogin");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);
		Thread.sleep(4000);

	}

	@Test(priority = 47, description = " This test is for Admin login for block")
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

	@Test(priority = 48, description = " This test is for user block ")
	public void AdminCustBlock() throws InterruptedException {

			
		WebElement blockuser = driver.findElement(By.xpath("//a[@routerlink ='/blockuser']"));
		blockuser.click();
		Thread.sleep(3000);
	
		List<WebElement> Rows = driver
				.findElements(By.xpath("//table[@class ='table table-bordered table-primary']/tbody/tr"));
		System.out.println("Total Rows are : " + Rows.size());

		int RowIndex = 1;
		for (WebElement rowElement : Rows) {

			System.out.println(rowElement);
			System.out.println(RowIndex);
			Thread.sleep(3000);
			WebElement blockbtn = rowElement.findElement(By.xpath("//td/button[@name='block']"));
			System.out.println(blockbtn);
			blockbtn.click();
			Thread.sleep(5000);

			RowIndex = RowIndex + 1;
		}
		
		Thread.sleep(3000);
		WebElement LogoutBtn = driver.findElement(By.name("logout"));
		LogoutBtn.click();

	}
	

	@Test(priority = 49, description = " This test is for user block ")
	public void TearDown() throws InterruptedException {
		Thread.sleep(4000);
		driver.close();
		System.out.println("After all Test methods");
	}	
}

