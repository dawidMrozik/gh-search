import React from 'react'
import PropTypes from 'prop-types'

import './RepoCard.css'

const formatDate = (date) => {
  const now = new Date()
  const diffInMs = now - new Date(date)
  const days = Math.floor(diffInMs / 1000 / 60 / (60 * 24))
  const diffDate = new Date(diffInMs)

  if (days > 0) return `${days} days ago`
  if (diffDate.getHours() > 0) return `${diffDate.getHours()} days ago`
  if (diffDate.getMinutes() > 0) return `${diffDate.getMinutes()} days ago`

  return `just now`
}

const RepoCard = ({repo}) => {
  const {
    name,
    shortDescriptionHTML,
    updatedAt,
    isPrivate,
    url,
    primaryLanguage,
  } = repo
  let mainLang
  let mainLangColor

  // handle empty primaryLanguage
  if (primaryLanguage) {
    mainLang = primaryLanguage.name
    mainLangColor = primaryLanguage.color
  } else {
    mainLang = 'None'
    mainLangColor = '#ddd'
  }

  return (
    <div className="RepoCard-container">
      <div className="RepoCard-header">
        <a className="RepoCard-name" href={url}>
          {name}
        </a>
        {isPrivate && <div className="RepoCard-privateBadge">Private</div>}
      </div>
      <p className="RepoCard-desc">{shortDescriptionHTML}</p>
      <div className="RepoCard-bottom">
        <div className="RepoCard-lang">
          <div
            className="RepoCard-langColor"
            style={{backgroundColor: mainLangColor}}
          />
          <p className="RepoCard-langName">{mainLang}</p>
        </div>
        <div className="RepoCard-updated">
          {`Updated ${formatDate(updatedAt)}`}
        </div>
      </div>
    </div>
  )
}

RepoCard.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    shortDescriptionHTML: PropTypes.string,
    updatedAt: PropTypes.string,
    url: PropTypes.string,
    primaryLanguage: PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
    isPrivate: PropTypes.bool,
  }).isRequired,
}

export default RepoCard
