

fetch("http://api.open-notify.org/astros.json")
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		loopThroughResults(json);
	})
	.catch(function(error) {
		console.log(error);
	});
	
function loopThroughResults(people){
	var HowMany = document.getElementById('peopleInSpace');
	var whichCraft = document.getElementById('whatCraft');
	for (var i = 0; i < people.people.length; i++){
		HowMany.innerHTML += '<div><h3>' + people.people[i].name + '</h3></div>';
		whichCraft.innerHTML += '<div><h3>' + people.people[i].craft + '</h3></div>';
		
	console.log([i]);
	}
}
	