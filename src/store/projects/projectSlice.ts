import { data } from "@/types/projects";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface projectsState {
  data: data[];
}

const initialState: projectsState = {
  data: [
    {
      id: 2,
      title: "Signalinks",
      desc: "Frontend project with Next.js, React, Tailwind, RTK Query, Mantine UI, GraphQL.js, Apollo Client ",
      image:
        "https://dashboard.signalinks.ru/strapi-static/signalinks_logo_574702c9c9.svg",
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
      desc: "Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/1280px-Airbnb_Logo_Bélo.svg.png",
      href: "https://www.airbnb.andreitkachev.com",
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
