// import UnderConstructionPlace from "@/components/UnderConstructionPlace";

// export default function AboutPage() {
//   return <UnderConstructionPlace />;
// }


import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="h-[450px] flex items-center justify-center flex-col gap-5">
        <ShoppingCart size={128} />
        <h2 className="text-4xl">About Dora Marketplace</h2>
        <p className="text-xl text-center max-w-xl">
          Welcome to Dora Marketplace, your go-to destination for buying SOL, the native cryptocurrency of the Solana blockchain. Whether you're new to cryptocurrency or an experienced trader, Dora Marketplace offers a user-friendly platform to help you securely purchase and manage your SOL assets.
        </p>
        <span>Go to "Explorer" to see the different listings.</span>

        <h2 className="text-4xl">Further Plans</h2>
        <p>In the future, we plan to add more features to the Dora Marketplace. Stay tuned!</p>
        <ul>
          <li>Add backpack so one could access their wallets. It's already in the development process.</li>
          <li>Add more listings</li>
          <li>Add more features</li>
          <li>Upgrade the UI</li>
          <li>Integrate an aggregator</li>
        </ul>
       
        <h3 className="text-3xl">The plan is to make DORA a one stop shop. </h3>
     
      </div>
    </div>
  );
}

