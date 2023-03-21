import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
//images and icons
import SiteLogo from "/assets/svg/site_logo.svg";
import searchIcon from "/assets/svg/search_icon.svg";
import wishlistIcon from "/assets/svg/wishlist_icon.svg";
import cartIcon from "/assets/svg/cart_icon.svg";

const navlinks = [
  {
    label: "Home",
    url: "/",
    active: true
  },
  {
    label: "Contact",
    url: "/",
    active: false
  },
  {
    label: "About",
    url: "/",
    active: false
  },
  {
    label: "Sing Up",
    url: "/",
    active: false
  },
];

export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__content"]}>
        <div className={styles["header__content__left"]}>
          <Link href="/">
            <span className={styles["logo"]}>
              <Image src={SiteLogo} width={118} height={24} />
            </span>
          </Link>
        </div>
        <div className={styles["header__content__center"]}>
          <ul className={styles["header__content__center__items"]}>
            {navlinks.map((item) => (
              <li className={`${styles["header__content__center__items__item"]} ${item.active?styles["header__content__center__items__item--active"]:""}`}>
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["header__content__right"]}>
          <div className={styles["header__content__right__search"]}>
            <input type="text" placeholder="What are you looking for?"/>
            <div className={styles["header__content__right__search__icon"]}>
              <Image src={searchIcon} />
            </div>
          </div>
          <div className={styles["header__content__right__wishlist"]}>
            <div className={styles["header__content__right__wishlist__icon"]}>
              <Link href="/"><Image src={wishlistIcon} /></Link>
            </div>
          </div>
          <div className={styles["header__content__right__cart"]}>
            <div className={styles["header__content__right__cart__icon"]}>
              <Link href="/"><Image src={cartIcon} /></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
