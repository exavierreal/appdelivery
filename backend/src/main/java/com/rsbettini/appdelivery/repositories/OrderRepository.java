package com.rsbettini.appdelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rsbettini.appdelivery.entites.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
