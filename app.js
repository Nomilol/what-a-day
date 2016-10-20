(function(){
	var app = {

		// clé : valeur,
		// clé : valeur,
		// clé : valeur,
		init : function(){
			app.listeners();
		},
		listeners : function(){
			$('#verifier').on('click', app.clickValider);
		},
		userInput : function(){

		},
		clickValider : function(){
		var userDay = $('#day').val();
		var userMonth = $('#month').val();
		var userYear = $('#year').val();
		var userDate = userDay + userMonth + userYear;
		console.log(userDate);
		console.log(userDay);
		console.log(userMonth);
		console.log(userYear);

		},
		printResult : function(){

		},
	}

	app.init();
})();




































































