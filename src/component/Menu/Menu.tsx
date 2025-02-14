import React, { useContext } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../../ProductContext';

interface Props {
  setMenuActive: (some: boolean) => void
}

const getLinckClass = (
  { isActive }: { isActive: boolean },
) => cn({
  active: isActive,
});

export const Menu: React.FC<Props> = ({ setMenuActive }) => {
  const {
    cartItems,
    favourites,
  } = useContext(ProductContext);

  return (
    <div className="menu">
      <div className="menu__content">
        <nav className="menu__nav">
          {/* eslint-disable-next-line */}
          <NavLink
            to="/"
            onClick={() => setMenuActive(false)}
          >
            <img
              className="menu__logo"
              src="./icon/Logo.svg"
              alt="Logo"
            />
          </NavLink>
          {/* eslint-disable-next-line */}
          <img
            className="menu__icon-close"
            src="./icon/Close.svg"
            alt="Menu"
            onClick={() => setMenuActive(false)}
          />
        </nav>
        <div className="container">
          <ul className="menu__list">
            <li className="menu__item">
              <NavLink
                to="/"
                className={`menu__link ${getLinckClass}`}
                onClick={() => setMenuActive(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                to="/phones"
                className={`menu__link ${getLinckClass}`}
                onClick={() => setMenuActive(false)}
              >
                Phones
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                to="/tablets"
                className={`menu__link ${getLinckClass}`}
                onClick={() => setMenuActive(false)}
              >
                Tables
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                to="/accessories"
                className={`menu__link ${getLinckClass}`}
                onClick={() => setMenuActive(false)}
              >
                Accessories
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="menu__wrap">
        <NavLink
          to="/favourites"
          className={`menu__icon ${getLinckClass}`}
          onClick={() => setMenuActive(false)}
        >
          <div className="menu__icon__wrap">
            {!!favourites.length && (
              <span className="menu__icon__counter">
                {favourites.length}
              </span>
            )}
            {/* eslint-disable-next-line */}
            <img
              src="./icon/Heart.svg"
              alt="Heart"
            />
          </div>
        </NavLink>

        <NavLink
          to="/card"
          className={`menu__icon ${getLinckClass}`}
          onClick={() => setMenuActive(false)}
        >
          <div className="menu__icon__wrap">
            {!!cartItems.length && (
              <span className="menu__icon__counter">
                {cartItems.length}
              </span>
            )}
            {/* eslint-disable-next-line */}
            <img
              src="./icon/basket.svg"
              alt="Basket"
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
};
