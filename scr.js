

know = {


"hello" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Hi there!",
"hi" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Hi there!",
"who are you" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp I am chatBot",
"how are you" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp I am Fine",
"how old are you" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp I am infinity in age",
"what are you doing":"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp About to go to sleep",
"are you human or bot":"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp I am just a bot",
"see you later":"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Goodbye"



};

function talk() {
var user = document.getElementById("userBox").value;
document.getElementById("chatLog").innerHTML += user+"<br>";
      user=user.toLowerCase().replace(/[^\w\s\d]/gi, "");
document.getElementById("userBox").value= "";


if (user in know) {
document.getElementById("chatLog").innerHTML += know[user] + "<br>";
} else 

{
document.getElementById("chatLog").innerHTML += "I don't understand... <br>";
}
}



document.addEventListener("DOMContentLoaded", () => {
	const inputField = document.getElementById("userBox")
	inputField.addEventListener("keydown", function(e) {
		if (e.code === "Enter") {
			
			 talk();
    }
  });
});









