import MovingClock from "./movingClock";

export default function Clock() {
  return <>
    <div>
      <div className="clock">
        <div className="hour">
          <div className="hr" id="hr"></div>
        </div>

        <div className="minute">
          <div className="min" id="min"></div>
        </div>

        <div className="second">
          <div className="sec" id="sec"></div>
        </div>
      </div>

      <MovingClock></MovingClock>
    </div>
  </>
}
