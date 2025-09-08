/* Device info */
const DEVICE_NAME = 'OraOne_v01'

/* Telemetry */
const SERVICE_UUID = '4bc17c30-8818-473f-8155-7fd09e41b355'
const CHARACTERISTIC_UUID = '4bc17c31-8818-473f-8155-7fd09e41b355'

/* System Info */
const SYSTEM_INFO_UUID = '1c296c70-7d1b-4c92-a572-9fb9eafcc93c'
const FW_VERSION_UUID = '1c296c71-7d1b-4c92-a572-9fb9eafcc93c'
const BUILD_TIME_UUID = '1c296c72-7d1b-4c92-a572-9fb9eafcc93c'
const BOARD_NAME_UUID = '1c296c73-7d1b-4c92-a572-9fb9eafcc93c'
const BLE_MAC_UUID = '1c296c74-7d1b-4c92-a572-9fb9eafcc93c'
const DEVICE_ID_UUID = '1c296c75-7d1b-4c92-a572-9fb9eafcc93c'

let server, device;
let telemetryCharacteristic;

export async function connect() {
    try {
        if (!device) {
            console.log('Requesting Bluetooth Device...');
            console.log('Service UUID:' + SERVICE_UUID);
            device = await navigator.bluetooth.requestDevice({
                // acceptAllDevices : true
                filters: [{ name: ["OraOne_v01"] }],
                // filters: [{ name: [] }],
                optionalServices: [SERVICE_UUID, SYSTEM_INFO_UUID]
                // acceptAllDevices: true
            });
            
            console.log('• Name:             ' + device.name);
            console.log('• Id:               ' + device.id);
            console.log('• Connected:        ' + device.gatt.connected)
        }

        console.log('Connecting to GATT Server...');
        server = await device.gatt.connect();
        console.log(server)

        await readTelemetryData(server)

    } catch (error) {
        console.error('Argh! ' + error);
    }
}

async function readTelemetryData(server) {
        /* Telemetry */
        console.log('Getting Telemetry service...');
        const telemetryService = await server.getPrimaryService(SERVICE_UUID);
        console.log(telemetryService)
        
        console.log('Getting Telemetry characteristic...');
        telemetryCharacteristic = await telemetryService.getCharacteristic(CHARACTERISTIC_UUID);
        console.log(telemetryCharacteristic)
        
        await telemetryCharacteristic.startNotifications();
        
        console.log('Notifications started');
        telemetryCharacteristic.addEventListener('characteristicvaluechanged',
            handleTelemetryNotifications);
}

async function readSystemInfo(server) {
    try {
        console.log('Connecting to System Info service...');
        const systemInfoService = await server.getPrimaryService(SYSTEM_INFO_UUID);

        firmwareCharacteristic = await systemInfoService.getCharacteristic(FW_VERSION_UUID);
        let firmwareValue = await readString(firmwareCharacteristic)
        console.log(firmwareValue);

        buildTimeCharacteristic = await systemInfoService.getCharacteristic(BUILD_TIME_UUID);
        let buildTimeValue = await readString(buildTimeCharacteristic);
        console.log(buildTimeValue);

        boardNameCharacteristic = await systemInfoService.getCharacteristic(BOARD_NAME_UUID);
        let boardNameValue = await readString(boardNameCharacteristic);
        console.log(boardNameValue);

        bleMacCharacteristic = await systemInfoService.getCharacteristic(BLE_MAC_UUID);
        let bleMacValue = await readString(bleMacCharacteristic);
        console.log(bleMacValue);

        deviceCharacteristic = await systemInfoService.getCharacteristic(DEVICE_ID_UUID);
        let deviceValue = await readString(deviceCharacteristic);
        console.log(deviceValue);

    } catch (error) {
        console.error('Argh! ' + error);
    }
} 

export async function disconnect(){
    if (telemetryCharacteristic) {
        try {
            await telemetryCharacteristic.stopNotifications();
            telemetryCharacteristic.removeEventListener('characteristicvaluechanged',
                handleTelemetryNotifications);
            device.gatt.disconnect();
            console.log('• Notifications stopped');
        } catch (error) {
            console.log('Argh! ' + error);
        }   
    }
}

function handleTelemetryNotifications(event) {

    let rawDataReceived = event.target.value;
    let dataView = new DataView(rawDataReceived.buffer);
  
    let numByteReceived = rawDataReceived.byteLength;
    // console.log("Number of byte received: " + numByteReceived)
    // console.log(rawDataReceived)

    let timestamp = dataView.getInt32(0, true);
    let humidity = dataView.getInt32(4,true);
    let temperature = dataView.getInt32(8,true);
    let pressure = dataView.getInt32(12,true);
    let co2 = dataView.getInt32(16,true);
    let accelX = dataView.getInt32(20,true);
    let accelY = dataView.getInt32(24,true);
    let accelZ = dataView.getInt32(28,true);
    let gyroX = dataView.getInt32(32,true);
    let gyroY = dataView.getInt32(36,true);
    let gyroZ = dataView.getInt32(40,true);
    let ppgRed = dataView.getInt32(44,true);
    let ppgIR = dataView.getInt32(48,true);
    let ppgGreen = dataView.getInt32(52,true);
    let magnX = dataView.getInt32(56,true);
    let magnY = dataView.getInt32(60,true);
    let magnZ = dataView.getInt32(64,true);

    const sample = {
    timestamp: timestamp, 
    humidity: (humidity/10000).toFixed(4), 
    temperature: (temperature/10000).toFixed(4), 
    pressure: (pressure/10000).toFixed(4),
    co2: (co2/10000).toFixed(4),
    accelX: (accelX/10000).toFixed(4),
    accelY: (accelY/10000).toFixed(4),
    accelZ: (accelZ/10000).toFixed(4),
    gyroX: (gyroX/10000).toFixed(4),
    gyroY: (gyroY/10000).toFixed(4),
    gyroZ: (gyroZ/10000).toFixed(4),
    ppgRed: (ppgRed).toFixed(0),
    ppgIR: (ppgIR).toFixed(0),
    ppgGreen: (ppgGreen).toFixed(0),
    magnX: (magnX/10000).toFixed(4),
    magnY: (magnY/10000).toFixed(4),
    magnZ: (magnZ/10000).toFixed(4),
    }

    console.log(sample);
}