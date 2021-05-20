<template>
  <div class="MemberTable">
    <b-row>
      <b-col sm="4">
        <b-form-group label="Name search:" label-for="filter-input">
          <b-form-input
            id="filter-input"
            v-model="filter"
            type="search"
            placeholder="Type to Search"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="6">
        <b-form-group label="Members per page" label-for="per-page-select">
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
          ></b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="6">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>

    <b-table
      striped
      hover
      :fields="fields"
      :items="items"
      :filter="filter"
      :current-page="currentPage"
      :per-page="perPage"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      sort-icon-left
      label-sort-asc
      label-sort-desc
      label-sort-clear
      sticky-header="700px"
    >
      <template #cell(name)="data">
        <a href="#" v-b-modal="data.item.id">
          {{ data.item.first_name }} {{ data.item.middle_name }}
          {{ data.item.last_name }}
        </a>
        <b-modal
          v-bind:id="data.item.id"
          size="xl"
          hide-footer
          @shown="getSocialMedia(data.item.url)"
        >
          <template #modal-header="{ close }">
            <a v-bind:href="data.item.url"> {{ data.item.url }}</a>
            <b-button size="sm" @click="close()"> X </b-button>
          </template>
          <h6>Social media from API:</h6>
          <ul>
            <li v-if="data.item.twitter_account">
              <a
                v-bind:href="'https://twitter.com/' + data.item.twitter_account"
                >https://twitter.com/{{ data.item.twitter_account }}</a
              >
            </li>

            <li v-if="data.item.facebook_account">
              <a
                v-bind:href="
                  'https://facebook.com/' + data.item.facebook_account
                "
                >https://facebook.com/{{ data.item.facebook_account }}</a
              >
            </li>

            <li v-if="data.item.youtube_account">
              <a
                v-bind:href="'https://youtube.com/' + data.item.youtube_account"
                >https://youtube.com/{{ data.item.youtube_account }}</a
              >
            </li>
          </ul>

          <h6>Social media from representatives website:</h6>
          <ul>
            <li v-for="(value, key) in socialMedia" :key="key">
              <a :href="value"> {{ value }}</a>
            </li>
          </ul>

          <b-embed
            type="iframe"
            width="100%"
            height="700px"
            v-bind:src="
              'https://en.wikipedia.org/w/index.php?search=' +
              data.item.first_name +
              '%20' +
              data.item.last_name
            "
          ></b-embed>
        </b-modal>
      </template>
    </b-table>
  </div>
</template>

<script>
import { retrieveSocialMedia } from "../logic";
export default {
  name: "MemberTable",
  props: {
    members: Array,
  },
  watch: {
    members: function () {
      // Set the initial number of items and watch for any changes in the prop
      this.totalRows = this.members.length;
      this.items = this.members;
    },
  },
  data() {
    return {
      sortBy: "votes_with_party_pct",
      sortDesc: true,
      fields: [
        { key: "name", label: "Full Name", sortable: false },
        { key: "party", sortable: true },
        { key: "state", sortable: true },
        { key: "seniority", sortable: true },
        { key: "votes_with_party_pct", sortable: true },
      ],
      items: this.members,

      filter: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 50, { value: 9999, text: "Show all" }],
      socialMedia: null,
    };
  },
  methods: {
    getSocialMedia(url) {
      this.socialMedia = null;
      retrieveSocialMedia(url)
        .then((socialMedia) => {
          this.socialMedia = socialMedia;
        })
        .catch((error) =>
          alert(
            "There was an error. Remain calm and contact customer support ;) " +
              error.message
          )
        );
    },
  },
};
</script>
