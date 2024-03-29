import React from 'react'
import styled from 'styled-components'

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="hero">
        <div className="hero1">
          <div className="heading">Shape Your Tomorrow,</div>
          <div className="heading">Today with HopingMinds:</div>
          <div className="heading">Where Education Meets</div>
          <div className="heading">Aspiration</div>
          <div className="heading2">
            Holistic a development programs that place students in specific high
            growth roles across 150+ Corporate Partners.
          </div>
        </div>

        <div className="hero2">
          <div className="student">
            <div className="logo">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACIklEQVR4nO1YvU4CQRCeWDEYGwqw0Qp5Bag12hhjrxKi1b2IiQ9wa4T4kxgSsSKhNxIOGiwtfA6jNWtuD8zB/e15wi3LfMk0d3u78303O7OzAARCONAcADIeYBZo7x8GTu5Y2pi7f+hMZLSHU6aaAPPzD0kAThGAtAU45YA2JUFOVaC9CmUQzWNAswvIvt0HisAFFLEI/2wur4DsKIr8VdAC1bv+7+Rnt/3UCSfw7zLkzzO+tsF45aLDq/fOhKX9lvhwu9IUi9iTb5Wb4lnp4Nmj/KJNxj+bS/m8I7gJEbLs0E+Arv3SHuhe4OSmx7FQH80qiYXG6LRupS5AHP9sbs5788UvmXyJUBr/+dlFirstjvmGsOLek3iWNvm4/tncxgJ9+gnA/ZKJbhZcHTD9RLZQIwFmgUHKaIbICNAdfxIAQ+/dvPdvqo1PLgCLl1hUG/9fAhiypUW18SSACxQBjLYAUA5glATBA6QyyENKhxVdd82esuMTVwGdQAIw6gWAegFGZRDkkwOo19xQM8SoGwRqhxndBxiLvhCBFb4Ss5Q621MvkADUCzANeoEk0CIJpiWAoeLRlgSICe0jAKXyic4CsGjyGXOovQCG6/va44DnSg+TeT4ga26ujAA1KfI6lUGXAPLkowVQ92zv9VWMj0feRhyVVcaYR27nfpLw3mH9Oi/9ISw7piNH4s/H3YfLYzHIS+/DJbEMe5MLewKBACuOHzN0G/QKJRlaAAAAAElFTkSuQmCC"
                width="25px"
                height="25px"
              />
            </div>
            <div className="student_content">
              <h3>250k</h3>
              Students
            </div>
          </div>

          <div className="video">
            <video autoPlay loop muted>
              <source src="media/home_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="congrats">
            <div className="logo">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEUlEQVR4nO1abUwcRRi+X17ZPYr+gOWktbUcVaDs7u2HfIigJdAomKYIiTQN5rRRauCURqIlNljTj0iDijaFxt4BLRUKbaEg3PmRVkvTAi2tP6wmrTWa2Jqa+MdatDbymtl61wPmgNudO0w6T/IkXG72nXmed+a9dzaYTBQUFBQUFBQUFBQUFBQUWJSWnoqqKB3Z4iw7c+HVdWN/VpePAWk6154F1eo1SM8fqtUzrFq9VTbboNlEAmsaajM2bOm8Eg7RgXQUDRMw4A6lZ7ZdlmtflAyJz32v7t4Xhl6+WXlpPTi7G2Br7Xnocv8E/Qd/Dso9Oy/pMqAg7RgZ8Ym9YN+xDvizy4DvzRq31VUt1G1AaWuNF4lH3H/NDX//cwtmw8QEQH3ttyGJL8keIiJeKfgQhAH1tvj/KNY/26XbAMfxynEk/q0fN8GtidnFh2IAOvNo2xPJ/JJ+sG9eD/xo4iTxiEJ3zu+6DXjlNe9fzpNvQMe1fX6BF8e/A9cvzeD+vg1aO85B264f/HQ3XoaqMhLFLISs5zaD0Js1Tbgm/kgWKLlNN3QbUI2y5RgFz9ejfgOarjbemWTEBtKmClAXD0RUtMZFg2Cv3Aj8cNJ08WcSwb61HNSlfdpYYwaUj4G35yreAJ/Th7JByfoocllPbwGx83F81gdUrRYEjidqQPPxo5rD0yYfTgL7xipQEwbDJz7BA9JLrwN/ejlWvLizDJRlR6c9Z9iAge4rfgN277gI8lPvgvCphF9Eex4o8j7yWRfbQWxdhc/65yLIq+uDPmvYgG0138Bvv97UWJx54nZgW492znAL4k89pJ1PlDHD4u/3gOR4E/ihZOxc9vdLQFl+eMYYhg2oDuDU4HLJduCPpeF3w95CUNI69Gc9pQvE3avxJn+1AuS1b88pTlgNUNFCk7vBvmtNkIWmahkMVbxUuh2EL4MYu6cI1NTOOccKuwHqpEWvwC+6+WlQUw/OvuCHD4H4QTHezBMpusyMmAEq2g38xyC6nsQXqy8EkIvfCfqsXNQA/Gf44irszwdFatd1lIgZ4JzrldVXuE7OULiSDk++wBAuqEp8D4hcO4hcKzkDHCFeWRWlDYQDefiMemWQKmpA2lCj/Y0dcyBPixFy/YjvBoFr8ZOYAQV6Li6+ljVI84KlgRYbZT5QPDEDSgxeWZUMNwhdObOKF448Ckq2/rYabXtiBjhJXlkRFw9o7TI/apsufjQR7HXPg/rAJ4bmEONayBmgkhCNofxEEwh9GQEXmEdAzp98gdHLqeL/lwaoiEv7QHpus0bftfXuMsAaHlIDOLoDgB4BjtYAoEWQo78CQH8GOdoHAG2EOEOdoOf6fHd2oVCO78N0gq7rRgwYIb3IwDc1uK6NNNM49zkDBnirSIqf+qYmMmyr0W2AzTZoVuI950llPtLi+Tj3BZut0di/ymQs6k8gYQLuTU24xdvj9y4xkUBKStc9stVbqVi9p/UWRtybGuKMc93g41xjaNsbzjwFBQUFBUVIMMfExNzHMIzVbDY/aLFYkhmGsUcvWJBlsVges1gsOSzLrmRZNo9hmFWI0QxThOj7jL5DY9BY9Ax6FsVAsVBMFBvNgeYyzTdiY2MtC83mxOioqHSGYQp8YiJFbc6oqHS0Bo7j2IiKZxhGiGaYwkiLnoGFLMvyETOAZVn+rjYAAW27+TwCLMvmo7nN83EETHgEK4KZU4rgyhmKoPZ9QBHMDHcR/BezNtBqUtFIiAAAAABJRU5ErkJggg=="
                height="35px"
                width="35px"
              />
            </div>
            <div className="congrats_content">
              <h3>Congratulations</h3>
              Your admission completed
            </div>
          </div>

          <div className="experince">
            <div className="logo">
              <img src="media/dp.png" alt="dp images" />
            </div>
            <div className="experince_content">
              <h3>User Experience class</h3>
              <p>Today at 12.00 PM</p>
              <button>Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .hero {
    display: flex;
    width: 100%;
    background-color: #e2fff1;
    background-size: cover;
    overflow: hidden;
    border-radius: 0 0 85% 85% / 30%;
    padding: 5rem 1rem;
    margin: 20px auto;
  }

  .hero .hero1 {
    margin: 10px 20px;
    width: 50%;
    text-align: left;
  }

  .hero1 .heading {
    font-size: 2.2rem;
    color: #000;
    padding: 0 auto;
    letter-spacing: 3px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    line-height: 4rem;
    text-align: left;
  }

  .hero1 .heading2 {
    margin-top: 3rem;
    font-size: 18px;
    line-height: 1.3rem;
    font-family: "Nunito Sans", sans-serif;
  }

  .hero .hero2 {
    width: 50%;
    position: relative;
    /* border: 2px solid green; */
    margin-top: 3.5rem;
    margin: 0 auto;
  }

  .hero2 .student {
    position: absolute;
    display: flex;
    gap: 1rem;
    padding: 0.3rem 0.5rem;
    top: 3px;
    left: 10px;
    z-index: 20;
    border-radius: 10px;
    background-color: #fffc;
    font-family: "poppins", sans-serif;
  }

  .student .logo {
    align-self: center;
  }

  .student h3 {
    margin-bottom: 1px;
    margin-top: -1px;
  }

  .hero2 .video {
    width: 90%;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
  }

  .hero2 .video video {
    width: 100%;
    height: 80%;
    clip-path: polygon(
      90.037% 55.958%,
      90.037% 55.958%,
      94.891% 53.715%,
      97.974% 50.747%,
      99.561% 47.205%,
      99.924% 43.24%,
      99.339% 39.004%,
      98.078% 34.647%,
      96.416% 30.321%,
      94.626% 26.177%,
      92.983% 22.366%,
      91.759% 19.04%,
      91.759% 19.04%,
      90.595% 16.542%,
      88.969% 14.948%,
      86.916% 14.008%,
      84.467% 13.469%,
      81.657% 13.081%,
      78.519% 12.591%,
      75.085% 11.749%,
      71.39% 10.303%,
      67.466% 8.001%,
      63.346% 4.593%,
      63.346% 4.593%,
      60.017% 1.936%,
      56.978% 0.557%,
      54.14% 0.244%,
      51.413% 0.781%,
      48.709% 1.955%,
      45.938% 3.549%,
      43.011% 5.351%,
      39.839% 7.145%,
      36.332% 8.717%,
      32.402% 9.853%,
      32.402% 9.853%,
      27.303% 11.328%,
      22.471% 13.574%,
      17.963% 16.491%,
      13.835% 19.981%,
      10.144% 23.948%,
      6.944% 28.292%,
      4.292% 32.915%,
      2.245% 37.72%,
      0.859% 42.609%,
      0.189% 47.482%,
      0.189% 47.482%,
      0.248% 52.54%,
      0.967% 57.954%,
      2.278% 63.584%,
      4.112% 69.291%,
      6.401% 74.933%,
      9.078% 80.372%,
      12.075% 85.467%,
      15.323% 90.078%,
      18.755% 94.065%,
      22.303% 97.289%,
      22.303% 97.289%,
      25.216% 99.012%,
      28.185% 99.796%,
      31.159% 99.774%,
      34.085% 99.08%,
      36.912% 97.845%,
      39.586% 96.202%,
      42.056% 94.285%,
      44.27% 92.225%,
      46.176% 90.156%,
      47.721% 88.211%,
      47.721% 88.211%,
      49.784% 84.302%,
      52.115% 79.403%,
      54.793% 73.943%,
      57.899% 68.349%,
      61.514% 63.049%,
      65.718% 58.473%,
      70.592% 55.047%,
      76.216% 53.201%,
      82.671% 53.362%,
      90.037% 55.958%
    );
    object-fit: cover;
  }

  .hero2 .congrats {
    position: absolute;
    display: flex;
    gap: 0.5rem;
    padding: 0.3rem 0.5rem;
    bottom: 6rem;
    border-radius: 10px;
    right: 20px;
    background-color: #fffc;
    font-family: "poppins", sans-serif;
  }

  .congrats .logo {
    align-self: center;
  }

  .congrats h3 {
    margin-bottom: 5px;
    margin-top: -3px;
  }

  .hero2 .experince {
    position: absolute;
    display: flex;
    gap: 1rem;
    bottom: 5rem;
    left: -4rem;
    background-color: #fffc;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    line-height: 1.3;
    font-family: "poppins", sans-serif;
  }

  .hero2 .experince .logo {
    align-self: center;
  }
  .experince h3 {
    margin: -3px 0;
    
  }
  .experince p{
    margin:-3px 0;
  }

  .hero2 .experince button {
    background-color: green;
    margin: 0.5rem 0 0 0;
    font-size: 14px;
    border: none;
    padding: 10px 10px;
    border-radius: 10px;
    width: 10rem;
    color: #fcf9f9;
  }

  .ab {
    text-align: center;
  }

  /* for mobile devices less than 480px */
  @media only screen and (max-width: 480px) {
    .hideonmobile {
      display: none;
    }
    .hamburger {
      display: block;
    }
    .hero {
      padding: 2rem 1rem;
      width: 100%;
      height: fit-content;
    }

    .hero .hero1 {
      width: 100%;
      margin: 0 auto;
      height: fit-content;
    }

    .hero .hero1 .heading {
      font-size: 1.8rem;
      line-height: 3.5rem;
    }

    .hero2 {
      margin-top: 2rem;
    }

    .hero2 .student {
      left: 5%;
    }

    .hero2 .video {
      height: 50%;
    }
  }

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    .menu {
      height: auto;
      gap: 0.8rem;
    }
    /* nav .menu ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 12vh;
    right: 0;
    background-color: #fff;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    padding: 1rem 0;
    transition: ease-in-out 0.3s;
  } */
    .hamburger {
      display: block;
    }

    nav .log {
      display: block;
    }
    .hideonmobile {
      display: none;
    }

    .hero {
      width: 100%;
      height: max-content;
      display: block;
    }

    .hero .hero1 {
      width: 100%;
      margin: 0 auto;
      height: auto;
    }

    .hero1 .heading {
      width: 100%;
      font-size: 1.6rem;
      line-height: 1.5rem;
      text-align: center;
    }

    .hero .heading2 {
      font-size: 0.9rem;
      line-height: 1.2rem;
    }

    .hero .hero2 {
      width: 100%;
      margin: 0 auto;
      margin-top: 20px;
      height: auto;
      display: -moz-box;
    }

    .hero2 .video {
      width: 100%;
      height: auto;
      margin-top: 20px;
    }

    .hero2 .student {
      top: 16%;
      left: 40%;
      bottom: auto;
    }

    .hero2 .experince {
      left: 40%;
      bottom: 10px;
      height: auto;
    }

    .hero2 .congrats {
      right: 60%;
      bottom: 20px;
      height: auto;
    }

    /* for tablet devices more the 768px and less than 1024px */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      .hamburger {
        display: block;
      }
      .hideonmobile {
        display: none;
      }
      .hero {
        height: auto;
        width: 100%;
        justify-content: center;
      }

      .hero2 .video {
        height: 50%;
      }

      .hero2 .student {
        left: 3%;
      }

      .hero2 .experince {
        left: 0;
        bottom: 250px;
      }

      .hero2 .congrats {
        right: 20%;
        bottom: 100px;
      }
    }

    /* for desktop bigger than 1024px */
    @media only screen and (min-width: 1025px) {
      .hero {
        width: 100%;
        height: auto;
      }
    }
  }
`;

export default HeroSection