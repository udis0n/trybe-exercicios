const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const person = order.order.delivery.deliveryPerson;
    const nome = order.name;
    const fone = order.phoneNumber;
    let address = Object.values(order.address);
    address = address.join(', ');

    const frase = `Olá ${person}, entrega para: ${nome}, Telefone: ${fone}, ${address}.`
    console.log(frase);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    
    const nome = order.name = 'Luiz Silva';
    
    let pizzas = Object.keys(order.order.pizza);
    pizzas = pizzas.join(', ')

    let drinks = Object.values(order.order.drinks.coke.type)
    drinks = drinks.join('');

    const payment = order.payment.total = 50;    

    const frase = `Olá ${nome}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${payment},00.`;
    console.log(frase);
  }
  
  orderModifier(order);