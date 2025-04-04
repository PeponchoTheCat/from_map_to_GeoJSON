# Polygon on Map

This project is a web application that allows users to interact with a map, create polygons by clicking on points, and export the polygons as GeoJSON. It is built using [Leaflet](https://leafletjs.com/) for map rendering and interaction.

## Features

- **Interactive Map**: Click on the map to add points.
- **Dynamic Polygon Creation**: Automatically creates a polygon when at least three points are added.
- **Export GeoJSON**: Export the created polygon as a GeoJSON file.
- **Clear Map**: Clear all points and polygons from the map.
- **Dynamic Circle Radius**: Circle radius adjusts dynamically based on the zoom level.
- **Coordinate Display**: View the coordinates of the mouse pointer in real-time.

## Demo

![Demo Screenshot](https://feelera-bucket.fra1.digitaloceanspaces.com/chain_manager_giorgio/my_pictures/draw_polygon_on_map.png)  
_A screenshot of the application in action._

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/polygon-on-map.git
   cd polygon-on-map
    ```
2. install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.

## Usage

1. **Add Points**: Click on the map to add points. A polygon will be created automatically when at least three points are added.
2. **Export GeoJSON**: Click the "Export GeoJSON" button to download the polygon as a GeoJSON file.
3. **Clear Map**: Click the "Clear" button to remove all points and polygons from the map.
4. **View Coordinates**: The coordinates of the mouse pointer are displayed in real-time at the bottom of the map.

## Project Structure
```
polygon_on_map/
├── src/
│   ├── components/
│   │   └── map.js        # Map logic and Leaflet integration
│   ├── style.css         # Application styles
│   └── main.js           # Application entry point
├── public/
│   └── [index.html](http://_vscodecontentref_/1)        # HTML template
├── [package.json](http://_vscodecontentref_/2)          # Project dependencies and scripts
└── [README.md](http://_vscodecontentref_/3)             # Project documentation
```
## Technologies Used
- **HTML**: Structure of the web application.
- **CSS**: Styling of the application.
- **JavaScript**: Logic for map interaction and polygon creation.
- **Leaflet**: JavaScript library for interactive maps.
- **GeoJSON**: Format for encoding geographic data structures.
- **Vite**: Build tool for modern web projects.
- **npm**: Package manager for JavaScript.

## Evironment Variables

This project requires the following environment variables to be set:

- `VITE_OPENSTREETMAP_URL`: The URL for the OpenStreetMap tile server. This is used to load the map tiles.
- `VITE_OPENSTREETMAP_ATTRIBUTION`: The attribution text for the OpenStreetMap tiles. This is displayed on the map.

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Leaflet](https://leafletjs.com/) for the map library.
- [OpenStreetMap](https://www.openstreetmap.org/) for the map tiles.
- [GeoJSON](https://geojson.org/) for the geographic data format.
- [Vite](https://vitejs.dev/) for the build tool.
- [npm](https://www.npmjs.com/) for package management.

