import fetch from './fetch.js';

const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  try {
    const msg = await fetch('foo', true);
    console.log(elapsed(), 'throwOnce:', msg);
  } catch (error) {
    console.log(elapsed(), 'throwOnce Error:', error.message);
  }
}

async function throwSeveral() {
  try {
    const msg1 = await fetch('foo1', true);
    console.log(elapsed(), 'throwSeveral1:', msg1);
    const msg2 = await fetch('foo2', true);
    console.log(elapsed(), 'throwSeveral2:', msg2);
    const msg3 = await fetch('foo3', true);
    console.log(elapsed(), 'throwSeveral3:', msg3);
  } catch (error) {
    console.log(elapsed(), 'throwSeveral Error:', error.message);
  }
}

async function throwChained() {
  try {
    const msg1 = await fetch('foo-chain', true);
    console.log(elapsed(), 'throwChained1:', msg1);
    const msg2 = await fetch(msg1, true);
    console.log(elapsed(), 'throwChained2:', msg2);
    const msg3 = await fetch(msg2, true);
    console.log(elapsed(), 'throwChained3:', msg3);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error.message);
  }
}

throwOnce()
  .then(() => throwSeveral())
  .then(() => throwChained());
