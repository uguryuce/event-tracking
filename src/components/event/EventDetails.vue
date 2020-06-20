<template>

    <section>
        <app-navigation></app-navigation>
        <div class="event-details">




            <div class="event-details-list">


                <div class="event-details-list-title">
                    <h1>Etkinliklere Gözat</h1>
                </div>


                <div class="event-details-list-group">
                    <div class="event-details-list-group-item"
                         v-for="(event,index) in getEvents"
                         v-if="getEvents.length > 0">
                        <h3>{{event.title}}</h3>

                        <button
                                id="event-selected-button"
                                @click="eventSelected(index)"
                                v-if="event">Detay
                        </button>
                    </div>
                </div>


            </div>


            <div class="event-details-item" v-if="selectedEvent.status === true">



                <div class="event-details-item-title">


                    <div class="event-details-item-title-date">
                        <p class="event-details-item-title-date-day">{{getEvents[indis].date.substring(5,10)}}</p>
                        <p class="event-details-item-title-date-month">{{getEvents[indis].date.substring(10,16)}}</p>
                    </div>


                    <div class="event-details-item-title-text">
                        <h1 v-if="selectedEvent.status"> {{getEvents[indis].title}} </h1>
                        <p class="event-details-item-title-text-date">{{getEvents[indis].selectedCity}} &nbsp;{{getEvents[indis].selectedDistrict}}</p>
                    </div>


                </div>


                <div class="event-details-item-description">
                    <div class="event-details-item-description-label">
                        <p>Açıklama</p>
                    </div>
                    <div class="event-details-item-description-title">
                        <h1 v-if="selectedEvent.status"> {{getEvents[indis].description}} </h1>
                    </div>
                </div>

                <div class="event-details-item-subject">
                    <div class="event-details-item-subject-label">
                        <p>Konu</p>
                    </div>
                    <div class="event-details-item-subject-title">
                        <h1 v-if="selectedEvent.status"> {{getEvents[indis].subject}} </h1>
                    </div>
                </div>


                <div style="border-radius: 18px" class="event-details-item-number">

                    <div class="event-details-item-number-participant">
                        <div class="event-details-item-number-participant-label">
                            <label>Kapasite</label>
                        </div>
                        <div class="event-details-item-number-participant-h1">
                            <i class="fa fa-user"></i>
                            <h1 v-if="selectedEvent.status"> {{getEvents[indis].participantNumber}} </h1>
                        </div>
                    </div>

                    <div class="event-details-item-number-btn">
                        <button @click="selectedEvent.status = false" class="btn">Kapat</button>
                    </div>

                </div>


            </div>


        </div>


        <app-footer></app-footer>
    </section>
</template>

<script>
    import {mapGetters} from "vuex";
    import Navigation from "../shared/Navigation"
    import Footer from "../shared/Footer"
    export default {
        components : {
            appNavigation : Navigation,
            appFooter : Footer
        },

        data() {
            return {
                selectedEvent: {
                    status: true,
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
                    this.selectedEvent.status = true; // false dönerse çift tıklamada kapanır
                } else {
                    this.selectedEvent.status = true;
                }

                this.selectedEvent.index = index;
            }
        }
    }

</script>

