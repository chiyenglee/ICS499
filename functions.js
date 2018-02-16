	var timerstarted = false;
	var count = 0;
	var correctNum=0;
	var incorrectNum=0;
	
	var words = ["ants","arc", "ark", "about", "all", "also", "and", "as", "at", "art", 
		"be", "bear", "bee", "been", "but", "by", "can", "come", "could", "day", "do", "even", 
		"find", "first", "for", "from", "gem" ,"get", "give", "go", "have", "he", "her", "here", 
		"hill", "him", "his", "how", "eye", "if", "in", "into", "it", "its", "jam", "jelly", "just", 
		"know", "like", "look", "make", "man", "many", "me","men", "more", "my", "new", "no", "not",
		"now", "of", "on", "one", "only", "or", "other", "our", "out", "pan","pit", "say", "see", 
		"she", "so", "some", "take", "tell", "than", "that", "the", "their", "them", "then", "there",
		"these","they", "thing", "think", "this", "those", "time", "to", "two", "up", "use", "very",
		"want", "way", "we", "well", "what", "with", "witch", "who", "will", "with", "wood", "year",
		"you", "your", "zoo"];
		
	// Countdown Timer Function
	//have the interval start when the key is pressed. timerstarted ensures it only happens once.
    function keyPressEvent(e) {
		if(timerstarted == false) {  //timer starts
			setTimeout(secondPassed,1000);
			timerstarted = true;
		}
		if(e.keyCode == 32){
			var word = document.getElementById('typing_space').value;
			checkWord(word);
			document.getElementById('typing_space').value = ""; //clear text area.
		}
	}
	
	function secondPassed(){
		//get current timer on screen
		var currenttimer = document.getElementById('countdown').innerHTML;
		//if timer is 0, say time's up
		if(currenttimer==0 || currenttimer=="0"){
			document.getElementById('countdown').innerHTML = "Time's up"
			//alert(correctNum);
			confirm("Score\nCorrect: "+correctNum+"\nIncorrect: "+incorrectNum);
		}
		//subtract 1 second from current timer
		else {
			currenttimer--;
			document.getElementById('countdown').innerHTML = currenttimer--;
			setTimeout(secondPassed,1000);
		}
    }
	
	//Generate shuffle Words
	function generateWords(){
		
		shuffleArray(words);
		var textareaHtml = "";
		words.forEach(function(element){
			textareaHtml += "<span id='"+ element+ "'>"+element+"</span>&nbsp";
		});
		document.getElementById("textArea").innerHTML = textareaHtml;
		var currentWord = document.getElementById(words[count]);
		currentWord.className = "currentWord";
		
	}
	generateWords();
	
	//shuffle Array
	function shuffleArray(array){
		for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
		}
	}
	
	//reset button  ##need to stop the timer from countdown right away
	function resetButton(){
		document.getElementById('countdown').innerHTML = "60";
		timerstarted=false;
		count=0;
		generateWords();
	}
	
	//check words  ##doesn't compare word correctly
	function checkWord(word){	
		var currentWord = document.getElementById(words[count]);
		if(words[count] == word.trim()){
			currentWord.className = "correctWord";
			correctNum++;
		}
		else{
			currentWord.className = "wrongWord";
			incorrectNum++;
		}
		
		count++;
		var currentWord = document.getElementById(words[count]);
		currentWord.className = "currentWord";
	}