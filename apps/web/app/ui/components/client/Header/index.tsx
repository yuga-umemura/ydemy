"use client";

import "./style.scss";

import clsx from "clsx";
import Logo from "../Link/Logo";
import HeartButton from "../Button/Heart";
import UserMenu from "../Menu/User";
import { Button, MenuTrigger, Popover } from "react-aria-components";
import UserIcon from "../Icon/Circled/User";
import { Asset } from "@/lib/constants/asset";

export default function Header() {
  return (
    <header className={clsx("header", "bg-white", "flex", "w-full")}>
      <div className={clsx("header__outer")}>
        <div className={clsx("header__inner")}>
          <Logo />

          {/* <HeartButton /> */}

          <MenuTrigger>
            <Button className={clsx("header__user-menu-button outline-none")}>
              <UserIcon iconUrl={Asset.icon.user} />
            </Button>

            <Popover>
              <UserMenu
                username="taro yamada"
                email="taro.yamada@example.com"
              />
            </Popover>
          </MenuTrigger>
        </div>
      </div>
    </header>
  );
}
