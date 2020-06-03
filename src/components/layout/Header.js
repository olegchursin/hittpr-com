import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import { Link } from 'gatsby';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center">
        <div className="w-12 mr-3">
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Специализация
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Тренинги
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Клиенты о нас
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Свяжитесь с нами</Button>
      </div>
    </div>
  </header>
);

export default Header;
