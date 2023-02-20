import Link from 'next/link'
import Image from 'next/image'

const Movie = ({ title, key, id, poster_path, release_date }) => {
  const imagePath = 'https://image.tmdb.org/t/p/original/'
  return (
    <div className='text-white'>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}></Image>
      </Link>
    </div>
  )
}

export default Movie
