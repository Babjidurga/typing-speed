import React from 'react';
import './tips.css'; // Import CSS file for styling

const FingerPlacements = () => {
  return (
    <div className="finger-placements-container">
      <div className="finger-placements-left">
        <h2>Left Hand</h2>
        <ul>
          <li>Index finger: a</li>
          <li>Middle finger: s</li>
          <li>Ring finger: d</li>
          <li>Pinky finger: f</li>
        </ul>
      </div>
      <div className="finger-placements-right">
        <h2>Right Hand</h2>
        <ul>
          <li>Index finger: j</li>
          <li>Middle finger: k</li>
          <li>Ring finger: l</li>
          <li>Pinky finger: ;</li>
        </ul>
      </div>
    </div>
  );
};

export default FingerPlacements;
