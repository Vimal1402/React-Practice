

import men from './assets/men.jpg'
import men1 from './assets/men1.png'


function App() {
  return (
    <div>
      <div className="navbar">
        <div className="left">
            <div className="logo">
              <img src= {men} alt="" />
            </div>
            <a href="#">About me</a>
            <a href="#">Portfolio</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
        </div>
        <div className="right">
            <a href="#">Book A Call</a>
        </div>
      </div>

      <section className="main">
        <div className="leftcontent">
          
          <div className="upper">
            <div className="projects">
              <h3>+200</h3>
              <p>Project completed</p>
            </div>
            <div className="startup">
              <h3>+50</h3>
              <p>Startup raised</p>
            </div>
          </div>

          <div className="mid">
            <h1>Hello</h1>
            <p>-It's D.Nova a design wizerd</p>
          </div>

          <div className="bottom">
            <p>Scroll down</p>
          </div>
          
        </div>

        <div className="rightcontent">
          <img src={men1} alt="men" />
        </div>
      </section>
     
    </div>
    
  )
}

export default App
