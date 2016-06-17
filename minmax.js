function minmax()
{
	max=0;
	min=1000000;
	for(i=0;i<arguments.length;i++)
	{
		if(arguments[i]>max)
			max=arguments[i];
		if(arguments[i]<min)
			min=arguments[i];
	}
	//console.log(max);
	//console.log(min);
	document.write(min);
	document.write("---------");
	document.write(max);
} minmax(1,2,3,4,5,6,7,8,45,334,64,64,77,3,44,6)