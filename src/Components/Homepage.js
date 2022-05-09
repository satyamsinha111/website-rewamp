import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero-image.jpg";
import angular from "../assets/angular.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
function Homepage() {
  return (
    <>
      <div className="container mx-auto p-4 select-none	">
        <div className="grid md:grid-cols-2 md:gap-2">
          <div className="p-2 tracking-wide">
            <p>
              <span className="font-semibold">Hey there, </span> <br />
              This is Satyam sinha, Software developer at
              <span className="font-semibold italic">
                {" "}
                Navigators software pvt ltd
              </span>
              . I started my coding journey on August 15th 2018. I had a huge
              interest since my childhood on building something that`s being
              used by a lot of people and can add value to their lives. And when
              I got first introduced to programming my intrest got a way to
              expand and I started working on it day and night.First I started
              learning free from Youtube videos.{" "}
              <span className="font-bold">
                (Big shout out to Mysirg, Code with harry and Hitesh Chowdhary
                Youtube channels)
              </span>{" "}
              After I learned some basic fundamentals of programming, I started
              working on few projects (which now looks crappy to me 🤣🤣🤣🤣).
            </p>
            <p>
              After working on some projects, I realised that things are not
              going in my favour 😔😔... Because I was knowing the basic
              concepts of programming but lacking the industry standard best
              practices and trends. I think that learning from youtube videos
              are great but there is a con that there is so much distractions
              comming your way....{" "}
              {/* <Link className="text-cyan-800 font-semibold" to="about">
                Learn more about me
              </Link> */}
            </p>
            <div className="grid md:grid-cols-2 md:gap-2 py-4">
              <Link
                to="about"
                className="px-2 py-2 rounded bg-teal-500 text-sky-100	text-center	m-2"
              >
                Learn more about me
              </Link>
              <Link
                to="contact"
                className="px-2 py-2 rounded bg-teal-500 text-sky-100	text-center	m-2	"
              >
                Reach out to me
              </Link>
            </div>
            <div className="p-2">
              <span className="font-semibold">Technologies I work on :</span>
              <div className="grid md:grid-cols-4 md:gap-4 py-4">
                <ul>
                  <li>
                    <a
                      href="https://angular.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-800"
                    >
                      Angular <i class="fa fa-link ml-2" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://reactjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-800"
                    >
                      React
                      <i class="fa fa-link ml-2" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://nodejs.org/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-800"
                    >
                      Node JS
                      <i class="fa fa-link ml-2" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.mongodb.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-800"
                    >
                      Mongo DB
                      <i class="fa fa-link ml-2" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
                {/* <div id="angular" className="flex justify-center">
                  <img className="aspect-square" src={angular} alt="angular" />
                </div>
                <div id="react">
                  <img className="aspect-square" src={react} alt="react" />
                </div>
                <div id="nodejs">
                  <img className="aspect-square" src={node} alt="nodejs" />
                </div>
                <div id="mongodb">
                  <img className="aspect-square" src={mongo} alt="mongodb" />
                </div> */}
              </div>
            </div>
          </div>
          <div className="p-2">
            <img
              className="w-full aspect-auto rounded transition-all"
              src={hero}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
