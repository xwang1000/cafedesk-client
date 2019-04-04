import React from 'react'
import Tag from './Tag'

const TagList = props => 
  <div className="tag-list">{props.tags.map((tag, index) => <Tag key={index} name={tag} />)}</div>

export default TagList