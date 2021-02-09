
//Styles
import { Wrapper } from './Menu.styles';

type Props = {
    setFilter: (section:string) => void;
    filter: string;
    closeMenu: () => void;
}

const Menu: React.FC<Props> = ({ setFilter, filter, closeMenu }) => {

    const selectCategory = (category:string) => {
        setFilter(category);
        closeMenu();
    }

    return (
        <Wrapper>
            <h2 onClick={() => selectCategory("")}>StrongBoot</h2>
            <ul className="categories">
                <li onClick={() => selectCategory("women clothing")}
                    className={filter === "women clothing" ? "active" : ""}
                >Woman</li>
                <li onClick={() => selectCategory("men clothing")}
                    className={filter === "men clothing" ? "active" : ""}
                >Man</li>
                <li onClick={() => selectCategory("electronics")}
                    className={filter === "electronics" ? "active" : ""}
                >Electronics</li>
                <li onClick={() => selectCategory("jewelery")}
                    className={filter === "jewelery" ? "active" : ""}
                >Jewelery</li>
            </ul>
        </Wrapper>
    )

    }

export default Menu;