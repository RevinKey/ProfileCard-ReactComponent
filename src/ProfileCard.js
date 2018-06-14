import React, { Component } from 'react';
import styled from 'styled-components';
import './ProfileCard.css';

const ArtistCard = styled.div`
	position: relative;
	max-width: 250px;
	min-width: 50px;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto auto;
	grid-gap: 1em;
	grid-template-areas: 'image' 'name' 'title';
`;

const ArtistImage = styled.div`
	background-image: url(${props => props.image});
	display: flex;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	width: 90%;
	height: 0;
	padding-bottom: calc(90% - 6px);
	border-radius: 50%;
	border-style: solid;
	border-color: #fff;
	border-width: 5px;
	align-items: center;
	justify-content: center;
`;
const BioCard = styled.i`
	display: none;
	padding-top: calc(40% - 6px);
	font-size: 48px;
	text-align: center;
	grid-area: image;
	margin: auto;
	${ArtistCard}:hover & {
    display: block;
  }
`;

const ArtistName = styled.div`
	grid-area: name;
	text-decoration: underline;
	text-align: center;
	padding: unset;
	margin: unset;
`;

const ArtistTitle = styled.div`
	grid-area: title;
	text-align: center;
	padding: unset;
	margin: unset;
`;

class ProfileCard extends Component {
	render() {
		return (
			<div className="App">
				<ArtistCard className="artist-card">
					<ArtistName className="artist-name">{this.props.name}</ArtistName>
					<ArtistTitle className="artist-title">{this.props.title}</ArtistTitle>
					<ArtistImage {...this.props} className="artist-image">
						<BioCard className="bio-button far fa-id-card"/>
					</ArtistImage>
				</ArtistCard>
			</div>
		);
	}
}

export default ProfileCard;
