//this is from the card shuffle code

var serverString = "audioA/";
var abc = ['A.','B.','C.','D.','E.','F.','G.','H.','I.','J.','K.','L.','M.','N.','O.'];
var j = 15; // how many files in ordering part

$(window).load(function(){
  //Card images from https://code.google.com/p/vectorized-playing-cards/

//this shuffles the 13(was 10), write another that goes to all 23
  $(function () {
    var cards = [];
    var i;
    for (i = 1; i <= j; i++) { //here j = 10, later should be 20
      cards.push(i);
    }
    //console.log(cards);

//for 1st part- drag n drop
    function drawCards(){
      $("#holder1").empty();
      for (i = 0; i < cards.length; i++) {
// now append for larger group of 23
        $("#holder1").append("<li>"+abc[i]+"<audio controls src='" + serverString + cards[i] + ".wav '></audio></li> ");
        console.log(`${cards[i]}`);
      }
    }

//make sure ids work for the new part

    drawCards();

    $("#start1").on('click', shuffle);

    var theLength = cards.length - 1;
    var toSwap;
    var tempCard;

    function shuffle() {
      console.log("Sounds before shuffle:" + cards);
      for (i = theLength; i > 0; i--) {
        toSwap = Math.floor(Math.random() * i);
        tempCard = cards[i];
        cards[i] = cards[toSwap];
        cards[toSwap] = tempCard;
      }
      console.log("Sounds after shuffle: "+cards);
      drawCards();
      //this puts string into input - need to finish
      document.getElementById('order1').value = cards;
      
        }
  });
});

// this one shuffles the 20 then theres 3

$(window).load(function(){
  //Card images from https://code.google.com/p/vectorized-playing-cards/
//this one goes to 10, write another that goes to all 26
  $(function () {
    var cards = [];
    var i;
    var j = 21; // how many files in 2nd ranking part 
    for (i = 1; i <= j; i++) { //here j = 10, later should be 23
      cards.push(i);
    }
    //console.log(cards);

//make sure ids work for the new part

//    used for the larger array of audio files
    function drawCards1(){
    	var serverString = "audio0/"; //change folder - audio files location
      $("#holder3").empty();
      
      for (i = 0; i < cards.length; i++) {

        $("#holder3").append("<fieldset class='pure-group'><label for = 'message'>Sound "+[i+1]+" :</label><audio controls src='" + serverString + cards[i] + ".wav '></audio>" + "<div class = 'feedback1'><input      type='range'  name='slider" + [i+1] + "' id='noise2' value='30' min='0' max='60' list='Z1' ><div class  = 'descriptors1'> <table><tr><td>smooth noise no crackle </td><td>rough noise no crackle </td><td>sporadic crackle </td><td>continuous crackle </td><td>intense crackle </td></tr></div></div></fieldset>");

        console.log(`${cards[i]}`);
      }
    }

    drawCards1();

    $("#next1").on('click', shuffle1);

    var theLength = cards.length - 1;
    var toSwap;
    var tempCard;

    function shuffle1() {
      console.log("Sounds before shuffle:" + cards);
      for (i = theLength; i > 0; i--) {
        toSwap = Math.floor(Math.random() * i);
        tempCard = cards[i];
        cards[i] = cards[toSwap];
        cards[toSwap] = tempCard;
      }
      console.log("Sounds after shuffle: "+cards);
      drawCards1();
      //this puts string into input - need to finish
      document.getElementById('order3').value = cards;
      
        }
  });
});

//this is all for the buttons and gui start
document.getElementById("start3").addEventListener("click", start3btn , false); 
function start3btn(){

event.preventDefault();           
    document.getElementById('minus0').style.display = 'block'; // change below div from hidden to visible
   	document.getElementById('start3').style.display = 'none';
}

document.getElementById("start2").addEventListener("click", start2btn , false); 
function start2btn(){

event.preventDefault(); 

//working the loop to decide ordering test: a b or c


//from SO
// var str = 3232.43;
// lastnum = str.toString().charAt( str.length - 1 );
// alert( lastnum );

// console.log("Cards after shuffle: "+cards);
//       drawCards();
//       //this puts string into input - need to finish
//       document.getElementById('order1').value = cards;


	var subjectID = document.getElementById("name").value;

	orderID = subjectID.toString().charAt( subjectID.length - 1 );
	console.log("last digit of Id was: "+orderID);

	// Don't need anymore -->loop for deciding which ordering to run if 1-3,4-6,7-0 (x >= 1 && x <= 3) {

	//console.log("last digit of ID is:" + OrderID);
    document.getElementById('minus0').style.display = 'none'; // change below div from hidden to visible
   	document.getElementById('div0').style.display = 'block';

}



//var nameIDForOrder = document.getElementById("name").addEventListener("click", start3btn , false); 
function start3btn(){

event.preventDefault();           
    document.getElementById('minus0').style.display = 'block'; // change below div from hidden to visible
   	document.getElementById('start3').style.display = 'none';
}


document.getElementById("start1").addEventListener("click", start1btn , false); 
function start1btn(){

event.preventDefault();           
    document.getElementById('div1').style.display = 'block'; // change below div from hidden to visible
   	document.getElementById('div0').style.display = 'none';

}

