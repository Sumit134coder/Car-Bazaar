import Image from "next/image"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({
    subsets : ['latin']
})

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-global py-4 fixed w-full">
        <div className={`${orbitron.className} text-primary-500 font-bold text-xl`}>
            Car Bazaar
        </div>
        <button type="button" className="btn btn-primary">Sign Up</button>
    </div>
  )
}

export default Navbar