/* Vitor Colley */
/* Home */
/* NavBar grow icons */
/* NavBar home */
function growHome(){
	grow=document.getElementById("home"); 
		grow.style.fontSize="30px";
		grow.style.color="#06283D";
		grow.style.backgroundColor="#DFF6FF";
}
function backHome(){
	back=document.getElementById("home"); 
		back.style.fontSize="20px";
		back.style.color="#DFF6FF";
		back.style.backgroundColor="#06283D";		
}
/* NavBar how to begin */
function growHowToBegin(){
	grow=document.getElementById("howToBegin"); 
		grow.style.fontSize="30px";
		grow.style.color="#06283D";
		grow.style.backgroundColor="#DFF6FF";
}
function backHowToBegin(){
	back=document.getElementById("howToBegin"); 
		back.style.fontSize="20px";
		back.style.color="#DFF6FF";
		back.style.backgroundColor="#06283D";	
}
/* NavBar online courses */
function growOnlineCourses(){
	grow=document.getElementById("onlineCourses"); 
		grow.style.fontSize="30px";
		grow.style.color="#06283D";
		grow.style.backgroundColor="#DFF6FF";
}
function backOnlineCourses(){
	back=document.getElementById("onlineCourses"); 
		back.style.fontSize="20px";
		back.style.color="#DFF6FF";
		back.style.backgroundColor="#06283D";
	
}
/* NavBar about us */
function growAboutUs(){
	grow=document.getElementById("aboutUs"); 
		grow.style.fontSize="30px";
		grow.style.color="#06283D";
		grow.style.backgroundColor="#DFF6FF";
}
function backAboutUs(){
	back=document.getElementById("aboutUs"); 
		back.style.fontSize="20px";
		back.style.color="#DFF6FF";
		back.style.backgroundColor="#06283D";	
}
/* Nav bat Responsive */
function myFunction() {
	var x = document.getElementById("myNavbar");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
}
/* Welcome Message */
/* Based myself on this page https://techstacker.com/javascript-detect-if-screen-width-is-greater-or-less-than/ in order to get the If statement that prevents this code from acting when under 600px screen */
function growWelcome(){
	if(window.matchMedia("(min-width: 600px)").matches){
	grow=document.getElementById("welcomeTextId"); 
	grow.style.fontSize="50px";
	}
}
function backWelcome(){
	if(window.matchMedia("(min-width: 600px)").matches){
	back=document.getElementById("welcomeTextId"); 
		back.style.fontSize="38px";
	}
}


/* game */
function verify(){
	var valid= false;
	if(
		/* House#1 */
		document.getElementById("color1").value=="yellow" &&
		document.getElementById("nationality1").value=="norwegian" &&
		document.getElementById("drink1").value=="water" &&
		document.getElementById("cigarrete1").value=="dunhill" &&
		document.getElementById("pet1").value=="cats"&&
		
		/* House#2 */
		document.getElementById("color2").value=="blue" &&
		document.getElementById("nationality2").value=="dane" &&
		document.getElementById("drink2").value=="tea" &&
		document.getElementById("cigarrete2").value=="blends" &&
		document.getElementById("pet2").value=="horses"&&
		
		/* House#3 */
		document.getElementById("color3").value=="red" &&
		document.getElementById("nationality3").value=="british" &&
		document.getElementById("drink3").value=="milk" &&
		document.getElementById("cigarrete3").value=="palmall" &&
		document.getElementById("pet3").value=="birds"&&
		
		/* House#4 */
		document.getElementById("color4").value=="green" &&
		document.getElementById("nationality4").value=="german" &&
		document.getElementById("drink4").value=="coffee" &&
		document.getElementById("cigarrete4").value=="prince" &&
		document.getElementById("pet4").value=="fish"&&
		
		/* House#5*/
		document.getElementById("color5").value=="white" &&
		document.getElementById("nationality5").value=="swede" &&
		document.getElementById("drink5").value=="beer" &&
		document.getElementById("cigarrete5").value=="bluemaster" &&
		document.getElementById("pet5").value=="dogs"
		
		){
		valid= true;
				}
	if(valid==true){
		alert("Congratulations!");
				}
	else{
		alert("Not quite there yet, keep trying!");
				}
	return valid;
}
	/* randomise game clues */
	/* got the idea from a youtube video at https://www.youtube.com/watch?v=NzWFbRMxKaM&ab_channel=WebDot and adapted the parts of it I knew how to manipulate. From what I understood, we randomise the child elements of the ul(in this case the lines) by printing them according to their string's length, except we use the Math.random function to randomise which length is being printed in what order. We also use the appendChild to target that specific element in that list and move them to the order it showed up in the randomisation. */
