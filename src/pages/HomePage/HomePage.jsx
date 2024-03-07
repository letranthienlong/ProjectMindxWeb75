import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slide1 from '../../assets/images/Slide1.jpg'
import slide2 from '../../assets/images/Slide2.png'
import slide3 from '../../assets/images/Slide3.jpg'
import CardComponent from '../../components/CartComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'

const HomePage = () => {
  const arr = ['TV', 'Tủ Lạnh', 'Laptop']
  return (
    <>
      <div style={{ padding: '0 120px' }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return (
              <TypeProduct name={item} key={item} />
            )
          })}
        </WrapperTypeProduct>
      </div>
      <div id='container' style={{ backgroundColor: '#efefef', padding: "0 120px", height:'1000px' }}>
        <SliderComponent arrImages={[slide1, slide2, slide3]} />
        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <CardComponent />
        </div>
        <NavbarComponent/>
      </div>
    </>
  )
}

export default HomePage