import React from 'react'
import '../../style/Galeria.css'


export const GaleryHome = ({
  lightBg,
  lightText,
  headline,
  imgStart,

}) => {

  return (
    <>

      <div className={lightBg ? 'home__gallery-section' : 'home__gallery-section darkBg'}>
        <div className="container">
          <div className="row "
            style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}
          >
            <div className="home__gallery-text-wrapper ">
              <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
            </div>
            <div className="gallery">
              <div>
                <img className='galeriaimg' src="http://www.brabbu.com/en/inspiration-and-ideas/wp-content/uploads/2015/06/Digital-Art-Photography-for-Art-Lovers4.jpg" alt="" />
              </div>
              <div>
                <img className='galeriaimg' src="https://i.pinimg.com/564x/3f/91/6f/3f916ff60ffa5093cf72dca8af50b785.jpg" alt="" />
              </div>
              <div>
                <img className='galeriaimg' src="https://i.pinimg.com/564x/b0/74/f9/b074f94a1eba3fd53053ffa591bfa751.jpg" alt="" />
              </div>
              <div>
                <img className='galeriaimg' src="https://i.pinimg.com/564x/df/eb/59/dfeb59b54648cb3c170bc540304f7163.jpg" alt="" />
              </div>
              <div>
                <img className='galeriaimg' src="https://i.pinimg.com/564x/f9/25/fa/f925fab2abb9a650165acf62d3b7e867.jpg" alt="" />
              </div>
              <div>
                <img className='galeriaimg' src="https://i.pinimg.com/564x/3f/91/6f/3f916ff60ffa5093cf72dca8af50b785.jpg" alt="" />
              </div>
              <div>
                <img className='galeriaimg' src="https://i.pinimg.com/564x/b0/74/f9/b074f94a1eba3fd53053ffa591bfa751.jpg" alt="" />
              </div>
              <div>
                <img className='galeriaimg' src="https://i.pinimg.com/564x/df/eb/59/dfeb59b54648cb3c170bc540304f7163.jpg" alt="" />
              </div>
              <div>
                <img className='galeriaimg' src="https://i.pinimg.com/564x/df/eb/59/dfeb59b54648cb3c170bc540304f7163.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>



  );
};

