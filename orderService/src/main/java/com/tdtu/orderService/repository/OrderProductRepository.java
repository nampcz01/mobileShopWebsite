package com.tdtu.orderService.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tdtu.orderService.model.OrderProduct;
import com.tdtu.orderService.model.ProductOrder;

public interface OrderProductRepository extends JpaRepository<ProductOrder, OrderProduct>{

}
