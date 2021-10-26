# dtwise assignment
##### Simple Dashboard app
by Odysseas Mastorakis

## Setup
---
- Installing dependencies and running the app:
    From the App folder

        npm install package.json
        npm start 
- Mock API:
    From the Home folder

        npm install -g json-server
        json-server --watch data.json --port 8000

## What it does
---
### Externally
- Displays minimum, maximum and average values of a metric from the data. The metric is chosen by the user.
- Displays two line charts. One contains the whole data of metric_1 per day. The other contains a given month of data of metric_1. The month is chosen by the user.

### Internally
- Fetches data from an `API` and stores it in a **React Context**. This makes the data accessible to every component and thus eases the process of compartmentalization.
- The `App` component is responsible for displaying the proper page based on user navigation, as well as providing the basic layout.
- The `Stats` component handles ***section 1*** of the assignment. The function `calculateMinMax` calculates all the required values on load. When the user chooses a metric, proper values are passed to `StatsDisplay` component, which gets rendered.
- The `GraphDisplay` component handles ***section 2*** of the assignment. Data is sorted based on **timestamp**, on load.
  - ***Complete Graph:*** Timestamps are converted to date/month and the graph receives the sorted time and **metric_1** data on load.
  - ***Monthly Graph:*** When a month is chosen, the complete data is looped over and a new array is created with the data that corresponds to the desired month. That data is then passed to the graph.
 
## Dependencies
---
Decision criteria were: Simple, Lightweight and Open Source.
### React
- **React-Geist UI**:  A simple react UI library for overall styling.
    [https://react.geist-ui.dev/en-us](https://react.geist-ui.dev/en-us)
- **React-Geist UI icons**: Simple icons for better UI.
    [https://react.geist-ui.dev/en-us/components/icons](https://react.geist-ui.dev/en-us/components/icons)
- **React Markdown**: For displaying the README page inside the app.
    [https://github.com/remarkjs/react-markdown](https://github.com/remarkjs/react-markdown)
- **React Chart.js**: For displaying the charts.
    [https://github.com/reactchartjs/react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)

### Api
- **Json-server**: Fake API to serve the data.
    [https://github.com/typicode/json-server#alternative-port](https://github.com/typicode/json-server#alternative-port)