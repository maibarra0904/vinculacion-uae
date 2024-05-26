import PropTypes from 'prop-types';
import axios from "axios";
import { useEffect, useState } from 'react';

const EmailSendStudent = ({email, oficio, fecha}) => {

  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const userData = {
    email: email?.toString(),
    oficio: oficio?.toString(),
    fecha: fecha?.toString(),
  };

  useEffect(() => {
    setTimeout(() => {
      setResult('')
    }, 2000);
  },[result])

  const mailtoLink = async() => {
    try {
      setLoading(true)
      
      await axios
            .post(process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND+"/send", userData).then((data) => {
              setResult(data)
              setLoading(false)
            })
    } catch (error) {
      setLoading(false)
      setResult({data: {msg: 'Hubo un error al conectar con la BD'}})
    }
  }

  return (
    <>
    <a 
      onClick={mailtoLink}
      className={`flex justify-center items-center p-2 m-2  text-white rounded-lg ${loading ? 'bg-indigo-200 hover:cursor-not-allowed' : 'bg-indigo-600 hover:cursor-pointer'}`}
    >
      Enviar
    </a>
    <div className="flex justify-center items-center p-2 m-2 text-red-600 rounded-lg hover:cursor-pointer">
        Nota.- Si el correo se envía correctamente y no lo encuentras en la bandeja de entrada verifica en correo no deseado, spam u otros
    </div>
    {
      loading && 
      <div className="flex justify-center items-center p-2 m-2 text-green-800 rounded-lg hover:cursor-pointer">
        Enviando info al correo, espere... Esto puede tardar varios segundos...
      </div>
    }
    {
      result && !loading &&
      <div className="flex justify-center items-center p-2 m-2 text-green-800 rounded-lg hover:cursor-pointer">
        {result.data.msg}
      </div>
    }
    </>
  );
};

EmailSendStudent.propTypes = {
    email: PropTypes.string.isRequired,
    oficio: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
  };

export default EmailSendStudent;
