"use client";
import { AllItems } from "@/assets/Items";
import ExplorePageCart, {
  PlantCard,
} from "@/components/custom/Explore-page-cart";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import { useSelector } from "react-redux";
import { ItemsType } from "@/types/itemsType";
import { RootState } from "@/store";
import { Sidebar } from "@/components/custom/Sidebar";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const items = useSelector(
    (state: RootState) => state.filteredItem.FilterItems
  );

  return (
    <>
      <Navbar />

      <div className="flex flex-col min-h-screen ">
        <div className="flex flex-1">
          <Sidebar />
          <div className="w-4/5 flex flex-wrap gap-5 items-center justify-center pb-5 p-1">
            {items.length > 0 ? (
              items.map((I: ItemsType) => (
                <div key={I.id}>
                  <button onClick={() => router.push(`/pages/${I.id}`)}>  
                    <PlantCard plant={I} />
                  </button>
                </div>
              ))
            ) : (
              <p>Item not Found</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
