'use client'

export const Players = () => {
    const onClick = () => {
        console.log('clicked')  
    }
  return (
    <div onClick={() => onClick()}>Players</div>
  )
}
