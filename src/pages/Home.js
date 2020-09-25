import React, { Fragment } from 'react'
import {Search} from '../components/Search'
import {Card} from '../components/Card'
import { id } from 'postcss-selector-parser';

export const Home = () => {
  const cards = new Array(12)
    .fill('')
    .map((_,i) => i)
  return(
    <Fragment>
      <Search />
      <div className='row'>
        
        {cards.map(card => {
          return(
            <div className='col-sm-4 mb-4' key={id.card}>
          <Card />
        </div>
          )
        })}

      </div>
    </Fragment>
  )
}