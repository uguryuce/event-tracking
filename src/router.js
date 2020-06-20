import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home";

import EventList from "./components/event/EventList";
import EventDetails from "./components/event/EventDetails";
import CreateEvent from "./components/event/CreateEvent";

import LocationForm from "./components/event/LocationForm";

Vue.use(VueRouter);



const routes = [

  {path : "/", component : Home},

  {path : "/event-list", component: EventList},
  {path : "/create-event", component : CreateEvent},
  {path : "/event-details", component : EventDetails},

  {path : "/location-form", component : LocationForm},

  {path : "*", redirect : "/"}

];

export const router = new VueRouter({
  mode : "history",
  routes
})
