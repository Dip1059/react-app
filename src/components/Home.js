import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Home extends Component
{
	constructor(props) {
		super();
		this.state = {	
			age: props.user.initialAge,
			status: 0,
			initialTitle: props.initialTitle
		};
		setTimeout(() => {
			this.setState({
				status: 1
			});
		}, 3000);
	}

	onMakeOlder() {
		this.setState({
			age: this.state.age + 3
		});
		console.log(this.state.age+3);
	}

	onChangeTitle() {
		this.props.onChangeTitleApp(this.state.initialTitle);
	}

	onChangeHandler(event) {
		this.setState({
			initialTitle: event.target.value
		});
	}

	render() {
		return (
			<div className="left">
				<p>Name: {this.props.user.name}</p>
				<p>Age: {this.state.age}</p>
				<p>Status: {this.state.status}</p>
				<div>
					<h4>Hobbies</h4>
					<ul>
						{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
					</ul>
				</div>
					{this.props.children}
					<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make Me Older(From Home)</button><br/><br/>
					<input type="text" value={this.state.initialTitle} onChange={(event) => this.onChangeHandler(event)} />
					<button onClick={() => this.onChangeTitle()} className="btn btn-primary">Change Title(From Home)</button>
			</div>
		);
	}
}

Home.propTypes = {
	user: PropTypes.object,
	children: PropTypes.element.isRequired,
	onChangeTitleApp: PropTypes.func,
	initialTitle: PropTypes.string
};