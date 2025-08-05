# 📍 Real-Time Live Location Tracker

A real-time live location tracking web app using **Node.js**, **Socket.IO**, and **Leaflet.js**, inspired by apps like **Ola** and **Uber**.

---

## 🚀 Features

- ✅ Tracks user location in real-time via browser’s GPS
- ✅ Displays all active users as moving markers on a Leaflet map
- ✅ Emits location updates via Socket.IO
- ✅ Automatically updates map center and marker positions
- ✅ Removes marker when a user disconnects
- ✅ Simple and clean UI for live tracking experience

---

## 🧱 Tech Stack

| Layer           | Technology             |
|----------------|------------------------|
| Frontend        | HTML, CSS, JavaScript |
| Mapping         | Leaflet.js + OpenStreetMap |
| Backend         | Node.js, Express.js   |
| Real-Time Comm. | Socket.IO             |
| Templating      | EJS                   |
| Hosting (optional) | Render.com         |

---

## 🗂️ Project Structure
## 🖼️ Screenshot

## 🗂️ Project Structure

![Project Structure](file%20structure.png)




Open your browser at http://localhost:3000
---

## ⚙️ How It Works

1. **Check if the browser supports geolocation.**
2. **Set options** for:
   - `enableHighAccuracy: true`
   - `timeout: 5000`
   - `maximumAge: 0`
3. Use `navigator.geolocation.watchPosition()` to track location continuously.
4. On update:
   - Emit `{ latitude, longitude }` using `socket.emit("send-location", ...)`
   - Log errors to the console if any
5. **Initialize Leaflet map**:
   - Center at `[0, 0]`, zoom level `15`
   - Add OpenStreetMap tile layer
6. **Create empty object** `markers = {}`
7. On receiving location (`receive-location`):
   - Extract `id`, `latitude`, `longitude`
   - Center map to `[latitude, longitude]`
   - If marker exists, update position
   - Else, create and add new marker
8. On user disconnect:
   - Remove marker from map
   - Delete that marker from `markers` object

---

## 💻 Run Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/realtime-location-tracker.git
cd realtime-location-tracker

# Install dependencies
npm install

# Start the server
node app.js
