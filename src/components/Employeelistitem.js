import Employeeimg from "./Employeeimg";
import { Link } from "react-router-dom";

export default function EmployeeListItem({ img, name, title, playShow }) {
    const team = { img, name, title }
  return (
      <Link onClick={() => { playShow(team) }} to={`/${name}`}>
          <div className="employeeListItem">
            <Employeeimg img={img} alt={name} />
                <div className="content">
                    <h2>{name}</h2>
                    <p>{title}</p>
                </div>
            </div>
      </Link>
  );
}
