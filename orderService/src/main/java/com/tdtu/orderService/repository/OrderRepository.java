package com.tdtu.orderService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tdtu.orderService.model.Order;


public interface OrderRepository extends JpaRepository<Order,Long>{

	@Query("SELECT o FROM Order o WHERE o.userId = ?1")
    public List<Order> getOrdersByUserId(Long userId);
}
