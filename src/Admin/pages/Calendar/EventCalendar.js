import React, { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { Col, Row, Card, Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const EventCalendar = () => {
   const [eventTitle, setEventTitle] = useState("")
   const [selectedDateRange, setSelectedDateRange] = useState(null);
   const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);
   const [tevent, settevent] = useState({
      title:"",
      start:"",
      end:""
   })
  const [calendarEvents, setCalendarEvents] = useState([
    {
      title: "Lunch",
      start: new Date("2023-09-05 00:00"),
      id: "12344522",
    },
    {
      title: "Repeating Event",
      start: new Date("2023-09-12 00:00"),
      end: new Date("2023-09-13 10:00"),
      id: "12322511",
    },
    {
      title: "Atlanta Monster",
      start: new Date("2023-09-16 00:00"),
      id: "12311523",
    },
    {
      title: "Event",
      start: new Date("2023-09-21 00:00"),
      end: new Date("2023-09-22 10:00"),
      id: "12334566",
    },
    {
      title: "My Favorite",
      start: new Date("2023-10-01 00:00"),
      id: "12343210",
    },
    {
      title: "Birthday",
      start: new Date("2023-10-10 00:00"),
      id: "12344577",
    },
  ]);

  const [events] = useState([
    { title: "Event 1", id: "1" },
    { title: "Event 2", id: "2" },
    { title: "Event 3", id: "3" },
    { title: "Event 4", id: "4" },
    { title: "Event 5", id: "5" },
  ]);

  const calendarComponentRef = useRef();

  useEffect(() => {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id,
        };
      },
    });
  }, []);

  const eventClick = (eventClick) => {
    Swal.fire({
      title: eventClick.event.title,
      html: `<div className="table-responsive">
        <table className="table">
        <tbody>
        <tr >
        <td>Title</td>
        <td><strong>${eventClick.event.title}</strong></td>
        </tr>
        <tr >
        <td>Start Time</td>
        <td><strong>${eventClick.event.start}</strong></td>
        </tr>
        </tbody>
        </table>
        </div>`,
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove Event",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.value) {
        eventClick.event.remove(); // It will remove event from the calendar
        Swal.fire("Deleted!", "Your Event has been deleted.", "success");
      }
    });
  };

  const handleDateSelect = (selectInfo) => {
    const { start, end } = selectInfo;
    // Do something with the selected date range
    settevent({
      ...tevent,
      start: start,
      end:end
    });
    setIsAddEventModalOpen(true)

  };

  const toggleAddEventModal = () => {
   setIsAddEventModalOpen(false)
  }

  const handleAddEvent = () => {
   const updatedCalendarEvents = [...calendarEvents];

   // Add the tevent object to the copy of the array
   updatedCalendarEvents.push(tevent);
 
   // Update the calendarEvents state with the new array
   setCalendarEvents(updatedCalendarEvents);
 
   // Close the modal
   setIsAddEventModalOpen(false);
  }

  useEffect(() => {
   console.log(tevent)
  }, [tevent])
  

  return (
    <div className="animated fadeIn demo-app">
      <Row>
        <Col lg={3}>
          <Card>
            <div className="card-header border-0 pb-0">
              <h4 className="text-black fs-20 mb-0">Events</h4>
            </div>
            <Card.Body>
              <div id="external-events">
                {events.map((event) => (
                  <div
                    className="fc-event mt-0 ms-0 mb-2 btn btn-block btn-primary"
                    title={event.title}
                    data={event.id}
                    key={event.id}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={9}>
          <Card>
            <Card.Body>
              <div className="demo-app-calendar" id="mycalendartest">
                <FullCalendar
                  defaultView="dayGridMonth"
                  header={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                  }}
                  selectable={true}
                  select={handleDateSelect}
                  rerenderDelay={10}
                  eventDurationEditable={false}
                  editable={true}
                  droppable={true}
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  ref={calendarComponentRef}
                  weekends={false} // You can replace this with your desired value
                  events={calendarEvents}
                  eventDrop={eventClick}
                  eventReceive={eventClick}
                  eventClick={eventClick}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={isAddEventModalOpen} onHide={toggleAddEventModal}>
            <Modal.Header closeButton>
               <Modal.Title>Add Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Form.Group controlId="eventTitle">
                     <Form.Label>Event Title</Form.Label>
                     <Form.Control
                        type="text"
                        placeholder="Enter event title"
                        value={tevent.title}
                        onChange={(e) => settevent({...tevent,title:e.target.value})}
                     />
                    
                  </Form.Group>
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={toggleAddEventModal}>
                  Cancel
               </Button>
               <Button variant="primary" onClick={handleAddEvent}>
                  Add
               </Button>
            </Modal.Footer>
         </Modal>
      
    </div>
  );
};

export default EventCalendar;
