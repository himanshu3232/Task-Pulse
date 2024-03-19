package com.himan.taskpulse.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.stereotype.Component;

@Component
@Aspect
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class AspectLogger {
    @Around("execution(boolean com.himan.taskpulse.service.impl.TaskServiceImpl.createTask(..))")
    public Object addTaskLogger(ProceedingJoinPoint joinPoint) throws Throwable{
        Object result = joinPoint.proceed();
        System.out.println("Return value of createTask method is: " + result);
        return result;
    }
    @Around("execution(* com.himan.taskpulse.service.impl.TaskServiceImpl.getTaskById(..))")
    public Object getTaskLogger(ProceedingJoinPoint joinPoint) throws Throwable{
        Object result = joinPoint.proceed();
        System.out.println("Return value of getTaskById method is: " + result);
        return result;
    }
    @Around("execution(* com.himan.taskpulse.service.impl.TaskServiceImpl.updateTask(..))")
    public Object updateTaskLogger(ProceedingJoinPoint joinPoint) throws Throwable{
        Object result = joinPoint.proceed();
        System.out.println("Return value of updateTask method is: " + result);
        return result;
    }
    @Around("execution(* com.himan.taskpulse.service.impl.TaskServiceImpl.deleteTask(..))")
    public Object removeTaskLogger(ProceedingJoinPoint joinPoint) throws Throwable{
        Object result = joinPoint.proceed();
        System.out.println("Return value of deleteTask method is: " + result);
        return result;
    }
    @Around("execution(* com.himan.taskpulse.service.impl.TaskServiceImpl.getAllTasks(..))")
    public Object getAllTaskLogger(ProceedingJoinPoint joinPoint) throws Throwable{
        Object result = joinPoint.proceed();
        System.out.println("Return value of getAllTasks method is: " + result);
        return result;
    }
}
