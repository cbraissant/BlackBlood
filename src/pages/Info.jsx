export default function Info() {
    const infoData = [
        { field: "FW Version", value: "1.0.0" },
        { field: "Build Time", value: "2025-08-29 10:00" },
        { field: "MAC Address", value: "00:1B:44:11:3A:B7" },
        { field: "Device ID", value: "1234567890" },
        { field: "Device Name", value: "Smart Device" },
    ];

    return (
        <div className="content">
            <h1>Device Info</h1>
            <table>
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {infoData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.field}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
