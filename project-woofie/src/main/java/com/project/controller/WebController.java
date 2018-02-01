package com.project.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {

	@RequestMapping("/")
	public String home() {
		return "/home/home";
	}
	
	@RequestMapping("/adminLogin")
	public String adminLogin() {
		return "/adminLogin/adminLogin";	
	}
	
	@RequestMapping("/dashboard")
	public String dashboard() {
		return "/dashboard/dashboard";	
	}
	
	@RequestMapping("/contactUs")
	public String contactUs() {
		return "/contactUs/contactUs";
	}
	
}