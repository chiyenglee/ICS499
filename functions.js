    //Countdown Timer
	var seconds = 60;
    function secondPassed() {
        document.getElementById('countdown').innerHTML = seconds;
        if (seconds == 0) {
            clearInterval(countdownTimer);
            document.getElementById('countdown').innerHTML = "Time's up";
        } else {
            seconds--;
        }
    }
    var countdownTimer = setInterval('secondPassed()', 1000);
	
	//Generate shuffle Words
	function generateWords(){
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
		
		shuffleArray(words);
		document.getElementById("textArea").innerHTML = words.join(" ");
		
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