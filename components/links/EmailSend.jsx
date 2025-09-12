import PropTypes from 'prop-types';

const EmailLink = ({emailTutor, nombre, semestre, onClick}) => {
  const recipientEmail = emailTutor;
  const ccEmail = "mibarra@uagraria.edu.ec";
  const subject = 'Asignación de tutor';
  const body = `Estimado Docente: 

  Por medio de la presente le comunico que Ud. ha sido asignado como el tutor de mi próxima actividad de vinculación para lo cuál estaré contactándome con Ud. en los próximos días a fin de avanzar con la documentación respectiva.
  
  Atentamente,

  ${nombre}
  Estudiante de la carrera de Computación (${semestre} SEMESTRE)
  `


  const mailtoLink = `mailto:${recipientEmail}?cc=${ccEmail}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a 
      href={mailtoLink}
      className="p-2 m-2 bg-indigo-600 text-white rounded-lg"
      onClick={onClick}
    >
      Notificar por Correo
    </a>
  );
};

EmailLink.propTypes = {
    emailTutor: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    semestre: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  };

export default EmailLink;
