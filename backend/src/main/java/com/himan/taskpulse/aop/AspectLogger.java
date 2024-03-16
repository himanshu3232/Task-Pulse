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
    @Around("execution(boolean com.himan.taskpulse.model.TaskService.createTask(..))")
    public Object addUserLogger(ProceedingJoinPoint joinPoint) throws Throwable{
        Object result = joinPoint.proceed();
        System.out.println("Return value of addTask method is: " + result);
        return result;
    }
    @Around("execution(* com.himan.taskpulse.model.TaskService.getTaskById(..))")
    public Object getUserLogger(ProceedingJoinPoint joinPoint) throws Throwable{
        Object result = joinPoint.proceed();
        System.out.println("Return value of getTask method is: " + result);
        return result;
    }
    @Around("execution(* com.himan.taskpulse.model.TaskService.updateTask(..))")
    public Object updateUserLogger(ProceedingJoinPoint joinPoint) throws Throwable{
        Object result = joinPoint.proceed();
        System.out.println("Return value of getTask method is: " + result);
        return result;
    }
    @Around("execution(* com.himan.taskpulse.model.TaskService.deleteTask(..))")
    public Object removeUserLogger(ProceedingJoinPoint joinPoint) throws Throwable{
        Object result = joinPoint.proceed();
        System.out.println("Return value of getTask method is: " + result);
        return result;
    }
}
