"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatNumber, formatDate } from "./../../utils/formatFunctions";
import swal from "sweetalert";
import Image from "next/image";
import EmailLink from "@/components/links/EmailSend";
import EmailSendStudent from "@/components/links/EmailSendStudent";
import Alerta from "@/components/ui/Alerta";
import { useMyContext } from "../context/myContext";
import { userFromEmail } from "@/utils/takeuserFromemail";


const availabilityOptions = [
  { name: "--- SELECCIONE ---", value: true },
  { name: "PASO 1 - PERFIL LC", value: false },
  { name: "PASO 2 - PERFIL LC", value: false },
  { name: "PASO 1 - INICIO PP", value: false },
  { name: "PASO 2 - INICIO PP", value: false },
  { name: "INFORME - PP", value: false },
  { name: "OTRO", value: false },
];

const periodoOptions = [
  { name: "--- SELECCIONE ---", value: true },
  { name: "2013-2014", value: false },
  { name: "2014-2015", value: false },
  { name: "2015-2016", value: false },
  { name: "2016-2017", value: false },
  { name: "2017-2018", value: false },
  { name: "2018-2019", value: false },
  { name: "2019-2020", value: false },
  { name: "2020-2021", value: false },
  { name: "2021-2022", value: false },
  { name: "2022-2023", value: false },
  { name: "2023-2024", value: false },
  { name: "2024-2025", value: false },
  { name: "OTRO", value: false },
  { name: "NO APLICA", value: false },
];

const semestreOptions = [
  { name: "--- SELECCIONE ---", value: true },
  { name: "PRIMER", value: false },
  { name: "SEGUNDO", value: false },
  { name: "TERCER", value: false },
  { name: "CUARTO", value: false },
  { name: "QUINTO", value: false },
  { name: "SEXTO", value: false },
  { name: "SEPTIMO", value: false },
  { name: "OCTAVO", value: false },
  { name: "NOVENO", value: false },
  { name: "DECIMO", value: false },
  { name: "EGRESADO", value: false },
  { name: "NO APLICA", value: false },
];

const tutorOptions = [
  { name: "--- SELECCIONE ---", email: "N/A", value: true },
  {
    name: "ARCE RAMIREZ ANGEL ALBERTO",
    email: "aarce@uagraria.edu.ec",
    value: false,
  },
  {
    name: "FERRUZOLA GOMEZ ENRIQUE",
    email: "eferruzola@uagraria.edu.ec",
    value: false,
  },
  {
    name: "LOPEZ HUAYAMAVE JORGE LUIS",
    email: "jlopez@uagraria.edu.ec",
    value: false,
  },
  {
    name: "MOLINA OLEAS WILSON OCTAVIO",
    email: "wmolina@uagraria.edu.ec",
    value: false,
  },
  {
    name: "ORTEGA PONCE LAURA XIMENA",
    email: "lortega@uagraria.edu.ec",
    value: false,
  },
  {
    name: "POW CHONG LONG VASQUEZ DARWIN ROBERTO",
    email: "dpow@uagraria.edu.ec",
    value: false,
  },
  {
    name: "CARDENAS RODRIGUEZ MARIO MANUEL",
    email: "mcardenas@uagraria.edu.ec",
    value: false,
  },
  {
    name: "BERMEO ALMEIDA OSCAR XAVIER",
    email: "obermeo@uagraria.edu.ec",
    value: false,
  },
  {
    name: "BAZAN VERA WILLIAM DAVID",
    email: "wbazan@uagraria.edu.ec",
    value: false,
  },
  {
    name: "CABEZAS CABEZAS ROBERTO FERNANDO",
    email: "rcabezas@uagraria.edu.ec",
    value: false,
  },
];

