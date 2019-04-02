import React from 'react'
import Tag from './Tag'

const TagList = props => 
  <div>{props.tags.map(tag => <Tag name={tag} />)}</div>

export default TagList