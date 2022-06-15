export interface PropType {
    time: string;
}

export default function TimeDisplay({ time }: PropType) {
    return (
        <section className="wrapper-time-display">
            <p>{time}</p>
        </section>
    )
}