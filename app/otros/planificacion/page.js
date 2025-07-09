'use client'

import Enlace from "@/components/ui/Enlace";
import EnlacesRelacionados from "@/components/ui/EnlacesRelacionados";
import Layout from "@/components/ui/Layout";
import React, { useState, useEffect, useCallback } from "react";
import dynamic from 'next/dynamic'; // Importa dynamic de Next.js

// Importación dinámica de PDFDownloadLink y PlanificacionPdf
// Esto asegura que se carguen solo en el lado del cliente
const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
  { ssr: false } // Crucial: Desactiva el Server-Side Rendering
);

const DynamicPlanificacionPdf = dynamic(
  () => import("../../../components/ui/PlanificacionPdf"), // Ajusta la ruta si es diferente
  { ssr: false } // Crucial: Desactiva el Server-Side Rendering
);

const PlanificadorComponent = () => {
  const [activityType, setActivityType] = useState("practica"); // 'practica' o 'comunitaria'
  const [startDate, setStartDate] = useState("");
  const [schedule, setSchedule] = useState({
    monday: { start: "", end: "" },
    tuesday: { start: "", end: "" },
    wednesday: { start: "", end: "" },
    thursday: { start: "", end: "" },
    friday: { start: "", end: "" },
    saturday: { start: "", end: "" },
    sunday: { start: "", end: "" },
  });
  const [considerHolidays, setConsiderHolidays] = useState(true);
  const [endDate, setEndDate] = useState("");
  const [planningDetails, setPlanningDetails] = useState([]);
  const [isClient, setIsClient] = useState(false); // Nuevo estado para verificar si estamos en el cliente

  // Horas requeridas dinámicas según el tipo de actividad
  const currentRequiredHours = activityType === "practica" ? 80 : 72;

  // Feriados para Ecuador en 2025 (aproximados, verificar fechas oficiales cada año)
  const holidays = [
    new Date("2025-01-01T05:00:00.000Z"), // Año Nuevo
    new Date("2025-03-03T05:00:00.000Z"), // Carnaval Lunes
    new Date("2025-03-04T05:00:00.000Z"), // Carnaval Martes
    new Date("2025-04-18T05:00:00.000Z"), // Viernes Santo
    new Date("2025-05-01T05:00:00.000Z"), // Día del Trabajo
    new Date("2025-05-23T05:00:00.000Z"), // Batalla de Pichincha (traslado del 24)
    new Date("2025-08-11T05:00:00.000Z"), // Primer Grito de Independencia (traslado del 10)
    new Date("2025-09-17T05:00:00.000Z"), // Feriado Local (ejemplo)
    new Date("2025-10-10T05:00:00.000Z"), // Independencia de Guayaquil (traslado del 9)
    new Date("2025-10-31T05:00:00.000Z"), // Día de Difuntos (traslado del 1)
    new Date("2025-11-03T05:00:00.000Z"), // Independencia de Cuenca (traslado del 2)
    new Date("2025-12-25T05:00:00.000Z"), // Navidad
  ];

  // Función para calcular horas totales por semana (envuelta en useCallback para estabilidad)
  const calculateWeeklyHours = useCallback(() => {
    let total = 0;
    for (const day in schedule) {
      const { start, end } = schedule[day];
      if (start && end) {
        try {
          const [startHour, startMinute] = start.split(":").map(Number);
          const [endHour, endMinute] = end.split(":").map(Number);
          if (endHour * 60 + endMinute > startHour * 60 + startMinute) {
            const diffInMinutes = (endHour * 60 + endMinute) - (startHour * 60 + startMinute);
            total += diffInMinutes / 60;
          }
        } catch (e) {
          console.error("Error al parsear la hora:", e);
        }
      }
    }
    return total;
  }, [schedule]); // Dependencia: schedule

  // Función para calcular la fecha de inicio por defecto
  useEffect(() => {
    setIsClient(true); // Se ejecuta una vez que el componente se monta en el cliente

    const today = new Date();
    today.setDate(today.getDate() + 10);
    let defaultStartDate = new Date(today);

    const dayOfWeek = defaultStartDate.getDay();
    const daysUntilMonday = dayOfWeek === 0 ? 1 : (8 - dayOfWeek) % 7;
    defaultStartDate.setDate(defaultStartDate.getDate() + daysUntilMonday);

    let adjustedStartDate = new Date(defaultStartDate);
    // Asegurarse de que la fecha de inicio no es un feriado ni un domingo si se consideran
    while (
      (considerHolidays && holidays.some(holiday =>
        holiday.getFullYear() === adjustedStartDate.getFullYear() &&
        holiday.getMonth() === adjustedStartDate.getMonth() &&
        holiday.getDate() === adjustedStartDate.getDate()
      )) || adjustedStartDate.getDay() === 0 // Sunday
    ) {
      adjustedStartDate.setDate(adjustedStartDate.getDate() + 1);
    }

    setStartDate(adjustedStartDate.toISOString().split('T')[0]);
  }, [considerHolidays, holidays]); // Dependencias: considerHolidays, holidays

  // Función para predecir la fecha de fin y generar detalles de planificación
  useEffect(() => {
    if (!startDate || calculateWeeklyHours() === 0) {
      setEndDate("Por favor, ingresa un horario para calcular.");
      setPlanningDetails([]);
      return;
    }

    let remainingHoursToPlan = currentRequiredHours; // No se usa directamente, pero se mantiene para claridad
    let currentDate = new Date(startDate + "T00:00:00");
    let calculatedEndDate = "";
    const detailedPlan = [];
    let totalHoursPlanned = 0; // Acumulador real de horas para el PDF

    while (totalHoursPlanned < currentRequiredHours) {
      const dayOfWeek = currentDate.getDay(); // 0: Domingo, 1: Lunes...
      const dayName = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ][dayOfWeek];

      const isHoliday = holidays.some(holiday =>
        holiday.getFullYear() === currentDate.getFullYear() &&
        holiday.getMonth() === currentDate.getMonth() &&
        holiday.getDate() === currentDate.getDate()
      );

      if (considerHolidays && isHoliday) {
        // Añadir feriado al plan, las horas acumuladas no cambian
        detailedPlan.push([
          currentDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
          "Feriado Nacional/Local - No Laborable",
          totalHoursPlanned.toFixed(2) // Horas acumuladas antes de este día
        ]);
      } else {
        const { start, end } = schedule[dayName];
        if (start && end) {
          try {
            const [startHour, startMinute] = start.split(":").map(Number);
            const [endHour, endMinute] = end.split(":").map(Number);
            if (endHour * 60 + endMinute > startHour * 60 + startMinute) {
              const diffInMinutes = (endHour * 60 + endMinute) - (startHour * 60 + startMinute);
              let hoursToday = diffInMinutes / 60;

              // Ajustar horas si se excede el total requerido
              if (totalHoursPlanned + hoursToday > currentRequiredHours) {
                hoursToday = currentRequiredHours - totalHoursPlanned;
                if (hoursToday < 0) hoursToday = 0; // Asegurarse de que no sea negativo
              }

              if (hoursToday > 0) {
                totalHoursPlanned += hoursToday; // Acumular horas antes de añadir al detalle
                detailedPlan.push([
                  currentDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
                  `${start} - ${end} (${hoursToday.toFixed(2)} horas)`,
                  totalHoursPlanned.toFixed(2) // Horas acumuladas después de este día
                ]);
              }
            }
          } catch (e) {
            console.error("Error al calcular horas para el día:", e);
          }
        }
      }

      // Si ya se cumplieron las horas, salir del bucle
      if (totalHoursPlanned >= currentRequiredHours) {
        calculatedEndDate = new Date(currentDate);
        break;
      }
      currentDate.setDate(currentDate.getDate() + 1); // Avanzar al siguiente día
    }

    setEndDate(calculatedEndDate ? calculatedEndDate.toISOString().split('T')[0] : "Fecha no definida");
    setPlanningDetails(detailedPlan);

  }, [startDate, schedule, considerHolidays, currentRequiredHours, holidays, calculateWeeklyHours]); // Dependencias completas

  const handleScheduleChange = (day, type, value) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        [type]: value,
      },
    }));
  };

  const weeklyHoursCalculated = calculateWeeklyHours();

  return (
    <Layout>
      <h1 className="flex justify-center items-center uppercase mt-2">
        Planificador de Actividades
      </h1>
      <h2 className="flex justify-center items-center">
        Total de Horas Requeridas:{" "}
        <span className="font-bold ml-1">{currentRequiredHours}</span>
      </h2>

      <div className="mt-10 p-5 border border-gray-300 rounded-md shadow-sm">
        {/* Selector de Tipo de Actividad */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Selecciona el Tipo de Actividad:
          </label>
          <div className="flex items-center space-x-6">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="activityType"
                value="practica"
                checked={activityType === "practica"}
                onChange={(e) => setActivityType(e.target.value)}
                className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-800">
                Práctica Preprofesional (80 horas)
              </span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="activityType"
                value="comunitaria"
                checked={activityType === "comunitaria"}
                onChange={(e) => setActivityType(e.target.value)}
                className="form-radio h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
              />
              <span className="ml-2 text-gray-800">
                Labor Comunitaria (72 horas)
              </span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block text-lg font-medium text-gray-700"
          >
            Fecha de Inicio de Actividades:
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Horario de Actividades Semanal:
          </label>
          {Object.keys(schedule).map((day) => (
            <div key={day} className="grid grid-cols-3 gap-4 mb-2 items-center">
              <span className="capitalize font-medium">
                {day === "monday" && "Lunes"}
                {day === "tuesday" && "Martes"}
                {day === "wednesday" && "Miércoles"}
                {day === "thursday" && "Jueves"}
                {day === "friday" && "Viernes"}
                {day === "saturday" && "Sábado"}
                {day === "sunday" && "Domingo"}
              </span>
              <input
                type="time"
                value={schedule[day].start}
                onChange={(e) =>
                  handleScheduleChange(day, "start", e.target.value)
                }
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              <input
                type="time"
                value={schedule[day].end}
                onChange={(e) =>
                  handleScheduleChange(day, "end", e.target.value)
                }
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          ))}
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="considerHolidays"
            checked={considerHolidays}
            onChange={(e) => setConsiderHolidays(e.target.checked)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded mr-2"
          />
          <label
            htmlFor="considerHolidays"
            className="text-lg font-medium text-gray-700"
          >
            La empresa NO trabaja en feriados nacionales y locales
          </label>
        </div>

        <div className="mt-6 text-lg font-bold">
          <p>
            Horas Semanales Planificadas: {weeklyHoursCalculated.toFixed(2)}
          </p>
          <p>Fecha Estimada de Finalización: {endDate}</p>
        </div>

        <div className="mt-8 flex justify-center">
          {/* Solo renderiza PDFDownloadLink si estamos en el cliente */}
          {isClient && startDate &&
          endDate !== "Por favor, ingresa un horario para calcular." &&
          weeklyHoursCalculated > 0 ? (
            <PDFDownloadLink
              document={
                <DynamicPlanificacionPdf // Usamos el componente dinámico aquí
                  activityType={
                    activityType === "practica"
                      ? "Práctica Preprofesional"
                      : "Labor Comunitaria"
                  }
                  startDate={startDate}
                  endDate={endDate}
                  requiredHours={currentRequiredHours}
                  weeklyHours={weeklyHoursCalculated}
                  considerHolidays={considerHolidays}
                  planningDetails={planningDetails}
                />
              }
              fileName={`planificacion_${activityType}_${startDate}.pdf`}
            >
              {({ blob, url, loading, error }) =>
                loading ? (
                  "Generando PDF..."
                ) : (
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
                    Descargar PDF de Planificación
                  </button>
                )
              }
            </PDFDownloadLink>
          ) : (
            <button
              className="bg-gray-400 text-white font-bold py-2 px-4 rounded-md shadow-md cursor-not-allowed"
              disabled
            >
              Ingresa datos para generar PDF
            </button>
          )}
        </div>
      </div>

      <EnlacesRelacionados>
        <Enlace
          url={"https://www.trabajo.gob.ec/feriados-nacionales/"}
          text="Calendario de Feriados Nacionales (Referencia)"
          nuevo={true}
          external={true}
        />
      </EnlacesRelacionados>
    </Layout>
  );
};

export default PlanificadorComponent;