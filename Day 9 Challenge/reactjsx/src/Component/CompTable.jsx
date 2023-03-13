const CompTable = (props) => {

    return(
<table className="table">
        <thead>
			<tr>
				<th>No.</th>
				<th>Name</th>
				<th>Age</th>
				<th>Status</th>
			</tr>
		</thead>
		<tbody>
		{props.data.map((row, index) => (
			<tr key={index}>
				<td>{index + 1}</td>
				<td>{row.name}</td>
				<td>{row.age}</td>
				<td>{row.status}</td>
			</tr>
		))}
		</tbody>
		</table>
    );
}

export default CompTable