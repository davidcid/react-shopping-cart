
//Styles
import { Wrapper } from './FinalSales.styles';
import { StyledButton } from '../../App.styles';

type Props = {
    setFilter: (section:string) => void;
}

const FinalSales: React.FC<Props> = ({setFilter}) => {
    return (
        <Wrapper>
            <h1>Final Sales up to -70%</h1>
            <div className="buttons">
                <StyledButton onClick={() => setFilter("women clothing")}>Buy Woman</StyledButton>
                <StyledButton onClick={() => setFilter("men clothing")}>Buy Man</StyledButton>
            </div>
            <p className="disclaimer">Sales duration from 2021 January 1st to February 28th.</p>
        </Wrapper>
    )

    }

export default FinalSales;