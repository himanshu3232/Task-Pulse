package com.himan.taskpulse.controller;

import com.himan.taskpulse.model.Task;
import com.himan.taskpulse.model.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
public class TaskController{
    @Autowired
    TaskService taskService;
    @PostMapping("/add-task")
    public ResponseEntity<Boolean> addTask(@RequestBody Task task){
        boolean status = taskService.createTask(task);
        if(status) return ResponseEntity.status(HttpStatus.OK).body(true);
        return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(false);
    }
    @GetMapping("/get-task")
    public ResponseEntity<Task> getTask(@RequestBody long id){
        Task task = taskService.getTaskById(id).orElse(null);
        if(task != null) return ResponseEntity.status(HttpStatus.OK).body(task);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
    @PutMapping("/update-task")
    public ResponseEntity<Boolean> updateTask(@RequestBody Task task){
        boolean status = taskService.updateTask(task);
        if(status) return ResponseEntity.ok().body(true);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
    }
    @DeleteMapping("/delete-task")
    public ResponseEntity<Boolean> deleteTask(@RequestBody long id){
        boolean status = taskService.deleteTask(id);
        if(status) return ResponseEntity.ok().body(true);
        return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(false);
    }
    @GetMapping("/get-all-tasks")
    public ResponseEntity<List<Task>> getAllTasks(){
        return ResponseEntity.ok().body(taskService.getAllTasks());
    }
}