<script setup lang="ts">
import eventsJson from '../events.json';
import { ref, computed, reactive, watch } from 'vue'
import {
   Listbox,
   ListboxButton,
   ListboxOptions,
   ListboxOption,
   Dialog,
   DialogPanel,
   DialogTitle,
   DialogDescription,
} from '@headlessui/vue'
import {ChevronUpDownIcon, CheckIcon, XCircleIcon} from '@heroicons/vue/24/solid';

type eventTypeKeys = "events" | "cancelled" | "meeting" | "day_off"

const eventTypes: {name: eventTypeKeys, formatted: string}[] = [
   {
      name: "events",
      formatted: "Events"
   },
   {
      name: "cancelled",
      formatted: "Cancelled Events"
   },
   {
      name: "meeting",
      formatted: "Meetings"
   },
   {
      name: "day_off",
      formatted: "Days Off"
   }
]

const today = new Date();
let currentYear = today.getFullYear();
let month = today.getMonth();
const currentDate = today.getDate();

const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
]

const monthWord = months[month];

const selectedMonth = ref(monthWord);

const years = [];
let start = 2024;
if (currentYear >= 2026) {
   start = currentYear - 1; // Only show records for the last year and current year
}

for (let i = start; i <= currentYear + 1; i++) {
   years.push(i); // Shows records for last, current, and next year
}

if (currentYear < 2024) {
   currentYear = 2024;
   month = 0;
}

const selectedYear = ref(currentYear);

const getMonthDays = (month: string, year: number) => {
   const index = months.indexOf(month);
   let nextMonth = index > 11 ? 0 : index + 1;
   const nYear = index > 11 ? year + 1 : year
   const days = new Date(nYear, nextMonth, 0).toString().split(" ")[2];
   return Number(days);
}

const currentMonthDays = computed(() => {
   return getMonthDays(selectedMonth.value, selectedYear.value);
})

const eventWeekModal = ref('')

const eventWeekOpenStatus = ref(false);

const openEventWeek = (week: string) => {
   eventWeekModal.value = week;
   eventWeekOpenStatus.value = true;
}

const closeEventWeek = () => {
   eventWeekModal.value = '';
   eventWeekOpenStatus.value = false;
}

const eventTypeOpen = ref(false);
const eventType = ref('');

const openType = (type: "cancelled" | "events" | "day_off" | "meeting") => {
   eventTypeOpen.value = true;
   eventWeekOpenStatus.value = false;
   eventType.value = type;
   console.log("hi!")
}

const closeType = () => {
   eventWeekOpenStatus.value = true;
   eventTypeOpen.value = false;
   eventType.value = ""
}

const getWeeks = (month: string, days: number) => {
   const monthShort = month[0].toUpperCase() + month.slice(1,3)
   if (days % 7 === 0) {
      return [
         `${monthShort} 1-7`,
         `${monthShort} 8-14`,
         `${monthShort} 15-21`,
         `${monthShort} 22-28`
      ]
   } else {
      return [
         `${monthShort} 1-7`,
         `${monthShort} 8-14`,
         `${monthShort} 15-21`,
         `${monthShort} 22-${days}`
      ]
   }
}

const weeks = computed(() => {
   return getWeeks(selectedMonth.value, currentMonthDays.value);
})

const getThisWeek = computed(() => {
   return getWeeks(monthWord, getMonthDays(selectedMonth.value, selectedYear.value)).find(week => {
      const days = week.split(" ")[1].split("-");
      if (currentDate >= Number(days[0]) && Number(days[1]) >= currentDate) {
         return true;
      }
      return false;
   })
})

interface ARPCEvent<T = "event" | "cancelled" | "day off" | "meeting"> {
   date?: number,
   title: string,
   description: string,
   timeStart: string,
   timeEnd: string,
   location?: string,
   locationExtended?: string
   label: T
}

interface ARPCWeekEvents {
   cancelled: ARPCEvent<"cancelled">[];
   events: ARPCEvent<"event">[];
   day_off: ARPCEvent<"day off">[];
   meeting: ARPCEvent<"meeting">[];
}

