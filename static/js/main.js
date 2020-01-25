$(document).ready(function(){

	if(sessionid){
		$(".profile_main").addClass("change_profile");
		$(".login_main").addClass("change_login");
	}
	else{
		$(".profile_main").removeClass("change_profile");
		$(".login_main").removeClass("change_login");
	}

});