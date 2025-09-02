import SensorCard from "../components/Sensors/SensorCard";
import { sensors } from "../config/sensors";

export default function Sensors() {
    return (
        <div className="flex flex-wrap gap-6 ">
            {sensors.map((item) => (
                <SensorCard key={item.id} item={item} />
            ))}
        </div>
    );
}