const formatDate = (date: number | string) => {
   const newDate = String(date);
   if (newDate.endsWith('1')) {
      return newDate + 'st'
   }
   if (newDate.endsWith('2')) {
      return newDate + 'nd'
   }
   if (newDate.endsWith('3')) {
      return newDate + 'rd'
   }
   return newDate + 'th'
}

const getEvents = (weeks: string[], year: string, month: string) => {
   const events: Record<string, {length: number, events: ARPCWeekEvents, formatted: string}> = {};
   for (let week of weeks) {
      const days = week.split(" ")[1].split("-");
      const currentEvents = eventsJson[year][month].events.filter((currentEvent: ARPCEvent) => {
         if (!currentEvent.date) {
            return false;
         }
         return Number(days[0]) <= Number(currentEvent.date) && Number(currentEvent.date) <= Number(days[1])
      });
      const realCurrentEvents = {
         cancelled: currentEvents.filter((currentEvent: ARPCEvent) => currentEvent.label === "cancelled"),
         events: currentEvents.filter((currentEvent: ARPCEvent) => currentEvent.label === "event"),
         day_off: currentEvents.filter((currentEvent: ARPCEvent) => currentEvent.label === "day off"),
         meeting: currentEvents.filter((currentEvent: ARPCEvent) => currentEvent.label === "meeting")
      }
      let preFormatted = [];
      if (realCurrentEvents.events.length > 0) {
         const length = realCurrentEvents.events.length;
         preFormatted.push(`${length} event${length > 1 ? 's' : ''}`)
      }
      if (realCurrentEvents.cancelled.length > 0) {
         let length = realCurrentEvents.cancelled.length
         preFormatted.push(`${length} cancelled event${length > 1 ? 's' : ''}`)
      }
      if (realCurrentEvents.day_off.length > 0) {
         const length = realCurrentEvents.day_off.length
         preFormatted.push(`${length} day${length > 1 ? 's' : ''} off`)
      }
      if (realCurrentEvents.meeting.length > 0) {
         const length = realCurrentEvents.meeting.length
         preFormatted.push(`${length} meeting${length > 1 ? 's' : ''}`)
      }
      events[week] = {
         events: realCurrentEvents,
         length: realCurrentEvents.cancelled.length + realCurrentEvents.events.length + realCurrentEvents.day_off.length + realCurrentEvents.meeting.length,
         formatted: preFormatted.length > 0 ? preFormatted.join(", ") : 'No events'
      };
   }
   return events;
}

const eventsPerSelectedWeek = computed(() => {
   return getEvents(weeks.value, String(selectedYear.value), selectedMonth.value)
})

const eventsPerWeekThisMonth = computed(() => {
   return getEvents(
       getWeeks(monthWord, getMonthDays(selectedMonth.value, selectedYear.value)),
       String(currentYear),
       monthWord
   );
})

const eventsThisWeek = computed(() => {
   const week = getThisWeek.value
   if (week) {
      return eventsPerWeekThisMonth.value[week];
   }
   return undefined
})

watch(eventWeekModal, async(newWeek: string, _) => {
   // @ts-expect-error
   if (eventType.value && (eventsPerSelectedWeek.value[newWeek].events[eventType.value] as ARPCEvent[]).length === 0) {
      eventType.value = '';
      eventTypeOpen.value = false;
      eventWeekOpenStatus.value = true;
   }
})

useSeoMeta({
   description: 'A calendar of events for the Anoka-Ramsey Programming Club',
   ogTitle: 'Programming Club Calendar | Anoka Ramsey Programming Club',
   ogDescription: 'A calendar of events for the Anoka-Ramsey Programming Club',
   ogImage: '/logo-bold.svg',
   twitterTitle: 'Programming Club Calendar | Anoka Ramsey Programming Club',
   twitterDescription: 'A calendar of events for the Anoka-Ramsey Programming Club',
   twitterImage: '/logo-bold.svg',
   ogLocale: 'en-US'
})

