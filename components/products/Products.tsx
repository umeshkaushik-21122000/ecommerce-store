import Link from "next/link";
import { Images } from "./Images";
import Cookies from 'js-cookie';
import dynamic from "next/dynamic";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { addToCart } from "@/app/actions";
import {  useToast } from "../ui/use-toast";
import { describe } from "node:test";
import { useEffect } from "react";


export const Products = async ({
  products,
  extraClassname = "",
}: {
  products: any,
  extraClassname: string;
}) => {

  const gridClassname = [
    "grid gap-x-3.5 gap-y-6 sm:gap-y-9 grid-cols-5 p-5",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={gridClassname}>
      {products.map((product:any, index:number) => (<Product key={index} product={product} />))}
    </div>
  );
};


const Product = ({product}:any) =>{
  const { toast } = useToast();
  const {
    _id,
    title,
    thumbnail,
    price,
    qty
  } = product;
  const containerClassname = [
    "flex flex-col justify-between border border-3 border-gray-500 border-solid  rounded-md overflow-hidden",
  ]
    .filter(Boolean)
    .join(" ");

  const infoClassname = [
    "flex justify-between flex-col gap-2.5 p-3.5 bg-background-secondary z-10",
  ]
    .filter(Boolean)
    .join(" ");

  const handleCart = async(product:any) => {
    const customerId=Cookies.get('customerId');
        await addToCart(product,customerId);
        toast(
          { 
            title:'jeello',
            description: "Your message has been sent."
          }
        );
  }

  return (
    <div className={containerClassname}>
        <Images
          image={thumbnail}
          name={title}
          width={150}
          height={150}
          sizes="(max-width: 640px) 100vw, (max-width: 1154px) 33vw, (max-width: 1536px) 25vw, 20vw"
        />
      <div className={infoClassname}>
        <div className="flex justify-between w-full">
            <h1 className="text-sm font-semibold truncate">{title}</h1>
        </div>
          <div>${price}</div>
          <Button onClick={()=>{handleCart(product)}}   className="w-full">
            Add To Cart
          </Button>
      </div>
    </div>
  );
}