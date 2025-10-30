import React from 'react'

const logOut = () => {
  return (
    <>
    <div>logOut</div>
    <p>Making some unrelated changes, just to check stashed work</p>
    <p> Ignoring the changes doing my unstashed work here more....</p>
  <p>this is header added by utsarg as commt1.</p>
    <div>logOut making commit2, completely modified this , has to be conflict1</div>
    <div>made an extra change, added some text adter this... as conflict 2</div>
    <p> Only to create a conflict via login branch, added a new line below extra change, as conflict 3, if </p>
  <p>this is a footer added by utsarg as commit2, unaware of this adding some more lines for conflict.</p>
  <p> Ignoring the changes doing my unstashed work here.</p>
  <p>More commits1</p>
  <p>More commits2</p>
  <p>More commits3 for ancestory diverge.</p>
  </>
  )
}

export default logOut 