import { useState } from "react"

export default function Control() {
    const [lapResetButton, setLapResetButton] = useState("Lap");
    const [startStopButton, setStartStopButton] = useState("Start");

    const handleLapResetButton = () => {
        if (lapResetButton === "Lap") {
            setLapResetButton("Reset");
        } else if (lapResetButton === "Reset") {
            setLapResetButton("Lap");
        }
    }

    const handleStartStopButton = () => {
        if (startStopButton === "Start") {
            setStartStopButton("Stop");
        } else if (startStopButton === "Stop") {
            setStartStopButton("Start");
        }
    }

    return (
        <section className="wrapper-control">
            <button onClick={handleLapResetButton}>{lapResetButton}</button>
            <button onClick={handleStartStopButton}>{startStopButton}</button>
        </section>
    )
}