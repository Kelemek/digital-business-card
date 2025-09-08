export default function Info() {
    return (
        <header>
            <nav>
                <img src="./assets/selfportrait.jpg" alt="Self portrait of me, drawn by me" />
                <h1>Mark Larson</h1>
                <p>Frontend Developer</p>
                <a href="https://marklarsonportfolio.netlify.app/">My Portfolio Website</a>
                <div className="buttons">
                    <a href="mailto:markdlarson@me.com" className="btn"><img src="./assets/mail.svg"/><span>Email</span></a>
                    <a href="https://www.linkedin.com/in/mark-larson-a33b3588/" target="_blank" className="btn"><img src="./assets/linkedin.svg" /><span>LinkedIn</span></a>
                </div>
            </nav>
        </header>
    )
}