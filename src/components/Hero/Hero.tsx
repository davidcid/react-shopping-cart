
//Styles
import { Wrapper } from './Hero.styles';
import { StyledButton } from '../../App.styles';

import YoungHappy from "../../assets/images/young_happy.jpg";


type Props = {
    setFilter: (section:string) => void;
}

const Hero: React.FC<Props> = ({ setFilter }) => {


    return (
        <Wrapper>
            <img src={YoungHappy} alt="young people"/>
            <div className="hero-text">
                <h3>New In</h3>
                <h1>Denim Style &amp; Urban Touch</h1>
                <StyledButton onClick={() => setFilter("women clothing")}>Woman Collection</StyledButton>
                <StyledButton onClick={() => setFilter("men clothing")}>Man Collection</StyledButton>
            </div>
        </Wrapper>
    )

    }

export default Hero;