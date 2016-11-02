(function(){
	var app = {
		dayValue : ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],
		result : null,
		init : function(){
			app.listeners();
			//app.print();
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
			$('#overlay').append(app.result);
			$('#hide').hide();
			if(userDay < 1 || userDay > 31){
				$('#error').append('Le jour doit être compris entre 1 et 31');
				
			};
			if (userYear < 0){
				$('#error').append('L\'année doit être supérieure à 0');
			}



		},
		print : function(){
			$('#error').hide();
			$('#overlay').hide();


		},
	}

	app.init();
})();







































































