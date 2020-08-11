window.onload = () => {
    let places2 = staticLoadPlaces2();
    renderPlaces2(places2);
  };
    function staticLoadPlaces2() {
   return [
       {location: {lat: 39.484604,  lng: -105.074975,},},
        {location: {lat: 39.484071, lng: -105.075172,},},
       {location: {lat: 39.483723,  lng: -105.075175,},},
       {location: {lat: 39.484170,  lng: -105.073804,},},
       {location: {lat: 39.482957,  lng: -105.073747,},},
          ];
          }
     
  function renderPlaces2(places2) {
   let scene2 = document.querySelector('a-scene');
     places2.forEach((place2) => {
       let latitude2 = place2.location.lat;
       let longitude2 = place2.location.lng;
         let model2 = document.createElement('a-entity');
       model2.setAttribute('gps-entity-place', `latitude: ${latitude2}; longitude: ${longitude2};`);
       model2.setAttribute('gltf-model', 'models/CU-Logo-7-23-2020.gltf');
            //allows to rotate
       model2.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 6000; easing: linear');
       model2.addEventListener('loaded', () => {
      window.dispatchEvent(new CustomEvent('gps-entity-place-loaded2'))
  
       });

  //removes model when clicked
  model2.addEventListener('click', () => {
    model2.remove();
    //window.open("https://www.starbucks.com/menu?_branch_match_id=713537451166389183", "Starbucks Order");
    document.getElementById("hwPopup").style.display ="unset";
 
       });
  
       scene2.appendChild(model2);
   });
  }
  
  