import { data } from "@/types/projects";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface projectsState {
  data: data[];
}

const initialState: projectsState = {
  data: [
    {
      id: 3,
      title: "GIBDD",
      desc: "GIBDD is a service designed for automated retrieval of vehicle information from the official GIBDD (traffic police) website. The system scrapes the website, handles CAPTCHA solving, and then requests detailed data using the vehicle’s VIN number. The project is built using modern technologies like Next.js, React, Tailwind CSS, RTK Query, and NestJS, ensuring high performance and reliability when working with the REST API. Data is fetched and processed in real-time, simplifying access to vehicle-related information.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Logo_of_the_traffic_police_of_Russia.svg/1200px-Logo_of_the_traffic_police_of_Russia.svg.png",
      href: "https://www.gibdd.andreitkachev.com",
      tag: "Full stack",
      padding: 20,
      badges: [
        {
          color: "rgb(88, 196, 220)",
          label: "React",
        },
        {
          color: "#3178c6",
          label: "TypeScript",
        },
        {
          color: "black",
          label: "Rest API",
        },
        {
          color: "rgb(13, 165, 233)",
          label: "Tailwind",
        },
        {
          color: "rgb(34, 138, 230)",
          label: "Mantine",
        },
        {
          color: "rgb(234, 40, 69)",
          label: "Nest.js",
        },
        {
          color: "#00ED64",
          label: "MongoDB",
        },
      ],
    },
    {
      id: 2,
      title: "Signalinks",
      desc: "Signalink.ru is a frontend project built using Next.js, React, Tailwind CSS, RTK Query, Mantine UI, GraphQL.js, and Apollo Client. The platform leverages these modern technologies to deliver a high-performance, responsive, and visually appealing user interface, enabling efficient data fetching and state management through GraphQL and Apollo Client.",
      image:
        "/signalinks.png",
      href: "https://www.signalinks.ru",
      tag: "Frontend",
      padding: 20,
      badges: [
        {
          color: "#3178c6",
          label: "TypeScript",
        },
        {
          color: "black",
          label: "Next.js",
        },
        {
          color: "rgb(255, 0, 152)",
          label: "GraphQL.js",
        },
        {
          color: "rgb(13, 165, 233)",
          label: "Tailwind",
        },
        {
          color: "rgb(34, 138, 230)",
          label: "Mantine",
        },
        {
          color: "rgb(70, 123, 149)",
          label: "Apollo Client",
        },
      ],
    },
    {
      id: 1,
      title: "Airbnb Clone",
      desc: "The Airbnb clone is a full stack project developed with Next.js 13 App Router, React, Tailwind CSS, Prisma, MongoDB, and NextAuth. This platform replicates the core functionalities of Airbnb, providing a seamless user experience for booking accommodations, with secure authentication and efficient database management. The use of modern technologies ensures a responsive and scalable application.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/1280px-Airbnb_Logo_Bélo.svg.png",
      href: "",
      tag: "Full stack",
      padding: 20,
      badges: [
        {
          color: "#3178c6",
          label: "TypeScript",
        },
        {
          color: "black",
          label: "Next.js",
        },
        {
          color: "#1786fb",
          label: "NextAuth.js",
        },
        {
          color: "rgb(13, 165, 233)",
          label: "Tailwind",
        },
        {
          color: "rgb(90, 103, 216)",
          label: "Prisma",
        },
        {
          color: "#00ED64",
          label: "MongoDB",
        },
      ],
    },
  ],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;
