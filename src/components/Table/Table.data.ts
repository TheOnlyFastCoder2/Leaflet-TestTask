import DataSource from 'lib/types/Table';

export const dataSource: DataSource[] = [
  {
    key: "1",
    fromLat: 59.84660399,
    fromLng: 30.29496392,
    toLat:  59.82934196,
    toLng: 30.42423701,
  },
  {
    key: "2",
    fromLat: 59.82934196,
    fromLng: 30.42423701,
    toLat:  59.92761296,
    toLng: 30.41705607,
  },
  {
    key: "3",
    fromLat: 59.83567701,
    fromLng: 30.38064206,
    toLat:  59.84660399,
    toLng: 30.29496392,
  },
  {
    key: "4",
    fromLat: 59.84660399,
    fromLng: 30.29496392,
    toLat:  59.84660399,
    toLng: 30.82761295,
  },
  {
    key: "5",
    fromLat: 59.83567701,
    fromLng: 30.38064206,
    toLat:  59.84660399,
    toLng: 30.29496392,
  }
]

export const columns = [
  {
    title: 'Номер заявки',
    dataIndex: 'key',
    // key: 'key"'",
  },
  {
    title: 'Координаты от lat',
    dataIndex: 'fromLat',
    // key: 'fromLat',
  },
  {
    title: 'Координаты от lng',
    dataIndex: 'fromLng',
    // key: 'fromLng',
  },
  {
    title: 'Координаты до lat',
    dataIndex: 'toLat',
    // key: 'toLat',
  },
  {
    title: 'Координаты до lng',
    dataIndex: 'toLng',
    // key: 'toLng',вrow
  },
];
