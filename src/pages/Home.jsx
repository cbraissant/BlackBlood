import SensorCard from "../components/Sensors/SensorCard";
import { sensors } from "../config/sensors";

export default function Home() {
    return (
        <div className="flex flex-wrap gap-6 ">
            <button onClick={onStartButtonClick}>Start</button>
            <button onClick={onStopButtonClick}>Stop</button>
            {telemetry && <Dashboard data={telemetry} />}
        </div>
    );
}
