import React, { useEffect, useState } from 'react'
import MiniCard from './MiniCard';

const RelatedProduct = () => {
    const [data, setData] = useState();

    useEffect(() => {
      const getFun = async () => {
        let result = await fetch("https://botecommerce.onrender.com/product");
        result = await result.json();
        setData(result);
      };
      getFun();
    }, []);
  return (
    <div>
        <p className="font-semibold text-2xl px-5 text-center my-6 mt-10 md:my-10 md:mt-40">You May Also Like</p>
        <div className='flex justify-around'>
        {data && data.slice(0, 4).map((value) => {
    return <MiniCard value={value} />;
})}

        </div>
    </div>
  )
}

export default RelatedProduct