<style lang="scss">

    #event-selected-button {

        &:focus {
            background-color: lightgray;
            outline: none;
            color: black;
        }

        &:active{
            background-color: lightgray;
            outline: none;
            color: black;
        }
    }

    .event-details {
        width: 100%;
        height: 90vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: start;
        justify-content: flex-start;
        padding-top: 2.5vh;


        &-list {
            width: 40%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            padding-left: calc(5% + 40px);


            &-title {
                width: 100%;
                display: flex;
                height: 10vh;
                align-items: center;
                border-bottom: 2px solid #f6be41;

                h1 {
                    font-size: 18px;
                }
            }


            &-group {
                max-height: 70vh;
                overflow-y: scroll;
                width: 100%;
                scroll-snap-type: block;

                &-item {
                    width: 100%;
                    display: flex;
                    height: 10vh;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: flex-start;
                    border-bottom: 2px solid #ecf0f4;


                    h3 {
                        font-size: 16px;
                        width: calc(100% - 90px);
                    }

                    button {
                        background-color: #64be79;
                        border: none;
                        border-radius: 4px;
                        padding-top: 4px;
                        padding-bottom: 4px;
                        color: white;
                        width: 70px;
                        margin-right: 20px;
                        font-size: 13px;
                        font-weight: 600;

                    }

                }
            }
        }

        &-item {
            right: 0;
            width: calc(55% - 55px);
            display: flex;
            margin-left: 5%;
            margin-right: 55px;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: flex-start;
            height: 70vh;
            border-radius: 18px;
            align-items: flex-start;
            box-shadow: 0 0 20px rgba(0,0,0,0.10);
            margin-top: calc(10vh - 2px);


            &-title {
                border-radius: 18px;
                padding-left: 50px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                width: 100%;
                color: white;
                background-color: #1b1e21;
                height: 150px;

                h1 {
                    font-size: 32px;
                    font-weight: 800;
                    letter-spacing: 1px;
                }

                &-date {
                    width: 80px;
                    display: flex;
                    flex-wrap: wrap;
                    height: 70px;
                    justify-content: center;
                    align-items: center;

                    &-day {
                        height: 50%;
                        display: flex;
                        width: 100%;
                        justify-content: center;
                        align-items: center;
                        background-color: #d56450;
                        margin-bottom: 0;
                        color: white;
                        font-weight: 600;
                        border-top-left-radius: 5px;
                        border-top-right-radius: 5px;
                    }

                    &-month {
                        height: 50%;
                        display: flex;
                        width: 100%;
                        justify-content: center;
                        align-items: center;
                        background-color: #ffffff;
                        margin-bottom: 0;
                        color: black;
                        font-weight: 600;
                        border-bottom-left-radius: 5px;
                        border-bottom-right-radius: 5px;
                    }
                }

                &-text {
                    width: calc(100% - 180px);
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: flex-start;
                    padding-left: 40px;
                    height: 70px;


                    h1 {
                        font-size: 25px;
                        font-weight: 700;
                        display: flex;
                        align-items: center;
                        margin: 0;
                        padding: 0;
                        width: 100%;
                    }

                    p {
                        width: 100%;
                        font-size: 14px;
                        display: flex;
                        align-items: center;
                        margin: 0;
                        padding: 0;

                    }
                }

                &-button {
                    width: 80px;
                    display: flex;
                    margin-right: 20px;

                    button {
                        color: black;
                        font-weight: 300;
                    }
                }
            }

            &-description {
                padding-left: 50px;
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                width: 100%;
                padding-right: 10%;
                background-color: #f4f6f9;
                color: black;
                height: 200px;
                padding-top: 25px;

                &-label {
                    width: 80px;
                    display: flex;
                    flex-wrap: wrap;
                    height: 70px;
                    justify-content: flex-start;
                    align-items: flex-start;


                    p{
                        font-weight: 600;
                        margin-bottom: 0;
                    }
                }

                &-title {
                    width: calc(100% - 80px);
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: flex-start;
                    padding-left: 40px;

                    h1 {
                        font-size: 16px;
                        line-height: 1.8;
                        margin-bottom: 0;
                        font-weight: 400;
                        color: gray;
                    }
                }
            }

            &-subject {
                display: flex;
                padding-left: 50px;
                align-items: center;
                height: 100px;

                &-label {
                    width: 80px;
                    display: flex;
                    flex-wrap: wrap;
                    height: 70px;
                    justify-content: flex-start;
                    align-items: center;

                    p{
                        font-weight: 600;
                        margin-bottom: 0;
                    }
                }

                &-title {
                    width: calc(100% - 80px);
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: flex-start;
                    padding-left: 40px;

                    h1 {
                        width: 100%;
                        font-size: 16px;
                        margin-bottom: 0;
                        font-weight: 500;
                        //text-decoration: underline;
                        letter-spacing: .3px;
                        color: #333333;
                    }
                }
            }



            &-number {
                width: 100%;
                height: calc(70vh - 450px);
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-left: 50px;
                padding-right: 50px;
                background-color: #fff;

                &-participant {
                    display: flex;
                    align-items: center;

                    &-label {
                        width: 80px;
                        display: flex;
                        flex-wrap: wrap;
                        height: 70px;
                        justify-content: flex-start;
                        align-items: center;

                        label {
                            font-weight: 600;
                            margin-bottom: 0;
                        }
                    }
                    &-h1 {
                        width: calc(100% - 80px);
                        display: flex;
                        flex-wrap: nowrap;
                        align-items: center;
                        justify-content: flex-start;
                        padding-left: 40px;

                        h1 {
                            padding-left: 7px;
                            width: 100%;
                            font-size: 14px;
                            margin-bottom: 0;
                            font-weight: 600;
                            letter-spacing: .3px;
                            color: #333333;
                        }

                        i{
                            color: #a6a9b1;
                        }
                    }
                }

                &-btn {
                    button {
                        background-color: #ffbc00;
                        color: white;
                        font-weight: 700;
                    }
                }
            }


        }


    }


</style>
