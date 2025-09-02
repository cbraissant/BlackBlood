# Sensor monitoring Web App Specifications

## Purpose

The application will serve two main purposes:

- Testing & Prototyping: Provide real-time visualization of sensor data from the wearable sleep device (via BLE → laptop → web app).
- Customer Platform (later): Provide meaningful analysis of sleep quality, reports, trends, and personalized recommendations.

The project will evolve in stages, starting simple and adding complexity progressively.



## Phased Development Roadmap

### Phase 1 – Developer / Prototype Tool (MVP)

Goal: Basic connection, real-time data display.

Features:
- Device Connection:
    - Connect to device via BLE (through laptop or Web Bluetooth API if possible).
    - Display connection status (connected/disconnected, last packet time).
- Real-Time Sensor Dashboard:
    - Raw sensor values displayed as live updating numbers and graphs:
        - Pressure (Pa or cmH₂O).
        - CO₂ levels (ppm).
        - Temperature (°C).
        - Humidity (%RH).
        - Accelerometer (x, y, z).
        - Gyroscope (x, y, z).
    - Update rate: ~1–5 Hz depending on device capability.
- Data Logging:
    - Option to start/stop recording session.
    - Save data to local file (CSV/JSON) for offline analysis.
- Basic Settings Panel:
    - Device sampling frequency (if configurable).
    - Calibration/reset options (e.g., zero pressure).


### Phase 2 – Advanced Developer Tool / Early User Testing

Goal: Enable multi-session storage and basic visualization.

Features:
- Session Management:
  - Save and label sessions locally (date, time, duration).
  - Replay past sessions with graphs.
- Data Visualization Improvements:
  - Interactive graphs (zoom, pan).
  - Overlay multiple sensor graphs (e.g., CO₂ vs. pressure).
- Derived Metrics (Basic Processing):
  - Breathing rate (from pressure/CO₂ waveforms).
  - Movement index (from accelerometer).
  - Room environment stability (temp/humidity trends).
- Export:
  - Download session data as CSV/JSON.
  - Export graphs as PNG.


### Phase 3 – Early Customer Platform

Goal: Provide higher-level insights instead of just raw data.

Features:
- Sleep Session Summary:
  - Total time in bed.
  - Total sleep time (estimated).
  - Average breathing rate.
  - Breathing irregularities (e.g., apnea-like events).
  - Average room temperature/humidity during session.
  - Movement index during night.
- User Dashboard:
  - List of sessions with summaries.
  - Quick metrics trends (e.g., sleep quality over last 7 days).
- Basic Profile & Settings:
  - User profile (age, gender, weight, optional).
  - Device settings (sensor calibration, firmware version).


### Phase 4 – Mature Customer Platform

Goal: Deliver polished reports and longitudinal tracking.

Features:
- Advanced Analytics:
  - Sleep stage estimation (light, deep, REM proxy from movement/respiration).
  - Apnea/hypopnea detection metrics.
  - Sleep efficiency score.
- Visualization:
  - Hypnogram-style timeline view (estimated stages).
  - CO₂ / breathing events markers on timeline.
  - Weekly/monthly trends dashboards.
- Reports:
  - Generate nightly PDF reports.
  - Export data to cloud (optional, depending on backend availability).
- Cloud Sync (optional later):
  - Secure login.
  - Cloud storage of sleep data.
  - Access from multiple devices.


## Technical Requirements

Frontend Tech Stack:
- HTML5, CSS3, JavaScript (React, Vite).
- Graphing library (Chart.js, Recharts, or D3.js).
- UI Components: CSS3 (library to be determined)

Backend (later phases):
-Phase 1 & 2: Local only (no backend required).
-Phase 3+: Simple Node.js/Express backend with SQLite/Postgres.
-Phase 4+: Optional cloud backend (AWS, Firebase, Supabase).

Data Handling:
-Store raw sensor packets with timestamps.
-Derived metrics should be computed in the app, not device, for flexibility.
-JSON schema for session storage:
