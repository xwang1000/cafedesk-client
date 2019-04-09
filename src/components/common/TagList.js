import React from 'react'
import Tag from './Tag'

const renderTagListLoading = () => {
  return <div></div>
}
const TagList = props => {
  
  if (props.tags[0] === undefined) {
    return renderTagListLoading()
  }

  return (
    <div className="tag-list">
      {props.tags.map((tag, index) => <Tag key={index} name={tag} />)}
    </div>
  )
}


  

export default TagList