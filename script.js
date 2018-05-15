function result() {
	var text=document.getElementById('text').value;
	var numbers=document.getElementById('numbers').value;
	var massiv=[];
	for (var i = 0; i < text.length; i++) {
		massiv[i]=text.charAt(i);
	}
	var resultat=[];
	if (numbers>=text.length){
		numbers=numbers-text.length;
	}
	for (var i = massiv.length; i >= 0; i--) {
		var j=i+(numbers*1);
		if (j>=massiv.length){
			resultat[j-massiv.length]=massiv[i];
		}else{
			resultat[i+(numbers*1)]=massiv[i];
		}
	}
	console.log(resultat);
	var word='';
	for (var i=0; i<resultat.length; i++){
		word=word+resultat[i];
	}
	alert(word);
	console.log(resultat);
}
