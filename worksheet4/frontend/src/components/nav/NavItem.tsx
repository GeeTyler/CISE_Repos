import { useRouter } from 'next/router';
import React from 'react';
import styles from './Nav.module.scss';

type Props = {
  route?: string;
  children: React.ReactNode;
  end?: boolean;
  dropdown?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const NavItem = ({ children, route, end, dropdown, onClick, style }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      style={style}
      className={`${route ? styles.clickable : styles.navitem}${
        end ? ` ${styles.end}` : ''
      }${dropdown ? ` ${styles.dropdown}` : ''}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default NavItem;
