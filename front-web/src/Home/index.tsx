import './styles.css';
import {ReactComponent as MainImage} from './main.svg';

//import {ReactComponent as Logo} from './logo.svg';

function Home(){
    return (
        <div className = "home-container">
            <div className = "home-content">
                <div className = "home-actions">
                    <h1 className = "home-title">
                        É só pedir que entregamos <br /> para você!!!
                    </h1> 
                    <h3 className = "home-subtitle">
                        Faça seu pedido e rapidamente <br /> entregamos <br /> em suas mãos.
                    </h3> 
                    <a href = "orders" className = "home-btn-order">
                        FAZER PEDIDO
                    </a> 
                </div>
                <div className = "home-image">
                    <MainImage />
                </div>
            </div>
        </div>
    )
}

export default Home;