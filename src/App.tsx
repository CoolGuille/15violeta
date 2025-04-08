import { useState } from 'react';
import Cover from './components/Cover';
import Title from './components/Title';
import Message from './components/Message';
import Countdown from './components/Countdown';
import Location from './components/Location';
import DressCode from './components/DressCode';
import CalendarButton from './components/CalendarButton';
import RSVP from './components/RSVP';
import './styles/global.css';

function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  
  // Aquí definimos las propiedades que luego podrías configurar
  const birthday = {
    name: "Violeta",
    date: new Date('2025-06-01T00:00:00Z'), // Fecha de la fiesta (año-mes-día)
    message: "Si estás leyendo esto, es porque eres una persona muy especial para mí. Me encantaría compartir este día tan importante contigo. ¡Te espero para celebrar mis 15 años juntos!",
    venue: "Salón Gala Eventos",
    address: "Centenario 325, Rosario",
    eventDate: "31 de Mayo de 2025",
    eventTime: "21:00 hs",
    mapUrl: "https://maps.app.goo.gl/Yof2wpE3gH7UgSiy6",
    dressCode: "Elegante Sport",
    dressCodeDescription: "Te sugerimos vestimenta elegante pero cómoda para disfrutar de la fiesta. Los colores sugeridos son pasteles y tonos neutros.",
    dressCodeColors: ["#f8c6d8", "#d8e8f8", "#f0f0f0", "#d3d3d3"],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScT-eQIOLYxnBDSfeG8TzDMRFJFWiuy4OsQg6eKE5GQRgcYEw/viewform?embedded=true",
  };

  const handleOpenInvitation = () => {
    console.log("handleOpenInvitation llamado");
    setIsInvitationOpen(true);
  };

  return (
    <div className="app">
      {!isInvitationOpen ? (
        <section className="section cover-section">
          <Cover onOpen={handleOpenInvitation} />
        </section>
      ) : (
        <div className="invitation-content">
          <section className="section title-section">
            <Title name={birthday.name} />
          </section>
          
          <section className="section message-section">
            <Message text={birthday.message} />
          </section>
          
          <section className="section countdown-section">
            <div className="countdown-wrapper">
              <Countdown targetDate={birthday.date} />
              <CalendarButton 
                title={`XV Años de ${birthday.name}`}
                date={birthday.date}
                location={`${birthday.venue}, ${birthday.address}`}
              />
            </div>
          </section>

          <section className="section location-section" id="location">
            <Location 
              venue={birthday.venue}
              address={birthday.address}
              date={birthday.eventDate}
              time={birthday.eventTime}
              mapUrl={birthday.mapUrl}
            />
          </section>

          <section className="section dress-code-section" id="dresscode">
            <DressCode 
              code={birthday.dressCode}
              description={birthday.dressCodeDescription}
              colors={birthday.dressCodeColors}
            />
          </section>

          <section className="section rsvp-section" id="rsvp">
            <RSVP formUrl={birthday.formUrl} />
          </section>
          
          {/* Acá irían los demás componentes que vamos a desarrollar */}
        </div>
      )}
    </div>
  );
}

export default App;