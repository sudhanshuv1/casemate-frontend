import image01 from "./images/websiteexplain1.jpg";
import image02 from "./images/websiteexplain2.jpg";
import image03 from "./images/websiteexplain3.jpg";

import { BsFillFileEarmarkCheckFill, BsClipboardCheck } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";

const icon01 = <BsFillFileEarmarkCheckFill />;
const icon02 = <BsClipboardCheck />;
const icon03 = <FaClipboardList />;

export const data = [
  {
    _id: "1",
    icon: icon01,
    image: image01,
    description:
      "Make an appointment with various legal specialists. Their calendar and availability are directly accessible to you",
  },
  {
    _id: "2",
    icon: icon02,
    image: image02,
    description:
      "Your first appointment can be by phone, videoconference or face-to-face",
  },
  {
    _id: "3",
    icon: icon03,
    image: image03,
    description:
      " Check the progress of your file online and download the list of documents to be provided",
  },
];
