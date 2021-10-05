import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer(){
    return (
        <footer className = "main-footer">
            Siga-nos em nossas redes sociais.
            <div className= "footer-icons">
              <a href="https://www.youtube.com" target="_new">
                < YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com" target="_new">
                < LinkedinIcon />
                </a>
                <a href="https://www.instagram.com">
                    < InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;