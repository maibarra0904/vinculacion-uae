
import { Document, Page, View, Text, StyleSheet, Font } from '@react-pdf/renderer';

// Es crucial registrar las fuentes que @react-pdf/renderer utilizará.
// Si no se registran, o si se intenta usar una fuente no registrada,
// la aplicación puede fallar al intentar generar el PDF.
// Aquí registramos 'Roboto' en sus variantes normal y negrita.
Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/1.0.0/fonts/Roboto/roboto-regular-webfont.ttf', fontWeight: 'normal' },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/1.0.0/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 'bold' },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    // Asegúrate de que el fontFamily aquí coincida con el nombre de la familia registrada
    fontFamily: 'Roboto',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  activityTypeHeader: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  subheader: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  section: {
    marginBottom: 15,
  },
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 10,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  // Ajuste de anchos para 3 columnas
  tableColHeader: {
    width: '33.33%', // Un tercio para cada columna
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderBottomColor: '#000000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: '#e0e0e0',
    padding: 8,
  },
  tableCol: {
    width: '33.33%', // Un tercio para cada columna
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 8,
  },
  tableCellHeader: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableCell: {
    fontSize: 10,
    textAlign: 'left',
  },
  smallText: {
    fontSize: 9,
    color: '#666',
    marginTop: 5,
  }
});

const PlanificacionPdf = ({ activityType, startDate, endDate, requiredHours, weeklyHours, considerHolidays, planningDetails }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Planificación de Actividades</Text>
      <Text style={styles.activityTypeHeader}>{activityType}</Text>

      <View style={styles.section}>
        <Text style={styles.subheader}>Resumen:</Text>
        <Text style={styles.text}>Fecha de Inicio: {startDate}</Text>
        <Text style={styles.text}>Horas Requeridas: {requiredHours}</Text>
        <Text style={styles.text}>Horas Semanales Planificadas: {weeklyHours.toFixed(2)}</Text>
        <Text style={styles.text}>Fecha de Finalización Estimada: {endDate}</Text>
        <Text style={styles.text}>Considerar Feriados: {considerHolidays ? "Sí" : "No"}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheader}>Detalle de Planificación:</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Día / Fecha</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Horario / Observación</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Horas Acumuladas</Text>
            </View>
          </View>
          {planningDetails.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item[0]}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item[1]}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item[2]}</Text>
              </View>
            </View>
          ))}
        </View>
        <Text style={styles.smallText}>
            * Nota: El horario finaliza al cumplir las {requiredHours} horas requeridas.
            Los feriados no laborables son considerados si la opción está activada.
        </Text>
      </View>
    </Page>
  </Document>
);

export default PlanificacionPdf;