function OficioComponent() {

    const {auth, setAuth, loadPage} = useMyContext();

  const [nombre, guardaNombre] = useState('');
  const [aviso, setAviso] = useState("");
  const nombreLocal =
    typeof window !== "undefined" && localStorage?.getItem("nombre")
      ? JSON.parse(localStorage.getItem("nombre"))
      : "";

  const [periodo, guardaPeriodo] = useState("");
  const [periodoAlt, guardaPeriodoAlt] = useState("");
  const [motivo, guardaMotivo] = useState("");
  const [motivoAlt, guardaMotivoAlt] = useState("");
  const [semestre, guardaSemestre] = useState("");

  const [loading, setLoading] = useState(null);
  const [timeForOut, setTimeForOut] = useState(100);
  const [alerta, setAlerta] = useState({});
  const [letterNumber, setLetterNumber] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const [tutor, setTutor] = useState(false);
  const [emailTutor, guardaEmailTutor] = useState("");
  const [email, guardaEmail] = useState(auth?.email || "");

  const [showTooltip, setShowTooltip] = useState(false);
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 768;


  useEffect(() => {
    
    guardaNombre(auth?.nombre)

    const setAuthToken = (token) => {
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } else {
        delete axios.defaults.headers.common['Authorization'];
      }
    };

    setAuthToken(auth.token);
  },[auth])

  const handleChangeNombre = (e) => {
    e.preventDefault();
    guardaNombre(e.target.value);
    if (e.target.value.toLowerCase() === nombreLocal && e.target.value !== "") {
      setAviso(
        "Este nombre ha solicitado ya un número de oficio antes en este equipo. Si desea volver a hacer la solicitud omita este mensaje."
      );
      setTimeout(() => {
        setAviso("");
      }, 5000);
    }
  };

  const handleChangeSemestre = (e) => {
    e.preventDefault();
    guardaSemestre(e.target.value);
  };

  const handleChangePeriodo = (e) => {
    e.preventDefault();
    guardaPeriodo(e.target.value);
  };

  const handleChangePeriodoAlt = (e) => {
    e.preventDefault();
    guardaPeriodoAlt(e.target.value);
  };

  const handleChangeMotivo = (e) => {
    e.preventDefault();
    guardaMotivo(e.target.value);

    if (e.target.value.includes("PASO 2")) {
      setTutor(true);
    } else {
      setTutor(false);
    }
  };

  const handleChangeMotivoAlt = (e) => {
    e.preventDefault();
    guardaMotivoAlt(e.target.value);
  };

  function getEmailByName(name) {
    const tutor = tutorOptions.find((option) => option.name === name);
    return tutor ? tutor.email : "Email not found";
  }

  const handleChangeEmailStudent = (e) => {
    e.preventDefault();
    guardaEmail(e.target.value);
  };

  const handleChangeEmail = (e) => {
    e.preventDefault();
    guardaEmailTutor(getEmailByName(e.target.value));
  };

  const handleShowTooltip = (e) => {
    e.preventDefault();
    setShowTooltip(!showTooltip);
  };

  function countdown() {
    let seconds = 100;

    const interval = setInterval(() => {
      if (seconds >= 0) {
        seconds--;
        setTimeForOut(seconds);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: nombre.toString() ?? "",
      tramite: motivoAlt !== "" ? motivoAlt?.toString() : motivo?.toString(),
      periodo: periodoAlt !== "" ? periodoAlt?.toString() : periodo?.toString(),
      status: emailTutor!=="" ? userFromEmail(emailTutor) : "utilizado"
    };

    if (
      [
        nombre.toString(),
        motivoAlt !== "" ? motivoAlt?.toString() : motivo?.toString(),
        periodoAlt !== "" ? periodoAlt?.toString() : periodo?.toString(),
      ].includes("")
    ) {
      setAlerta({
        type: "error",
        keyWord: "vacios",
        message: "Todos los campos son obligatorios",
      });

      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }

    try {
      swal({
        title: "Desea Generar el Número de Oficio?",
        text: "¿Le falta SOLO el número de oficio para entregar la documentación? Si aún tiene pendientes NO genere el número y ocúpese de llenar primero la documentación de la gestión que le corresponda hacer (Paso 1, Paso 2, etc), válido por 72 horas a partir de su emisión!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          setLoading(true);
          countdown();

          await axios
            .post(process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND, userData)
            .then((res) => {
              setLetterNumber(res.data?.data.idApp);
              setLoading(false);
              localStorage.setItem(
                "nombre",
                JSON.stringify(nombre.toLowerCase())
              );
            })
            .catch((error) => {
              console.log(error);
              setLoading(null);
              setAlerta({
                type: "error",
                keyWord: "bd",
                message: "Hubo un problema con el servidor",
              });
              setTimeForOut(80);
              setTimeout(() => {
                setAlerta({});
                localStorage.removeItem("usuario")
                setAuth({})
              }, 2000);
            });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  function copyToClipboard(text, el) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    if (el === 1) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } else if (el === 2) {
      setCopied2(true);
      setTimeout(() => {
        setCopied2(false);
      }, 1000);
    }
  }

  return ( !loadPage &&
         (auth?.nombre ?
      <div className="flex flex-col">
        <h1 className="uppercase text-2xl font-bold mb-10 flex justify-center items-center">
          Solicitud de número de Oficio
        </h1>
        {alerta?.type && (
          <Alerta msg={alerta?.message} />
        )}
        {loading == null && (
          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="w-96 bg-amber-200 p-5 rounded-lg"
            >
              <div>
                <div className="mb-4">
                  <label className="text-gray-800" htmlFor="name">
                    Nombre del Solicitante:
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="mt-2 text-gray-800 block w-full p-3 bg-gray-200 hover:cursor-not-allowed"
                    placeholder="Coloque un nombre y un apellido"
                    name="name"
                    value={nombre}
                    onChange={handleChangeNombre}
                    maxLength={30}
                    disabled
                  />
                  <p className="text-red-500">{aviso}</p>
                </div>

                <div className="mb-4">
                  <label className="text-gray-800" htmlFor="semestre">
                    Semestre que cursa:
                  </label>
                  <select
                    id="semestre"
                    className="mt-2 text-gray-800 block w-full p-3 bg-gray-50"
                    name="semestre"
                    defaultValue="--- SELECCIONE ---"
                    onChange={handleChangeSemestre}
                  >
                    {semestreOptions.map((option) => (
                      <option
                        key={option.name}
                        value={option.name.toString()}
                        disabled={option.value}
                      >
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <div className="flex gap-2 items-center">
                    <label className="text-gray-800" htmlFor="periodo">
                      Periodo al que aplica la actividad:
                    </label>
                    <div
                      title=""
                      onClick={handleShowTooltip}
                      className=" hover:cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-info-hexagon-filled"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M10.425 1.414a3.33 3.33 0 0 1 3.026 -.097l.19 .097l6.775 3.995l.096 .063l.092 .077l.107 .075a3.224 3.224 0 0 1 1.266 2.188l.018 .202l.005 .204v7.284c0 1.106 -.57 2.129 -1.454 2.693l-.17 .1l-6.803 4.302c-.918 .504 -2.019 .535 -3.004 .068l-.196 -.1l-6.695 -4.237a3.225 3.225 0 0 1 -1.671 -2.619l-.007 -.207v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098zm1.575 9.586h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                          strokeWidth="0"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  {showTooltip && (
                    <div
                      className="absolute bg-gray-800 text-white py-2 px-3 rounded text-sm z-10 pointer-events-none"
                      style={{
                        left: "50%",
                        transform:
                          screenWidth <= 768
                            ? "translateX(-50%)"
                            : "translateX(-11%)",
                        marginTop: "0.5rem",
                        width: "345px",
                      }}
                    >
                      El período al que aplica la actividad, NO es
                      necesariamente el período de estudio que está cursando
                      porque dependerá si está arrastrando, si está al día o si
                      está adelantando la actividad de vinculación. En caso de
                      dudas comunicarse con el Responsable de Vinculación.
                    </div>
                  )}
                  <select
                    id="periodo"
                    className="mt-2 block text-gray-800 w-full p-3 bg-gray-50"
                    name="periodo"
                    defaultValue="--- SELECCIONE ---"
                    onChange={handleChangePeriodo}
                  >
                    {periodoOptions.map((option) => (
                      <option
                        key={option.name}
                        value={option.name.toString()}
                        disabled={option.value}
                      >
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>

                {periodo === "OTRO" && (
                  <div className="mb-4">
                    <label className="text-gray-800" htmlFor="periodoAlt">
                      Especifique el período:
                    </label>
                    <input
                      id="periodoAlt"
                      type="text"
                      className="mt-2 block text-gray-800 w-full p-3 bg-gray-50"
                      placeholder="Periodo al que aplica"
                      name="periodoAlt"
                      value={periodoAlt}
                      onChange={handleChangePeriodoAlt}
                    />
                  </div>
                )}

                <div className="mb-4">
                  <label className="text-gray-800" htmlFor="tramite">
                    Motivo:
                  </label>
                  <select
                    id="tramite"
                    className="mt-2 block w-full text-gray-800 p-3 bg-gray-50"
                    name="tramite"
                    defaultValue="--- SELECCIONE ---"
                    onChange={handleChangeMotivo}
                  >
                    {availabilityOptions.map((option) => (
                      <option
                        key={option.name}
                        value={option.name.toString()}
                        disabled={option.value}
                      >
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>

                {motivo === "OTRO" && (
                  <div className="mb-4">
                    <label className="text-gray-800" htmlFor="motivoAlt">
                      Especifique el motivo:
                    </label>
                    <input
                      id="motivoAlt"
                      type="text"
                      className="mt-2 block text-gray-800 w-full p-3 bg-gray-50"
                      placeholder="Motivo del Oficio"
                      name="motivoAlt"
                      value={motivoAlt}
                      onChange={handleChangeMotivoAlt}
                      maxLength={30}
                    />
                  </div>
                )}

                {tutor && (
                  <div className="mb-4">
                    <label className="text-gray-800" htmlFor="tutor">
                      Tutor:
                    </label>
                    <select
                      id="tutor"
                      className="mt-2 block w-full text-gray-800 p-3 bg-gray-50"
                      name="tutor"
                      defaultValue="--- SELECCIONE ---"
                      onChange={handleChangeEmail}
                    >
                      {tutorOptions.map((option) => (
                        <option
                          key={option.name}
                          value={option.name.toString()}
                          disabled={option.value}
                        >
                          {option.name}
                        </option>
                      ))}
                    </select>
                    <p className="text-red-500">
                      Debe contactarse previamente con el Ing. Mario Ibarra para
                      que el le asigne el tutor, no lo puede elegir Ud.
                      arbritariamente. Luego de Generar el Número de oficio debe
                      hacer la{" "}
                      <span className="font-bold uppercase">
                        notificación al correo
                      </span>{" "}
                      del tutor usando el enlace que se muestra a posterior.
                    </p>
                  </div>
                )}
                <input
                  type="submit"
                  className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                  value="Generar Número de Oficio"
                />
              </div>
            </form>
          </div>
        )}

        {loading ? (
          <>
            {timeForOut > 0 ? (
              <>
                <div className="flex justify-center items-center mt-5">
                  <p className="p-2 font-bold">Generando numero de oficio...</p>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <p className="p-2 font-bold">
                    Tiempo de espera estimado:{" "}
                    <span className="text-red-400">
                      {" "}
                      {timeForOut} segundo(s){" "}
                    </span>
                  </p>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <Image
                    width={80}
                    height={80}
                    alt="loader"
                    src="/spinner.gif"
                  />
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center mt-5">
                <p className="p-2 font-bold">
                  Tiempo de espera agotado... Se sugiere recargar la página
                </p>
              </div>
            )}
          </>
        ) : (
          letterNumber && (
            <>
            {tutor && (
                <div className="flex justify-center items-center">
                  <div className="mt-10 bg-amber-200 pl-2 pr-2 pt-2 pb-5 w-96 rounded-lg">
                    <div className="flex justify-center items-center ">
                      <div>
                        <h1 className="mt-5 mb-5 flex justify-center items-center">
                          Notificar al tutor
                        </h1>
                        <div className="flex justify-center items-center">
                          <div className="w-50 mt-5">
                            <EmailLink
                              emailTutor={emailTutor}
                              nombre={nombre}
                              semestre={semestre}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex justify-center items-center">
                <div className="mt-10 bg-amber-200 pl-2 pr-2 pt-2 pb-5 w-96 rounded-lg">
                  <h1 className="mt-5 mb-5 flex justify-center items-center">
                    Cópialo
                  </h1>

                  <div className="flex justify-center items-center">
                    <p className="mb-5">Su numero de oficio es: {"  "}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      className="font-bold text-sm bg-cyan-300 p-1 border rounded-md h-10"
                      onClick={() =>
                        copyToClipboard(
                          `Oficio Nro. M-UAE-FCAJBO.V.CC-2024-${formatNumber(
                            parseInt(letterNumber)
                          )}.O`,
                          1
                        )
                      }
                    >
                      Oficio Nro. M-UAE-FCAJBO.V.CC-2024-
                      {formatNumber(parseInt(letterNumber))}.O
                    </button>
                  </div>
                  {copied && (
                    <div className="flex justify-center items-center">
                      <p className="text-red-500">Copiado al portapapeles!</p>
                    </div>
                  )}
                  <div className="flex justify-center items-center">
                    <p className="mt-5 mb-5">
                      La fecha del oficio debe ser: {"  "}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      className="font-bold bg-cyan-300 p-2 border text-sm rounded-md"
                      onClick={() =>
                        copyToClipboard(`${formatDate(new Date())}`, 2)
                      }
                    >
                      {formatDate(new Date())}
                    </button>
                  </div>
                  {copied2 && (
                    <p className="text-red-500 flex justify-center items-center">
                      Copiado al portapapeles!
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="mt-10 bg-amber-200 pl-2 pr-2 pt-2 pb-5 w-96 rounded-lg">
                  <div className="flex justify-center items-center ">
                    <div>
                      <h1 className="mt-5 mb-5 flex justify-center items-center">
                        ó Envíalo a tu Correo
                      </h1>
                      <input
                        className="p-2 m-2 w-80"
                        type="text"
                        placeholder="Ingresa tu email"
                        onChange={handleChangeEmailStudent}
                      />
                      <EmailSendStudent
                        email={email}
                        oficio={`Oficio Nro. M-UAE-FCAJBO.V.CC-2024-
                      ${formatNumber(parseInt(letterNumber))}.O`}
                        fecha={`${formatDate(new Date()).toString()}`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              
            </>
          )
        )}
      </div>
        :
        <div className="flex flex-col">
        <h1 className="uppercase text-2xl font-bold mb-10 flex justify-center items-center">
          Solicitud de número de Oficio
        </h1>
        <p className="flex justify-center uppercase font-bold">Debe iniciar sesión para acceder a esta aplicación</p>
        </div>
      )
);
}

export default OficioComponent;