document.getElementById("next1").addEventListener("click", nextbtn , false); 
function nextbtn(){
// where to put this? alert("Please confirm your order before continuingby listening to the sounds one last time");
event.preventDefault();  
	
	var someaudio = document.getElementById('holder1');
	//maybe add another get element by whatev for li attribute
	var myaudio = someaudio.getElementsByTagName('audio')[0];
	var mysrc = myaudio.src;

    var reorder = []; // create array for final reordering (done by user)
    var i;
    for (i = 0; i < 15; i++) { //here j = 13(was 10), later should be 20
	var myaudio = someaudio.getElementsByTagName('audio')[i];
	var mysrc = myaudio.src;
	var str = mysrc;
	var rank = str.substr(-6, 2); //counts from end of array 6 back, shows 1 character (2 for '10') ex. ".../2.wav" --> "2"	
      reorder.push(rank); // pushes rank into an array named reorder
    }
	//reorder.toString(); //turns array to string
	reorder = reorder.join().replace(/\//g, ''); //removes '/' and becomes  string
	
	//someString.replace(/\//g, "-");
	//reorder.replace(/\./g,"");	// replace periods w/ nothing?
	//reorder.replace(/\s+/g, ''); //gets rid of whitespace
	
	console.log("Cards after ordering?: "+reorder);
	console.log(reorder); // shows whole string
	
	
	document.getElementById('order2').value = reorder; //writes string to input, to send to sprdsheet
    document.getElementById('div1').style.display = 'none'; // hide previous div
   	document.getElementById('div2').style.display = 'block';
	
	
////this is to get the string of order from dragndrop in div 1 
//var node = document.getElementById('holder1'),

//	textContent = node.textContent; 				//gets text inside id space
//	textContent = textContent.replace(/\s+/g, ''); //gets rid of whitespace
//	textContent = textContent.replace(/\./g,","); //replaces all periods with commas
//	textContent = textContent.slice(0, -1);			//cuts off 1 from end of string (last comma)
//	//console.log("Cards after ordering?: "+cards);	// this from line 40ish, see if order changes
//	console.log(textContent);  
}

//Shuffling Attempt, use Jquery above

var list = document.getElementsByClassName("audio");
  for (var i = 0; i < list.length; i++) {
   list[i].setAttribute("id", "sound" + i);
  }
   
  
var audioarray = [];

//FY shuffle

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
var arr = [1, 2, 3, 4];
arr = shuffle(arr);
console.log(arr);


// from SO 


// console.log(audioarray);

// querySelector('#myDiv').addEventListener('click', function () {
// 	document.getElementById('myDiv').addEventListener('click', function () {
//     // Some code...
//      audioarray = shuffle(audioarray);
//    console.log(audioarray);
//    //document.getElementById("sound" + i).src=audioarray[i-1];
  
//    //document.getElementById('gform').style.display = 'block';
// });

//  function shuff(){

//    audioarray = shuffle(audioarray);
//    console.log(audioarray);
//    document.getElementById("sound1").src=audioarray[0];
//    document.getElementById("sound2").src=audioarray[1];
//    document.getElementById("sound3").src=audioarray[2];
//    document.getElementById("sound4").src=audioarray[3];
//    document.getElementById('gform').style.display = 'block';
 //shows hidden form 		}
   
   //for (i=0;i<4;i++){
     //document.getElementsByTagName('audio').src=audioarray[i]; } 

//the html play button : <input type="button" value = "&#9658;"> or <button >&#9658;</button>

// code below is from here:
//https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js


function validEmail(email) { // see:
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);


}
// get all data in form and return object
function getFormData() {
  var elements = document.getElementById("gform").elements; // all form elements
  var fields = Object.keys(elements).map(function(k) {
    if(elements[k].name !== undefined) {
      return elements[k].name;
    // special case for Edge's html collection
    }else if(elements[k].length > 0){
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function(k){
    data[k] = elements[k].value;
    var str = ""; // declare empty string outside of loop to allow
                  // it to be appended to for each item in the loop
    if(elements[k].type === "checkbox"){ // special case for Edge's html collection
      str = str + elements[k].checked + ", "; // take the string and append 
                                              // the current checked value to 
                                              // the end of it, along with 
                                              // a comma and a space
      data[k] = str.slice(0, -2); // remove the last comma and space 
                                  // from the  string to make the output 
                                  // prettier in the spreadsheet
    }else if(elements[k].length){
      for(var i = 0; i < elements[k].length; i++){
        if(elements[k].item(i).checked){
          str = str + elements[k].item(i).value + ", "; // same as above
          data[k] = str.slice(0, -2);
        }
      }
    }
  });
  console.log(data);
  return data;
}

function handleFormSubmit(event) {  // handles form submit without any jquery
  event.preventDefault();           // we are submitting via xhr below
  var data = getFormData();         // get the values submitted in the form
  if( !validEmail(data.email) ) {   // if email is not valid show error
    document.getElementById('email-invalid').style.display = 'block';
    return false;
 } else {
    var url = event.target.action;  //
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        console.log( xhr.status, xhr.statusText )
        console.log(xhr.responseText);
        document.getElementById('gform').style.display = 'none'; // hide form
        document.getElementById('thankyou_message').style.display = 'block';
        return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);
  }
}
function loaded() {
  console.log('contact form submission handler loaded successfully');
  // bind to the submit event of our form
  var form = document.getElementById('gform');
  form.addEventListener("submit", handleFormSubmit, false);
};
document.addEventListener('DOMContentLoaded', loaded, false);
