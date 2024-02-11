package com.himan.taskpulse.model;

import com.himan.taskpulse.model.jdbc.DBConnection;
import com.himan.taskpulse.model.jdbc.SqlQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@Component
public class AddUser {
    @Autowired
    private DBConnection connection;
    public boolean addUser(User user){
        Connection con = connection.getConnection()
                .orElse(null);

        if(con == null) return false;

        try{
            PreparedStatement statement = con.prepareStatement(SqlQuery.ADD_USER);
            statement.setString(1, user.getUsername());
            statement.setString(2,user.getPassword());

            return statement.executeUpdate() > 0;

        }catch(SQLException e){
            System.out.println(e.getMessage());
        }finally {
            connection.closeConnection();
        }
        return false;
    }
}
