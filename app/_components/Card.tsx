"use client";
import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";

type Props = {
  src: string;
  alt: string;
  name: string;
  description: string;
  field: string;
};

export default function CardProfile(props: Props) {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src={props.src}
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex flex-col">
        <p className="text-tiny text-white/80 font-semibold">{props.name}</p>
        <p
          className="text-tiny text-white bg-black/20 rounded-2xl px-2 text-nowrap"
          // variant="flat"
          // color="default"
          // radius="lg"
          // size="sm"
        >
          {props.field}
        </p>
      </CardFooter>
    </Card>
  );
}
