throw new Error("SET YOUR MAPBOX TOKEN");
mapboxgl.accessToken = "";

// Set the map on the page
window.setMap = (center, zoom = 12) => {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center,
    zoom
  });
  map.addControl(new mapboxgl.NavigationControl());

  return map;
};

window.drawMarkers = (map, markers) => {
  // draw all markers
  markers.forEach(m => {
    const popup = new mapboxgl.Popup()
      .setLngLat(m.coords)
      .setHTML(`<h2>${m.name}</h2>`)
      .addTo(map);

    const mk = new mapboxgl.Marker().setLngLat(m.coords).addTo(map);
    mk.setPopup(popup);
  });

  // recenter and rezoom the map to see all markers
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach(m => {
    bounds.extend(m.coords);
  });
  map.fitBounds(bounds, { padding: 40 });
};
