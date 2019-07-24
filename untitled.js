module.exports=function(balArray){
	let sum=0;
	i=0;
	l=balArray.length;

	while(i<l){
		sum+=balArray[i++];
	}
	return sum;
}

