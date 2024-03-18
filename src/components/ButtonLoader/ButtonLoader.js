import { LoadMore } from './ButtonLoader.styled';
import PropTypes from 'prop-types';

export const ButtonLoader = ({ onClick }) => {
  return <LoadMore onClick={onClick}>Load more</LoadMore>;
};

ButtonLoader.propTypes = {
  onClick: PropTypes.func.isRequired,
};
