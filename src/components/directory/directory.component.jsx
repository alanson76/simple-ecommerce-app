import React from 'react';
import {withRouter} from 'react-router-dom';

import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';
import SECTION_DATA from '../../static/section-data';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTION_DATA,
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default withRouter(Directory);
