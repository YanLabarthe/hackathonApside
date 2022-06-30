import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { DiReact } from "react-icons/di";
import { GrVmMaintenance } from "react-icons/gr";
import { Link } from "react-router-dom";

import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <div>
      <Link to="/weekTime">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Go to the current Sprint
        </button>
      </Link>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="27 jun 2022 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GrVmMaintenance />}
        >
            <button type="button" className="focus:outline-none text-white text-2xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>
          <h3 className="vertical-timeline-element-title">Maintenance</h3>

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded">
            detail
          </button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="20 Jun 2022 - 26 Jun 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<DiReact />}
          
        >
            <button type="button" className="focus:outline-none text-white text-2xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>
          <h4 className="vertical-timeline-element-subtitle">
            creation of the discussion feed
          </h4>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded">
            detail
          </button>
          <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2 border border-red-800 rounded">
            Nodejs
          </button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="13 Jun 2022 - 19 Jun 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<DiReact />}
        >
            <button type="button" className="focus:outline-none text-white text-2xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>
          <h4 className="vertical-timeline-element-subtitle">- Week off -</h4>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded">
            detail
          </button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="6th Jun 2022 - 12 Jun 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<DiReact />}
        >
            <button type="button" className="focus:outline-none text-white text-2xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>
          <h4 className="vertical-timeline-element-subtitle">
            Setup of the Back office
          </h4>
          <p>Creation of the Database</p>{" "}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded">
            detail
          </button>
          <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2 border border-red-800 rounded">
            Nodejs
          </button>
          <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2 border border-red-800 rounded">
            Express
          </button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="30 may 2022 - 5th of jun 2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<DiReact />}
        >
            <button type="button" className="focus:outline-none text-white text-2xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>
          <h3 className="vertical-timeline-element-title">
            Creation of the Footer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Creation of the contact form
          </h4>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded">
            detail
          </button>
          <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2 border border-red-800 rounded">
            React
          </button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="23 May 2022 - 29 May 2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<DiReact />}
        >
            <button type="button" className="focus:outline-none text-white text-2xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>
          <h3 className="vertical-timeline-element-title">Set the navBar</h3>
          <h4 className="vertical-timeline-element-subtitle">
            create the main page
          </h4>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded">
            detail
          </button>
          <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2 border border-red-800 rounded">
            React
          </button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="16 May 2022 - 22 May 2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<DiReact />}
        >
            <button type="button" className="focus:outline-none text-white text-2xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>
          <h3 className="vertical-timeline-element-title font-bold">UX</h3>

          <p>Discuss around Visual Design and style of the app</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded">
            detail
          </button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<DiReact />}
        >
            <button type="button" className="focus:outline-none text-white text-2xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>
          <h3 className="vertical-timeline-element-title font-bold">
            Project launch
          </h3>

          <p>Review terms and sign contract with client</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded">
            detail
          </button>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
