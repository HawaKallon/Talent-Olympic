// import { Construction } from "lucide-react";

// export default function UnderConstructionPlace() {
//   return (
//     <div className="container mx-auto py-10">
//       <div className="h-[450px] flex items-center justify-center flex-col gap-5">
//         <Construction size={128} />
//         <h2 className="text-4xl">Under construction</h2>
//       </div>
//     </div>
//   );
// }


import { Wrench, Smile } from "lucide-react";

export default function UnderConstructionPlace() {
  return (
    <div className="container mx-auto py-10">
      <div className="h-[450px] flex items-center justify-center flex-col gap-5">
        {/* <Construction size={128} /> */}
        <Wrench size={128} />
        <h2 className="text-4xl">Under Construction</h2>
        <p className="text-xl text-center">
          We're working hard to bring you a better experience!
        </p>
        <div className="flex items-center gap-2">
          <Smile size={48} />
          <p className="text-lg">In the meantime, enjoy this smiley face!</p>
        </div>
        
      </div>
    </div>
  );
}