function random(){
	var ul=document.getElementById("clues")
	for (var i=ul.children.length;i>=0;i--){
		ul.appendChild(ul.children[Math.random()*i|0])
	}
}
/* About Us */
function colorAboutTxt(){
	color=document.getElementById("colorAboutUsText"); 
		color.style.color="#06283D";
		color.style.backgroundColor="#DFF6FF";
}
function colorBackAboutTxt(){
	back=document.getElementById("colorAboutUsText"); 
		back.style.color="#DFF6FF";
		back.style.backgroundColor="#06283D";		
}
/* About the Team */
function colorAboutTeamTxt(){
	color=document.getElementById("colorAboutTeamTxt"); 
		color.style.color="#06283D";
		color.style.backgroundColor="#DFF6FF";
}
function colorBackAboutTeamTxt(){
	back=document.getElementById("colorAboutTeamTxt"); 
		back.style.color="#DFF6FF";
		back.style.backgroundColor="#06283D";		
}
/* About NCI */
function colorAboutNciTxt(){
	color=document.getElementById("colorAboutNciTxt"); 
		color.style.color="#06283D";
		color.style.backgroundColor="#DFF6FF";
}
function colorBackAboutNciTxt(){
	back=document.getElementById("colorAboutNciTxt"); 
		back.style.color="#DFF6FF";
		back.style.backgroundColor="#06283D";		
}


/* Carlos Borges */
/* The codes used are based on the contents we had in the classroom */

/* When you click show text */
function myFlexibility() {
	  var x = document.getElementById("myFlex");
	  if (x.style.display === "none") {
		x.style.display = "block";
	  } else {
		x.style.display = "none";
	  }
}

function myContent() {
	var x = document.getElementById("contEnts");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
	var article=document.getElementById("contEnts"); 
		article.style.color="none";
}
function myPracticality() {
	var x = document.getElementById("myPractical");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}
function myVariety() {
	var x = document.getElementById("myVarie");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}
function myCost() {
	var x = document.getElementById("myBene");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}
function myCertification() {
	var x = document.getElementById("myCert");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}


/* Images and when the user click - show text */

function myAvatar() {
	var x = document.getElementById("myAva");
	if (x.style.display == "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}


function myOladimeji() {
	var x = document.getElementById("myOlad");
	if (x.style.display == "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}

function myMiroshnichenko () {
	var x = document.getElementById("myMiros");
	if (x.style.display == "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}
function myJulia() {
	var x = document.getElementById("myJulicameron");
	if (x.style.display == "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}
 // Thaina de Paula
 // I created a function to validate the form storing the variable and using getElementById (manipulation of the)
   function validate() {
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var email = document.getElementById("email");
    var visual = document.getElementById("visual").checked;// .checked returns a boolean variable 
    var auditory = document.getElementById("auditory").checked;
    var readingwritting = document.getElementById("readingwritting").checked;
    var kinesthetic = document.getElementById("kinesthetic").checked;
   

    if (name.value == "" ){ //Will check the value that the user input for name, If its empty "" will display the alert asking for the name of the user.
        alert("Please, enter your name.");
        name.focus;
        return false; 
    }

    if (email.value == "" ){ //Will check the value that the user input for email, If its empty "" will display the alert asking for the email of the user.
        alert("Please, enter your email.");
        email.focus;
        return false; 
    }

    if (visual == false  && auditory == false && readingwritting == false && kinesthetic == false){// Will check If any of the radio buttoms are not checked using the boolean "false". If its false means that the user did't check any of the type of learner.
        alert("Please, choose your type of learner");
        return false;
    }

	if (age.value == "" ){ //Will check the value that the user input for age, If its empty "" will display the alert asking for the age of the user.
        alert("Please, enter your age.");
        age.focus;
        return false; 
    }
}

// Manipulation of the DOM that I used to change the color of the text on mouseover. To do that I basically used google to do some research.
const visual = document.getElementById('visualtext');

const textvisual = document.getElementById('visualtext');

// 👇️ Change text color on mouseover
visual.addEventListener('mouseover', function handleMouseOver() {
  textvisual.style.color = 'blue';
});

// 👇️ Change text color back on mouseout
visual.addEventListener('mouseout', function handleMouseOut() {
  textvisual.style.color = 'black';
});



const auditory = document.getElementById('auditorytext');

const textauditory = document.getElementById('auditorytext');

// 👇️ Change text color on mouseover
auditory.addEventListener('mouseover', function handleMouseOver() {
  textauditory.style.color = '#47B5FF';
});

// 👇️ Change text color back on mouseout
auditory.addEventListener('mouseout', function handleMouseOut() {
  textauditory.style.color = 'black';
});


const writting = document.getElementById('writtingtext');

const textwritting = document.getElementById('writtingtext');

// 👇️ Change text color on mouseover
writting.addEventListener('mouseover', function handleMouseOver() {
  textwritting.style.color = 'blue';
});

// 👇️ Change text color back on mouseout
writting.addEventListener('mouseout', function handleMouseOut() {
  textwritting.style.color = 'black';
});



const kinesthetic = document.getElementById('kinesthetictext');

const textkinesthetic = document.getElementById('kinesthetictext');

// 👇️ Change text color on mouseover
kinesthetic.addEventListener('mouseover', function handleMouseOver() {
  textkinesthetic.style.color = '#47B5FF';
});

// 👇️ Change text color back on mouseout
kinesthetic.addEventListener('mouseout', function handleMouseOut() {
  textkinesthetic.style.color = 'black';
});

