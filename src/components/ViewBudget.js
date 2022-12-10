import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: ₹{props.budget}</span>
			<button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Edit the budget
			</button>
		</>
	);
};

export default ViewBudget;