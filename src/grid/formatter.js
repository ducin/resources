import React from 'react'
import { DataTypeProvider } from '@devexpress/dx-react-grid'

const DateFormatter = ({ value }) => {
  return (new Date(value)).toLocaleDateString()
}

export const DateTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={DateFormatter}
    {...props}
  />
)

const getLink = (slug) => `https://app.pluralsight.com/library/courses/${slug}`

const LinkFormatter = ({ value }) => {
  return <a href={getLink(value)}>{value}</a>
}

export const LinkProvider = props => (
  <DataTypeProvider
    formatterComponent={LinkFormatter}
    {...props}
  />
)
