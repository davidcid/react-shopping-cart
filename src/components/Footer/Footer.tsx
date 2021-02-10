import { FaEnvelope, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

//Styles
import { Wrapper } from './Footer.styles';

const Footer: React.FC = () => {
    return (
        <Wrapper>
            <p className="footer-p">Made with ❤️ and ⚛️ by David Cid</p>
            <ul className="footer-social">
                <li className="footer-social-element"><a href="https://www.linkedin.com/in/david-cid-lendinez/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
                <li className="footer-social-element"><a href="https://github.com/davidcid" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                <li className="footer-social-element"><a href="https://twitter.com/DavidCidDev" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
                <li className="footer-social-element"><a href="mailto:david.cid@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a></li>
            </ul>
        </Wrapper>
    )

    }

export default Footer;