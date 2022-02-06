import React from 'react';

import './vedio-list-item.style.scss';

const VedioListItem = ({ vedio, selectedVedio }) => {
  
  const { snippet: { thumbnails: { default: { url } },title } } = vedio
  return (
    <li className='list-group-item' onClick={()=> selectedVedio(vedio)}>
      <div className='vedio-list d-flex media'>
        <div className='media-left'>
          <img className='media-object px-3' src={url} />
        </div>
        <div className='media-body'>
          <div className="media-heading details">
            {title}
          </div>
        </div>
      </div>
    </li>
  )
}

export default VedioListItem;