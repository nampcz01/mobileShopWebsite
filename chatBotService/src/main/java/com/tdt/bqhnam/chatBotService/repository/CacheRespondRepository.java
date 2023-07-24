package com.tdt.bqhnam.chatBotService.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tdt.bqhnam.chatBotService.model.CacheRespond;

@Repository
public interface CacheRespondRepository extends JpaRepository<CacheRespond,Long>{
	@Query("SELECT p FROM CacheRespond p WHERE p.request LIKE %?1%")
    public CacheRespond search(String req);
}
