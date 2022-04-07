
import EmployeepageHeader from "./EmployeepageHeader";
import Employeeimage from "./Employeeimg";

export default function Employeepage(props){
    return (
        <div className="show">
            <EmployeepageHeader />
            <div className="img">
                <Employeeimage img= {props.show.img} alt={props.show.name} />
            </div>
            <h1>{props.show.name}</h1>
            <h2>{props.show.title}</h2>
        </div>
    )
}