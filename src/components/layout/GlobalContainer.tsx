import Image from "next/image";
import Link from "next/link";
import { FC, memo, ReactNode } from "react";


type Props = {
  children: ReactNode;
}
const GlobalContainer:FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
        <header>
          <nav className="bg-gray-800 w-screen">
            <div className="flex items-center pl-8 h-14">
              <div className="flex space-x-4">
                <Link href="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
                <Link href="/blog" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Blog</Link>
                <Link href="/contact" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Contact</Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex flex-1 justify-center items-center flex-col w-screen">{ children }</main>
        <footer className="w-full h-12 flex justify-center items-center bolder-t">
          <Link 
            className="flex items-center"
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={"/next.svg"} alt={"Next.js"} className="h-4 ml-2" width={100} height={10} />
          </Link>
        </footer>
      </div>
    </>
  )
});

GlobalContainer.displayName = "GlobalContainer";
export default GlobalContainer;