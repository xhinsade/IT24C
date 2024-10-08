class LeafletMap{
  
  constructor (containerId, center, zoom){
    this.map = L.map(containerId).setView(center, zoom);
    this.initTileLayer();
    
  }
  
  initTileLayer() {
   
   L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribute: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map)
     
  }
  
  addMarker(lat, lng, message){
    const marker = L.marker([lat, lng]).addTo(this.map);
    marker.bindPopup(message );
    
  }
  
  loadMarkersFromJson(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(marker => {
      this.addMarkerker(marker.latitude, marker.longitude, marker.message);
    });
  })
  .catch(error => console.error('Error Loading Markers: ', error));
    
  }
  }

