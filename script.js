function removeSplash(){
  document.getElementById("splashscreen").remove();
  // $(this).parent().fadeOut(500);
  // this.remove();
};


function mapView(){
      window.open("https://www.starbucks.com/store-locator/");
  }

AFRAME.registerComponent('rotation-reader', {

    tick: (function () {
      var position = new THREE.Vector3();
      var quaternion = new THREE.Quaternion();
  
      return function () {
        this.el.object3D.getWorldPosition(position);
        this.el.object3D.getWorldQuaternion(quaternion);
        // position and rotation now contain vector and quaternion in world space.
      };
    })
  });
    
  
  
      // here we register che 'clickhandler' component
      AFRAME.registerComponent("clickhandler2", {
        init: function() {
          // we add the click event listener to any instance of this component
          this.el.addEventListener("click", () => {  
          // this.el.setAttribute('animation__2', 'property: position; to: 4 -2 0; duration:1000'),
            
          this.el.remove();
            
  
            });
        }
      });




         //START OF LINKS IN NEW WINDOWS - Health and Wellness
        //  AFRAME.registerComponent("healthandwellness", {
        //   init: function() {
        //    this.el.addEventListener("click", () => {  
        //    window.open("http://maps/V08_Building_Start_Page.html", "AHWC");
        //    });
        //   }
        // });
      //Leprino
      AFRAME.registerComponent("leprino", {
        init: function() {
         this.el.addEventListener("click", () => {  
         window.open("https://www.cuanschutz.edu/", "Leprino");
         });
        }
      });
      //402
          // AFRAME.registerComponent("402", {
          //  init: function() {
          //   this.el.addEventListener("click", () => {  
          //   window.open("http://maps/S09_Building_Start_Page.html", "Building 402");
          //      });}});
        //401
          // AFRAME.registerComponent("401", {
          // init: function() {
          //  this.el.addEventListener("click", () => {  
          //  window.open("http://maps/R09_Building_Start_Page.html", "Building 401");
          //  });}});
             //400
          // AFRAME.registerComponent("400", {
          //   init: function() {
          //    this.el.addEventListener("click", () => {  
          //    window.open("http://maps/Q09_Building_Start_Page.html", "Building 400");
          //       });}});
         //New next to AO1
           AFRAME.registerComponent("mysteryao1", {
           init: function() {
            this.el.addEventListener("click", () => {  
            window.open("https://www.cuanschutz.edu/", "New bldg");
            });}});
  //biotech1
  AFRAME.registerComponent("biotech1", {
    init: function() {
     this.el.addEventListener("click", () => {  
     window.open("https://www.cuanschutz.edu/", "Bioengineering 1");
        });}});

  //rc2
  // AFRAME.registerComponent("rc2", {
  //   init: function() {
  //    this.el.addEventListener("click", () => {  
  //    window.open("http://maps/P15_Building_Start_Page.html", "Research 2");
  //       });}});
  //ao1
  // AFRAME.registerComponent("ao1", {
  //   init: function() {
  //    this.el.addEventListener("click", () => {  
  //    window.open("http://maps/L15_Building_Start_Page.html", "Academic Office 1");
  //       });}});

//               //biotech2
//           AFRAME.registerComponent("biotech2", {
//             init: function() {
//              this.el.addEventListener("click", () => {  
//              window.open("http://www.safeway.com", "Bioengineering 2");
//                 });}});


//          //rc1n
//            AFRAME.registerComponent("rc1n", {
//            init: function() {
//             this.el.addEventListener("click", () => {  
//             window.open("http://maps/P18_Building_Start_Page.html", "Research 1 North");
//             });}});
//               //rc1s
//           AFRAME.registerComponent("rc1s", {
//             init: function() {
//              this.el.addEventListener("click", () => {  
//              window.open("http://maps/L18_Building_Start_Page.html", "Research 1 South");
//                 });}});
//          //pharmacy
//            AFRAME.registerComponent("pharmacy", {
//            init: function() {
//             this.el.addEventListener("click", () => {  
//             window.open("http://maps/V20_Building_Start_Page.html", "School of Pharmacy");
//             });}});

// //500
// AFRAME.registerComponent("500", {
//   init: function() {
//    this.el.addEventListener("click", () => {  
//    window.open("http://maps/Q20_Building_Start_Page.html", "Fitzimons");
//       });}});

//               //barbdavis
//           AFRAME.registerComponent("barbdavis", {
//             init: function() {
//              this.el.addEventListener("click", () => {  
//              window.open("http://maps/M20_Building_Start_Page.html", "Barbara Davis Center");
//                 });}});








              //testcorner  - THIS ONE OPENS THE POPUP.
          // AFRAME.registerComponent("testcorner", {
          //   init: function() {
          //    this.el.addEventListener("click", () => {  
          //   document.getElementById("hwPopup").style.display ="unset";
          //       });}});




//SHOWS AND REMOVES THE POPUPS





    //healthandwellness  - THIS ONE OPENS THE POPUP.







//     AFRAME.registerComponent("healthandwellness", {
//       init: function() {
//        this.el.addEventListener("click", () => {  
//       //  window.open("http://www.google.com", "new win");     - this opens a new window w/ no popup
//        document.getElementById("hwPopup").style.display ="unset";
//           });}});

          
// function removeHwPopup(){
//   document.getElementById("hwPopup").style.display = "none";




  // this.style.display = "none";

  // this.el.addEventListener("click", () => {  
    // this.el.setAttribute('animation__2', 'property: position; to: 4 -2 0; duration:1000'),
      
    // this.el.style.display(none);
      

      // });
  //document.getElementsByClassName("testPopup").style.display = "none";
  // this.remove();
