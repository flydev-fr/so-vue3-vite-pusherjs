// import pusher-js
import Pusher from 'pusher-js'; // import Pusher

const subscribe = () => {
  let pusher = new Pusher('YOUR_PUSHER_APP_KEY', { cluster: 'YOUR_CLUSTER' });
  pusher.subscribe('reviews');
  pusher.bind('review_added', (data) => {
    window.mockReviews.unshift(data.review);
  });
};

export { subscribe };
