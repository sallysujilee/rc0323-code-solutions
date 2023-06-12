export default function takeFront(queue) {
  if (isEmpty(queue)) {
    return undefined;
  }
  return queue.queue.shift();
}

function isEmpty(queue) {
  return queue.queue.length === 0;
}
