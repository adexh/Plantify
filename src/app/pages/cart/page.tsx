"use client";
import { PlantCard } from "@/components/custom/Explore-page-cart";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector(
    (state: RootState) => state.cartItems.cartItems
  );
  console.log(cartItems);
  return (
    <>
      {cartItems.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cartItems.map((item) => {
          <PlantCard key={item.description} plant={item}></PlantCard>;
        })
      )}
    </>
  );
}
