import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { changePipeline, getPipeline } from '../../../services/apiservice';
import { useSelector } from 'react-redux';

const Pipeline = () => {
  const user = useSelector((state) => state.user.user);
  const [data, setData] = useState([]);
  const [pipeline, setPipeline] = useState(null);

  useEffect(() => {
    const fetchPipeline = async () => {
      if (user?.pipeline) {
        const res = await getPipeline(user.pipeline);
        console.log(res);
        setPipeline(res);
      }
    };

    fetchPipeline();
  }, [user]);

  useEffect(() => {
    if (pipeline) {
      const initialData = [
        {
          id: 'new',
          title: 'New',
          items: pipeline.new || [],
        },
        {
          id: 'prospect',
          title: 'Prospect',
          items: pipeline.prospect || [],
        },
        {
          id: 'viewing',
          title: 'Viewing',
          items: pipeline.viewing || [],
        },
        {
          id: 'close',
          title: 'Close',
          items: pipeline.close || [],
        },
        {
          id: 'reject',
          title: 'Reject',
          items: pipeline.reject || [],
        },
        // Add more cards and items as needed
      ];
      setData(initialData);
    }
  }, [pipeline]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;

    if (source.droppableId === destination.droppableId) {
      // Reorder items within the same card
      const cardIndex = data.findIndex((card) => card.id === source.droppableId);
      const items = [...data[cardIndex].items];
      const [removedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, removedItem);

      const updatedData = [...data];
      updatedData[cardIndex].items = items;
      setData(updatedData);
    } else {
      // Move item to a different card
      const sourceCardIndex = data.findIndex((card) => card.id === source.droppableId);
      const destCardIndex = data.findIndex((card) => card.id === destination.droppableId);
      const sourceItems = [...data[sourceCardIndex].items];
      const destItems = [...data[destCardIndex].items];
      const [movedItem] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, movedItem);

      const updatedData = [...data];
      updatedData[sourceCardIndex].items = sourceItems;
      updatedData[destCardIndex].items = destItems;
      setData(updatedData);
      console.log(movedItem._id)
      changePipeline(data[sourceCardIndex].id, data[destCardIndex].id,user?.pipeline,(movedItem._id))
    }
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Row>
          {data.map((card) => (
            <Col key={card.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Header>{card.title}</Card.Header>
                <Droppable droppableId={card.id} type="ITEM">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {card.items.map((item, index) => (
                        <Draggable key={item._id} draggableId={item._id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Card.Body>
                                <Card.Text>{item.name}</Card.Text>
                                <div style={{ float: 'right' }}>
                                  <span>Edit</span>
                                  <span> | </span>
                                  <span>Remove</span>
                                </div>
                              </Card.Body>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </Card>
            </Col>
          ))}
        </Row>
      </DragDropContext>
    </Container>
  );
};

export default Pipeline;
