import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './App.css';

const data = [
  {
    name: 'Mon',
    Precipitation: 2,
    Evaporation: 2,
    amt: 2400,
    Temperature: 2
  },
  {
    name: 'Tue',
    Precipitation: 8,
    Evaporation: 6,
    amt: 2210,
    Temperature: 3
  },
  {
    name: 'Wed',
    Precipitation: 11,
    Evaporation: 9,
    amt: 2290,
    Temperature: 4
  },
  {
    name: 'Thu',
    Precipitation: 25,
    Evaporation: 20,
    amt: 2000,
    Temperature: 4.8
  },
  {
    name: 'Fri',
    Precipitation: 27,
    Evaporation: 23,
    amt: 2181,
    Temperature: 6
  },
  {
    name: 'Sat',
    Precipitation: 61,
    Evaporation: 66,
    amt: 2500,
    Temperature: 11
  },
  {
    name: 'Sun',
    Precipitation: 175,
    Evaporation: 140,
    amt: 2100,
    Temperature: 21
  },
];



function App() {
  return (
      <ResponsiveContainer  width="100%" aspect={3}>
            <ComposedChart
              width={400}
              height={500}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
            <CartesianGrid />
            <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px', margin: '-20px' }}/>
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            
            <Bar yAxisId="left" dataKey="Evaporation" fill="#5470C6" />
            <Bar yAxisId="left" dataKey="Precipitation" fill="#91CC75" />
            <Line yAxisId="right" dataKey="Temperature" fill="#FAC858" stroke="#FAC858"/>
          </ComposedChart>
      </ResponsiveContainer>
  );
}

export default App;
