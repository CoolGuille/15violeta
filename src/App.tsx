import { useState } from 'react';
import Cover from './components/Cover';
import Title from './components/Title';
import Message from './components/Message';
import Countdown from './components/Countdown';
import Location from './components/Location';
import DressCode from './components/DressCode';
import CalendarButton from './components/CalendarButton';
import Gifts from './components/Gifts';
import RSVP from './components/RSVP';
import ImageDivider from './components/ImageDivider';
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
    dressCode: "Elegante",
    dressCodeDescription: "Te sugerimos vestimenta elegante pero cómoda para disfrutar de la fiesta. Los colores sugeridos son pasteles y tonos neutros.",
    dressCodeColors: ["#f8c6d8", "#d8e8f8", "#f0f0f0", "#d3d3d3"],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScT-eQIOLYxnBDSfeG8TzDMRFJFWiuy4OsQg6eKE5GQRgcYEw/viewform?embedded=true",
    bankAlias: "violepp",
    bankCVU: "0000003100006409902099",
    photos: [
      {
        url: "https://i.imgur.com/Jn6ltxQ.jpeg",
        position: { y: 0, x: 0 }
      },
      {
        url: "https://i.imgur.com/bWvVSPK.jpeg",
        position: { y: 0, x: 0 }
      },
      {
        url: "https://i.imgur.com/vnWSfIw.jpeg",
        position: { y: 0, x: 0 }
      },
      {
        url: "https://i.imgur.com/UCwCpAH.jpeg",
        position: { y: 40, x: 0 }
      },
      {
        url: "https://i.imgur.com/qoAumpg.jpeg",
        position: { y: 25, x: 0 }
      },
      {
        url: "https://i.imgur.com/FZHusGl.jpeg",
        position: { y: 0, x: 0 }
      }
    ]
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
          
          <ImageDivider 
            imageUrl={birthday.photos[0].url} 
            altText={`Foto de ${birthday.name}`}
            position={birthday.photos[0].position}
          />
          
          <section className="section message-section">
            <Message text={birthday.message} />
          </section>
          
          <ImageDivider 
            imageUrl={birthday.photos[1].url} 
            altText={`Foto de ${birthday.name}`}
            position={birthday.photos[1].position}
          />
          
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

          <ImageDivider 
            imageUrl={birthday.photos[2].url} 
            altText={`Foto de ${birthday.name}`}
            position={birthday.photos[2].position}
          />

          <section className="section location-section" id="location">
            <Location 
              venue={birthday.venue}
              address={birthday.address}
              date={birthday.eventDate}
              time={birthday.eventTime}
              mapUrl={birthday.mapUrl}
            />
          </section>

          <ImageDivider 
            imageUrl={birthday.photos[3].url} 
            altText={`Foto de ${birthday.name}`}
            position={birthday.photos[3].position}
          />

          <section className="section dress-code-section" id="dresscode">
            <DressCode 
              code={birthday.dressCode}
              description={birthday.dressCodeDescription}
              colors={birthday.dressCodeColors}
            />
          </section>

          <ImageDivider 
            imageUrl={birthday.photos[4].url} 
            altText={`Foto de ${birthday.name}`}
            position={birthday.photos[4].position}
          />

          <section className="section gifts-section" id="gifts">
            <Gifts 
              alias={birthday.bankAlias}
              cvu={birthday.bankCVU}
            />
          </section>

          <ImageDivider 
            imageUrl={birthday.photos[5].url} 
            altText={`Foto de ${birthday.name}`}
            position={birthday.photos[5].position}
          />

          <section className="section rsvp-section" id="rsvp">
            <RSVP formUrl={birthday.formUrl} />
          </section>
        </div>
      )}
    </div>
  );
}

export default App;