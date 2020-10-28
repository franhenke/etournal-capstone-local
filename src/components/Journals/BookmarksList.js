import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import BookmarkedJournal from './BookmarkedJournal'

export const BookmarksList = () => {
  const { journalEntries } = useContext(GlobalContext)

  const bookmarkedJournals = journalEntries.filter(
    (bookmark) => bookmark.bookmarked === true
  )

  return (
    <div>
      {bookmarkedJournals.map((bookmark) => (
        <BookmarkedJournal key={bookmark.index} bookmark={bookmark} />
      ))}
    </div>
  )
}
