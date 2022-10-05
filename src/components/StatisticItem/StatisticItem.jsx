import PropTypes from 'prop-types';
import { StatisticBox, StatisticLabel,  StatisticData } from './StatisticItem.styled';

export const StatisticItem = ({ label, percentage }) => {
    return (
      <StatisticBox style={{ backgroundColor: generateLightColorHex() }}>
        <StatisticLabel>{label}</StatisticLabel>
        <StatisticData>{percentage}%</StatisticData>
      </StatisticBox>
    );
  };
  
  StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  };

  function generateLightColorHex() {
    let color = "#";
    for (let i = 0; i < 3; i++)
      color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
    return color;
  }