(function(){
	var app = {
		dayValue : ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],
		result : null,
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
		app.result = (moment(userDate).format('dddd'));
		$('#showDay').html(app.result);
		
		
		
		},
		printResult : function(){
			
			 
		},
	}

	app.init();
})();
		






































































