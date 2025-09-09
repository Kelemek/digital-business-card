import selfPortrait from '../src/assets/selfportrait.webp'
import linkedIn from '../src/assets/linkedin.svg'
import email from '../src/assets/mail.svg'

export default function Info() {
    return (
        <header>
            <nav>
                <img src={selfPortrait} alt="Self portrait of me, drawn by me" />
                <h1>Mark Larson</h1>
                <p>Frontend Developer</p>
                <a href="https://marklarsonportfolio.netlify.app/">My Portfolio Website</a>
                <div className="buttons">
                    <a href="mailto:markdlarson@me.com" className="btn"><img src={email} alt="email icon"/><span>Email</span></a>
                    <a href="https://www.linkedin.com/in/mark-larson-a33b3588/" target="_blank" className="btn"><img src={linkedIn} alt="linkedin icon"/><span>LinkedIn</span></a>
                </div>
            </nav>
        </header>
    )
}