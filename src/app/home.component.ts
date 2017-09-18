import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {FilterArrayPipe } from './filter.pipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],



})
export class Home  {

  contactoSeleccionado = null;
  onSelect(contact){
    this.contactoSeleccionado = contact;
  }
  constructor(private router: Router){
    this.options = {
      title: {text:'Estadisticas Goleadora'},
      series: [{
        data: [30, 40, 46, 50, 62, 22],
      }]
    };

  }
  options: Object

 contacts = [
    {
      nombre: 'Cristiano Ronaldo', posicion: 'Delantero', edad: '32', dorsal: '7', nro: 1, foto: "../img/CRISTIANO.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 16,
      Asistencias: 8,
      Minutos: 2531,
      Remates: 40,
      Faltasr: 34,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Karim Benzema', posicion: 'Delantero', edad: '29', dorsal: '9', nro: 2, foto: "../img/BENZEMA.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Gareth Bale', posicion: 'Delantero', edad: '28', dorsal: '11', nro: 3, foto: "../img/BALE.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Luka Modric', posicion: 'Centrocampista', edad: '32', dorsal: '19', nro: 4, foto: "../img/MODRIC.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Toni Kroos', posicion: 'Centrocampista', edad: '27', dorsal: '8', nro: 5, foto: "../img/KROOS.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Casemiro', posicion: 'Centrocampista', edad: '24', dorsal: '14', nro: 6, foto: "../img/CASEMIRO.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Isco', posicion: 'Centrocampista', edad: '25', dorsal: '22', nro: 7, foto: "../img/ISCO.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'James Rodriguez', posicion: 'Centrocampista', edad: '24', dorsal: '10', nro: 8, foto: "../img/JAMES.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Galeria1:"", Galeria2:"", Galeria3:""
    }, {
      nombre: 'Mateo Kovacic', posicion: 'Centrocampista', edad: '22', dorsal: '16', nro: 9, foto: "../img/KOVACIC.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Marco Asensio', posicion: 'Centrocampista', edad: '20', dorsal: '20', nro: 10, foto: "../img/MARCO-ASENSIO.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Lucas Vasquez', posicion: 'Delantero', edad: '25', dorsal: '17', nro: 11, foto: "../img/LUCAS-VAZQUEZ.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Mariano', posicion: 'Delantero', edad: '24', dorsal: '18', nro: 12, foto: "../img/MARIANO.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Galeria1:"", Galeria2:"", Galeria3:""
    }, {
      nombre: 'Alvaro Morata', posicion: 'Delantero', edad: '24', dorsal: '21', nro: 13, foto: "../img/MORATA.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Danilo', posicion: 'Lateral derecho', edad: '24', dorsal: '23', nro: 14, foto: "../img/DANILO.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Dani Carvajal', posicion: 'Lateral derecho', edad: '24', dorsal: '2', nro: 15, foto: "../img/CARVAJAL.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Fabio Coentrao', posicion: 'Lateral izquierdo', edad: '28', dorsal: '15', nro: 16, foto: "../img/COENTRAO.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Marcelo Viera', posicion: 'Lateral izquierdo', edad: '30', dorsal: '12', nro: 17, foto: "../img/MARCELO.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Pepe', posicion: 'Central', edad: '34', dorsal: '3', nro: 18, foto: "../img/PEPE.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Sergio Ramos', posicion: 'Central', edad: '31', dorsal: '4', nro: 19, foto: "../img/RAMOS.jpg",
      parrafo1:"Su garra y desparpajo le convirtieron en jugador revelación de la Liga en la temporada 2004-2005. Por aquel " +
      "entonces vestía la camiseta del Sevilla, en cuya cantera se formó. Su enorme calidad no pasó desapercibida para el Real " +
      "Madrid, que se hizo con sus servicios ese mismo verano.",
      Cita: "“Un jugador de carácter y comprometido con mi club” ",
      parrafo2:"Desde que aterrizó en el conjunto blanco, Ramos ha sido uno de los referentes de la defensa, alternando las " +
      "posiciones de central y lateral derecho. Siempre ha sido un ejemplo de trabajo, compromiso y proyección, lo que le ha " +
      "convertido en el capitán. Sus cualidades defensivas se complementan con su rapidez, potente disparo y olfato goleador.",
      parrafo3:"Su sobriedad en la zaga también le hace indiscutible en la selección, con la que debutó con tan sólo 19 años." +
      " Defendiendo el escudo español fue uno de los protagonistas del combinado que conquistó el Mundial de 2010 y las Eurocopas de 2008 y 2012.",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1, Eurocopa: 2 y Mundial: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Nacho Fernandez', posicion: 'Central', edad: '27', dorsal: '6', nro: 20, foto: "../img/NACHO.jpg",
      parrafo1:"Nacho es un jugador de la casa que representa a la perfección los valores del Real Madrid. Llegó " +
      "en 2001 al Alevín A y, poco a poco, ha ido escalando categorías hasta formar parte del primer equipo. " +
      "Poco después de proclamarse campeón del Europeo sub-21 con la selección española, debutó con la Absoluta " +
      "en Ginebra (Suiza) frente a Chile en 2013.",
      parrafo2:"Deportivamente, una de las fechas más importantes para él fue el 23 de abril de 2011, cuando se estrenó con el " +
      "primer equipo en Mestalla, ante el Valencia. Nacho fue titular en un partido que ganaron los blancos 3-6.",
      parrafo3:"Aunque su posición natural es el eje de la zaga, es polivalente. Actúa con inteligencia en cualquier demarcación" +
      " de la defensa y siempre responde en el lugar que le corresponda. Destaca por su rapidez, sobriedad, seguridad al cruce, " +
      "pero sobre todo, por su gran madurez en el terreno de juego, a pesar de su juventud. ",
      Cita: "“Pretendo ser importante para el equipo y dar seguridad a la línea defensiva” ",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Raphael Varane', posicion: 'Central', edad: '24', dorsal: '5', nro: 21, foto: "../img/VARANE.jpg",
      parrafo1:"Varane comenzó su carrera futbolística con tan sólo siete años. Dio sus primeras muestras de " +
      "calidad en el Centro de Formación de Fútbol de Lievin (Francia). Allí desarrolló su principal cualidad, " +
      "la elegancia con el balón. Empezó a destacar en las categorías inferiores del Racing Club de Lens y con" +
      " 17 años debutó en Primera División con el equipo francés. Fue una de las grandes sensaciones de la temporada 2010/11.",
      parrafo2:"El defensa juega en el Lens cuando el Real Madrid apuesta por su valía como futbolista. Al año de llegar a la " +
      "entidad, el equipo logra la Liga y la Supercopa de España. En su país también ha triunfado, consiguiendo ser internacional" +
      " absoluto con la selección francesa.",
      parrafo3:"Conjuga juventud con gran calidad y se ha ganado desde hace tiempo la admiración de Europa. Es uno de los defensas" +
      " con mayor futuro y valía. Lo demuestra en el campo, gracias a su dominio del juego aéreo, su polivalencia en el césped, " +
      "elegancia, capacidad de anticipación y madurez.",
      Cita: "“Un defensa joven con hambre de aprender y ayudar al equipo” ",
      trofeos:"Champions: 2, Mundialito: 2, Supercopaeuropa: 2, Liga: 1, Copa del Rey: 1, Super Copa España: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Keylor Navas', posicion: 'Arquero', edad: '31', dorsal: '1', nro: 22, foto: "../img/KEYLOR.jpg",
      parrafo1:"Rápido, con grandes reflejos, siempre bien colocado y muy seguro en el uno contra uno, Keylor Navas reúne t" +
      "odas las características de un portero excepcional. Así lo demostró en el Mundial de Brasil, donde solo encajó dos goles " +
      "en cinco partidos y guio a Costa Rica a cuartos de final por primera vez en la historia.",
      parrafo2:"Antes de llegar a Europa, dio sus primeros pasos futbolísticos en el Deportivo Saprissa de Costa Rica, con el " +
      "que consiguió dos Ligas, dos campeonatos de invierno y dos de verano, además de una Copa de Campeones de la CONCACAF. " +
      "En 2010 firmó por el Albacete y, tras destacar esa temporada, fichó por el Levante.",
      parrafo3:"La campaña 2013/14 terminó como el portero con más paradas de la Liga (160) y con mayor porcentaje de " +
      "intervenciones de los que jugaron más de cinco partidos (80,1%). Con sus paradas contribuyó a que el Levante acabara " +
      "el campeonato como el quinto menos goleado, solo por detrás de los cuatro equipos de Champions.",
      Cita: "“Llegar al mejor equipo del mundo es algo que siempre había soñado” ",
      trofeos:"Champions: 1, Mundialito: 2, Supercopaeuropa: 2, Costarica: Campeonato de invierno de costarica:2, Campeonato" +
      "de verano de costarica: 2, Liga de costarica: 1 y CONCACAF: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Kiko Casilla', posicion: 'Arquero', edad: '31', dorsal: '13', nro: 23, foto: "../img/CASILLA.jpg",
      parrafo1:"Portero de gran envergadura, que destaca por su dominio del juego aéreo y por unos reflejos que " +
      "le han permitido firmar intervenciones espectaculares. De hecho, fue el guardameta de la Liga que acumuló " +
      "más paradas entre las temporadas 2013/14 y 2014/15.",
      parrafo2:"Casilla conoce a la perfección el Real Madrid, puesto que ya defendió la camiseta blanca en las " +
      "categorías inferiores. Llegó en el verano de 2000 al Cadete B y formó parte del Castilla que jugó en Segunda " +
      "en las campañas 2005-06 y 2006-07. En esta última entró en la dinámica del primer equipo y fue convocado en" +
      " varias ocasiones como tercer portero.",
      parrafo3:"En 2007 se marchó al Espanyol, donde se asentó definitivamente tras dos cesiones al Cádiz y al Cartagena. " +
      "En noviembre de 2014, tras varias convocatorias, debutó con la selección española en un amistoso ante Alemania.",
      Cita: "“Volver al Madrid ha sido un regalo”",
      trofeos:"Champions: 1, Mundialito: 1, Supercopaeuropa: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }, {
      nombre: 'Ruben Yanez', posicion: 'Arquero', edad: '24', dorsal: '25', nro: 24, foto: "../img/YANEZ.jpg",
      parrafo1:"Portero gerundense que se incorporó en 2010 a la disciplina del Real Madrid para reforzar " +
      "la plantilla del Juvenil B. Tiene mucho potencial y se adaptó a la perfección a la dinámica del " +
      "equipo blanco.",
      parrafo2:"Es un guardameta seguro, rápido de reflejos y habilidoso cuando tiene que jugar el balón " +
      "con los pies. Debutó en Segunda B en la campaña 2012-13 con el Real Madrid C y en la Liga Adelante " +
      "en la 13-14 con el Castilla. Tras subir al primer equipo, debutó en partido oficial contra la Cultural " +
      "Leonesa en la Copa del Rey 2016/17",
      Cita: "“Soy un portero seguro, tanto por arriba como por abajo” ",
      trofeos:"Champions: 1, Mundialito: 1, Supercopaeuropa: 1",
      Goles: 10,
      Asistencias: 1,
      Minutos: 2531,
      Remates: 32,
      Faltasr: 28,
      Equipos: "Seleccion: Portugal, Equipos Antiguos: Manchester United, Sporting de Lisboa"
    }];


}
