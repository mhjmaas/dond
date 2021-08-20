export default function TeamMember({ member, deleteMember }) {
    return (
        <div className="team-block">
            {
                !!deleteMember && (
                    <a href="#" className="remove-item" onClick={() => deleteMember(member.id)}>
                    <img src="/images/Plus-Template.svg" loading="lazy" alt="" className="faq-plus"/>
                    </a>
                )
            }
            <div className="player-image-wrapper"><img loading="lazy" sizes="(max-width: 479px) 90vw, (max-width: 767px) 91vw, 92vw" src={member.img} alt="" className="player-image"/></div>
            <div className="team-detail">
                <h5>{member.name}</h5>
                <div className="subheading-small-white">{member.description}</div>
            </div>
        </div>
    )
}