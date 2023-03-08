import { List, Moon, Sun, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useCustomTheme } from "~hooks/useCustomTheme";
import { useScreen } from "~hooks/useScreen";
import { pages } from "~utils/constants";

import { Button, NavbarContainer, Logo, Menu } from "./styles";

export function Navbar() {
    const { sizeScreen } = useScreen();
    const { theme, toggleTheme, BREAKPOINT_XS_PX } = useCustomTheme();
    const [menuVisible, setMenuVisible] = useState(false);

    const handleClickToggleMenuVisible = () => sizeScreen < BREAKPOINT_XS_PX && setMenuVisible(!menuVisible);

    useEffect(() => {
        setMenuVisible(sizeScreen > BREAKPOINT_XS_PX);
    }, [sizeScreen > BREAKPOINT_XS_PX]);

    return (
        <NavbarContainer>
            <Logo>
                Food<span className="logo__highlight">Delivery</span>
            </Logo>
            {sizeScreen < BREAKPOINT_XS_PX && (
                <Button type="button" onClick={handleClickToggleMenuVisible}>
                    {!menuVisible ? (
                        <List className="navbar-container__icon" />
                    ) : (
                        <X className="navbar-container__icon" />
                    )}
                </Button>
            )}
            {menuVisible && (
                <Menu>
                    <nav className="menu__navigation">
                        {pages.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                onClick={handleClickToggleMenuVisible}
                                className="menu__links"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                    <Button onClick={toggleTheme}>
                        {theme ? (
                            <Sun className="navbar-container__icon" />
                        ) : (
                            <Moon className="navbar-container__icon" />
                        )}
                    </Button>
                </Menu>
            )}
        </NavbarContainer>
    );
}