//};




//402 
    AFRAME.registerComponent("b402", {
      init: function() {
       this.el.addEventListener("click", () => {  
       document.getElementById("b402Popup").style.display ="unset";
          });}});
   
function remove402Popup(){
  document.getElementById("b402Popup").style.display = "none";
};

//401 
AFRAME.registerComponent("b401", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("b401Popup").style.display ="unset";
      });}});

function remove401Popup(){
document.getElementById("b401Popup").style.display = "none";
};

//400 
AFRAME.registerComponent("b400", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("b400Popup").style.display ="unset";
      });}});

function remove400Popup(){
document.getElementById("b400Popup").style.display = "none";
};

//RC2 
AFRAME.registerComponent("rc2", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("rc2Popup").style.display ="unset";
      });}});

function removeRc2Popup(){
document.getElementById("rc2Popup").style.display = "none";
};

//AO1
AFRAME.registerComponent("ao1", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("ao1Popup").style.display ="unset";
      });}});

function removeAo1Popup(){
document.getElementById("ao1Popup").style.display = "none";
};

//rc1n
AFRAME.registerComponent("rc1n", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("rc1nPopup").style.display ="unset";
      });}});

function removeRc1nPopup(){
document.getElementById("rc1nPopup").style.display = "none";
};

//rc1s
AFRAME.registerComponent("rc1s", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("rc1sPopup").style.display ="unset";
      });}});

function removeRc1sPopup(){
document.getElementById("rc1sPopup").style.display = "none";
};

//pharmacy
AFRAME.registerComponent("pharmacy", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("pharmacyPopup").style.display ="unset";
      });}});

function removePharmacysPopup(){
document.getElementById("pharmacyPopup").style.display = "none";
};

//b500
AFRAME.registerComponent("b500", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("b500Popup").style.display ="unset";
      });}});

function removeB500Popup(){
document.getElementById("b500Popup").style.display = "none";
};

//barbdavis
AFRAME.registerComponent("barbdavis", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("barbdavisPopup").style.display ="unset";
      });}});

function removeBarbdavisPopup(){
document.getElementById("barbdavisPopup").style.display = "none";
};

//library
AFRAME.registerComponent("library", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("libraryPopup").style.display ="unset";
      });}});

function removeLibraryPopup(){
document.getElementById("libraryPopup").style.display = "none";
};

//nighthorse
AFRAME.registerComponent("nighthorse", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("nighthorsePopup").style.display ="unset";
      });}});

function removeNighthorsePopup(){
document.getElementById("nighthorsePopup").style.display = "none";
};

//ed1
AFRAME.registerComponent("ed1", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("ed1Popup").style.display ="unset";
      });}});

function removeEd1Popup(){
document.getElementById("ed1Popup").style.display = "none";
};

//dental 
AFRAME.registerComponent("dental", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("dentalPopup").style.display ="unset";
      });}});

function removeDentalPopup(){
document.getElementById("dentalPopup").style.display = "none";
};

//fulgeneti
AFRAME.registerComponent("fulgeneti", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("fulgenetiPopup").style.display ="unset";
      });}});

function removeFulgenetiPopup(){
document.getElementById("fulgenetiPopup").style.display = "none";
};

//ed2n
AFRAME.registerComponent("ed2n", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("ed2nPopup").style.display ="unset";
      });}});

function removeEd2nPopup(){
document.getElementById("ed2nPopup").style.display = "none";
};

//ed2s
AFRAME.registerComponent("ed2s", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("ed2sPopup").style.display ="unset";
      });}});

function removeEd2sPopup(){
document.getElementById("ed2sPopup").style.display = "none";
};

//campserve
AFRAME.registerComponent("campserve", {
  init: function() {
   this.el.addEventListener("click", () => {  
   document.getElementById("campservePopup").style.display ="unset";
      });}});

