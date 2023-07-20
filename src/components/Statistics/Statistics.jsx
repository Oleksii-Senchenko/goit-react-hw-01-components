
export function Statistics({id, label, percentage}) {
  return (
    <li id={id}>
      <span>{label}</span>
      <span>{percentage}</span>
    </li>
  );
}
