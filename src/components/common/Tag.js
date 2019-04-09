import React from 'react'

const Tag = props => {
  return (
    <div className="tag">
      {props.name}
    </div>
  ) 
}

export const InteractiveTag = props => {

  const onClick = name => props.toggleTag(name)

  return (
    <span 
      className={`tag-interactive ${props.selected ? 'tag-interactive--selected' : ''}`} 
      onClick={() => onClick(props.name)}
    >
      <Tag name={props.name} selected={props.selected} onClick={onClick} />
    </span>
  )
}

export const StaticTag = props => <Tag name={props.name} />
