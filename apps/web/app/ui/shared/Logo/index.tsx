"use client";

import { Asset } from "@/lib/constants/asset";
import { Path } from "@/lib/constants/path";
import Image from "next/image";
import { Link } from "react-aria-components";

export default function Logo() {
  return (
    <div>
      <Link href={Path.root}>
        <Image
          src={Asset.icon.ydemy}
          alt="ydemy"
          width={91}
          height={34}
        ></Image>
      </Link>
    </div>
  );
}
