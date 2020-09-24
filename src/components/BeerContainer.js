
import React from 'react'
import BeerFilter from './BeerFilter'
import BeerList from './BeerList'
import { BeerConsumer } from '../context'
import Loading from './Loading'
export default function BeersContainer() {
    return (
        <BeerConsumer>
            {value => {
                const { loading, sortedBeers, beers } = value
                if (loading) {
                    return <Loading />;
                }
                return (
                    <>
                        
                        <BeerFilter beers={beers} />
                        <BeerList beers={sortedBeers} />
                    </>
                );
            }}
        </BeerConsumer>

    )
}
