package com.himan.taskpulse.model.jdbc;

public class SqlQuery {
    public final static String ADD_USER = "INSERT INTO USERS(username,password) VALUES (?,?)";
    public final static String GET_USER_BY_ID = "SELECT * FROM users WHERE username = ?";
    public final static String GET_ALL_USERS = "SELECT * FROM users";
    public final static String UPDATE_USER = "UPDATE users SET username = ?, password = ? WHERE username = ?";
    public final static String DELETE_USER = "DELETE FROM users WHERE username = ?";
}
