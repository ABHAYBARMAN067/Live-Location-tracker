Check if the browser supports geolocation.

Set options for high accuracy, a 5-second timeout, and no caching.

Use watchPosition to continuously track the user's location.

Emit latitude and longitude via a socket using "send-location".

Log any errors to the console.

Initialize a Leaflet map centered at coordinates (0, 0) with a zoom level of 15.

Add OpenStreetMap tiles to the map.

Create an empty object markers.

When receiving location data via socket, extract id, latitude, and longitude, and center the map on the new coordinates.

If a marker for the id exists, update its position; otherwise, create a new marker at the given coordinates and add it to the map.

When a user disconnects, remove their marker from the map and delete it from markers.


