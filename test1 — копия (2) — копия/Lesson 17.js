window.onload = function() {

var sf = document.forms.f1;

	var words= ["Navi ","Sorax","Blood"];


	for (var i=0; i<words.length; i++){
		document.getElementById("spanArr").innerHTML += "<span>" + words[i]+"</span>";
	}

	sf.btAdd.onclick=function(){
		document.getElementById("spanArr").innerHTML ="";
		words.push(sf.word.value);
			for (var i=0; i<words.length; i++){
				document.getElementById("spanArr").innerHTML += "<span>" + words[i]+"</span>";
			}
	}

	sf.replase.onclick=function(){
	var strin = sf.textArea.value;

	for (var i=0; i<words.length; i++){
		while(strin.indexOf(words[i]) != -1){
		strin = strin.replace(words[i],(Array(words[i].length).join('*')));
		}
	}
	sf.textArea.value =strin;
	}
}