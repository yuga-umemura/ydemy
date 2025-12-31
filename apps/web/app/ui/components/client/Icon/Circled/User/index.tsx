"use client";

import Image from "next/image";

import clsx from "clsx";
import { UserIconProps } from "./type";

export default function UserIcon({ iconUrl }: UserIconProps) {
  return (
    <div className={clsx("user-icon")}>
      <Image
        src={iconUrl}
        alt="user-icon"
        width={24}
        height={24}
        className="rounded-full flex items-center justify-center bg-[oklch(20.35%_0.0139_285.09deg)]"
      />
    </div>
  );
}
