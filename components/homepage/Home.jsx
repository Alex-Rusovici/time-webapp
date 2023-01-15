import Footer from "components/Footer";
import Link from "next/link";

export default function Home() {
    return <>
        <div className="d-flex flex-column align-items-center mt-5">
          <h1>Hello!</h1>
          <h2>What would you like to do today?</h2>

        <ul className="button-wrapper d-flex flex-column align-items-center d-lg-flex flex-lg-row gap-4 mt-5">
          <li>
          <Link href="/clock" className="button-primary link-text">Let's check the time</Link>
          </li>

          <li>
          <Link href="/stopwatch" className="button-primary link-text">Use a stopwatch</Link>
          </li>

          <li>
          <Link href="/timer" className="button-primary link-text">Set a timer</Link>
          </li>
        </ul>

        <Footer></Footer>
      </div>
    </>
}
