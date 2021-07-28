import Link from 'next/link'
import css from './index.module.scss'

export default function Index() {
    return (
        <div className={css.indexpage}>
            <div>
                <h1 className={css.itunesTitle}>iTunes</h1>
                <button className={css.tunesButton}><Link href="/Songs">See Popular Songs</Link></button>
            </div>
        </div>
    )
}

