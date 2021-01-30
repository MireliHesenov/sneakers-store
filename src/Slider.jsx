import React , {useState} from 'react';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'

const Slider = ({images}) =>{
    const [index,setIndex] = useState(0); 
    
    const checkNumber = (number) =>{
        if(number > images.length - 1){
            return 0;
        }
        if(number < 0){
            return images.length - 1
        }
        return number;
    } 
    const nextImage = () =>{
        setIndex(index =>{
            let newIndex = index + 1;
            return checkNumber(newIndex)
            
        })
        
    } 
    const prevImage = () =>{
        setIndex(index =>{
            let newIndex = index - 1;
            return checkNumber(newIndex)
        })
    } 

    return(
        <div className="slider">
            <div className="brand-logo">Nike</div>
            <img src={images[index]} alt=""/>
            <div className="control">
            <FiChevronLeft onClick={prevImage}/>
            <div className="dots">
            {images.map((image,count) =>{
                return <div key={count} className={`dot ${index === count ? 'active' : ''}`}></div>
            })}
            </div>
            <FiChevronRight onClick={nextImage}/>
            </div>
        </div>
    )
}

export default Slider;