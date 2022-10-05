import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  UserName,
  UserInfo,
  Stats,
  Item,
  Label,
  Value,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <Stats>
        <Item style={{ backgroundColor: generateLightColorHex() }}>
          <Label>Followers</Label>
          <Value>{stats.followers}</Value>
        </Item>
        <Item style={{ backgroundColor: generateLightColorHex() }}>
          <Label>Views</Label>
          <Value>{stats.views}</Value>
        </Item>
        <Item style={{ backgroundColor: generateLightColorHex() }}>
          <Label>Likes</Label>
          <Value>{stats.likes}</Value>
        </Item>
      </Stats>
    </Container>
  );
};


function generateLightColorHex() {
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
  return color;
}

Profile.propTypes = {
  // avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
