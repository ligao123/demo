package com.imooc.demo.repository;

import com.imooc.demo.domain.Girl;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GirlRepository extends JpaRepository<Girl,Integer>{
}
