export default function Match({ match, deleteMatch = null  }) {
    return (
        <div className="match-wrapper">
            {
                !!deleteMatch && (
                    <a href="#" className="remove-item" onClick={() => deleteMatch(match.id)}>
                    <img src="/images/Plus-Template.svg" loading="lazy" alt="" className="faq-plus"/>
                    </a>
                )
            }
            <div className="match-block">
            <div className="match-banner">
                <div className="clan-mark">
                    <img src={match.homescore > match.awayscore ? '/images/star-filled.svg' : '/images/Star-Outline.svg'} loading="lazy" alt="" className="star-match"/>
                    <img src={match.homelogo} loading="lazy" alt="" className="team-logo"/>
                </div>
                <h5>{match.hometeam}</h5>
            </div>
            <div className="match-links">
                <div className="subheading-small margin-right-16">WATCH</div>
                <a href={match.homestreamurl} className="preview-links w-inline-block"><img src="/images/Theme-Twitch.svg" loading="lazy" alt=""/></a>
                <a href={match.homeyoutubeurl} className="preview-links w-inline-block"><img src="/images/Theme-Youtube.svg" loading="lazy" alt=""/></a>
            </div>
            </div>
            <div className="match-results">
            <h3 className="match-number">{match.homescore}</h3>
            <h3 className="match-number-split">:</h3>
            <h3 className="match-number">{match.awayscore}</h3>
            </div>
            <div className="match-block">
            <div className="match-banner right-side">
                <div className="clan-mark">
                    <img src={match.homescore < match.awayscore ? '/images/star-filled.svg' : '/images/Star-Outline.svg'} loading="lazy" alt="" className="star-match"/>
                    <img src={match.awaylogo} loading="lazy" alt="" className="team-logo"/></div>
                <h5>{match.awayteam}</h5>
            </div>
            <div className="match-links right-side">
                <div className="subheading-small margin-right-16">WATCH</div>
                <a href={match.awaystreamurl} className="preview-links w-inline-block"><img src="/images/Theme-Twitch.svg" loading="lazy" alt=""/></a>
                <a href={match.awayyoutubeurl} className="preview-links w-inline-block"><img src="/images/Theme-Youtube.svg" loading="lazy" alt=""/></a>
            </div>
            </div>
        </div>
    )
}