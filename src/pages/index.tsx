import Link from 'next/link'
import 'tailwindcss/tailwind.css'

export default function Index() {
    return (
        <div className="container mx-auto">
            <div>
                <h1 className={"text-left"}>iTunes</h1>
                <button><Link href="/Songs">See Popular Songs</Link></button>
            </div>
        </div>
    )
}

