import React from "react";
import foodkart from "../assets/foodcart.png";
import { Link } from "react-router-dom";
import digiocean from "../assets/digiocean.png";
import angular from "../assets/angular.png";
import node from "../assets/node.png";
import firebase from "../assets/firebase.png";
import trello from "../assets/trello.png";
import time from "../assets/time.png";
import lco from "../assets/lco.png";

function Works() {
  return (
    <>
      <div className="container mx-auto py-4 mx-2 select-none">
        <h4 className="font-semibold">
          Have a look at my works{" "}
          <span className="animate-bounce w-6 h-6">👇</span>
        </h4>
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div>
            <img
              src={foodkart}
              alt="foodkart"
              className="aspect-auto rounded"
            />
          </div>
          <div>
            <div className="flex">
              <h3 className="font-bold mr-2">MEAL DROP</h3>
              <a
                href="https://github.com/satyamsinha111/foodcart-frontend"
                target="_blank"
                rel="noreferrer"
                className="text-base text-emerald-800 mx-2"
              >
                Source code
              </a>
              <a
                href="http://foodcart.fun/"
                target="_blank"
                rel="noreferrer"
                className="text-base text-emerald-800	mx-2"
              >
                Website
              </a>
            </div>
            <div>
              <p>
                This is a food delivery application ecosystem which is currently
                under development. This application will be consisting of an
                admin panel and a mobile app. Users will be able to order there
                desired food in the mobile app which will be added from the
                admin panel by the owners. This can also act as a bridge between
                vendors and the app.Non technical vendors can ask us to host
                their food on our website and we can charge them by providing an
                ecosystem.
              </p>
            </div>
            <div id="techused" className="my-2">
              <h3 className="font-bold">Big thanks to</h3>
              <div className="grid grid-cols-4 gap-2 my-2">
                <img width={100} src={digiocean} alt="doc" />
                <img width={100} src={angular} alt="ang" />
                <img width={100} src={node} alt="node" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div>
            <div className="flex">
              <h3 className="font-bold mr-2">Courses Website</h3>
              <a
                href="https://github.com/satyamsinha111/lcoproject"
                target="_blank"
                rel="noreferrer"
                className="text-base text-emerald-800 mx-2"
              >
                Source code
              </a>
              <a
                href="https://lcocourses.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-base text-emerald-800	mx-2"
              >
                Website
              </a>
            </div>
            <div>
              <p>
                This is a website for selling and buying of courses. I built
                this website by following along a youtube video and deployed it
                on netlify.
              </p>
            </div>
            <div id="techused" className="my-2">
              <h3 className="font-bold">Big thanks to</h3>
              <div className="grid grid-cols-4 gap-2 my-2">
                <img width={100} src={angular} alt="ang" />
                <img width={100} src={node} alt="node" />
              </div>
            </div>
          </div>
          <div>
            <img src={lco} alt="foodkart" className="aspect-auto rounded" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div>
            <img src={time} alt="foodkart" className="aspect-auto rounded" />
          </div>
          <div>
            <div className="flex">
              <h3 className="font-bold mr-2">Time Complexity Visualiser</h3>
              <a
                href="https://github.com/satyamsinha111/Time-complexity-analyser"
                target="_blank"
                rel="noreferrer"
                className="text-base text-emerald-800 mx-2"
              >
                Source code
              </a>
              <a
                href="https://learntimecomplexity.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-base text-emerald-800	mx-2"
              >
                Website
              </a>
            </div>
            <div>
              <p>
                This is a tool for visualising time complexity built with
                angular deployed on netlify. This app can be usefull for the
                beginner who find difficult to understand timecomplexity in a
                practical manner.
              </p>
            </div>
            <div id="techused" className="my-2">
              <h3 className="font-bold">Big thanks to</h3>
              <div className="grid grid-cols-4 gap-2 my-2">
                <img width={100} src={angular} alt="ang" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div>
            <div className="flex">
              <h3 className="font-bold mr-2">TRELLO CLONE</h3>
              <a
                href="https://github.com/satyamsinha111/clone-trello-frontend"
                target="_blank"
                rel="noreferrer"
                className="text-base text-emerald-800 mx-2"
              >
                Source code
              </a>
              <Link to="#" className="text-base text-red-800	mx-2">
                Website - Not hosted
              </Link>
            </div>
            <div>
              <p>
                This is a task tracking application like we have in trello. Here
                we can make our task in progress complete etc. We can not say
                that its completly a clone of trello but it is inspired by
                trello. I had tol shut down this project after completing it
                because of the funds issue. Other wise it would have been hosted
                till now. Anyways I had fun working on this project. Its backend
                was build with firebase and frontend with angular.
              </p>
            </div>
            <div id="techused" className="my-2">
              <h3 className="font-bold">Big thanks to</h3>
              <div className="grid grid-cols-4 gap-2 my-2">
                <img width={100} src={firebase} alt="doc" />
                <img width={100} src={angular} alt="ang" />
                <img width={100} src={node} alt="node" />
              </div>
            </div>
          </div>
          <div>
            <img src={trello} alt="foodkart" className="aspect-auto rounded" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
