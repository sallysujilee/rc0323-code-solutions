import { useState } from 'react';
import './Accordion.css';

export default function Accordion ({ topics }) {
  const [openTopic, setOpenTopic] = useState();

  function handleOpenTopic(topic) {
    if (openTopic === topic) {
      setOpenTopic(undefined);
    } else {
      setOpenTopic(topic)
    }
  }
  return (
    <div>
      {topics.map((topic) => (
        <Topic
          key={topic.id}
          topic={topic}
          isOpen={topic === openTopic}
          onClick={() => handleOpenTopic(topic)}
        />
      ))}
    </div>
  );
}

function Topic({topic, isOpen, onClick}) {
  return (
    <div>
      <div onClick={onClick} className="topic">
        <h3>
          {topic.title}
        </h3>
      </div>
      {isOpen && <div className="topic-content">{topic.content}</div>}
    </div>
  )
}
