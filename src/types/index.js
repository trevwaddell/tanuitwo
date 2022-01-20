import PropTypes from "prop-types";

export const child = PropTypes.node;
export const children = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);
export const date = PropTypes.instanceOf(Date);
export const func = PropTypes.func;
export const number = PropTypes.number;
export const string = PropTypes.string;
export const component = PropTypes.element;
export const object = PropTypes.object;
export const bool = PropTypes.bool;

export const note = PropTypes.shape({
  _id: string,
  text: string,
  title: string,
  lastUpdatedAt: string,
});
