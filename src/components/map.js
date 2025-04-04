import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Create a map instance
export function initializeMap(containerId) {
    // Brescia Italy coordinates: 45.54013, 10.22161
    
    // const mapboxUrl = 'https://api.mapbox.com/styles/v1/giorgiomarini/clt8iv5y7008v01qs2ldxatga/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2lvcmdpb21hcmluaSIsImEiOiJja2xxdHJ3ZXUxZ2lrMm5uMzd4NXdxcG9mIn0.A1StLGRTTfe-WwxNCQMzUA';
    // const mapboxAttribution = 'Tiles © Mapbox';
    // const openStreetMapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    // const openStreetMapAttribution = '© OpenStreetMap contributors';
    const tileUrl = import.meta.env.VITE_OPENSTREETMAP_URL;
    const tileAttribution = import.meta.env.VITE_OPENSTREETMAP_ATTRIBUTION;
    const map = L.map(containerId).setView([45.54013, 10.2216], 14); // Set initial view to London
    L.tileLayer(tileUrl, {
        maxZoom: 19,
        attribution: tileAttribution,
    }).addTo(map);

    const points = []; // Array to store clicked points
    let polygonLayer = null; // Store the polygon layer
    const circleLayers = []; // Array to store circle layers

    // Function to update the list of points in the #data section
    function updatePointList() {
        const dataSection = document.getElementById('events');
        dataSection.innerHTML = `
            <div id="dataContent">
                <h3>Polygon Points</h3>
                <ul>
                    ${points.map(([lat, lng]) => `<li>Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}</li>`).join('')}
                </ul>
                <button id="exportGeoJSON">Export GeoJSON</button>
                <button id="clearMap">Clear Map</button>
            </div>
        `;

        // Add an event listener to the "Export GeoJSON" button
        const exportButton = document.getElementById('exportGeoJSON');
        if (exportButton) {
            exportButton.addEventListener('click', () => {
                if (polygonLayer) {
                    const geoJSON = polygonLayer.toGeoJSON();
                    console.log('GeoJSON Polygon:', geoJSON);
                    
                    // Display the GeoJSON in a dedicated section
                    const geoJSONSection = document.getElementById('geojson');
                    geoJSONSection.innerHTML = `
                    <div id="geojsonContent">
                        <h3>Exported GeoJSON</h3>
                        <pre>${JSON.stringify(geoJSON, null, 2)}</pre>
                    </div>
                    `;
                } else {
                    alert('No polygon to export.');
                }
            });
        }

        // Add an event listener to the "Clear Map" button
        const clearButton = document.getElementById('clearMap');
        if (clearButton) {
            clearButton.addEventListener('click', () => {
                // Remove all circles from the map
                circleLayers.forEach(circle => map.removeLayer(circle));
                circleLayers.length = 0; // Clear the circle layers array

                // Remove the polygon from the map
                if (polygonLayer) {
                    map.removeLayer(polygonLayer);
                    polygonLayer = null;
                }

                // Clear the points array
                points.length = 0;

                // Update the list of points in the #data section
                updatePointList();
            });
        }
    }

    // Add a click event listener to the map
    map.on('click', function (e) {
        const { lat, lng } = e.latlng; // Get latitude and longitude of the click
        points.push([lat, lng]); // Add the clicked point to the array

        // Calculate the circle radius based on the zoom level
        const zoom = map.getZoom();
        const radius = 2 * Math.pow(2, 19 - zoom); // Adjust the radius formula as needed

        // Draw a circle at the clicked point
        const circle = L.circle([lat, lng], {
            color: 'red', // Circle border color
            fillColor: '#f03', // Circle fill color
            fillOpacity: 0.5, // Fill opacity
            radius: radius, // Radius in meters, depending on the zoom level
        }).addTo(map);

        // Add the circle to the circle layers array
        circleLayers.push(circle);

        // If there are at least 3 points, draw a polygon
        if (points.length >= 3) {
            if (polygonLayer) {
                map.removeLayer(polygonLayer);
            }
            polygonLayer = L.polygon(points, {
                color: 'blue', // Polygon border color
                fillColor: '#3388ff', // Polygon fill color
                fillOpacity: 0.4, // Fill opacity
            }).addTo(map);
        }

        // Update the list of points in the #data section
        updatePointList();
    });

    // Create a popup instance
    const popup = L.popup();

    // Add a mousemove event listener to the map
    map.on('mousemove', function (e) {
        const { lat, lng } = e.latlng; // Get latitude and longitude of the mouse pointer
        popup
            .setLatLng(e.latlng) // Set the popup position to the mouse pointer
            .setContent(`Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`) // Set the popup content
            .openOn(map); // Open the popup on the map
    });
}