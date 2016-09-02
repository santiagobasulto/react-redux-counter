import React from 'react';

class TodoInput extends React.Component {
		render () {
			return 	<div>
	  				<input type='text' onChange={this.props.onTodoTextChange} value={this.props.todoText} />
	  				<input type='submit' onClick={this.props.onTodoAdded}/>
					</div>
		}
}

export default TodoInput;
