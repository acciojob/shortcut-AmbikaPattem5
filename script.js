function shortcut(s1, s2) {
  // your code here
	let result="";
	if(s1[0]==="" && s2[0]!==""){
		result="";
	}
	else if(s1[0]!=="" && s2[0]===""){
		result="";
	}
	else if(s1[0]!=="" && s2[0]!==""){
		result=s1[0]+s2[0]
	}
	return result;
}


// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
