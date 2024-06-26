"use client";
import { RecipeItem } from "@/app/data";
import { ChevronUp } from "lucide-react";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export const Card = ({ item }: { item: RecipeItem }) => {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState("0px");

  const refFather = useRef<HTMLDivElement | null>(null);
  const refContent = useRef<HTMLDivElement | null>(null);

  const toggleActive = () => {
    const newState = !isActive;
    setIsActive(newState);

    if (refContent.current) {
      setHeight(newState ? `${refContent.current.scrollHeight}px` : "0px");
    }
  };

  useEffect(() => {
    if (isActive && refContent.current) {
      setHeight(`${refContent.current.scrollHeight}px`);
    }
  }, [isActive]);

  return (
    <article className="bg-[#222626] rounded-2xl overflow-hidden">
      <picture className="flex">
        <Image
          className="w-full h-full object-cover"
          src={item.image_url}
          alt={item.title}
        />
      </picture>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-5">{item.title}</h2>

        <div className="flex flex-col gap-3">
          <div
            ref={refContent}
            className="transition-max-height duration-300 ease-in-out overflow-hidden gap-4"
            style={{ maxHeight: height }}
          >
            {item.texts.map((text, key) => (
              <p className="mb-4" key={key}>
                {text}
              </p>
            ))}
          </div>

          <div
            onClick={toggleActive}
            ref={refFather}
            className="flex flex-row justify-between items-center"
          >
            <div className="rounded-full bg-yellow-400 w-[20px] h-[20px]"></div>
            <ChevronUp
              className="cursor-pointer transition-transform duration-300"
              style={{ transform: `rotate(${isActive ? "180deg" : "0deg"})` }}
            />
          </div>
        </div>
      </div>
    </article>
  );
};
