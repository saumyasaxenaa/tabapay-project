import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Parent A",
    path: "/parenta",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Child A1",
        path: "/parentA/childA1",
      },
      {
        title: "Child A2",
        path: "/parentA/childA2",
      },
    ],
  },
  {
    title: "Parent B",
    path: "/parentB",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Child B1",
        path: "/parentB/childB1",
        cName: "sub-nav",
      },
      {
        title: "Child B2",
        path: "/parentB/childB2",
        cName: "sub-nav",
      },
      {
        title: "Child B3",
        path: "/parentB/childB3",
      },
    ],
  },
  {
    title: "Parent C",
    path: "/parentc",
  },
  {
    title: "Parent D",
    path: "/parentD",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "child D1",
        path: "/parentD/childD1",
      },
      {
        title: "child D2",
        path: "parentD/childD2",
      },
    ],
  },
];
