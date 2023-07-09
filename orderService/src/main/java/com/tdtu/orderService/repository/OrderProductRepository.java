package com.tdtu.orderService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tdtu.orderService.model.ProductOrder;

public interface OrderProductRepository extends JpaRepository<ProductOrder,Long>{
	
	@Query("SELECT p FROM ProductOrder p WHERE p.orderId LIKE %?1%")
    public List<ProductOrder> getProductsByOrderId(long orderID);
	
	@Query("SELECT p FROM ProductOrder p WHERE p.orderId LIKE %?1% AND p.productId LIKE %?2%")
    public ProductOrder findProductOrder(long orderID, long productId);

}
