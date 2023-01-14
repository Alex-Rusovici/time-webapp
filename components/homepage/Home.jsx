import Link from "next/link";

export default function Home() {
    return <>
        <div className="d-flex flex-column align-items-center mt-5">
          <h1>Hello!</h1>
          <p>What would you like to do today?</p>

        <ul className="button-wrapper d-flex flex-column align-items-center d-lg-flex flex-lg-row gap-4 mt-5">
          <li>
          <Link href="/clock" className="button-primary link-text">Let's check the time</Link>
          </li>

          <li>
          <Link href="/stopwatch" className="button-primary link-text">Start using a stopwatch</Link>
          </li>
      
          <li>
          <Link href="/timer" className="button-primary link-text">Set a timer</Link>
          </li>
        </ul>
      </div>
    </>
}