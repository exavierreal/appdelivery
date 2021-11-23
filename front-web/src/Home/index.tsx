import './styles.css';
import { ReactComponent as MainImage } from './main.svg';
import Footer from '../Footer';
import { Link } from 'react-router-dom'

//import {ReactComponent as Logo} from './logo.svg';

function Home() {
    return (
        <>
            <div className="home-container">
            <div className="home-image">
                        <MainImage />
                    </div>
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            É só pedir que entregamos <br /> para você!!!
                        </h1>
                        <h3 className="home-subtitle">
                            Faça seu pedido e rapidamente <br /> entregamos em suas mãos.
                        </h3>
                        <Link to ="/orders" className="home-btn-order">
                            FAZER PEDIDO
                        </Link>
                    </div>
                                   </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;