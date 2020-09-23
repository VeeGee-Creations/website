import React from 'react';
import Config from '../../config';
import CommitteeLogos from './CommitteeLogos/CommitteeLogos'
import CommitteeSections from './CommitteeSection/CommitteeSections'
import Banner from '../Banner/Banner';

export default class Sponsors extends React.Component {
	render() {
		return (
			<div className="about-page">
				<Banner decorative />
				<div className="content-section center">
						<CommitteeLogos committees={Config.committees} />
				</div>
				<Banner decorative />
				<div className="content-section center committee-sections-container">
					<div className="left">
						<CommitteeSections committees={Config.committees} />
					</div>
				</div>
			</div>
		);
	}
}
