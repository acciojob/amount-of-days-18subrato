function daysOfAYear(n){
	if(n<1 || n>9999){
		return 0;
	}

	if(n%4===0 && n%100!==0 || n%400 === 0){
		return 366;
	} else {
		return 365;
	}
	
}

alert(daysOfAYear(2000))