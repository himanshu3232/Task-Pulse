package com.himan.taskpulse.controller;

import com.himan.taskpulse.entity.Task;
import com.himan.taskpulse.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/task")
public class TaskController{

    private final TaskService taskService;

    @PostMapping("/add-task")
    public ResponseEntity<Task> addTask(@RequestBody Task task){
        return taskService.createTask(task);
    }

    @GetMapping("/get-task")
    public ResponseEntity<Task> getTask(@RequestParam long id){
        Task task = taskService.getTaskById(id).orElse(null);
        if(task != null) return ResponseEntity.status(HttpStatus.OK).body(task);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    @PutMapping("/update-task")
    public ResponseEntity<Task> updateTask(@RequestBody Task task){
        return taskService.updateTask(task);
    }

    @DeleteMapping("/delete-task")
    public ResponseEntity<Boolean> deleteTask(@RequestParam long id){
        return taskService.deleteTask(id);
    }

    @GetMapping("/get-all-tasks")
    public ResponseEntity<List<Task>> getAllTasks(){
        return ResponseEntity.ok().body(taskService.getAllTasks());
    }
}