import React from "react";
import PropTypes from "prop-types";
import { format } from "timeago.js";
import MediaObject from "../MediaObject";
import Text from "../Text";
import "./Comment.scss";

const Comment = ({
  children,
  className = "",
  style = {},
  author,
  avatar,
  createdAt
}) => {
  const _createdAt = new Date(createdAt);
  const datetimeCreatedAt = _createdAt.toISOString();
  const formattedCreatedAt = format(_createdAt);

  return (
    <div className={`Comment ${className}`} style={style}>
      <MediaObject media={avatar} hasExtraSmallMedia>
        <div>
          <Text isStrong>{author}</Text>
          <Text isSubdued>
            <time datetime={datetimeCreatedAt}>{formattedCreatedAt}</time>
          </Text>
        </div>

        <div>{children}</div>
      </MediaObject>
    </div>
  );
};

Comment.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  avatar: PropTypes.node.isRequired,
  author: PropTypes.string.isRequired
};

export default Comment;
