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

const DurationFormatter = ({ value }) => {
  const seconds = value / 1000
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds - hours * 3600) / 60)
  return `${hours}h ${minutes}m`
}

export const DurationProvider = props => (
  <DataTypeProvider
    formatterComponent={DurationFormatter}
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
