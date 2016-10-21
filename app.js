(function(){
	var app = {
		dayValue : ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],
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
		var userDate = moment({year : userYear , month : userMonth , day : userDay});
		var result = (moment(userDate).format('dddd'));
		app.printResult();
		$('#showDay').html(result);
		
		
		
		},
		printResult : function(){
			
			
		},
	}

	app.init();
})();
		






































































