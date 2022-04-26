
package com.example.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Users;




//@author Kavitha S

@Repository
public interface UsersRepository extends CrudRepository<Users, Long> {

	List<Users> findByemailId(String emailId);
}
