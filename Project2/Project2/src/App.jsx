import background from './assets/background.jpg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  return (
    <div>
      <div className="navbar">
        <div className="left">
          <div className="logo">
            <p>Horizon Courts</p>
          </div>
          <div className="links">
            <a href="#">About Us</a>
            <a href="#">Coaches</a>
            <a href="#">Services</a>
            <a href="#">Events</a>
            <a href="#">Contacts</a>
          </div>
        </div>
        <div className="right">
          <button>Book Now</button>
        </div>
      </div>

      <section className="main">
        <div className="upper">
          <h1>Unleash Your Inner Champion Today. All In One Place.</h1>
          <p>Join the ultimate tennis experience -- where passion meets performance and every swing brings you closer to victory</p>
          <button>Start your own journey</button>
        </div>
        <div className="bottom">
          <div className="left">
            <p>Train with real professionals. Get the real result</p>
          </div>
          <div className="right">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Tit Tok</a>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="button">
          <button>About Horizon</button>
        </div>
        <div className="content">
          <h3>At Horizon, we don't just play tennis -- we live it. Since 2021. our club has been a home for players of all levels. from eager beginners to seasoned pros.</h3>
        </div>
      </section>

      <section className="section3">
        <div className="card1 cards">
          <p>Professional hard courts <span>with tournament-grade lighting & climate control -- play in </span>perfect conditions, in any season.</p>
          <label className='switch'>
            <input type="checkbox" />
            <span className='slider'></span>
          </label>
        </div>
        <div className="card2 cards">
          <button>Privae & Group Lessons</button>
        </div>
        <div className="card3 cards">
          <div className="top">
            <h2>100+</h2>
            <h4>Pro Coaches</h4>
            <p>Cerified professionals ready to boost your game from first serve to a tournament level</p>
          </div>
          <div className="levels">
            <div class="level"> <span>Beginner: 85</span>
              <div class="dots">
                <span class="dot"></span><span class="dot"></span><span class="dot"></span> <span class="dot"></span><span class="dot"></span><span class="dot"></span> <span class="dot"></span>
              </div>
            </div>
            <div class="level"> <span>Medium: 45</span>
              <div class="dots">
                <span class="dot"></span><span class="dot"></span><span class="dot"></span> <span class="dot"></span><span class="dot"></span><span class="dot"></span> <span class="dot"></span>
              </div>
            </div>
            <div class="level"> <span>Advanced: 35</span>
              <div class="dots">
                <span class="dot"></span><span class="dot"></span><span class="dot"></span> <span class="dot"></span><span class="dot"></span><span class="dot"></span> <span class="dot"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section4">
        <h2>A few more facts about us in numbers</h2>
      </section>

    <section className="section5">
      <div className="innumbers">
      <div className="ratings">
        <h2>12,000+</h2>
        <p>Hours of play annually</p>
      </div>
      <div className="ratings">
        <h2>90%</h2>
        <p>Player Retention Rate</p>
      </div>
      <div className="ratings">
        <h2>1,200+</h2>
        <p>Active Members</p>
      </div>
      <div className="ratings">
        <h2>125+</h2>
        <p>Annual Tournaments</p>
      </div>
      </div>
    </section>

    </div>
  )
}

export default App
