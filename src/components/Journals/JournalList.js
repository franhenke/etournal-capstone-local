import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'
import * as ROUTES from '../../constants/routes'
import JournalEntry from './JournalEntry'

const JournalList = ({ searchResults }) => {
  const { journalEntries } = useContext(GlobalContext)
  return (
    <div className="journal-list-container">
      {searchResults.map((entry) => (
        <JournalEntry key={entry.id} entry={entry} />
      ))}
      <Link className="link-to-form" to={ROUTES.JOURNALFORM}>
        Add a new memory
      </Link>
    </div>
  )
}

export default JournalList
