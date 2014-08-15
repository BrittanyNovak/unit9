function makeMessage() { 
	var v1, v2, v3, v4, v5, v6, v7, v8
		v1 = $("#one");
		v2 = $("#two");
		v3 = $("#three");
		v4 = $("#four");
		v5 = $("#five");
		v6 = $("#six");
		v7 = $("#seven");
		v8 = $("#eight");
		
		var alertMessage= "";
		if (v1.val() == ""){ alertMessage += "Missing First Name, ";v1.addClass("missing"); }
		else {v1.removeClass("missing"); }
		if (v2.val() == ""){ alertMessage += "Missing Last Name, ";v2.addClass("missing"); }
		else {v2.removeClass("missing"); }
		if (v3.val() == ""){ alertMessage += "Missing Address, ";v3.addClass("missing"); }
		else {v3.removeClass("missing"); }
		if (v4.val() == ""){ alertMessage += "Missing City, ";v4.addClass("missing"); }
		else {v4.removeClass("missing"); }
		if (v5.val() == ""){ alertMessage += "Missing State, ";v5.addClass("missing"); }
		else {v5.removeClass("missing"); }
		if (v6.val() == ""){ alertMessage += "Missing Zip Code, ";v6.addClass("missing"); }
		else {v6.removeClass("missing"); }
		if (v7.val() == ""){ alertMessage += "Missing Phone Number, ";v7.addClass("missing"); }
		else {v7.removeClass("missing"); }
		if (v8.val() == ""){ alertMessage += "Missing Position, ";v8.addClass("missing"); }
		else {v8.removeClass("missing"); }
		
		if(alertMessage != ""){alert("You are missing\n" + alertMessage);}
		else {
			var message = "Welcome " + v1.val() + " " + v2.val() + "<br>";
			message += "Whose address is " + v3.val() + " " + v4.val() + "<br><br>";
			message += "In " + v5.val() + "In the state of" + v6.val() + "<br><br>";
			message += "We have that you can be reached at " + v7.val() + "<br>";
			message += "You are applying for the position of " + v8.val() + "<br><br>";
			$("#welcomeMessage").append(message);
		}
}

			
			
			
			
			
			
			