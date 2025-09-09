const HISTORY_SIZE = 1000;

export const sensorsData = {
    latest: null, 
    history: []
}

export function pushSensorsData(sample) {
    sensorsData.latest = sample;
    sensorsData.history.push(sample);

    if (sensorsData.history.length >= HISTORY_SIZE) {
        sensorsData.history.shift();
    }
}
