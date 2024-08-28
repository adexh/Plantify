"use client";
import { AllItems } from "@/assets/Items";
import { PlantCard } from "@/components/custom/Explore-page-cart";
import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import { AddtoCart } from "@/store/Slices/CartItemSlice";
import { Badge, Link } from "lucide-react";
import Image from "next/image";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
export default function PlantInfo({ params }: { params: { plantId: number } }) {
  const { plantId } = params;
  if (!plantId) {
    return <div>Page not found</div>;
  }
  const plant = AllItems.find((I) => I.id == Number(plantId));
  const remaining = AllItems.filter((I) => I.id !== Number(plantId)).slice(
    0,
    5
  );
  const router = useRouter();
  const dispatch = useDispatch();
  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    id: number
  ) {
    e.preventDefault();
    dispatch(AddtoCart(id));
    toast.success("Item successfully added");
  }
  const cartItems = useSelector(
    (state: RootState) => state.cartItems.cartItems
  );
  const navigate = useRouter();

  if (plant) {
    return (
      <>
        <Navbar />{" "}
        <div className="bg-background text-foreground">
          <section className="container mx-auto ">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src={plant.image}
                  width={600}
                  height={600}
                  alt="Product Image"
                  className="w-full rounded-lg overflow-hidden"
                  style={{ aspectRatio: "600/600", objectFit: "cover" }}
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold">{plant.title}</h1>
                  <p className="text-muted-foreground text-lg">
                    {plant.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">
                    ({plant.rating} / 5)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold text-2xl">
                      {plant.price}
                    </span>
                    <Badge className="px-2 py-1">In Stock</Badge>
                  </div>
                  <Button
                    size="lg"
                    onClick={(e) => handleAddToCart(e, plant.id)}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant={"outline"}
                    // onClick={() => router.push("/cart")}
                  >
                    <Link href="/cart">Go to cart</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>Category:</span>

                  {plant.category}
                </div>
              </div>
            </div>
          </section>
          <div className="border m-4"></div>
        </div>
        <div className="hidden md:flex">
          <div className="flex gap-4 h-[50%]">
            {remaining.map((I) => (
              <div
                key={I.description}
                className="cursor-pointer"
                onClick={() => router.push(`/pages/explore/${I.id}`)}
              >
                <PlantCard plant={I} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
