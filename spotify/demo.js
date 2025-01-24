
// let homeButton = document.getElementById("home-button");
// let searchButton = document.getElementById("search-button");
// let homebuttonValue = false;
// let searchbuttonValue = false;
// // Target main section
// let mainSection = document.getElementsByClassName("main-section")[0];
// let artist = document.getElementById("arjitSingh");
// let artistsBar = document.querySelector(".artistsBar");

// let content = `  <div class="artistsBar">
// <h2 class="PrimaryHeading"><a href="#">Popular Artists</a></h2>
// <div class="artistsframe">
//     <div class="artistsFrameItems">
//         <button class="playButton">
//             <img class="playButton-icon" src="playButton.png" alt="">
//         </button>
//         <img src="arjitSingh.jpg" alt="#" class="ArtistProperties">
//         <h3>arjitSingh</h3>
//         <div>Artist</div>

//     </div>
//     <div class="artistsFrameItems">
//         <button class="playButton">
//             <img class="playButton-icon" src="playButton.png" alt="">
//         </button>

//         <img src="atifAslam.jpg" alt="#" class="ArtistProperties">
//         <h3>Atif Aslam</h3>
//         <div>Artist</div>
//     </div>
//     <div class="artistsFrameItems">
//         <button class="playButton">
//             <img class="playButton-icon" src="playButton.png" alt="">
//         </button>
//         <img src="AliZafar.jpg" alt="#" class="ArtistProperties">
//         <h3>Ali Zafar</h3>
//         <div>Artist</div>
//     </div>
//     <div class="artistsFrameItems">
//         <button class="playButton">
//             <img class="playButton-icon" src="playButton.png" alt="">
//         </button>
//         <img src="rahatfatehAliKhan.jpg" alt="#" class="ArtistProperties">
//         <h3>Rahat Fateh Ali Khan</h3>
//         <div>Artist</div>
//     </div>l
//     <div class="artistsFrameItems">
//         <button class="playButton">
//             <img class="playButton-icon" src="playButton.png" alt="">
//         </button>
//         <img src="shubh.jpg" alt="#" class="ArtistProperties">
//         <h3>Shubh</h3>
//         <div>Artist</div>
//     </div>
// </div>

// </div>

// <footer class="RHSFooterContainer">
// <ul class="footer1stList">
//     <h3>Company</h3>
//     <li><a href="#">About</a></li>
//     <li><a href="#">Jobs</a></li>
//     <li><a href="#">For the record</a></li>
// </ul>
// <ul class="footer2ndList">
//     <h3>Communities</h3>
//     <li><a href="#">For Artists</a></li>
//     <li><a href="#">Developers</a></li>
//     <li><a href="#">Advertising</a></li>
//     <li><a href="#">Investors</a></li>
//     <li><a href="#">Vendors</a></li>
// </ul>
// <ul class="footer3rdList">
//     <h3>Useful links</h3>
//     <li><a href="#">Support</a></li>
//     <li><a href="#">Free Mobile app</a></li>

// </ul>
// <ul class="footer4thList">
//     <h3>Spotify Plans</h3>
//     <li><a href="#">Premium individual</a></li>
//     <li><a href="#">Premium Duo</a></li>
//     <li><a href="#">Premium Family</a></li>
//     <li><a href="#">Premium Student</a></li>
//     <li><a href="#">Spotify free</a></li>
// </ul>
// <div class="footer-icons">
//     <img src="facebook.256x256.png" alt="#">
//     <img src="instagram.256x256.png" alt="#">
//     <img src="twitter.256x208.png" alt="#">

// </div>

// </footer>
// `;
// function GreenplayButton(){
//     let artist1 = document.getElementsByClassName("artistsFrameItems")[0];
//     let artist2 = document.getElementsByClassName("artistsFrameItems")[1];
//     let artist3 = document.getElementsByClassName("artistsFrameItems")[2];
//     let artist4 = document.getElementsByClassName("artistsFrameItems")[3];
//     let artist5 = document.getElementsByClassName("artistsFrameItems")[4];
//     let playButton1 = document.getElementsByClassName("playButton")[0];
//     let playButton2 = document.getElementsByClassName("playButton")[1];
//     let playButton3 = document.getElementsByClassName("playButton")[2];
//     let playButton4 = document.getElementsByClassName("playButton")[3];
//     let playButton5 = document.getElementsByClassName("playButton")[4];

//     artist1.addEventListener('mouseenter', function () {
//         playButton1.style.display = 'block';

//     });

//     artist1.addEventListener('mouseleave', function () {
//         playButton1.style.display = 'none';
//     });
//     artist2.addEventListener('mouseenter', function () {
//         playButton2.style.display = 'block';

//     });

//     artist2.addEventListener('mouseleave', function () {
//         playButton2.style.display = 'none';


//     });
//     artist3.addEventListener('mouseenter', function () {
//         playButton3.style.display = 'block';

//     });

