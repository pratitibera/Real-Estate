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
function sidebar(){
	$(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
         $(".humberger__menu__overlay").addClass("active");
         $("body").addClass("over_hid");
}

(function ($) {
         //Humberger Menu
         $(".humberger__open").on("click", function () {
         $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
         $(".humberger__menu__overlay").addClass("active");
         $("body").addClass("over_hid");
         });
         
         $(".humberger__menu__overlay").on("click", function () {
         $(".humberger__menu__wrapper").removeClass(
         "show__humberger__menu__wrapper"
         );
         $(".humberger__menu__overlay").removeClass("active");
         $("body").removeClass("over_hid");
         });
         })(jQuery);