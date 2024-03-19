package com.himan.taskpulse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
public class TaskpulseApplication {
	public static void main(String[] args) {
		//SpringApplication.run(TaskpulseApplication.class, args);
		int[] arr = {4,5,6,7,0,1,2};
		int target = 9;
		System.out.println((Sol.ans(arr,target)));   //4
	}
}
class Sol{
	public static int ans(int[] arr, int target) {
		int s = 0;
		int e = arr.length - 1;
		int pivot = -1;
		while (s < e){
			int mid = s + (e-s)/2;
			if(arr[mid] > arr[mid+1]) e = mid;
			else s = mid+1;
		}
		pivot = s;
		if(target > arr[s]) return -1;
		if(target < arr[s+1]) return -1;

		if(target>arr[0]){
			s = 0;
			e = pivot;
			while (s <= e){
				int mid = s + (e-s)/2;
				if(arr[mid] == target) return mid;
				else if (arr[mid] > target) e = mid-1;
				else s = mid+1;
			}
		}else{
			s = pivot+1;
			e = arr.length-1;
			while (s <= e){
				int mid = s + (e-s)/2;
				if(arr[mid] == target) return mid;
				else if (arr[mid] > target) e = mid-1;
				else s = mid+1;
			}
		}   //[4,5,6,7,0,1,2]
		return -1;
	}
}

