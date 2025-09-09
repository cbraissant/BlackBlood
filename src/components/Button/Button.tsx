export default function Button(props) {
    return (
        <button className="w-52 py-2 font-bold bg-sky-500 rounded-full"
            onClick={props.onClick}>
            {props.children}
        </button >
    )
}