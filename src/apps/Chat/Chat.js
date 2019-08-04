import React from 'react';
import PropTypes from 'prop-types';
import Classic, { ClassicPrimary, ClassicSecondary } from '../../components/Classic';
import './Chat.scss';

const Chat = ({ children, className = '', style = {} }) => {
  return <div className={`Chat ${className}`} style={style}>
    <Classic>
      <ClassicSecondary>
        sidebar
      </ClassicSecondary>
      <ClassicPrimary>
        main
      </ClassicPrimary>
    </Classic>
  </div>;
};

Chat.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Chat;
