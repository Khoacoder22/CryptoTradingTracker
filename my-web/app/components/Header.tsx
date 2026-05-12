import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
    <header>
        <div className='main-container inner'>
            <Link href="/">
                <Image src="logo.svg" alt="CoinPulse logo" width={132} height={40}/>
            </Link>

            <nav>
                <Link href="/">Home</Link>
                
                <p>Search Modal</p>

                <Link href="/coins">All coins</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header