package com.max.spring.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="data")
public class AppModel {

	@Id
	// ID Auto generated 
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long pid;
	private String productname;
	private int productstock;
	private float productprice;
	private float productrating;
	private String productimg;
	
	
	// Getters and Setters for fields
	public Long getPid() {
		return pid;
	}
	public void setPid(Long pid) {
		this.pid = pid;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public int getProductstock() {
		return productstock;
	}
	public void setProductstock(int productstock) {
		this.productstock = productstock;
	}
	public float getProductprice() {
		return productprice;
	}
	public void setProductprice(float productprice) {
		this.productprice = productprice;
	}
	public float getProductrating() {
		return productrating;
	}
	public void setProductrating(float productrating) {
		this.productrating = productrating;
	}
	public String getProductimg() {
		return productimg;
	}
	public void setProductimg(String productimg) {
		this.productimg = productimg;
	}
	
	
	
	

	
	


}