//     artist3.addEventListener('mouseleave', function () {
//         playButton3.style.display = 'none';
//     });
//     artist4.addEventListener('mouseenter', function () {
//         playButton4.style.display = 'block';

//     });

//     artist4.addEventListener('mouseleave', function () {
//         playButton4.style.display = 'none';
//     });
//     artist5.addEventListener('mouseenter', function () {
//         playButton5.style.display = 'block';

//     });

//     artist5.addEventListener('mouseleave', function () {
//         playButton5.style.display = 'none';
//     });
// }


// document.addEventListener('DOMContentLoaded', function() {
//     // mainSection.innerHTML = content;
//     GreenplayButton();
// });
// function testingGreenPlayButton(){
//     // alert("its working");
   
//     // mainSection.style = "background-color:pink;";
    
// }



// function testing() {
//     setTimeout(() => {

//         if (!homebuttonValue) {
//             homebuttonValue = true;
//             searchbuttonValue = false;
//             mainSection.innerHTML = content;
//             GreenplayButton();
//         }

//     }, 500);


// }
// let testingContainer = document.querySelector(".testingContainer");

// //SearchBar Function
// function SearchBarFunction() {
//     let CardsArray = ["Card1.JPG", "Card2.JPG", "Card3.JPG", "Card4.JPG", "Card5.JPG", "Card6.JPG", "Card7.JPG", "Card8.JPG", "Card9.JPG", "Card10.JPG", "Card11.JPG", "Card12.JPG", "Card13.JPG", "Card14.JPG", "Card15.JPG", "Card16.JPG"];
//     mainSection.innerHTML = '<h2 class="PrimaryHeading">Browse All</h2><div class="CardsContainer"></div>';
//     let CardsContainer = document.getElementsByClassName("CardsContainer")[0];

//     if (mainSection.innerHTML == '<h2 class="PrimaryHeading">Browse All</h2><div class="CardsContainer"></div>') {
//         for (let i = 0; i < CardsArray.length; i++) {
//             let a = document.createElement('img');
//             CardsContainer.appendChild(a);
//             a.src = `${CardsArray[i]}`;
//             // a.className ="imageProperties";
//             a.style = "width:280px;height173px;border-radius:15px"
//         }

//         mainSection.insertAdjacentHTML("beforeend", `<footer class="RHSFooterContainer">
//              <ul class="footer1stList">
//                  <h3>Company</h3>
//                  <li><a href="#">About</a></li>
//                  <li><a href="#">Jobs</a></li>
//                  <li><a href="#">For the record</a></li>
//              </ul>
//              <ul class="footer2ndList">
//                  <h3>Communities</h3>
//                  <li><a href="#">For Artists</a></li>
//                  <li><a href="#">Developers</a></li>
//                  <li><a href="#">Advertising</a></li>
//                  <li><a href="#">Investors</a></li>
//                  <li><a href="#">Vendors</a></li>
//              </ul>
//              <ul class="footer3rdList">
//                  <h3>Useful links</h3>
//                  <li><a href="#">Support</a></li>
//                  <li><a href="#">Free Mobile app</a></li>
            
//              </ul>
//              <ul class="footer4thList">
//                  <h3>Spotify Plans</h3>
//                  <li><a href="#">Premium individual</a></li>
//                  <li><a href="#">Premium Duo</a></li>
//                  <li><a href="#">Premium Family</a></li>
//                  <li><a href="#">Premium Student</a></li>
//                  <li><a href="#">Spotify free</a></li>
//              </ul>
//              <div class="footer-icons">
//                  <img src="facebook.256x256.png" alt="#">
//                  <img src="instagram.256x256.png" alt="#">
//                  <img src="twitter.256x208.png" alt="#">
            
//              </div>
            
//              </footer>
//              `);

//     }

// }

// searchButton.addEventListener("click", e => {
//     if (!searchbuttonValue) {
//         searchbuttonValue = true;
//         // CardsContainer.textContent = "";
//         SearchBarFunction();
//         homebuttonValue = false;
//     }
// })

//making an array for searching 
// let arrayOfSongs = ["Another Love","MockingBird","thunder"];
// let InputBar = document.getElementById("InputBar");
// console.log(arrayOfSongs);
// function Searching() {
//     for (let i = 0; i < arrayOfSongs.length; i++) {
//         if (InputBar.value == includes(arrayOfSongs[i])) {
//             console.log(arrayOfSongs[i]);
//             break;
//         }
//     }
// }

// let arrayOfSongs = ["Another Love", "MockingBird", "Thunder"];
// let InputBar = document.getElementById("InputBar");

// function Searching() {
//     const inputValue = InputBar.value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
//     for (let i = 0; i < arrayOfSongs.length; i++) {
//         if (arrayOfSongs[i].toLowerCase().includes(inputValue)) { // Check if song includes the input value
//             console.log(arrayOfSongs[i]);
//             break; // Break after finding the first match
//         }
//     }
// }

// InputBar.addEventListener('input', Searching); // Call Searching function on each input event



let a = document.getElementById("content-container");
console.log(a);



