import React from 'react'
import { StaticTag } from './Tag'

const renderTagListLoading = () => {
  return <div></div>
}
const TagList = props => {

  if (props.tags === undefined) {
    return renderTagListLoading()
  }

  return (
    <div className="tag-list">
      {props.tags.map((tag, index) => <StaticTag key={index} name={tag} />)}
    </div>
  )
}


  

export default TagList