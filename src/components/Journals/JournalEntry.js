import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'
import plusIcon from '../../assets/icons/plus-circle.svg'
import trashIcon from '../../assets/icons/trash.svg'

const JournalEntry = ({ entry }) => {
  const { deleteEntry } = useContext(GlobalContext)
  return (
    <>
      <div className="journal-entry_container">
        {entry.image ? (
          <img src={entry.image} alt="" className="entry-image" />
        ) : (
          <img src={plusIcon} alt="" className="entry-image" />
        )}
        <div className="journal-container">
          <Link to={`/journals/${entry.caption}`}>
            <p className="journal_place">{entry.place}</p>
            <h4 className="journal_caption">{entry.caption}</h4>
            <p className="journal_entry">{entry.entry}</p>
            <p className="journal_date">{entry.date}</p>
          </Link>
          <button
            className="journal-button-delete"
            onClick={() => deleteEntry(entry.id)}
          >
            <img src={trashIcon} alt="delete" />
          </button>
        </div>
      </div>
    </>
  )
}

export default JournalEntry