useHead({
   htmlAttrs: {
      lang: 'en'
   },
   link: [
      {
         rel: 'icon',
         type: 'image/png',
         href: '/favicon.png'
      }
   ],
})

</script>

<template>
   <div>
      <!-- Modals -->
      <!-- Period Type Information -->
      <Dialog :open="eventTypeOpen" @close="closeType">
         <div class="fixed inset-0 bg-black/50 z-10" aria-hidden="true" />
         <div class="fixed inset-0 flex w-screen items-center justify-center p-4 z-10">
            <DialogPanel class="text-text rounded-2xl justify-center flex">
               <div class="md:flex flex-grow rounded-2xl max-w-4xl bg-white">
                  <div class="bg-gray-300 rounded-2xl hidden lg:block w-2/3 max-w-2xl">
                     <div class="m-auto mt-0 grid grid-cols-2 gap-4 pt-4 px-4">
                        <div class="text-xl mt-2 font-bold">
                           <h2>Events for</h2>
                        </div>

                        <div class="flex fixed ml-32 md:ml-38 lg:ml-52 z-20 drop-shadow-lg">
                           <!-- Dropdown -->
                           <div class="z-20">
                              <Listbox v-model="eventWeekModal">
                                 <ListboxButton class="p-2 px-2 md:px-4 md:pl-5 bg-white flex hover:text-header-text">
                                    <div class="md:mr-2">
                                       {{eventWeekModal}}
                                    </div>
                                    <ChevronUpDownIcon class="w-6 ml-2" />
                                 </ListboxButton>
                                 <ListboxOptions class="mt-2 bg-white z-20">
                                    <ListboxOption
                                        v-for="week in weeks"
                                        :key="week"
                                        :value="week"
                                        class="flex py-1 px-4 hover:bg-text-secondary"
                                        :class="{
                                  'text-header-text font-bold': week === eventWeekModal
                               }"
                                    >
                                       <div class="min-w-4 justify-center my-auto">
                                          <CheckIcon v-if="week === eventWeekModal" class="w-4" />
                                       </div>
                                       <div class="ml-4">
                                          {{ week }}
                                       </div>

                                    </ListboxOption>
                                 </ListboxOptions>
                              </Listbox>
                           </div>
                        </div>
                     </div>
                     <div class="mt-8">
                        <EventCard
                            v-for="type in eventTypes"
                            :key="type.name"
                            :border-y="eventTypes.indexOf(type) !== (eventTypes.length - 1)"
                            :extra-border-top="eventTypes.indexOf(type) === 0"
                            :border-top="eventTypes.indexOf(type) === (eventTypes.length - 1)"
                        >
                           <template v-slot:title>
                              {{type.formatted}}
                           </template>
                           <template v-slot:subtitle>
                              <p>
                                 {{
                                    eventsPerSelectedWeek[eventWeekModal].events[type.name].length === 0 ?
                                        'None' :
                                        `${eventsPerSelectedWeek[eventWeekModal].events[type.name].map(lEvent => {
                                           return formatDate(lEvent.date)
                                        }).join(", ")}`
                                 }}
                              </p>
                           </template>
                           <template v-slot:button v-if="eventsPerSelectedWeek[eventWeekModal].events[type.name].length > 0" class="z-auto">
                              <button class="ml-auto mr-4 bg-white p-3 py-1.5 drop-shadow-lg text-md hover:text-header-text z-auto">More Info</button>
                           </template>
                        </EventCard>
                     </div>
                  </div>
                  <div class="bg-white w-full lg:w-2/3 rounded-2xl mt-7 px-5 max-w-prose">
                     <button @click="closeType" class="mx-auto mr-2 bg-white flex hover:text-header-text">
                        <XCircleIcon class="w-5 mr-2 my-auto" />
                     </button>
                     <DialogTitle class="mx-auto w-full flex">
                        <div class="w-full flex">
                           <h1 class="w-fit mx-auto font-bold">{{eventTypes.find(type => type.name === eventType).formatted}}</h1>
                        </div>
                     </DialogTitle>
                     <DialogDescription class="mx-auto w-fit">Showcasing events under the <span class="text-header-text">{{eventTypes.find(type => type.name === eventType).formatted}}</span> label</DialogDescription>
                     <div
                         v-for="event in eventsPerSelectedWeek[eventWeekModal].events[eventType]"
                         :key="event"
                         class="py-4 px-2"
                     >
                        <div class="flex space-x-7 align-middle">
                           <h2 class="text-header-text my-auto">{{event.timeStart}} {{event.timeEnd ? `- ${event.timeEnd}`:''}}</h2>
                           <h3 class="text-header-text text-sm my-auto">{{selectedMonth[0].toUpperCase() + selectedMonth.slice(1,3)}}  {{formatDate(event.date)}}, {{event.label[0].toUpperCase() + event.label.slice(1,event.label.length)}}</h3>
                        </div>

                        <h4 class="text-header-text">{{event.title}}</h4>
                        <p class="font-sm mt-1">{{event.description}}</p>
                        <div class="flex space-x-5 mt-1">
                           <p v-if="event.location" class="my-auto">{{event.location}}</p>
                           <p v-if="event.locationExtended" class="my-auto">@ {{event.locationExtended}}</p>
                        </div>
                     </div>
                  </div>
               </div>

            </DialogPanel>
         </div>
      </Dialog>
      <!-- Period Overview -->
      <Dialog :open="eventWeekOpenStatus" @close="closeEventWeek">
         <div class="fixed inset-0 bg-black/50 z-10" aria-hidden="true" />
         <div class="fixed inset-0 flex w-screen items-center justify-center p-4 z-10">
            <DialogPanel class="bg-white text-text rounded-2xl justify-center flex flex-col w-full max-w-sm">
               <div class="bg-gray-300 rounded-2xl">
                  <DialogTitle class="m-auto grid grid-cols-2 gap-4 mt-4 px-4">
                     <div class="text-xl mt-2 font-bold">
                        <h2>Events for</h2>
                     </div>
                     <button @click="closeEventWeek" class="mx-auto mt-2 mr-2 flex hover:text-header-text">
                        <XCircleIcon class="w-5 mr-2 my-auto" />
                     </button>
                     <div class="flex absolute ml-32 md:ml-38 lg:ml-40 z-20 drop-shadow-lg">
                        <!-- Dropdown -->
                        <div class="z-20">
                           <Listbox v-model="eventWeekModal">
                              <ListboxButton class="p-2 px-2 md:px-4 md:pl-5 bg-white flex hover:text-header-text">
                                 <div class="md:mr-6">
                                    {{eventWeekModal}}
                                 </div>
                                 <ChevronUpDownIcon class="w-6 ml-2" />
                              </ListboxButton>
                              <ListboxOptions class="mt-2 bg-white z-20">
                                 <ListboxOption
                                     v-for="week in weeks"
                                     :key="week"
                                     :value="week"
                                     class="flex py-1 px-4 hover:bg-text-secondary"
                                     :class="{
                                  'text-header-text font-bold': week === eventWeekModal
                               }"
                                 >
                                    <div class="min-w-4 justify-center my-auto">
                                       <CheckIcon v-if="week === eventWeekModal" class="w-4" />
                                    </div>
                                    <div class="ml-4">
                                       {{ week }}
                                    </div>

                                 </ListboxOption>
                              </ListboxOptions>
                           </Listbox>
                        </div>
                     </div>
                  </DialogTitle>
                  <div class="mt-8">
                     <EventCard
                         v-for="type in eventTypes"
                         :key="type.name"
                         :border-y="eventTypes.indexOf(type) !== (eventTypes.length - 1)"
                         :extra-border-top="eventTypes.indexOf(type) === 0"
                         :border-top="eventTypes.indexOf(type) === (eventTypes.length - 1)"
                     >
                        <template v-slot:title>
                           {{type.formatted}}
                        </template>
                        <template v-slot:subtitle>
                           <p>
                              {{
                                 eventsPerSelectedWeek[eventWeekModal].events[type.name].length === 0 ?
                                     'None' :
                                     `${eventsPerSelectedWeek[eventWeekModal].events[type.name].map(lEvent => {
                                        return formatDate(lEvent.date)
                                     }).join(", ")}`
                              }}
                           </p>
                        </template>
                        <template v-slot:button v-if="eventsPerSelectedWeek[eventWeekModal].events[type.name].length > 0" class="z-auto">
                           <button @click="openType(type.name)" class="ml-auto mr-4 bg-white p-3 py-1.5 drop-shadow-lg text-md hover:text-header-text z-auto">More Info</button>
                        </template>
                     </EventCard>
                  </div>
               </div>
            </DialogPanel>
         </div>

      </Dialog>
      <div class="flex flex-col mx-5 m-auto md:mx-auto mt-10 md:mt-20 2xl:mt-40 w-fit md:grid md:grid-cols-2 grid-flow-col-dense md:gap-x-12 xl:gap-x-24 2xl:gap-x-52">
         <div class="mx-5 lg:mx-auto">
            <h1 class="font-bold text-4xl text-header-text 2xl:w-prose max-w-lg">Anoka-Ramsey Programming Events</h1>
            <div class="m-auto md:grid grid-cols-2 gap-x-1 content-center justify-items-center">
               <div>
                  <div class="mb-4">
                     <h2 class="m-auto max-w-md break-words lg:max-w-lg xl:max-w-xl 2xl:max-w-prose text-lg 2xl:text-xl mt-6 w-fit">Meetings</h2>
                     <p class="m-auto max-w-md text-md w-fit">Every other week</p>
                  </div>
                  <div class="m-auto">
                     <!-- Insert times here -->
                     <p class="m-auto">Time Unknown</p>
                     <p class="m-auto">Location Unknown</p>
                  </div>
               </div>

               <div class="mb-10 md:mb-0">
                  <h2 class="mx-auto max-w-md break-words lg:max-w-lg xl:max-w-xl 2xl:max-w-prose text-lg 2xl:text-xl mt-6 w-fit">Weekly Summary</h2>
                  <p
                      class="mx-auto max-w-md break-words lg:max-w-lg xl:max-w-xl 2xl:max-w-prose text-md 2xl:text-lg mt-2 w-fit"
                      v-if="eventsThisWeek && eventsThisWeek.events.events.length > 0"
                  >{{eventsThisWeek.events.events.length}} event{{eventsThisWeek.events.events.length > 1 ? "s" : ""}}</p>
                  <p
                      class="mx-auto max-w-md break-words lg:max-w-lg xl:max-w-xl 2xl:max-w-prose text-md 2xl:text-lg mt-4 w-fit"
                      v-if="eventsThisWeek && eventsThisWeek.events.cancelled.length > 0"
                  >{{eventsThisWeek.events.cancelled.length}} cancelled event{{eventsThisWeek.events.cancelled.length > 1 ? "s" : ""}}</p>
                  <p
                      class="mx-auto max-w-md break-words lg:max-w-lg xl:max-w-xl 2xl:max-w-prose text-md 2xl:text-lg mt-4 w-fit"
                      v-if="eventsThisWeek && eventsThisWeek.events.day_off.length > 0"
                  >{{eventsThisWeek.events.day_off.length}} day{{eventsThisWeek.events.day_off.length > 1 ? "s" : ""}} off</p>
                  <p
                      class="mx-auto max-w-md break-words lg:max-w-lg xl:max-w-xl 2xl:max-w-prose text-md 2xl:text-lg mt-4 w-fit"
                      v-if="eventsThisWeek && eventsThisWeek.events.meeting.length > 0"
                  >{{eventsThisWeek.events.meeting.length}} meeting{{eventsThisWeek.events.meeting.length > 1 ? "s" : ""}}</p>
                  <p
                     class="mx-auto max-w-md break-words lg:max-w-lg xl:max-w-xl 2xl:max-w-prose text-md 2xl:text-lg mt-4 w-fit"
                     v-if="eventsThisWeek && eventsThisWeek.formatted === 'No events'"
                  >
                     No events
                  </p>
               </div>
            </div>
         </div>
         <div class="bg-gray-300 rounded-2xl drop-shadow-lg">
            <div class="m-auto mb-20 md:mb-0 md:grid grid-cols-2 gap-4 mt-4 px-4">
               <div class="text-xl w-fit mx-auto md:mx-0 md:text-md lg:text-xl mt-2 font-bold">
                  <h2>Events for</h2>
               </div>
               <div class="flex md:mx-0 absolute mt-5 md:mt-0 mx-5 md:ml-28 lg:ml-56 z-10 drop-shadow-lg">
                  <!-- Dropdown -->
                  <div class="relative">
                     <Listbox v-model="selectedMonth">
                        <ListboxButton class="p-2 px-2 pl-2 md:px-2 xl:pl-5 xl:px-4 bg-white flex hover:text-header-text">
                           <div class="md:mr-6">
                              {{selectedMonth[0].toUpperCase() + selectedMonth.slice(1, selectedMonth.length)}}
                           </div>
                           <ChevronUpDownIcon class="w-6 ml-2" />
                        </ListboxButton>
                        <ListboxOptions class="mt-2 bg-white">
                           <ListboxOption
                               v-for="month in months"
                               :key="month"
                               :value="month"
                               class="flex py-1 px-4 hover:bg-text-secondary"
                               :class="{
                                  'text-header-text font-bold': month === selectedMonth
                               }"
                           >
                              <div class="min-w-4 justify-center my-auto">
                                 <CheckIcon v-if="month === selectedMonth" class="w-4" />
                              </div>
                              <div class="ml-4">
                                 {{ month[0].toUpperCase() + month.slice(1,month.length) }}
                              </div>

                           </ListboxOption>
                        </ListboxOptions>
                     </Listbox>
                  </div>

                  <div class="ml-4">
                     <Listbox v-model="selectedYear">
                        <ListboxButton class="p-2 px-4 pl-5 md:px-2 md:pl-2 bg-white flex hover:text-header-text">
                           {{selectedYear}}
                           <ChevronUpDownIcon class="w-6 ml-2" />
                        </ListboxButton>
                        <ListboxOptions class="mt-2 bg-white">
                           <ListboxOption
                               v-for="currentYear in years"
                               :key="currentYear"
                               :value="currentYear"
                               class="flex py-1 px-4 hover:bg-text-secondary"
                               :class="{
                                  'text-header-text font-bold': currentYear === selectedYear
                               }"
                           >
                              <div class="min-w-4 justify-center my-auto">
                                 <CheckIcon v-if="currentYear === selectedYear" class="w-4" />
                              </div>
                              <div class="ml-4">
                                 {{ currentYear}}
                              </div>
                           </ListboxOption>
                        </ListboxOptions>
                     </Listbox>
                  </div>
               </div>
            </div>
            <div class="mt-8">
               <EventCard
                   v-for="week in weeks"
                   :key="week"
                   :border-y="weeks.indexOf(week) !== weeks.length - 1"
                   :border-top="(weeks.indexOf(week) === weeks.length - 1)"
                   :extra-border-top="weeks.indexOf(week) === 0"
               >
                  <template v-slot:title>
                     <h3 class="text-lg font-bold">{{week}}</h3>
                  </template>
                  <template v-slot:subtitle>
                     <h4 class="text-md">{{ eventsPerSelectedWeek[week].formatted }}</h4>
                  </template>
                  <template v-slot:button v-if="eventsPerSelectedWeek[week].length > 0">
                     <button class="ml-auto mr-4 bg-white p-3 py-1.5 drop-shadow-lg text-md hover:text-header-text z-auto" @click="openEventWeek(week)">
                        More Info
                     </button>
                  </template>
               </EventCard>
            </div>
         </div>
      </div>
   </div>
</template>
