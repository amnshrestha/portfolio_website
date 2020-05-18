
var JAVASkill = {
	name: "JAVA",
	skillLevel: 90
}


var AndroidSkill = {
	name: "AndroidStudio",
	skillLevel: 80
}

var PythonSkill = {
	name: "Python",
	skillLevel: 80
}

var SwiftSkill = {
	name: "Swift",
	skillLevel: 50
}

var VBSkill = {
	name: "VB",
	skillLevel: 70
}

var PHPSkill = {
	name: "PHP",
	skillLevel: 50
}

var CSkill = {
	name: "C",
	skillLevel: 60
}

var MYSQLSkill = {
	name: "MySQL",
	skillLevel: 90
}

var HTMLSkill = {
	name: "HTML",
	skillLevel: 90
}

var PhotoshopSkill = {
	name: "Photoshop",
	skillLevel: 90
}

var JavaScriptSkill = {
	name: "JavaScript",
	skillLevel: 60
}

var XMLSkill = {
	name: "XML",
	skillLevel: 70
}

var CSSSkill = {
	name: "CSS",
	skillLevel: 75
}

var LinuxSkill = {
	name: "Linux",
	skillLevel: 80
}




var javSkillBar = document.querySelector('#javaSkillBar');
javSkillBar.style.width = JAVASkill.skillLevel+"%";


// const javat1 = new TimelineMax();
// javat1.fromTo(javSkillBar,1, {width:'0%'},{width:JAVASkill.skillLevel+"%"});

var androidSkillBar = document.querySelector('#androidSkillBar');
androidSkillBar.style.width = AndroidSkill.skillLevel+"%";

var pythonSkillBar = document.querySelector('#pythonSkillBar');
pythonSkillBar.style.width = PythonSkill.skillLevel+"%";

var swiftSkillBar = document.querySelector('#swiftSkillBar');
swiftSkillBar.style.width = SwiftSkill.skillLevel+"%";

var vbSkillBar = document.querySelector('#vbSkillBar');
vbSkillBar.style.width = VBSkill.skillLevel+"%";

var phpSkillBar = document.querySelector('#phpSkillBar');
phpSkillBar.style.width = PHPSkill.skillLevel+"%";

var cSkillBar = document.querySelector('#cSkillBar');
cSkillBar.style.width = CSkill.skillLevel+"%";

var mySqlSkillBar = document.querySelector('#mySqlSkillBar');
mySqlSkillBar.style.width = MYSQLSkill.skillLevel+"%";

var htmlSkillBar = document.querySelector('#htmlSkillBar');
htmlSkillBar.style.width = HTMLSkill.skillLevel+"%";

var photoshopSkillBar = document.querySelector('#photoshopSkillBar');
photoshopSkillBar.style.width = PhotoshopSkill.skillLevel+"%";

var javaScriptSkillBar = document.querySelector('#javaScriptSkillBar');
javaScriptSkillBar.style.width = JavaScriptSkill.skillLevel+"%";

var xmlSkillBar = document.querySelector('#xmlSkillBar');
xmlSkillBar.style.width = XMLSkill.skillLevel+"%";

var cssSkillBar = document.querySelector('#cssSkillBar');
cssSkillBar.style.width = CSSSkill.skillLevel+"%";

var linuxSkillBar = document.querySelector('#linuxSkillBar');
linuxSkillBar.style.width = LinuxSkill.skillLevel+"%";



// Work Experience Code
var workExperienceDescription = [];
workExperienceDescription.push("Data Science research intern for the project “Privacy impact of wearable devices”. Worked on machine models that would use ECG and EDA time-series data to predict what movie a person was watching from among a given set of movies.<br>");
workExperienceDescription.push("Led study sessions to review the topics covered in class. Graded exams and projects. The topics include Heuristic search, Automated reasoning, Reasoning under uncertainty and Machine learning.<br><br>");
workExperienceDescription.push("Led workshop every week to review topics for Intro Computer Science and Data Structures and Algorithm courses. Both courses are studied using JAVA.<br><br>");
workExperienceDescription.push("Work as a tutor for Intro to Computer Science, Data Structure and Algorithms, Computation and Formal Systems, Intro to Artificial Intelligence, Principles of Economics and Calculus courses. Took a two-semester long training course to learn different tutoring strategies.");


function testFunction(num){

	var textToChange = $(".pages").find("#"+num);
	textToChange.find(".cardDescription").toggle(250);

}


// testing animation
$(".pages").css("display","none");

$('.slideTransition').each(function(){

	
    var arrayOfPage = $(this).find(".pages").toArray();
    var navBar = $(this).find(".navBarLeftRight");
    var c = 0;
    var navBarButtons = [];
    $.each(arrayOfPage, function( index, value ) {
        var newButton= $('<span class = "circle" id = "'+c+'"></span>');
        c++;
        navBar.append(newButton);
        navBarButtons.push(newButton);
    });
    var currentPage = "0";
    var current = $(arrayOfPage[currentPage]);
    var buttonSelected =   navBarButtons[0];
    buttonSelected.addClass("selected");
	current.css("display","block");
	
	  
    $(this).find(".circle").on("click",function(){
        var pageToGo = this.id ;
        var prevPage = currentPage;

		console.log($('#navWorkExperience').hasClass(".nav-link.active"));
        if(currentPage!==pageToGo){
			var toGoTo = $(arrayOfPage[pageToGo]);
            current.toggle("slide",function(){
                toGoTo.toggle("slide");
				current = toGoTo;
                currentPage = pageToGo;
                $(buttonSelected).removeClass("selected");
                buttonSelected =  navBarButtons[currentPage];
                $(buttonSelected).addClass("selected");

            });
        }
    });
});