function removeCampservePopup(){
document.getElementById("campservePopup").style.display = "none";
};



          
                

                  //test2
          AFRAME.registerComponent("test2", {
            init: function() {
             this.el.addEventListener("click", () => {  
             window.open("http://www.safeway.com", "new win");
                });}});
         
         



    
    
     
    // SCRIPT FOR SCORING
      //  AFRAME.registerComponent("points", {
         
      //   init: function() {
      //     // we add the click event listener to any instance of this component
      //     var button = document.getElementById("clickme"),
      //     count = 0;
          
          
      //     this.el.addEventListener("click", () => { 
            
                        
      //       count +=0.5;
      //       button.innerHTML = "Score: " + count;
      //         if (count === 30){
      //         window.alert("You win!");
      //       }
            
  
      //       });
      //   }
      // });
  
  
    
  
     AFRAME.registerComponent('vanish', {
    // ...
    pause: function () {
      
      this.removeEventListener();
    }
    // ...
  });
   

     
        window.onload = () => {navigator.geolocation.getCurrentPosition((position) => {
          document.querySelector('a-shere').setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};`)
        });
       }
      


      //  TEST FOR ADDING MULTIPLE STARBUCKS LOCATIONS of one object type
  
  
window.onload = () => {
  //THE LOCATION ARRAYS OF WHERE OUR DIFFERENT BUSINESSES WILL BE
  let places = staticLoadPlaces();
  let placesCU = staticLoadPlacesCU();
 //RENDER THOSE LOCATIONS
  renderPlaces(places);  
  renderPlacesCU(placesCU);
};
 //THE FIRST BUSINESS' LOCATIONS
function staticLoadPlaces() {
 return [
     {location: {lat: 37.46821505, lng: -105.8756981,},},
     {location: {lat: 39.812537, lng: -105.160753,},},
//      {location: {lat: 39.8418647, lng: -105.0807872,},},
//      {location: {lat: 39.477202, lng: -105.14074,},},
//      {location: {lat: 39.8126355, lng: -105.14074,},},
//      {location: {lat: 39.477202, lng: -105.1091937,},},
//      {location: {lat: 39.79125459, lng: -105.081940,},},
//      {location: {lat: 39.477202, lng: -105.081863,},},
//      {location: {lat: 39.840462, lng: -105.081863,},},
//      {location: {lat: 39.802036, lng: -105.10913,},},
//      {location: {lat: 39.81656386, lng: -105.0812719,},},
//      {location: {lat: 39.7979505, lng: -105.076126,},},
//      {location: {lat: 39.8124775, lng: -105.13715,},},
//      {location: {lat: 39.8428005, lng: -105.08214,},},
//      {location: {lat: 39.1870424, lng: -106.8184008,},},
//      {location: {lat: 39.62723718, lng: -104.795135,},},
//      {location: {lat: 39.69498, lng: -104.79097,},},
//      {location: {lat: 39.6041932, lng:-104.7167176,},},
//      {location: {lat: 39.65317208, lng: -104.7767343,},},
//      {location: {lat: 39.65878991, lng: -104.8449337,},},
//      {location: {lat: 39.696365, lng: -104.84625,},},
//      {location: {lat: 39.63859796, lng: -104.7905622,},},
//      {location: {lat: 39.65291024, lng: -104.7695729,},},
//      {location: {lat: 39.68607892, lng: -104.8659745,},},
//      {location: {lat: 39.57477207, lng: -104.7216731,},},
//      {location: {lat: 39.71660063, lng: -104.8222643,},},
//      {location: {lat: 39.5825206, lng: -104.7235681,},},
//      {location: {lat: 39.5676, lng: -104.7171,},},
//      {location: {lat: 39.65126, lng: -104.772599,},},
//      {location: {lat: 39.6936, lng: -104.79072,},},
//      {location: {lat: 39.6595583, lng: -104.8509648,},},
//      {location: {lat: 39.764404, lng: -104.77401,},},
//      {location: {lat: 39.63267468, lng: -104.8107418,},},
//      {location: {lat: 39.74022625, lng: -104.8109467,},},
//      {location: {lat: 39.69584267, lng: -104.8659746,},},
//      {location: {lat: 39.71302579, lng: -104.8219898,},},
//      {location: {lat: 39.67319819, lng: -104.7880929,},},
//      {location: {lat: 39.59775875, lng: -104.8038501,},},
//      {location: {lat: 39.61389849, lng: -104.7586616,},},
//      {location: {lat: 39.5673, lng: -106.416,},},
//      {location: {lat: 39.63479204, lng: -106.5178998,},},
//      {location: {lat: 39.631838, lng: -106.520204,},},
//      {location: {lat: 39.7995491, lng: -105.4886703,},},
//      {location: {lat: 40.0348597, lng: -105.2584617,},},
//      {location: {lat: 39.999863, lng: -105.23402,},},
//      {location: {lat: 40.01455055, lng: -105.25857,},},
//      {location: {lat: 40.0222994, lng: -105.2582831,},},
//      {location: {lat: 40.02532518, lng: -105.2345414,},},
//      {location: {lat: 40.0001, lng: -105.263499,},},

// //2550
//      {location: {lat: 40.0147505, lng: -105.25253,},},
//      {location: {lat: 40.02747327, lng: -105.27671,},},
//      {location: {lat: 40.01055503, lng: -105.276844,},},
//      {location: {lat: 39.48020734, lng: -106.0458498,},},
//      {location: {lat: 39.9718, lng: -104.7994,},},
//      {location: {lat: 39.9852, lng: -104.822545,},},
//      {location: {lat: 39.97236389, lng: -104.8160489,},},
//      {location: {lat: 39.95765428, lng: -105.0345103,},},
//      {location: {lat: 39.914486, lng: -105.071356,},},
//      {location: {lat: 39.931059, lng: -105.125593,},},
//      {location: {lat: 39.916383, lng: -105.052943,},},
//      {location: {lat: 39.92986987, lng: -105.1309616,},},
//      {location: {lat: 39.929899, lng: -105.130897,},},
//      {location: {lat: 39.932105, lng: -105.09052,},},
//      {location: {lat: 39.9222155, lng: -105.11665,},},
//      {location: {lat: 39.47222584, lng: -104.8756034,},},
//      {location: {lat: 39.354862, lng: -104.81406,},},
//      {location: {lat: 39.36258, lng: -104.8622,},},
//      {location: {lat: 39.47153, lng: -104.89524,},},
//      {location: {lat: 39.4122713, lng: -104.8637646,},},
//      {location: {lat: 39.61030589, lng: -104.7517877,},},
//      {location: {lat: 39.5952385, lng: -104.84969,},},
//      {location: {lat:39.569454, lng: -104.90414,},},
//      {location: {lat: 39.595034, lng: -104.928862,},},
//      {location: {lat: 39.087899, lng: -108.459899,},},
//      {location: {lat: 38.96122269, lng: -104.7600891,},},
//      {location: {lat: 38.93435614, lng: -104.7406641,},},
//      {location: {lat: 38.843433, lng: -104.759012,},},
//      {location: {lat: 38.90021885, lng: -104.8523513,},},
//      {location: {lat: 38.92292582, lng: -104.8436018,},},
//      {location: {lat: 38.84812459, lng: -104.7758481,},},
//      {location: {lat: 38.81321533, lng: -104.747555,},},
//      {location: {lat: 38.86426815, lng: -104.8164723,},},
//      {location: {lat: 38.7658, lng: -104.7893,},},
//      {location: {lat: 38.85546109, lng: -104.8765108,},},
//      {location: {lat: 38.87462375, lng: -104.7200893,},},
//      {location: {lat: 38.88549979, lng: -104.7170726,},},
//      {location: {lat: 38.93035706, lng: -104.7940556,},},
//      {location: {lat: 38.85315202, lng: -104.8720564,},},
//      {location: {lat: 38.901746, lng: -104.768592,},},
//      {location: {lat: 38.89595681, lng: -104.850917,},},
//      {location: {lat: 38.895, lng: -104.7037,},},
//      {location: {lat: 38.93773025, lng: -104.7602052,},},
//      {location: {lat: 38.83382213, lng: -104.8234515,},},
//      {location: {lat: 38.93104553, lng: -104.865715,},},
//      {location: {lat: 38.89397606, lng: -104.7579376,},},
//      {location: {lat: 38.83576432, lng: -104.8233591,},},
//      {location: {lat: 38.96593893, lng: -104.798386,},},
//      {location: {lat: 38.80083483, lng: -104.817851,},},

// //6000
//      {location: {lat: 38.94201278, lng: -104.7996359,},},
//      {location: {lat: 38.77728057, lng: -104.8129961,},},
//      {location: {lat: 38.87427282, lng: -104.7200912,},},
//      {location: {lat: 38.84356433, lng: -104.758683,},},
//      {location: {lat: 39.5318, lng: -105.3045,},},
//      {location: {lat: 39.542984, lng: -105.29343,},},
//      {location: {lat: 39.50425688, lng: -106.1415973,},},
//      {location: {lat: 38.74679573, lng: -105.1736161,},},
//      {location: {lat: 39.69040143, lng: -104.890802,},},
//      {location: {lat: 39.71295331, lng: -104.9033455,},},
//      {location: {lat: 39.79122386, lng: -104.8097651,},},
//      {location: {lat: 39.71074837, lng: -104.9875425,},},
//      {location: {lat: 39.743404, lng: -104.987399,},},
//      {location: {lat: 39.7867, lng: -104.8678,},},
//      {location: {lat: 39.7181, lng: -104.952199,},},
//      {location: {lat: 39.74603239, lng: -104.9910204,},},
//      {location: {lat: 39.74574846, lng: -104.9895015,},},
//      {location: {lat: 39.7376137, lng: -104.9162272,},},
//      {location: {lat: 39.66036, lng: -105.05292,},},
//      {location: {lat: 39.6667, lng: -104.9404,},},
//      {location: {lat: 39.73042189, lng: -104.9734523,},},
//      {location: {lat: 39.677593, lng: -104.973221,},},
//      {location: {lat: 39.74743151, lng: -104.977432,},},
//      {location: {lat: 39.68653158, lng: -104.9406776,},},
//      {location: {lat: 39.68137506, lng: -105.0531813,},},
//      {location: {lat: 39.72438737, lng: -104.9740542,},},
//      {location: {lat: 39.71775493, lng: -104.951232,},},
//      {location: {lat: 39.6991094, lng: -104.9051893,},},
//      {location: {lat: 39.66762477, lng: -104.9136015,},},
//      {location: {lat: 39.77671745, lng: -105.0370018,},},
//      {location: {lat: 39.7383377, lng: -104.9159609,},},
//      {location: {lat: 39.65302113, lng: -104.9298757,},},
//      {location: {lat: 39.74915048, lng: -104.9956439,},},
//      {location: {lat: 39.778165, lng: -104.847099,},},
//      {location: {lat: 39.78566409, lng: -104.8932641,},},
//      {location: {lat: 39.763899, lng: -104.994795,},},
//      {location: {lat: 39.69322851, lng: -104.9924384,},},
//      {location: {lat: 39.87792628, lng: -104.9839281,},},
//      {location: {lat: 39.776463, lng: -105.02483,},},
//      {location: {lat: 39.7068565, lng: -104.91952,},},
//      {location: {lat: 39.74011697, lng: -104.9527278,},},
//      {location: {lat: 39.69419419, lng: -104.9406315,},},
//      {location: {lat: 39.67639, lng: -104.91309,},},
//      {location: {lat: 39.7195, lng: -104.903499,},},
//      {location: {lat: 39.75117163, lng: -105.0000337,},},
//      {location: {lat: 39.745203, lng: -104.992199,},},
//      {location: {lat: 39.7466335, lng: -104.994468,},},
//      {location: {lat: 39.75117153, lng: -105.000039,},},
//      {location: {lat: 39.7463905, lng: -104.9922268,},},

// //2649

//      {location: {lat: 39.74554697, lng: -104.9903416,},},
//      {location: {lat: 39.74902354, lng: -104.9923907,},},
//      {location: {lat: 39.74485093, lng: -104.9683242,},},
//      {location: {lat: 39.72561306, lng: -104.9835319,},},
//      {location: {lat: 39.72532619, lng: -104.9861684,},},
//      {location: {lat: 39.72919185, lng: -104.9407212,},},
//      {location: {lat: 39.709629, lng: -104.987599,},},
//      {location: {lat: 39.71109208, lng: -104.9731705,},},
//      {location: {lat: 39.7211505, lng: -104.95507,},},
//      {location: {lat: 39.71937455, lng: 104.9534352,},},
//      {location: {lat: 39.74008977, lng: -105.0008633,},},
//      {location: {lat: 39.74014087, lng: -104.9166097,},},
//      {location: {lat: 39.710976, lng: -104.940699,},},
//      {location: {lat: 39.7403, lng: -104.988099,},},
//      {location: {lat: 39.6785, lng: -104.968639,},},
//      {location: {lat: 39.65302557, lng: -104.9283844,},},
//      {location: {lat: 39.74740931, lng: -104.999675,},},
//      {location: {lat: 39.6908474, lng: -104.9965844,},},
//      {location: {lat: 39.7579301, lng: -104.903284,},},
//      {location: {lat: 39.65310719, lng: -104.9001558,},},
//      {location: {lat: 39.76015333, lng: -105.0250526,},},
//      {location: {lat: 39.68019572, lng: -104.9592711,},},
//      {location: {lat:39.74275012, lng: -104.9873702,},},
//      {location: {lat: 39.66750055, lng: -104.940549,},},
//      {location: {lat: 39.748238, lng: -104.99844,},},
//      {location: {lat: 39.630027, lng: -106.049854,},},
//      {location: {lat: 37.27062642, lng: -107.8847273,},},
//      {location: {lat: 37.26997223, lng: -107.8818339,},},
//      {location: {lat: 39.74995927, lng: -105.0532408,},},
//      {location: {lat: 39.645, lng: -106.5936,},},
//      {location: {lat: 39.36065139, lng: -104.6068839,},},
//      {location: {lat: 39.65238319, lng: -104.9893103,},},
//      {location: {lat: 39.59511205, lng: -104.9029767,},},
//      {location: {lat: 39.59340792, lng: -104.880478,},},
//      {location: {lat: 39.664284, lng: -104.98743,},},
//      {location: {lat: 39.65623704, lng: -104.987629,},},
//      {location: {lat: 40.01471106, lng: -105.0554675,},},
//      {location: {lat: 40.37877578, lng: -105.5174305,},},
//      {location: {lat: 40.37771171, lng: -105.5175708,},},
//      {location: {lat: 39.6446, lng: -105.3585,},},
//      {location: {lat: 39.65271064, lng: -105.346937,},},
//      {location: {lat: 38.94218825, lng: -104.6041333,},},
//      {location: {lat: 39.883566, lng: -105.02492,},},
//      {location: {lat: 40.1122, lng: -104.9392,},},
//      {location: {lat: 40.117924, lng: -104.94182,},},
//      {location: {lat: 40.162876, lng: -104.97648,},},
//      {location: {lat: 40.5529, lng: -105.091,},},
//      {location: {lat: 40.553078, lng: -105.038895,},},
//      {location: {lat: 40.55272349, lng: -105.1157346,},},

// //2697
// //https://gist.github.com/dankohn/09e5446feb4a8faea24f


//      {location: {lat: 40.58204024, lng: -105.0769757,},},
//      {location: {lat: 40.52374116, lng: -105.0522095,},},
//      {location: {lat: 40.53824319, lng: -105.0766336,},},
//      {location: {lat: 40.57801726, lng: -105.0769757,},},
//      {location: {lat: 40.52350545, lng: -105.0740061,},},
//      {location: {lat: 40.51763497, lng: -105.0392594,},},
//      {location: {lat: 40.58854669, lng: -105.0764646,},},
//      {location: {lat: 40.5514444, lng: -105.0573868,},},
//      {location: {lat: 40.07898255, lng: -104.8151393,},},
//      {location: {lat: 38.72281922, lng: -104.7160244,},},
//      {location: {lat: 39.945, lng: -105.8166,},},
//      {location: {lat: 39.5388, lng: -106.1301,},},
//      {location: {lat: 39.5752, lng: -106.1013,},},
//      {location: {lat: 39.584578, lng: -106.093849,},},
//      {location: {lat: 39.70732182, lng: -104.9373462,},},
//      {location: {lat: 39.699244, lng: -104.94077,},},
//      {location: {lat: 39.52429024, lng: -107.3245268,},},
//      {location: {lat: 39.476944, lng: -107.28752,},},
//      {location: {lat: 39.5613, lng: -107.3516,},},
//      {location: {lat: 39.75201857, lng: -105.2164482,},},
//      {location: {lat: 39.75467893, lng: -105.2205736,},},
//      {location: {lat: 40.0251, lng: -105.8822,},},
//      {location: {lat: 39.08398851, lng: -108.5523058,},},
//      {location: {lat: 39.068436, lng: -108.56932,},},
//      {location: {lat: 39.09629651, lng: -108.5603312,},},
//      {location: {lat: 39.06470148, lng: -108.5963511,},},
//      {location: {lat: 39.09182741, lng: -108.5151383,},},
//      {location: {lat: 39.08658056, lng:-108.596258,},},
//      {location: {lat: 39.095774, lng: -108.609334,},},
//      {location: {lat: 40.39489988, lng: -104.7489491,},},
//      {location: {lat: 40.422643, lng: -104.736496,},},
//      {location: {lat: 40.39584586, lng: -104.7419686,},},
//      {location: {lat: 40.40528, lng: -104.69482,},},
//      {location: {lat: 40.42256556, lng: -104.7485461,},},
//      {location: {lat: 40.39527554, lng: -104.6969782,},},
//      {location: {lat: 40.40600688, lng: -104.7349991,},},
//      {location: {lat: 39.59507614, lng: -104.8896431,},},
//      {location: {lat: 39.62699879, lng: -104.8852182,},},
//      {location: {lat: 39.60799379, lng: -104.922791,},},
//      {location: {lat: 39.6274075, lng: -104.88449,},},
//      {location: {lat: 39.59508132, lng: -1104.8897329,},},
//      {location: {lat: 39.62397985, lng: -104.8957913,},},


//      {location: {lat: 39.60962962, lng: -104.8872672,},},
//      {location: {lat: 39.52463816, lng: -104.9414238,},},
//      {location: {lat: 39.53480831, lng: -105.0145137,},},
//      {location: {lat: 39.56614864, lng: -104.9653568,},},
//      {location: {lat: 39.55903, lng: -104.905379,},},
//      {location: {lat: 39.549716, lng: -104.991836,},},
//      {location: {lat: 39.52476, lng: -104.94188,},},     
//      {location: {lat: 39.5502295, lng: -104.991944,},},
//      {location: {lat: 39.5434005, lng: -104.94212,},},
//      {location: {lat: 39.765899, lng: -105.611343,},},
//      {location: {lat: 39.74176, lng: -105.498272,},},
//      {location: {lat: 40.40644, lng: -104.98164,},},
//      {location: {lat: 39.60765569, lng: -105.942108,},},
//      {location: {lat: 39.98713684, lng: -105.0968475,},},     
//      {location: {lat: 39.97949119, lng: -105.0974117,},},
//      {location: {lat: 39.98714, lng: -105.09601,},},
//      {location: {lat: 39.7343475, lng: -105.1605277,},},
//      {location: {lat: 39.740509, lng: -105.081399,},},
//      {location: {lat: 39.7108, lng: -105.0856,},},
//      {location: {lat: 39.68819, lng: -105.110669,},},
//      {location: {lat: 39.69557731, lng: -105.1463022,},},     
//      {location: {lat: 39.74013862, lng: -105.0998434,},},
//      {location: {lat: 39.73434887, lng: -105.1605226,},},
//      {location: {lat: 39.71816635, lng: -105.0812225,},},
//      {location: {lat: 39.68975457, lng: -105.116181,},},
//      {location: {lat: 39.70693249, lng: -105.1358588,},},
//      {location: {lat: 39.68231137, lng: -105.0813598,},},
//      {location: {lat: 39.712783, lng: -105.133151,},},


//      {location: {lat: 39.61003992, lng: -105.0342654,},},
//      {location: {lat: 39.559328, lng: -105.109621,},},
//      {location: {lat: 39.581903, lng: -104.960042,},},
//      {location: {lat: 39.542829, lng: -104.939202,},},
//      {location: {lat: 39.56273354, lng: -104.8725823,},},
//      {location: {lat: 39.58083342, lng: -105.1312568,},},
//      {location: {lat: 39.53633827, lng: -104.8839409,},},     
//      {location: {lat: 39.58065, lng: -105.0728,},},
//      {location: {lat: 39.58050569, lng: -105.1353397,},},
//      {location: {lat: 39.4836058, lng: -105.0732669,},},
//      {location: {lat: 39.60988234, lng: -105.1026777,},},
//      {location: {lat: 39.60616, lng: -105.08968,},},
//      {location: {lat: 39.62424622, lng: -105.1090093,},},
//      {location: {lat: 39.56479626, lng: -105.1086815,},},     
//      {location: {lat: 39.61306862, lng: -104.9886477,},},
//      {location: {lat: 39.5802441, lng: -104.9603067,},},
//      {location: {lat: 39.56453366, lng: -104.8868999,},},
//      {location: {lat: 39.60931543, lng: -104.9600292,},},
//      {location: {lat: 39.57989848, lng: -105.137502,},},
//      {location: {lat: 39.5843989, lng: -105.0235158,},},
//      {location: {lat: 39.619923, lng: -105.016624,},},     
//      {location: {lat: 39.5596653, lng: -104.8803912,},},
//      {location: {lat: 39.5755, lng: -104.8772,},},
//      {location: {lat: 39.554976, lng: -104.881972,},},
//      {location: {lat: 40.15227745, lng: -105.1095561,},},
//      {location: {lat: 40.16219282, lng: -105.0738018,},},
//      {location: {lat: 40.15977081, lng: -105.1306766,},},
//      {location: {lat: 40.15287, lng: -105.13052,},},
//      {location: {lat: 40.18857353, lng: -105.1298756,},},
//      {location: {lat: 40.189487, lng: -105.102299,},},
//      {location: {lat: 40.18861451, lng: -105.0923846,},},
//      {location: {lat: 40.145695, lng: -105.130619,},},
//      {location: {lat: 40.1507, lng: -105.107399,},},
//      {location: {lat: 40.14437196, lng: -105.1265014,},},
//      {location: {lat: 39.9627, lng: -105.1508,},},     
//      {location: {lat: 39.97165014, lng: -105.1638489,},},
//      {location: {lat: 40.407063, lng: -105.098816,},},
//      {location: {lat: 40.379267, lng: -105.097899,},},
//      {location: {lat: 40.425846, lng: -105.077599,},},
//      {location: {lat: 40.4366, lng: -105.0938,},},
//      {location: {lat: 38.45712057, lng: -107.8652639,},},
//      {location: {lat: 39.092866, lng: -104.820408,},},     
//      {location: {lat: 39.098459, lng: -104.875891,},},
//      {location: {lat: 39.51626383, lng: -104.7646631,},},
//      {location: {lat: 39.512413, lng: -104.77358,},},
//      {location: {lat: 39.534397, lng: -104.789748,},},
//      {location: {lat: 39.51446801, lng: -104.7643512,},},
//      {location: {lat: 38.3142, lng: -104.7292,},},
//      {location: {lat: 38.2665, lng: -104.627598,},},     
//      {location: {lat: 38.23559705, lng: -104.6624311,},},
//      {location: {lat: 38.30914794, lng: -104.6280479,},},
//      {location: {lat: 39.52259593, lng: -107.7766148,},},
//      {location: {lat: 40.485, lng: -106.8311,},},
//      {location: {lat: 40.462337, lng: -106.820458,},},
//      {location: {lat: 40.465174, lng: -106.809172,},},
//      {location: {lat: 40.4783204, lng: -106.8081282,},},

//      {location: {lat: 39.92887949, lng: -105.1424704,},},
//      {location: {lat: 39.95506668, lng: -105.1679611,},},
//      {location: {lat: 39.87036868, lng: -104.9572698,},},
//      {location: {lat: 39.91423798, lng: -104.9753876,},},
//      {location: {lat: 39.884663, lng: -104.943386,},},
//      {location: {lat: 39.913663, lng: -104.94146,},},
//      {location: {lat: 39.84927022, lng: -104.9792084,},},     
//      {location: {lat: 39.913666, lng: -104.94154,},},
//      {location: {lat: 39.63066473, lng: -106.4173263,},},
//      {location: {lat: 39.64203545, lng: -106.3740696,},},
//      {location: {lat: 39.930482, lng: -105.01542,},},
//      {location: {lat: 39.88639, lng: -105.07444,},},
//      {location: {lat: 39.9358, lng: -105.0505,},},
//      {location: {lat: 39.943655, lng: -104.992999,},},     
//      {location: {lat: 39.887362, lng: -105.075494,},},
//      {location: {lat: 39.8840875, lng: -105.02494,},},
//      {location: {lat: 39.9141194, lng: -105.0002659,},},
//      {location: {lat: 39.9139755, lng: -105.05216,},},
//      {location: {lat: 39.82994762, lng: -105.024998,},},
//      {location: {lat: 39.86743545, lng: -105.0531582,},},
//      {location: {lat: 39.77119873, lng: -105.0815334,},},     
//      {location: {lat: 39.7619, lng: -105.142041,},},
//      {location: {lat: 39.76513398, lng: -105.1424466,},},
//      {location: {lat: 39.76457588, lng: -105.1424431,},},
//      {location: {lat: 39.76930593, lng: -105.1096254,},},
//      {location: {lat: 40.47963715, lng: -104.9252625,},},
//      {location: {lat: 40.479363, lng: -104.925436,},},
//      {location: {lat: 39.8901, lng: -105.7688,},},
//      {location: {lat: 38.9974, lng: -105.0672,},},
//      {location: {lat: 38.99444814, lng: -105.0692781,},},
//house
     {location: {lat: 39.476962, lng: -105.081904,},},

              { location: {lat: 39.486715,lng: -105.079080,  }, },


//path to waterton  - closer than sbucks at safeway
              { location: {lat: 39.484205,lng: -105.080056,  }, },

        ];
        }
        
        

//RENDER THE FIRST BUSINESS' 3D MODEL OR LOGO - AND SET THE OBJECTS ATTRIBUTES
function renderPlaces(places) {
 let scene = document.querySelector('a-scene');

 places.forEach((place) => {
     let latitude = place.location.lat;
     let longitude = place.location.lng;

     let model = document.createElement('a-entity');

    //  model.addEventListener('clickhandler2');
    //  this.addEventListener("click", clickhandler2);
     model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
     model.setAttribute('gltf-model', 'models/coffeeCup8-10-20.gltf');
     
    
     //allows to rotate
     model.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 6000; easing: linear');

     // model.setAttribute('animation-mixer','clip: Take 001; loop:repeat');
   //  model.tree.rotateY(0.01);
   // model.setAttribute.tree.rotateY(0.01);
   // model.object3D.rotation.y = THREE.Math.degToRad(360);
   // this.animate('properties[rotate]');
   // this.setAttribute('animate',{rotateY: "*",loop: "repeat", repetitions: 2});
   // model.object3D.rotation.divideScalar(2);
   // model.setAttribute('rotation', '180');


     model.setAttribute('scale', '.05 .05 .05');
    // model.setAttribute('color', 'green');
    // model.setAttribute('opacity', '0.75');

    //  model.setAttribute('animation-loop', {action: e.action, loopDelta: e.loopDelta});

     // model.setAttribute('animation-mixer',{clip: "*",loop: "repeat", repetitions: 2});
   //  model.setAttribute('rotation', loop="repeat", {x: 0 , y: 360, z: 0,});
    // model.addEventListener('raycaster-intersection',
    // function () {
    //   window.alert('Player hit something!');
    model.addEventListener('loaded', () => {
    window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
      
     });

     // model.object3D.rotation.set(
     //   THREE.Math.degToRad(15),
     //   THREE.Math.degToRad(30),
     //   THREE.Math.degToRad(90)
     // );
     // model.object3D.rotation.y += Math.PI;
     
     // With .setAttribute (less recommended).
     // model.setAttribute('rotation', {x: 15, y: 30, z: 90});

//removes model when clicked
model.addEventListener('click', () => {
  model.remove();
  //window.open("https://www.starbucks.com/menu?_branch_match_id=713537451166389183", "Starbucks Order");
  document.getElementById("hwPopup").style.display ="unset";


//  document.getElementById("hwPopup").style.display ="unset";

  //HAS TO BE CONNECTED TO ANSCHUTZ WIFI TO WORK - Building floor plans
  //window.open("maps/Q20_Building_Start_Page.html#", "new win");
       
     });

     scene.appendChild(model);
 });
}


//THE SECOND BUSINESS' LOCATIONS
function staticLoadPlacesCU() {
  return [
      {location: {lat: 39.484604,  lng: -105.074975,},},
           {location: {lat: 39.484071, lng: -105.075172,},},
      {location: {lat: 39.483723,  lng: -105.075175,},},
      {location: {lat: 39.484170,  lng: -105.073804,},},
      {location: {lat: 39.482957,  lng: -105.073747,},},
         ];
         }
    

//RENDER THE SECOND(CU) BUSINESS' 3D MODEL OR LOGO - AND SET THE OBJECTS ATTRIBUTES
 function renderPlacesCU(placesCU) {
  let sceneCU = document.querySelector('a-scene');
    placesCU.forEach((placeCU) => {
      let latitudeCU = placeCU.location.lat;
      let longitudeCU = placeCU.location.lng;
        let modelCU = document.createElement('a-entity');
      modelCU.setAttribute('gps-entity-place', `latitude: ${latitudeCU}; longitude: ${longitudeCU};`);
      modelCU.setAttribute('gltf-model', 'models/CU-Logo-7-23-2020.gltf');
      modelCU.setAttribute('scale', '4 4 4');
           //allows to rotate
      modelCU.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 6000; easing: linear');
      modelCU.addEventListener('loaded', () => {
     window.dispatchEvent(new CustomEvent('gps-entity-place-loadedCU'))
 
      });

 //removes model when clicked
 modelCU.addEventListener('click', () => {
   modelCU.remove();
   //window.open("https://www.starbucks.com/menu?_branch_match_id=713537451166389183", "Starbucks Order");
   document.getElementById("cuPopup").style.display ="unset";

      });
 
      sceneCU.appendChild(modelCU);
  });
 }





          
function removeHwPopup(){
  document.getElementById("hwPopup").style.display = "none";

}

function removeCuPopup(){
  document.getElementById("cuPopup").style.display = "none";

}

//TESTS OF NEW MODELS
















// function renderPlaces(places) {
//   let scene = document.querySelector('a-scene');
 
//   places.forEach((place) => {
//       let latitude = place.location.lat;
//       let longitude = place.location.lng;
 
//       let model = document.createElement('a-dodecahedron');


// //allows position panning
//       // var t = 0;
//       // function render() {
//       //   t += 0.01;
//         // requestAnimationFrame(render);
//         // model.setAttribute('position', +(Math.sin(t*2)+1)+' 0');
 
//       // }
//       // render();

//       // model.addEventListener('clickhandler2');
//       // this.addEventListener("click", clickhandler2);
//       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
//       // model.setAttribute('gltf-model', 'models/sword2Transparency test2.gltf');

//       //allows to rotate
//       model.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 3000; easing: linear');

//       // model.setAttribute('animation-mixer','clip: Take 001; loop:repeat');
//     //  model.tree.rotateY(0.01);
//     // model.setAttribute.tree.rotateY(0.01);
//     // model.object3D.rotation.y = THREE.Math.degToRad(360);
//     // this.animate('properties[rotate]');
//     // this.setAttribute('animate',{rotateY: "*",loop: "repeat", repetitions: 2});
//     // model.object3D.rotation.divideScalar(2);
//     // model.setAttribute('rotation', '180');


//      model.setAttribute('scale', '50 50 50');
//      model.setAttribute('color', 'green');
//      model.setAttribute('opacity', '0.75');

//      //  model.setAttribute('animation-loop', {action: e.action, loopDelta: e.loopDelta});
 
//       // model.setAttribute('animation-mixer',{clip: "*",loop: "repeat", repetitions: 2});
//     //  model.setAttribute('rotation', loop="repeat", {x: 0 , y: 360, z: 0,});
//      // model.addEventListener('raycaster-intersection',
//      // function () {
//      //   window.alert('Player hit something!');
//      model.addEventListener('loaded', () => {
//      window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       
//       });



//       // model.object3D.rotation.set(
//       //   THREE.Math.degToRad(15),
//       //   THREE.Math.degToRad(30),
//       //   THREE.Math.degToRad(90)
//       // );
//       // model.object3D.rotation.y += Math.PI;
      
//       // With .setAttribute (less recommended).
//       // model.setAttribute('rotation', {x: 15, y: 30, z: 90});
 
//  //removes model when clicked
//  model.addEventListener('click', () => {
//    model.remove();
        
//       });
 
//       scene.appendChild(model);
//   });
 // }