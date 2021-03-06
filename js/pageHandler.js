function viewStatus(){
	document.getElementById('view-status-section').style.display = "block";
	document.getElementById('raise-ticket-section').style.display = "none";
}
function raiseTicket(){
	document.getElementById('view-status-section').style.display = "none";
	document.getElementById('raise-ticket-section').style.display = "block";
}

function option(){
	document.getElementById('raise-ticket-section').style.display = "none";
	document.getElementById('raise-issue-section').style.display = "block";
}

function issueDetails(){
	document.getElementById('issueDetails').style.display = "flex";
	document.getElementById('issueDetailsImage').style.display = "flex";
}