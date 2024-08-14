"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";



export const Images = ({
  image,
  name,
  width,
  height,
  sizes,
}: {
  image: string;
  name: string;
  width: number;
  height: number;
  sizes: string;
}) => {

  return (
    <div>
      <Image
        width={width}
        height={height}
        src={image}
        alt={name}
        className="w-full max-w-img aspect-[1/1]"
        sizes={sizes}
      />
    </div>
  );
};
