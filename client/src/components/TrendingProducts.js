import React from 'react'
import { Carousel } from 'react-bootstrap'
import buckethat1 from '../images/pexels-buckethat1.jpg'
import buckethat2 from '../images/pexels-buckethat2.jpg'
import greenSweatshirt1 from '../images/pexels-green-sweatshirt-1.jpg'
import greenSweatshirt2 from '../images/pexels-green-sweatshirt-2.jpg'
import purpleSweatshirt1 from '../images/pexels-purple-sweatshirt-1.jpg'
import purpleSweatshirt2 from '../images/pexels-purple-sweatshirt-2.jpg'
import redLongsleeve1 from '../images/pexels-red-longsleeve-1.jpg'
import redLongsleeve2 from '../images/pexels-red-longsleeve-2.jpg'
import Card from './Card'
import LeftArrowIcon from '@mui/icons-material/ArrowLeft'
import RightArrowIcon from '@mui/icons-material/ArrowRight'

const TrendingProducts = () => {
    const data = [
        { id: 1, img: buckethat1, img2: buckethat2, title: 'Bucket Hat', isNew: true, price: 35 },
        { id: 2, img: greenSweatshirt1, img2: greenSweatshirt2, title: 'Green Sweatshirt', isNew: true, price: 80 },
        { id: 3, img: purpleSweatshirt1, img2: purpleSweatshirt2, title: 'Purple Sweatshirt', isNew: true, price: 60 },
        { id: 4, img: redLongsleeve1, img2: redLongsleeve2, title: 'Red Long-sleeve', isNew: true, price: 60 },
    ]
  return (
    <div className='w-full py-28 px-10 bg-background'>
        <div className='flex flex-row items-center justify-center mb-12'>
            <button className='bg-button-bg h-8 w-8'><LeftArrowIcon className='text-white' /></button>
            <h1 className='capitalize font-bold text-2xl px-20'>Now Trending</h1>
            <button className='bg-button-bg h-8 w-8'><RightArrowIcon className='text-white' /></button>
        </div>

        <div className='flex flex-row'>
          <div className='flex flex-wrap justify-center gap-7'> {/* flex-wrap creates grid; horizontal layout without it */}
            { data.map(item => (
              <Card item={item} key={item.id}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default TrendingProducts