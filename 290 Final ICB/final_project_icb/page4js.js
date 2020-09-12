document.addEventListener('DOMContentLoaded', secureInfo);

function secureInfo()
{
	document.getElementById("submitButton").addEventListener("click", function(event)
	{
		var req = new XMLHttpRequest();
        var binURL = "http://httpbin.org/post"; //submit request to this address
        //var binURL = "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php";
		var payload = {yourname: null, email: null, phone: null}; //set intial as null per Asychronous Requests in the study notes

		//get the input value and assign to variable
		payload.yourname = document.getElementById("yourname").value;
		payload.email = document.getElementById("email").value;
		payload.phone = document.getElementById("phone").value;
	
		req.open('POST', binURL, true); // setting up as Asychronously and POST
		req.setRequestHeader('Content-Type', 'application/json'); //encode as JSON type (i believe) per notes
		req.addEventListener("load", function()
		{
			if (req.status >= 200 && req.status < 400){  //from Asynchronous Requests in the study notes
				var response = JSON.parse(JSON.parse(req.responseText).data);
				console.log(response);
                document.getElementById("user_confirm").textContent = "Thank You For Your Interest " + response.yourname + "!";
                document.getElementById("user_confirm2").textContent = "We have received your information and will be in contact soon"; 
				document.getElementById("user_email").textContent = "Your Email: " + response.email;
				document.getElementById("user_phone").textContent = "Your Phone: " + response.phone;
			} else { 
				console.log("Error in newtwork Request: " + response.statusText);
			}
		});
		req.send(JSON.stringify(payload)); //stringify and send the payload per the Asynchronous Requests in the study notes
		event.preventDefault();
	});
}