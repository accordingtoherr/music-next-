import Link from 'next/link'
import Image from 'next/image'
import css from './Songs.module.scss'
import { useState } from 'react';

interface ISongData {
    name: string,
    artist: string,
    link: string,
    image: string
    id: any
    label: string
}

export default function Songs(dataItem) {
    const [songs, setSongs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


    const handleSearch = (newSearchQuery) => {
        setSearchQuery(newSearchQuery)
        let newDataArray = songs.filter((song) => {
            return song["im:name"].label.toLowerCase().includes(searchQuery.toLowerCase()) || song["im:artist"].label.toLowerCase().includes(searchQuery.toLowerCase())

        })
        setSongs(newDataArray)
    }

    const updateSearch = (e) => {
        handleSearch(e.target.value)
    }


    return (

        <div className={css.cont}>
            <form className="searchform"  >
                <input
                    className="search"
                    type="text"
                    data-testid="search-bar"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={updateSearch}


                />

                <button type="submit" className="button" data-testid="clear" onClick={handleSearch}>Search</button>
            </form>
            {dataItem.dataItem.map((i: ISongData, index) => (
                <div key={index} className="container">
                    <h1>{i["im:name"].label}</h1>
                    <h2>{i["im:artist"].label}</h2>
                    <Image height="150px" width="150px" alt="cover image" src={i["im:image"][1].label}></Image>
                    <div></div>
                    <Link href={i.id.label}>Buy Now</Link>

                </div>
            ))}
        </div>




    )

}


export const getStaticProps = async () => {
    const response = await fetch(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`)
    const data = await response.json();
    const dataItem = data.feed.entry
    return { props: { dataItem: dataItem } }

}