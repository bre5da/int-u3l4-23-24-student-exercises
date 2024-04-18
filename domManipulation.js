// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('mouseover', function() {

  myName.innerHTML= "My name is Brenda"
  myHobby.innerHTML= "I like to listen to Daniel Caesar"
  myLocation.innerHTML= "I live in New York"




});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener('mouseover', function(){
  image.src="https://chscommunicator.com/wp-content/uploads/2016/11/Screen-Shot-2016-11-09-at-10.53.18-AM-e1479147065403.png"
})
image2Button.addEventListener('mouseover', function(){
  image.src="https://media.pitchfork.com/photos/643569665cec70ae5fd5e87b/master/w_1280%2Cc_limit/Daniel%2520Caesar-%2520Never%2520Enough.jpeg"
})


// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.


// BONUS
// 7. Try using different event types for your buttons.
