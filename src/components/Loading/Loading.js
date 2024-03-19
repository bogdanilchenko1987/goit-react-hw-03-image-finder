import { IsLoading } from './Loading.styled';
import PropTypes from 'prop-types';

export const Loading = ({ isVisible }) => {
  return (
    <IsLoading
      visible={isVisible}
      ariaLabel="three-dots-loading"
      color="#3f51b5"
      wrapperStyle={{ justifyContent: 'center' }}
    />
  );
};

Loading.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
