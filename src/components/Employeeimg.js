export default function Employeeimage({ img, name }) {
    return (
      <div>
        <img src={img} className="employeeImage" alt={name} />
      </div>
    );
  }
  