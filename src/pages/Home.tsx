import SensorCard from "../components/Sensors/SensorCard";
import Button from "../components/Button/Button"
import { connect, disconnect } from "../utils/bleUtils"
import { sensors } from "../config/sensors";

function onStopButtonClick() {
}

export default function Home() {
    return (
        <div className="flex flex-wrap gap-6 ">
            <Button onClick={connect}>Connect</Button>
            <Button onClick={disconnect}>Disconnect</Button>
        </div>
    );
}
