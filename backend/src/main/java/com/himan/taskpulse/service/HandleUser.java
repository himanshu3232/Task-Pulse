package com.himan.taskpulse.service;

import com.himan.taskpulse.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class HandleUser {

    //DB CRUD Beans...
    @Autowired
    private AddUser addUser;
    @Autowired
    private GetUser getUser;
    @Autowired
    private RemoveUser removeUser;
    @Autowired
    private UpdateUser updateUser;


    //following methods compare frontend and backend logic
    public boolean addUser(User user){
        return addUser.addUser(user);
    }
    public boolean getUser(User user){
        return getUser.getUser(user)
                .orElse(null) != null;
    }
    public boolean updateUser(User user){
        return updateUser.updateUser(user);
    }
    public boolean removeUser(User user){
        return removeUser.removeUser(user);
    }

}
