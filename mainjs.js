
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


function myFunction(){
	alert("Hi");
}


$( '#skillsDetails').scroll(function() {
   if ( $(this)[0].scrollHeight - $(this).scrollTop() <= $(this).outerHeight()){
       console.log("Fuck off");
    } 
});


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
















