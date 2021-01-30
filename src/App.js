import React , {useState} from 'react';
import data from './data';
import Slider from './Slider';
import ProductInfo from './ProductInfo'

function App() {

  const [sneakers, setSneakers] = useState(data);
  const [index,setIndex] = useState(0);
  console.log(sneakers[index])
  return (
    <main>
      <Slider
      images={sneakers[index].images}/>
      <ProductInfo
      sneakers={sneakers}
      product={sneakers[index]}
      setIndex={setIndex}
      />
    </main>
  );
}

export default App;
