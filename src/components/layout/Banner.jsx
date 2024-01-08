import React from 'react'
import Banner from '../../image/banner.png'
function Banner() {
  return (
    <section className='banner'>
        <div className="container">
            <div className="banner-row">
                <div className="banner-left">
                    <ul className="banner-list">
                        <li className='banner-list-item'>Automobiles</li>
                        <li className='banner-list-item'>Clothes and wear</li>
                        <li className='banner-list-item'>Home interiors</li>
                        <li className='banner-list-item'>Computer and tech</li>
                        <li className='banner-list-item'>Tools, equipments</li>
                        <li className='banner-list-item'>Sports and outdoor</li>
                        <li className='banner-list-item'>Animal and pets</li>
                        <li className='banner-list-item'>Machinery tools</li>
                        <li className='banner-list-item'>More category</li>
                    </ul>
                </div>
                <div className="banner-center">
                    <div className="banner-banner">
                        <div className="banner-banner__info">
                            <h3 className="banner-banner__info-toptitle">Latest trending</h3>
                            <h2 className="banner-banner__info-title">Electronic items</h2>
                            <button className="banner-banner__info-btn">Learn moe</button>
                        </div>
                        <div className="banner-banner__image">
                            <img src={Banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner;