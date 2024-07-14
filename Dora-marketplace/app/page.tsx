import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import sol_bg from "../public/sol_bg-Photoroom.png";
// import Welcome from "@/components/Welcome";
// import ClientComponent from '../components/ClientComponent';
export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black-500 to-lack-200 h-full min-h-screen py-16">
        <Image
              src={"/sol_bg-Photoroom.png"}
              width={186.55}
              height={192}
              alt="logo"
              className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-cover bg-center"
            />
      <div className="container relative m-0 mx-auto py-16 md:px-10 my-16">
        <div className="max-width flex items-center justify-center">
          <Link className="flex flex-col items-center gap-1" href="/">
            
            <h1 className="text-xl hidden lg:flex font-medium md:text-5xl text-white">
              WELCOME TO
            </h1>
            <h1 className="inline-block text-center text-4xl font-medium tracking-tighter text-dark lg:text-7xl">
              DORA Marketplace
            </h1>
          </Link>
        </div>
      
        <div className="w-full px-4 pt pt-12 md:px-4 lg:px-8 xl:px-10 2xl:px-0">
          <div className="flex h-full w-full flex-col items-center justify-center ">
          <p className="text-3xl">The best place to buy and sell</p>
        <p className="text-2xl mx-16">#DoraTheExplorer</p>
            <div className="mt-12 flex flex-col gap-4">
              <div className="w-fit items-center space-x-4">
                <Button
                  className="text-xl text-center px-4 py-7  bg-green-500 border-none"
                  variant={"outline"}
                  asChild
                >
                  <Link href={"/explorer"}>
                   Let's Get into it
                    {/* <Flame className="ml-2 w-5 h-5 " /> */}
                  </Link>
                </Button>
              </div>
              {/* <ClientComponent/> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
