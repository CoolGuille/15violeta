import { useState, useEffect } from 'react';
import Cover from './components/Cover';
import Title from './components/Title';
import Message from './components/Message';
import Countdown from './components/Countdown';
import Location from './components/Location';
import DressCode from './components/DressCode';
import Gallery from './components/Gallery';
import './styles/global.css';

function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  
  // Añadimos un console.log para seguimiento del estado
  useEffect(() => {
    console.log("Estado de invitación:", isInvitationOpen);
  }, [isInvitationOpen]);
  
  // Aquí definimos las propiedades que luego podrías configurar
  const birthday = {
    name: "Violeta",
    date: new Date('2025-05-31T00:00:00Z'), // Fecha de la fiesta (año-mes-día)
    message: "Si estás leyendo esto, es porque eres una persona muy especial para mí. Me encantaría compartir este día tan importante contigo. ¡Te espero para celebrar mis 15 años juntos!",
    venue: "Salón Gala Eventos",
    address: "Centenario 325, Rosario",
    eventDate: "31 de Mayo de 2025",
    eventTime: "21:00 hs",
    mapUrl: "https://maps.app.goo.gl/Yof2wpE3gH7UgSiy6",
    dressCode: "Elegante Sport",
    dressCodeDescription: "Te sugerimos vestimenta elegante pero cómoda para disfrutar de la fiesta. Los colores sugeridos son pasteles y tonos neutros.",
    dressCodeColors: ["#f8c6d8", "#d8e8f8", "#f0f0f0", "#d3d3d3"],
    images: [
      { src: "https://via.placeholder.com/400x400?text=Foto+1", alt: "Recuerdo 1" },
      { src: "https://via.placeholder.com/400x400?text=Foto+2", alt: "Recuerdo 2" },
      { src: "https://via.placeholder.com/400x400?text=Foto+3", alt: "Recuerdo 3" },
      { src: "https://via.placeholder.com/400x400?text=Foto+4", alt: "Recuerdo 4" },
      { src: "https://via.placeholder.com/400x400?text=Foto+5", alt: "Recuerdo 5" },
      { src: "https://via.placeholder.com/400x400?text=Foto+6", alt: "Recuerdo 6" },
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
          
          <section className="section message-section">
            <Message text={birthday.message} />
          </section>
          
          <section className="section countdown-section">
            <Countdown targetDate={birthday.date} />
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

          <section className="section gallery-section" id="gallery">
            <Gallery images={birthday.images} />
          </section>
          
          {/* Acá irían los demás componentes que vamos a desarrollar */}
        </div>
      )}
    </div>
  );
}

export default App;