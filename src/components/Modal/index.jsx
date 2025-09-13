import React from 'react'
import './Modal.css'

export default function Modal({ isOpen, children }) {
    if (!isOpen) return null

    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}