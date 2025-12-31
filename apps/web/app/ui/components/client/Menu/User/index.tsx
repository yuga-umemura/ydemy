"use client";

import "./style.scss";

import { Menu, MenuItem, MenuSection } from "react-aria-components";
import { UserMenuProps } from "./type";
import clsx from "clsx";
import UserIcon from "../../Icon/Circled/User";
import { Asset } from "@/lib/constants/asset";

export default function UserMenu({ ...props }: UserMenuProps) {
  return (
    <Menu className={clsx("user-menu")}>
      <MenuSection className="user-menu__section">
        <MenuItem id="user-profile" className={clsx("user-menu__profile")}>
          <UserIcon iconUrl={Asset.icon.user} />
          <div className="user-menu__profile-info">
            <div className="user-menu__profile-name">{props.username}</div>
            <div className="user-menu__profile-email">{props.email}</div>
          </div>
        </MenuItem>
      </MenuSection>

      <MenuSection className="user-menu__section">
        <MenuItem id="my-cources" className={clsx("user-menu__item")}>
          マイラーニング
        </MenuItem>
        <MenuItem id="cart" className={clsx("user-menu__item")}>
          マイカート
        </MenuItem>
        <MenuItem id="wishlist" className={clsx("user-menu__item")}>
          ほしい物リスト
        </MenuItem>
        <MenuItem id="teaching" className={clsx("user-menu__item")}>
          Ydemyで教える
        </MenuItem>
      </MenuSection>

      <MenuSection className="user-menu__section">
        <MenuItem id="notification" className={clsx("user-menu__item")}>
          お知らせ
        </MenuItem>
        <MenuItem id="message" className={clsx("user-menu__item")}>
          メッセージ
        </MenuItem>
      </MenuSection>

      <MenuSection className="user-menu__section">
        <MenuItem id="account-setting" className={clsx("user-menu__item")}>
          アカウント設定
        </MenuItem>
        <MenuItem id="payment-method" className={clsx("user-menu__item")}>
          支払い方法
        </MenuItem>
      </MenuSection>
    </Menu>
  );
}
