import github from '../src/assets/github.svg'
import linkedIn from '../src/assets/linkedin.svg'
import portfolio from '../src/assets/portfolio.svg'


export default function Footer() {
    return (
        <footer>
            <a href="https://github.com/kelemek/" title="Link to Github Profile" target="_blank">
                <img src={github} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/mark-larson-a33b3588" target="_blank">
                <img src={linkedIn} title="Link to Linkedin Profile" alt="Linkedin" />
            </a>
            <a href="https://marklarsonportfolio.netlify.app/" target="_blank">
                <img src={portfolio} title="Link to my portfolio" alt="Portfolio" />
            </a>
        </footer>
    )
}