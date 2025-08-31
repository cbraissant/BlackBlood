export default function Home() {
    const loremTexts = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Pellentesque ac ligula in tellus feugiat iaculis.",
        "Curabitur ut eros non enim ullamcorper fermentum.",
        "Suspendisse potenti. Sed sit amet lorem vel justo tempor luctus.",
        "Phasellus non magna vel mauris faucibus cursus."
    ];

    return (
        <div className="content">
            <h1>Home</h1>
            <p>{loremTexts}</p>
        </div>
    );
}
