import React from 'react'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Category from '../../components/Category/Category'
import Contact from '../../components/Contact/Contact'

const Home = () => {
    return (
        <div className="home">
            <Slider />
            <FeaturedProducts type="Feauted" />
            <Category />
            <FeaturedProducts type="Trending" />
            <Contact />
        </div>
    )
}

export default Home