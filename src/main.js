import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { initializeMap } from './components/map.js'

document.querySelector('#app').innerHTML = `
  <div id="map" class="section"></div>
  <div id="data" class="section">
    <div id="events"></div>
    <div id="geojson" class="section"></div>
  </div>
`

//initialize the map
initializeMap('map');
// console.log(`meta info : ${import.meta.env.VITE_OPENSTREETMAP_URL}`);