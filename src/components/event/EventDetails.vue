<template>
    <div style="position: relative;">
        <h4>Event Details</h4>

        <!-- <div class="list-group">
          <select class="mt-3 container" v-model="selectedEvent" @change="eventSelected">

            <option selected disabled> Lütfen bir etkinlik seçin</option>

            <option
              :disabled="event.participantNumber == 0"
              :value="event.key"
              v-for="event in getEvents">{{event.title}}</option>
          </select>
        </div>

        <h1 v-if="event !== null">{{event.subject}}</h1>

        -->
        <!-- <p>{{getEvents[1].subject}}</p> -->
        <div class="list-group" v-for="(event,index) in getEvents" v-if="getEvents.length > 0">
            <div class="mt-3 container">
                {{event.title}}

                <button
                        @click="eventSelected(index)"
                        v-if="event">{{event.title}}
                </button>
            </div>

        </div>
        <div v-if="selectedEvent.status === true" style="width: 50%; height: 90vh;margin-top: 10vh; background-color: red; position: fixed; bottom: 0; right: 0;">
          <h1 v-if="selectedEvent.status"> {{getEvents[indis].subject}} </h1>
          <h1 v-if="selectedEvent.status"> {{getEvents[indis].description}} </h1>
          <button @click="selectedEvent.status = false" class="btn btn-primary">Kapat</button>
        </div>


    </div>
</template>

<script>

    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                selectedEvent: {
                    status: false,
                    index: NaN
                },
                event: null,
                showClick: false,
                indis: 0
            }
        },
        computed: {
            ...mapGetters(["getEvents"])
        },
        methods: {
            eventSelected(index) {
                this.indis = index;
                if (this.selectedEvent.index === index && this.selectedEvent.status === true) {
                    this.selectedEvent.status = false;
                } else {
                    this.selectedEvent.status = true;
                }

                this.selectedEvent.index = index;
            }
        }
    }

</script>

<style>

</style>
