import React from 'react'
import Card from './NoteCard/Card'


function NoteList() {
  return (
    <div className='text-gray-900 font-jura flex flex-row' >
        <Card title="card 01" notecontent={"this is the content to card 01"}/>
        <Card title="Card 02" notecontent={"hello, world this is the note app for yall"}/>
    </div>
  )
}

export default NoteList
