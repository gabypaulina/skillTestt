import React from "react";
import '../App.css'

const Notification = ({notifications}) => {
    return(
        <div className="notif">
            <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "420px" }}>
                <h5 className="fw-bold mb-4">NOTIFICATION</h5>
                <div className="timeline position-relative">
                    {notifications.map((notif, i) => (
                        <div className="timeline-item" key={i}>
                            <div className="time me-3 small text-secondary">{notif.time}</div>
                            <div className="timeline-marker">
                                <span className={`timeline-dot ${notif.active ? "active" : ""}`}></span>
                            </div>
                            <div className="timeline-content">
                                <p className="fw-semibold mb-0">{notif.title}</p>
                                <small className="text-muted">{notif.desc}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>  
    )
}

export default Notification;