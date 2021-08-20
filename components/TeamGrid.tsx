import TeamMember from "./TeamMember";

export default function TeamGrid( props ) {
  return (
    <>
      {!props.deleteMember && (
        <div data-w-id={props.id} className="w-layout-grid grid team-grid interaction2">
          {
            props.members ? props.members?.map((member) => <TeamMember member={member} deleteMember={props.deleteMember} key={member.name}></TeamMember>) : null
          }
        </div>
      )}
      {props.deleteMember && (
        <div data-w-id={props.id} className="w-layout-grid grid team-grid">
          {
            props.members ? props.members?.map((member) => <TeamMember member={member} deleteMember={props.deleteMember} key={member.name}></TeamMember>) : null
          }
        </div>
      )}
    </>
    );
}