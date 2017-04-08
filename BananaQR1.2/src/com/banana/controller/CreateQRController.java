package com.banana.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.banana.po.QRcreate;
import com.banana.service.CreateQRService;

@Controller
@RequestMapping("createqr")
public class CreateQRController {
	
	
	/*@Autowired
	CreateQRService createQRService;*/
	@RequestMapping("getQr")
	public void createQr(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		response.setContentType("text/html");
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		
		String content=request.getParameter("requestData");
		
		
		System.out.println(content);
		
		QRcreate qr=new QRcreate();
		
		qr.setContent(content);
		
		//createQRService.CreateQr(qr);
		
		
		
		
		
		
		System.out.println(content);
		
		
		
	}
	

}
