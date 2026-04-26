// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav>
//       <Link href="/">Home</Link> | 
//       <Link href="/products">Products</Link> | 
//       <Link href="/cart">Cart</Link>
//     </nav>
//   );
// }

import Link from "next/link";

export default function Navbar() {
  return (

  <div className="">

    <div>
      <h1 className="text-xl font-bold bg-amber-200">E-commerce</h1>
    </div>

     
      
    <div> 
      <ul className="flex gap-4"> 
        <Link className="p-4 bg-amber-200" href="/">Home</Link>
        <Link className="p-4 bg-amber-200" href="/products">Products</Link>
        <Link className="p-4 bg-amber-200" href="/cart">Cart</Link>
      </ul>
      </div>
  </div>
  );
}


