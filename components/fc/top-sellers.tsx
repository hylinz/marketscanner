"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import DisplayCard from "@/components/ui/display-card";
import MethodHeader from "@/components/ui/method-header";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

interface Product {
  id: number;
  title: string;
  image?: {
    src: string;
  };
  link: string;
  product_type: string;
  vendor: string;
}

interface TopSellersResponse {
  data: Product[];
}

export default function TopSellers() {
  const [data, setData] = useState<TopSellersResponse | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    const requestParameters = new URLSearchParams({
      key: "dafd5187be5b5ada05f761e64d42fe082068912b",
      format: "pretty",
      limit: "10",
    });

    const url = `https://rebuyengine.com/api/v1/products/top_sellers?${requestParameters}`;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = (await response.json()) as TopSellersResponse;
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Something went wrong while fetching the data.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen">
      <MethodHeader
        title="Top Sellers"
        description="Select your preferences & find trending products"
        includeOptions={true}
      />
      <div className="flex w-full justify-between items-center px-5 py-2 bg-primary/20 shadow">
        <div className="p-2 flex space-x-2.5 items-center w-full">
          <span>Keywords: </span>
          <Input placeholder="phone gadgets ..." className="bg-secondary" />
        </div>
        <div className="p-2 flex space-x-2.5 items-center w-full">
          <span>Result: </span>
          <Slider defaultValue={[5]} min={5} max={100} step={5} />
        </div>
        <div className="p-2 flex space-x-2.5 items-center w-full justify-end">
          <span>Include variants?</span>
          <Switch defaultChecked />
        </div>
        <Button variant={"default"} onClick={getData} disabled={loading}>
          {loading ? (data === undefined ? "Loading..." : "Refresh") : "Find"}{" "}
        </Button>
      </div>
      <main className="grid grid-cols-5 gap-4 py-2.5 min-h-screen">
        {error && <p className="text-red-500">{error}</p>}
        {data && data.data.length > 0
          ? data.data.map((item) => (
              <DisplayCard
                key={item.id}
                id={item.id}
                imgUrl={item?.image?.src || "no image"}
                link={item.link}
                title={item.title}
                type={item.product_type}
                vendor={item.vendor}
              />
            ))
          : ""}
      </main>
    </div>
  );
}
