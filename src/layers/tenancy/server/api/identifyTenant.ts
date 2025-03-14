export default defineEventHandler(async (event) => {

    const theme = await import('@/preset.js').then(preset => preset.default)

    if(true){

    return {
      name: 'leadcars',
      id :1,
      logo : '~/assets/images/leadcars.svg',
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
            },
          colorScheme: {
            light: {
                surface: {
                    0: "#ffffff",
                    50: "#f8fafc",
                    100: "#f1f5f9",
                    200: "#e2e8f0",
                    300: "#cbd5e1",
                    400: "#edf1f3",
                    500: "#edf1f3",
                    600: "#bcd0dd",
                    700: "#334155",
                    800: "#1e293b",
                    900: "#0f172a",
                    950: "#020617"
                },
            }
          }
      }
    }
    }
  }
  })
  