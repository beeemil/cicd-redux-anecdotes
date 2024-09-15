import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import React from 'react'
import Anecdote from './Anecdote'

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if ( filter === '' ){
        return anecdotes
    }
    return anecdotes.filter(a => a.content.toLowerCase().search(filter.toLowerCase()) !== -1)
  })

  return(
    <ul>
      {anecdotes.map(a =>
        <Anecdote
          key={a.id}
          anecdote={a}
          handleClick={() => {
            dispatch(voteAnecdote(a))}
          }
        />
      )}
    </ul>
  )
}

export default Anecdotes