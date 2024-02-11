package com.himan.taskpulse.model.jdbc;

import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Optional;
@Component
public class DBConnection {
    private Connection connection = null;
    private final String URL = "jdbc:postgresql://localhost:5432/mydb";
    private final String USER_NAME = "postgres";
    private final String PASSWORD = "5844";
    public Optional<Connection> getConnection(){
        try{
            Class.forName("org.postgresql.Driver");
            connection = DriverManager.getConnection(URL,USER_NAME,PASSWORD);
        }catch(ClassNotFoundException | SQLException e){
            System.out.println(e.getMessage());
        }
        return Optional.ofNullable(connection);
    }
    public void closeConnection(){
        try{
            connection.close();
        }catch(SQLException e){
            System.out.println(e.getMessage());
        }
    }
}
