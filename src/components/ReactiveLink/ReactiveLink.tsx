import { css, cx } from "emotion";
import React, { FC } from "react";
import ReactiveLinkProps from "./ReactiveLinkProps";

export const ReactiveLink: FC<ReactiveLinkProps> = ({
  angle = 0,
  children,
  className,
  ...props
}) => (
  <a
    className={cx(
      css`
        border-radius: 50%;
        display: inline-block;
        /**background-color: A */
        overflow: hidden;
        pointer-events: all;
        transform: rotate(${angle}deg) scale(1);
        will-change: opacity, transform;
        transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;

        /*&:hover {
          background-color: B 

          transition: transform 0.2s linear;
          transform: perspective(calc(var(--perspective) * 1px))
            rotateX(calc(var(--rotateX) * 1deg))
            rotateY(calc(var(--rotateY) * 1deg));
          will-change: transform;
        }*/

        &:hover,
        &:focus {
          /**background-color: B */
          outline: 0;
          opacity: 0.75;
          transform: rotate(${angle}deg) scale(1.1);
        }
      `,
      className
    )}
    {...props}
  >
    {children}
  </a>
);

export default ReactiveLink;