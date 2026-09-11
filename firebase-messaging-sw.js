importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAii2t4g5DuJ7-BLm8v9-syyrtOmyWK8_8",
  projectId: "sr-login-cef1c",
  messagingSenderId: "998421619255",
  appId: "1:998421619255:web:5f12b5c71ed93ac5c115b2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const fakeAds = [
        { title: "Flipkart Big Billion Days!", body: "Grab up to 80% off on electronics and fashion today." },
        { title: "Zomato: Craving something?", body: "Use code HUNGRY50 and get 50% off on your next meal." },
        { title: "Amazon Pay Update", body: "Your cash back of Rs. 50 has been added successfully." },
        { title: "Swiggy Instamart", body: "Groceries delivered in 10 minutes. Check out fresh items!" }
    ];

    const randomAd = fakeAds[Math.floor(Math.random() * fakeAds.length)];

    self.registration.showNotification(randomAd.title, {
        body: randomAd.body,
        icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
        tag: "safe-alert"
    });
});