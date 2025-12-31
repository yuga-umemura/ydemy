"use client";

import { Asset } from "@/lib/constants/asset";
import Image from "next/image";
import { Button } from "react-aria-components";

export default function HeartButton() {
  return (
    <div>
      <Button>
        <Image src={Asset.icon.wishlist} alt="like" width={20} height={20} />
      </Button>
    </div>
  );
}
