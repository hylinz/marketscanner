"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "./skeleton";
import { Link1Icon } from "@radix-ui/react-icons";

interface DisplayCardProps {
  title: string;
  id: number;
  imgUrl: string;
  type: string;
  vendor: string;
  link: string;
}

export default function DisplayCard({
  title,
  id,
  imgUrl,
  type,
  vendor,
  link,
}: DisplayCardProps) {
  return (
    <Card className="p-6 flex flex-col items-center justify-between bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 w-full max-w-xs md:max-w-sm">
      <CardHeader className="w-full text-center mb-2">
        <CardTitle className="text-xl font-bold text-gray-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center mb-4">
        {imgUrl && imgUrl !== "no image" ? (
          <Link
            href={link}
            className="cursor-pointer block transition-transform duration-300 hover:scale-110"
          >
            <Image
              alt={`Image of product ${title}`}
              src={imgUrl}
              height={150}
              width={150}
              className="rounded-lg object-cover"
            />
          </Link>
        ) : (
          <Skeleton>No Image</Skeleton>
        )}
      </CardContent>
      <CardFooter className="w-full text-center border-t pt-4 mt-4">
        <div className="text-sm text-gray-600">
          <p className="mb-1">
            <span className="font-semibold text-gray-800">Vendor: </span>
            {vendor}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Type: </span>
            {type}
          </p>
          <p>
            <Link className="py-2.5 font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200" href={link}>Link</Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
