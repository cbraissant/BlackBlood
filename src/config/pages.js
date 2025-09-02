import {BsHouse, BsGear, BsPerson } from 'react-icons/bs';
import {MdSensors} from 'react-icons/md';

export const pages = [
        { id: "home", label: "Home", path: "/", icon: BsHouse},
        { id: "sensors", label: "Sensors", path: "sensors", icon: MdSensors},
        { id: "settings", label: "Settings", path: "settings", icon: BsGear},
]