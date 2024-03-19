package com.himan.taskpulse.service.impl;

import com.himan.taskpulse.entity.Task;
import com.himan.taskpulse.repository.TaskRepository;
import com.himan.taskpulse.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository repository;
    @Override
    public ResponseEntity<Task> createTask(Task task) {
        Task savedTask = repository.save(task);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTask);
    }

    @Override
    public Optional<Task> getTaskById(Long id) {
        return repository.findById(id);
    }

    @Override
    public ResponseEntity<Task> updateTask(Task task) {
        Task updatedTask = repository.save(task);
        return ResponseEntity.status(HttpStatus.OK).body(updatedTask);
    }

    @Override
    public ResponseEntity<Boolean> deleteTask(Long id) {
        repository.deleteById(id);
        return ResponseEntity.ok(true);
    }

    @Override
    public List<Task> getAllTasks() {
        return repository.findAll();
    }
}
