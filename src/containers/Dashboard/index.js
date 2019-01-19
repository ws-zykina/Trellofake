import React, { Component } from 'react'
import './Dashboard.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ListContainer from '../../components/ListContainer'
import Axios from '../../core/axios'
import { getGroups } from "../../store/actions/group.actions";


class Dashboard extends Component {
	componentDidMount () {
		this.props.getGroups()
	}

	render() {
		const { groups: { items } } = this.props;

		return (
			<div className='dashboard'>
				{
					items && items.map(({name}, index) =>
						<ListContainer title={name}>
							123
						</ListContainer>
					)
				}
			</div>
		)
	}
}

const mapStateToProps = ( { groups } ) => {
	return { groups };
};

const mapDispatchToProps = ( dispatch ) => {
	return bindActionCreators( { getGroups }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( Dashboard );
