import React from 'react'
import  {LngLat} from 'react-map-gl';
import './controlpanel.css'

const eventNames = ['onDragStart', 'onDrag', 'onDragEnd'];

function round5(value) {
  return (Math.round(value * 1e5) / 1e5).toFixed(5);
}

function Controlpanel(props) {
  return (
    <div>

    <div className="controlpanel hidden">

          <h3>Draggable Marker</h3>
          <p>Try dragging the marker to another location.</p>
          <div>

            { eventNames.map(eventName => {

              const {events = {}} = props;
              const lngLat = events[eventName];

              return (

                <div key={eventName}>
                  <strong>{eventName}:</strong>{' '}

                  {lngLat ? `${round5(lngLat.lng)}, ${round5(lngLat.lat)}` : <em>null</em>}
                </div>

              );

            })}

          </div>
          {/* <div className="source-link">

            <a
              href="https://github.com/visgl/react-map-gl/tree/7.0-release/examples/draggable-markers"
              target="_new"
            >
              View Code ↗
            </a>
          </div> */}
      </div>
        
    </div>
  )
}

export default Controlpanel