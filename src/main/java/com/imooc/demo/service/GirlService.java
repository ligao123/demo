package com.imooc.demo.service;

import com.imooc.demo.domain.Girl;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface GirlService {
      //查询
    public List<Girl> girlList();

    //增加
    public Girl addGirOne(Girl girl);
    public Girl findGirlById(Integer id);
    public Girl update(Girl girl);
    public void delete(Integer id);
}
