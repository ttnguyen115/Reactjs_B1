import React from 'react'
import Promotion from '../component/Promotion';
import Header from '../component/Header'
import Carousel from '../component/Carousel'
import Smartphone from '../component/Smartphone'
import Laptop from '../component/Laptop'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
    
                <Carousel />
    
                <Smartphone />
    
                <Laptop />
    
                <Promotion />
            </div>
        )
    }
}

export default Home;
