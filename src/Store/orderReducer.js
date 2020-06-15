let initialState = {
  orders: [
    {
      id: 23818,
      data: 'Apr 27, 2021',
      time: '11:44',
      actMessage: 'Buy in',
      gameName: 'Fortnine',
      actDescription: 'the unique item,',
      artefactname : 'Golden PickAxe',
      type: 'Buy',
      price: '2.25',
      status: 'Done',
    },
    {
      id: 23817,
      data: 'Oct 27, 2020',
      time: '09:51',
      actMessage: 'Buy in',
      gameName: 'WOW BFA',
      actDescription: 'the unique item,',
      artefactname : 'Axe of Ice King',
      type: 'Buy',
      price: '65.00',
      status: 'Cancel',
    },
    {
      id: 23816,
      data: 'Dec 27, 2019',
      time: '14:46',
      actMessage: 'Buy in',
      gameName: 'Fortnine',
      actDescription: 'the unique user,',
      artefactname : 'Happy 8 ball',
      type: 'Buy',
      price: '43.00',
      status: 'Done',
    },
    {
      id: 23815,
      data: 'Dec 14, 2019',
      time: '04:52',
      actMessage: 'Make up deposit',
      gameName: '$ 5,000.00',
      actDescription: 'to your account',
      artefactname : '',
      type: 'Deposit',
      price: '5,000.00',
      status: 'Done',
    },
    {
      id: 23814,
      data: 'Feb 2, 2019',
      time: '09:44',
      actMessage: 'Buy in',
      gameName: 'Fortnine',
      actDescription: 'the unique user,',
      artefactname : 'Golden fish of enemy',
      type: 'Buy',
      price: '49.00',
      status: 'Done',
    },
    {
      id: 23813,
      data: 'Jul 30, 2018 ',
      time: '12:16',
      actMessage: 'Buy in',
      gameName: 'Fortnine',
      actDescription: 'the unique user,',
      artefactname : 'Death Unikorn',
      type: 'Buy',
      price: '4.00',
      status: 'Done',
    },
    {
      id: 23812,
      data: 'Jan 28, 2017',
      time: '13:17',
      actMessage: 'Buy in',
      gameName: 'WOW BFA',
      actDescription: 'the unique item,',
      artefactname : 'Axe of Fire',
      type: 'Buy',
      price: '49.00',
      status: 'Error',
    },
    {
      id: 23811,
      data: 'Jul 14, 2016',
      time: '14:23',
      actMessage: 'Buy in',
      gameName: 'WOW Classic',
      actDescription: 'the unique game area,',
      artefactname : 'Dream of Life',
      type: 'Buy',
      price: '32.99',
      status: 'Done',
    },
    {
      id: 23810,
      data: 'Dec 4, 2015',
      time: '06:14',
      actMessage: 'Buy in',
      gameName: 'WOW Classic',
      actDescription: 'the unique game area,',
      artefactname : 'Axe of Ice King',
      type: 'Buy',
      price: '43.00',
      status: 'Done',
    },
    {
      id: 23809,
      data: 'Sep 2, 2015',
      time: '19:45',
      actMessage: 'Make up deposit',
      gameName: '$ 1,500.00',
      actDescription: 'to your account',
      artefactname : '',
      type: 'Deposit',
      price: '1,500.00',
      status: 'Done',
    },
    {
      id: 23808,
      data: 'Jan 14, 2014',
      time: '21:43',
      actMessage: 'Buy in',
      gameName: 'WOW Classic',
      actDescription: 'the unique game area,',
      artefactname : 'Axe of Ice King',
      type: 'Buy',
      price: '140.50',
      status: 'Done',
    },
    {
      id: 23807,
      data: 'Jan 14, 2013',
      time: '21:43',
      actMessage: 'Buy in',
      gameName: 'WOW Classic',
      actDescription: 'the unique game area,',
      artefactname : 'Axe of Ice King',
      type: 'Buy',
      price: '140.50',
      status: 'Error',
    },


  ],
}

const orderReducer = (state = initialState, action) => {

  switch (action.type) {
    default:
      return state
  }
}


export default orderReducer
