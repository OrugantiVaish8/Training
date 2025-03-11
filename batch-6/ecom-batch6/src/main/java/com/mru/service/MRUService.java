package com.mru.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mru.entity.Laptops;
import com.mru.entity.Mobiles;
import com.mru.entity.Watches;
import com.mru.repo.LaptopsRepo;
import com.mru.repo.MobilesRepo;
import com.mru.repo.WatchesRepo;

@Service
public class MRUService {
    @Autowired
    private LaptopsRepo repo;
    public List<Laptops> getLaptops(){
    	return repo.findAll();
    }
    @Autowired
	private MobilesRepo mobiles;
	
	public List<Mobiles> getMobiles(){
		return mobiles.findAll();
	}
	@Autowired
	private WatchesRepo watches;
	
	public List<Watches> getWatches(){
		return watches.findAll();
	}
}
