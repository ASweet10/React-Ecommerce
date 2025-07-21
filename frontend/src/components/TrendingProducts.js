import Card from './Card'

const TrendingProducts = ({ products }) => {
  {/*
  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }
  */}

  return (
    <div className='w-full py-20 bg-background flex flex-col items-center justify-center'>
        <h1 className='md:w-2/5 capitalize font-bold text-3xl md:text-5xl font-gothic text-center mb-20'>Trending Now</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
          { products?.filter(product => product.isTrending === true)
              .slice(0, 6).map((product) => ( 
                <Card product={product} key={product._id}/> 
              ))
          }
        </div>
        {/*
        <div className="flex relative justify-center items-center">
          <div className='flex items-center justify-center'>
            <div className='p-2 text-black cursor-pointer' onClick={() => slideLeft()}>
              <BsArrowLeftSquareFill size={35} />
            </div>
          </div>

          <div id='slider' className="flex w-full h-full  scroll scroll-smooth gap-6 overflow-x-hidden whitespace-nowrap">
            { products?.filter(product => product.isTrending === true)
                .map((product) => ( 
                  <Card product={product} key={product._id}/> 
                ))
            }
          </div>

          <div className='flex items-center justify-center'>
            <div className='p-2 text-black cursor-pointer' onClick={() => slideRight()}>
              <BsArrowRightSquareFill size={35} />
            </div>
          </div>

        </div>
        */}
    </div>
  )
}

export default TrendingProducts