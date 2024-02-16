package com.himan.taskpulse.model;

import com.himan.taskpulse.model.jdbc.DBConnection;
import com.himan.taskpulse.model.jdbc.SqlQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Optional;
@Component
public class GetUser {
    @Autowired
    private DBConnection connection;
    public Optional<User> getUser(User user){
        Connection con = connection.getConnection()
                .orElse(null);

        if(con == null) return Optional.empty();
        try{
            PreparedStatement statement = con.prepareStatement(SqlQuery.GET_USER_BY_ID);
            statement.setString(1,user.getUsername());
            ResultSet resultSet = statement.executeQuery();
            boolean correctUsername = false;
            boolean correctPassword = false;

            while(resultSet.next()){
                correctUsername = user.getUsername()
                        .equals(resultSet.getString(1));
                correctPassword = user.getPassword()
                        .equals(resultSet.getString(2));
            }

            if(correctUsername && correctPassword) return Optional.of(user);

        }catch(SQLException e){
            System.out.println(e.getMessage());
        }finally {
            connection.closeConnection();
        }
        return Optional.empty();
    }
}
