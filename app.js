(function(){
	var app = {
		result : null,
		init : function(){
			app.listeners();
			app.print();
		},
		listeners : function(){
			$('#verifier').on('click', app.clickValider);
			$('#overlay').on('click','#restart' , app.restart);
		},
		restart : function(){
			$('#overlay').hide();
			$('#hide').show();
		},
		clickValider : function(){
			var userDay = $('#day').val();
			var userMonth = $('#month').val();
			var userYear = $('#year').val();
			var userDate = moment({year : userYear , month : userMonth , day : userDay});
			app.result = (moment(userDate).format('dddd'));
			$('#overlay').show();
			$('#overlay').html(app.result + "<button id='restart'> Recommencer </button>");
			$('#hide').hide();
			if(userDay < 1 || userDay > 31){
				$('#error').show();
				$('#error').html('Le jour doit être compris entre 1 et 31');
			};
			if (userYear < 0){
				$('#error').show();
				$('#error').html('L\'année doit être supérieure à 0');
			};
			//debugger
		},
		print : function(){
			$('#error').hide();
			$('#overlay').hide();
		},

	}

	app.init();
})();


































































