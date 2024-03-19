package com.himan.taskpulse.service;

import com.himan.taskpulse.entity.Task;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.Optional;


public interface TaskService {
    ResponseEntity<Task> createTask(Task task);
    Optional<Task> getTaskById(Long id);
    ResponseEntity<Task> updateTask(Task task);
    ResponseEntity<Boolean> deleteTask(Long id);
    List<Task> getAllTasks();
}
