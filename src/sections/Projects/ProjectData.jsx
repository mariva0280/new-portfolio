import hospital from '../../assets/hospital.png'
import car from '../../assets/concesionario.png'
import game from '../../assets/juego.png'
import guess from '../../assets/invitados.png'
import api from '../../assets/openapi.png'
import gym from '../../assets/gym_app.jpg'

const projectData = [
  {
    id: 1,
    title: 'Concesionario',
    shortDescription: 'Gestión concesionario',
    summary: 'Este proyecto permite gestionar un concesionario de vehículos. Se trata de una aplicación backend, implementada con Java. En este proyecto la mayor dificultad para mi fue toda la implementación de los roles de cada persona que puede acceder a la aplicación dependiendo del rol tienes determinados accesos.',
    image: car,
    githubLink: 'https://github.com/mariva0280/vehiculos',
    showInMain: true
  },
  {
    id: 2,
    title: 'Hospital',
    shortDescription: 'Gestión citas hospital',
    summary: 'Este proyecto consiste en una aplicación para la gestión de citas en un hospital. Se trata de una aplicación backend, implementado con Java y SpringBoot. La mayor dificultad fue poder hacer la relación entre pacientes, enfermeras y doctores, aparte de abrir la ventana temporal en la que se podían pedir las citas',
    image: hospital,
    githubLink: 'https://github.com/mariva0280/CitasHospital',
    showInMain: true
  },
  {
    id: 3,
    title: 'Invitados',
    shortDescription: 'Gestión invitados',
    summary: 'Aplicación para la gestión de invitados en eventos.Challenge de Rural Hack, mi primera aplicación full stack, el mayor reto fue crear la frontend en React, porque no lo habia usado nunca, el backend lo implemente con Java y Springboot tecnologías que ya conocia.',
    image: guess,
    githubLink: 'https://github.com/mariva0280/Challenge',
    showInMain:true
  },
  {
    id: 4,
    title: 'Open Api',
    shortDescription: 'Diseño Open Api',
    summary: 'Proyecto de diseño de una API abierta.En este caso el mayor reto fue la implementación del openapi en los apimanager, Apigee y Mulesoft',
    image: api,
    githubLink: 'https://github.com/mariva0280/openapiportfolio',
    showInMain: false
  },
  {
    id: 5,
    title: 'Juego',
    shortDescription: 'App juego arkanoid',
    summary: 'Un juego cláciso tuneado, es un arkanoid con estilo propio, implementado puramente en Javascript, un reto todo el proyecto.',
    image: game,
    githubLink: 'https://github.com/mariva0280/juegoArkanoid',
    showInMain: false
  },
  {
    id: 6,
    title: 'GymPlan',
    shortDescription: 'App de rutinas personalizadas de entrenamiento',
    summary: 'Aplicación full stack para la gestión personalizada de entrenamientos. Incluye una vista de usuario donde se visualizan las rutinas por día, y una vista de administrador para crear y asignar entrenamientos según el usuario y la semana. En futuras versiones se planea integrar inteligencia artificial para adaptar las rutinas de forma más precisa a cada persona.',
    image: gym,
    githubLink: 'https://github.com/mariva0280/eurofirms-bootcamp-202502/tree/feature/project',
    showInMain: false
  }
]
export default projectData