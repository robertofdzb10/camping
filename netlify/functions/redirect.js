exports.handler = async (event, context) => {
    const page = event.queryStringParameters.page || 'home';
    let location = '/pages/home.html';
  
    switch (page) {
      case 'alojamiento':
        location = '/pages/alojamiento.html';
        break;
      case 'contacto':
        location = '/pages/contacto.html';
        break;
    }
  
    return {
      statusCode: 301,
      headers: {
        Location: location,
      },
    };
  };
  