class LeafletMap {
  constructor(containerId, center, zoom) {
    this.map = L.map(containerId).setView(center, zoom);
    this.initTileLayer();
     }
     
     initTileLayer() {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
  
  }