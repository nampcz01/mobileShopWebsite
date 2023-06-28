package com.tdtu.orderService.model;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class ProductOrder {

    @EmbeddedId
    @JsonIgnore
    private OrderProduct pk;

    @Column(nullable = false)
    private long quantity;

    public ProductOrder() {
        pk = new OrderProduct();
    }

    public ProductOrder(Order order, Long productId, long quantity) {
        pk = new OrderProduct();
        pk.setOrder(order);
        pk.setProductId(productId);
        this.quantity = quantity;
    }

    @Transient
    public Long getProductId() {
        return this.pk.getProductId();
    }

    public OrderProduct getPk() {
        return pk;
    }

    public void setPk(OrderProduct pk) {
        this.pk = pk;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

}
