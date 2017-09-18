package com.imooc.demo.service;

import com.imooc.demo.domain.Girl;
import com.imooc.demo.repository.GirlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class GirlServiceImpl implements GirlService{
    @Autowired
   private GirlRepository girlRepository;
    @Override
    public List<Girl> girlList() {
        return girlRepository.findAll();
    }

    @Override
    public Girl addGirOne(Girl girl) {
        return girlRepository.save(girl);
    }

    @Override
    public Girl findGirlById(Integer id) {

        return girlRepository.findOne(id);
    }

    @Override
    public Girl update(Girl girl) {
       return girlRepository.save(girl);
    }

    @Override
    public void delete(Integer id) {
         girlRepository.delete(id);
    }
}
