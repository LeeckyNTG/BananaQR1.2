package com.banana.service;
import com.banana.po.QRcreate;
import com.banana.tools.QRCodeUtil;

public class CreateQRService {
	
	public void CreateQr(QRcreate qr) {
		
		QRCodeUtil qUtil=new QRCodeUtil();
		
		try {
			 int color = 0x00FF00;
			 qUtil.encode(qr.getContent(), "d:/MyWorkDoc/Beach.jpg", "d:/MyWorkDoc",color, true);	
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
				
	}

}
