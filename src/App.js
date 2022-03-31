import React from "react";
import AppPart1 from "./part_1/app_part1";
import AppPart2 from "./part_2/app_part_2";
import AppPart3 from "./part_3/app_part_3";
import PageSelector from "./page_selector";
import FetchPostsApp from "./fetch_posts_app/fetch_posts_app";
import AppReactAdvanced from "./react_advanced/app_react_advanced"
import AppReactHooks from "./react_hooks/app_react_hooks";

function App() {
  return (
    <PageSelector pages={
      [
        {
          name: "Part 1",
          component: <AppPart1 />
        },
        {
          name: "Part 2",
          component: <AppPart2 />
        },
        {
          name: "Part 3",
          component: <AppPart3 />
        },
        {
          name: "Fetch Posts",
          component: <FetchPostsApp />
        },
        {
          name: "React advanced",
          component: <AppReactAdvanced />
        },
        {
          name: "React hooks",
          component: <AppReactHooks />
        }
      ]
    } />
  );
}

export default App;
