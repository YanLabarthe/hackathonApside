import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { DiReact } from "react-icons/di";

import { Link } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";

const WeekTimeline = () => {
  return (
    <div>
      <Link to="/timeline">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          return to the main Timeline
        </button>
      </Link>

      <VerticalTimeline>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Monday 27 Jun 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<DiReact />}
        >
            <button type="button" className="focus:outline-none text-white text-2xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>
          <h4 className="vertical-timeline-element-subtitle">
            Adding some content for the main page 
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
          date="Thuesday 28 Jun 2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<DiReact />}
        >
            <button type="button" className="focus:outline-none text-white text-2xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>
          <h3 className="vertical-timeline-element-title">
        Working on the contact form, add some restriction on the input request.   </h3>
         
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded">
            detail
          </button>
          <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2 border border-red-800 rounded">
            React
          </button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Wednesday 29 Jun 2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<DiReact />}
        >
            <button type="button" className="focus:outline-none text-white text-2xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>
          <h3 className="vertical-timeline-element-title">Set the navBar</h3>
          <h4 className="vertical-timeline-element-subtitle">
          Working on the contact form, add some restriction on the input request.
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
          date="Thursday 30 Jun 2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<DiReact />}
        >
            <button type="button" className="focus:outline-none text-white text-2xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>
           <h4 className="vertical-timeline-element-subtitle">
          Working on the contact form, add some restriction on the input request.
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
          date="Friday 1st of July 2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<DiReact />}
        >
         <button type="button" className="focus:outline-none text-white text-2xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Saturday 2nd of July 2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<DiReact />}
        >
        
        <button type="button" className="focus:outline-none text-white text-2xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sunday 3rd of July 2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<DiReact />}
        >
         
         <button type="button" className="focus:outline-none text-white text-2xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default WeekTimeline;
