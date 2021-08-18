import TeamMember from "./TeamMember";

export default function TeamGrid( props ) {
  return (
    <div data-w-id={props.id} className="w-layout-grid grid team-grid interaction2">
      {
        props.members ? props.members?.map((member) => <TeamMember member={member} key={member.name}></TeamMember>) : null
      }
    </div>);
}