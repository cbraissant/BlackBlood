export default function SensorCard({ item }) {
    return (
        <div className="flex flex-col bg-zinc-700 text-center p-4 rounded-3xl w-80">
            <div className="py-4">
                <span className="text-5xl font-bold">{item.value}</span>
                <span className="text-sm text-sky-500">{item.unit}</span>
            </div>
            <div className="text-sky-500">{item.label}</div>
        </div>
    )
}