import PropTypes from 'prop-types';
import { BoxMessage } from './Message.styled';
import { MessageTitle } from './Message.styled';
import { MessageText } from './Message.styled';

const Message = () => (
  <BoxMessage>
    <MessageTitle>The gallery is empty 🙁</MessageTitle>
    <MessageText>Use search field!</MessageText>
  </BoxMessage>
);

Message.defaultProps = {
  children: [],
};

Message.propTypes = {
  children: PropTypes.node,
};

export default Message;
