export default function getFront(queue) {
  if (isEmpty(queue)) {
    return undefined;
  }
  return queue.queue[0];
}

function isEmpty(queue) {
  return queue.queue.length === 0;
}
