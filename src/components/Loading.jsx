import React from 'react'

export default function Loading() {
  return (
    <div>
    <div className="preloader-wrapper active big">
    <div className="spinner-layer spinner-red-only">
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div><div className="gap-patch">
        <div className="circle"></div>
      </div><div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div>
  </div>

    </div>
  )
}
