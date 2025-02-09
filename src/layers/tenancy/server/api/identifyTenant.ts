export default defineEventHandler((event) => {


    if(event.node.req.headers.host === 'localhost:3000'){

    return {
      name: 'leadcars',
      id :1,
      logo : '/assets/images/leadcars.svg',
      theme : {
        semantic: {
            primary: {
                400: '#2a415a',
                500: '#2a415a',
            }
        }
    }
    }
  }

  if(event.node.req.headers.host === 'localhost:4000'){

    return {
      name: 'maxterauto',
      id :2,
      logo : '/assets/images/maxterauto.png',
      theme : {
        semantic: {
            primary: {
                400: '#b62025',
                500: '#b62025',
            }
        }
    }
    }
  }
  })
  