package com.himan.taskpulse.repository;

import com.himan.taskpulse.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task,Long> {
}
