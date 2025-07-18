import Card from './Card'

const FeaturedProducts = ({ products }) => {

  return (
    <div className='w-full py-8 md:py-20 px-8 md:px-24 bg-background'>
        <div className='flex flex-col md:flex-row items-center justify-left mb-20 md:ml-48'>
            <h1 className='md:w-2/5 capitalize font-bold text-3xl'>Featured Products</h1>
            <p className='md:w-3/5 text-lg font-normal mt-8 md:mt-0 mx-8 md:mx-20'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        
        <div className='flex flex-wrap justify-center gap-12'> {/* flex-wrap creates grid; horizontal layout without it */}
          { products?.filter(product => product.isFeatured === true)
              .map((product) => ( 
                <Card product={product} key={product._id}/> 
            ))
          }
        </div>
    </div>
  )
}

export default FeaturedProducts