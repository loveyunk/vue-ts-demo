<template>
  <div class="home">
    <ul>
      <li v-for="event in events" :key="event.id">
        {{ event.author.name }}
      </li>
    </ul>
    <hr />
    <div>
      {{ event }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import http from '@/services'

@Component({
  components: {}
})
export default class Home extends Vue {
  private events: webapi.Event.response.IGegEventsData[] = []
  private event: webapi.Event.response.IGetEventData = null

  private created() {
    this.getEvents({
      pageSize: 10,
      pageIndex: 1
    })
    this.getEvent({
      id: ''
    })
  }

  private async getEvents(arg: webapi.Event.request.getEvents) {
    const res = await http.Event.getEvents(arg)

    if (res.error_code === 0) {
      this.events = res.data.data
    }
  }

  private async getEvent(arg: webapi.Event.request.getEvent) {
    const res = await http.Event.getEvent(arg)

    if (res.error_code === 0) {
      this.event = res.data
    }
  }
}
</script>
