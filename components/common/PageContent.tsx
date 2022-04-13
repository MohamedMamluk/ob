import React, { useState } from 'react'
import Card from './Card'
import CardsContainer from './CardsContainer'
import FilterContainer from './filter/FilterContainer'
import { useDispatch } from 'react-redux'
import { Options } from '../../types'
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'
interface PageProps {
  title: string
  options: Options[]
  filterState: boolean
  filterToggler: ActionCreatorWithoutPayload<string>
}
const PageContent: React.FC<PageProps> = ({
  title,
  options,
  filterState,
  filterToggler,
}) => {
  const dispatch = useDispatch()
  return (
    <div className=" mt-5 w-full md:flex md:items-center">
      {/* Filter menu */}
      <FilterContainer options={options} filterState={filterState} />
      <div className="w-full">
        <h1 className=" text-center uppercase ">{title}</h1>
        <div className="flex justify-end">
          <button
            className=" text-[#D0D0D0]"
            onClick={() => dispatch(filterToggler())}
          >
            Filter
          </button>
        </div>
        <CardsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsContainer>
      </div>
    </div>
  )
}

export default PageContent
