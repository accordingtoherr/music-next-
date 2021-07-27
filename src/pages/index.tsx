import Link from 'next/link'

export default function Index() {
    return (
        <div>
            <h1>iTunes</h1>
            <button><Link href="/Songs"><a>See Popular Songs</a></Link></button>
        </div>
    )
}

