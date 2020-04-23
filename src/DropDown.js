import React from 'react';

export const DropDown = (props) => {
    return (
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            {props.topName}
          </a>
          <div class="navbar-dropdown is-boxed ">
            {props.children}
          </div>
        </div>

    )
}