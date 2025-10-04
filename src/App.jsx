import { useState } from "react";
import "./App.css";

function App() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="profile-container">
      {/* Header */}
      <div className="profile-header">
        <img src="https://via.placeholder.com/120" alt="Profile" />
        <h1>Christian Jay Romero</h1>
        <p>Aspiring Digital Artist & Software Developer</p>
      </div>

      {/* Content */}
      <div className="profile-content">
        {/* About */}
        <section>
          <h2>About Me</h2>
          <p>
            Hi! I'm Christian, a passionate learner who dreams of becoming a
            digital artist, illustrator, and animator. I'm also studying
            Information Systems and exploring the world of programming.
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2>Skills</h2>
          <div className="skills">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
            <div className="skill">Digital Art</div>
          </div>
        </section>

        {/* More Info */}
        <section>
          <h2>More Info</h2>
          {showMore && (
            <p>
              In the future, I hope to build my own business while creating art
              and animations that inspire others. I also dream of having a happy
              family and living a meaningful life filled with creativity.
            </p>
          )}
          <button
            className="toggle-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
