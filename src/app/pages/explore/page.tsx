import { AllItems } from "@/assets/Items";
import ExplorePageCart from "@/components/custom/Explore-page-cart";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <div className="sticky ml-1 rounded-lg p-4 border-[#64748b] dark:border top-0 invisible w-1/5 md:block md:w-1/5 md:visible border ">
            <p>Filter by Items</p>
          </div>
          <div className="w-4/5 flex flex-wrap gap-5 items-center justify-center pb-5">
            {AllItems.map((I) => (
              <div key={I.title}>
                <ExplorePageCart data={I} />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
